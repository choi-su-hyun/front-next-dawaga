import { atom } from "recoil";

// 토큰 만료 재실행을 위한 큐
interface IFailedRequestsQueueProps {
  resolve: (token: string) => void;
  reject: (error: any) => void;
}
export const failedRequestsQueueAtom = atom<IFailedRequestsQueueProps[]>({
  key: "failedRequestsQueueAtom",
  default: [],
});
