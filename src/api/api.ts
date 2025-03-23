import { axiosClient } from "./useSetupInterceptors";

export const api = {
  get: <T>(url: string, params?: any, config?: any) =>
    axiosClient.get<T>(url, { params, ...config }),
  post: <T>(url: string, data?: any, config?: any) =>
    axiosClient.post<T>(url, data, config),
  put: <T>(url: string, data?: any, config?: any) =>
    axiosClient.put<T>(url, data, config),
  patch: <T>(url: string, data?: any, config?: any) =>
    axiosClient.patch<T>(url, data, config),
  delete: <T>(url: string, params?: any, config?: any) =>
    axiosClient.delete<T>(url, { params, ...config }),
};
