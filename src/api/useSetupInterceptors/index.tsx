// api.ts
import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import mem from "mem";
// import { axiosClient } from "@/api/axios-client";
import { useRecoilState } from "recoil";
import { failedRequestsQueueAtom } from "@/stores/failedRequestsQueueAtom";
import useToken from "@/hooks/useToken";

interface FailedRequest {
  resolve: (token: string) => void;
  reject: (error: any) => void;
}

//axios 기본 설정
export const axiosClient: AxiosInstance = axios.create({
  baseURL: process.env.VITE_BASE_URL,
  headers: {
    ClientSecret: process.env.VITE_CLIENT_SECRET,
  },
});

const useSetupInterceptors = () => {
  const tokenEditor = useToken();
  const [failedQueue, setFailedQueue] = useRecoilState<FailedRequest[]>(
    failedRequestsQueueAtom
  );

  // 토큰 갱신 요청
  const requestToken = mem(
    async () => {
      const refreshToken = tokenEditor.getRefreshToken();
      try {
        const tokenRes = await axiosClient.post("/front/requestToken", {
          refresh_token: refreshToken,
        });

        if (tokenRes.data.error) {
          alert("로그인이 만료되었습니다. 다시 로그인 해주세요.");
          window.location.href = "/";
          tokenEditor.resetToken();
          return;
        } else {
          const newAccessToken = tokenRes.data?.data.access_token;
          if (newAccessToken) {
            tokenEditor.setAccessToken(newAccessToken);
          }
          return newAccessToken;
        }
      } catch (error) {
        throw error;
      }
    },
    { maxAge: 1000 }
  );

  const refreshPromise: Promise<string> | null = null;

  const processQueue = (error: any, token: string | null = null) => {
    failedQueue.forEach((prom) => {
      if (token) {
        prom.resolve(token);
      } else {
        prom.reject(error);
      }
    });
    setFailedQueue([]);
  };

  axiosClient.interceptors.request.use(
    (config: any) => {
      const token = tokenEditor.getAccessToken();
      if (token) {
        const newConfig = {
          ...config,
          headers: { ...config.headers, Authorization: `Bearer ${token}` },
        };
        return newConfig;
      }
      return config;
    },
    (error: AxiosError) => Promise.reject(error)
  );

  axiosClient.interceptors.response.use(
    (response: AxiosResponse) => {
      return response;
    },
    async (error: AxiosError) => {
      const originalRequest = error.config as AxiosRequestConfig & {
        retry?: boolean;
      };

      return Promise.reject(error);
    }
  );
};

export default useSetupInterceptors;
