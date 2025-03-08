import { atom } from "recoil";

export type PopupType = {
  icon?: "alert" | "confirm" | string; // 아이콘 (alert, confirm, 아님 직접 넣어줘도 됨)
  content: string; // 보여줄 문구
  subtext?: string; // 보여줄 문구 (서브)
  confirm?: () => void; // 확인 동작
  confirmBtnText?: string; // 확인 버튼 글자
  confirmText?: string; // 확인시 문구
  cancel?: () => void; // 취소 동작
  cancelText?: string; // 취소시 문구
  showTime?: number; // 몇 밀리초동안 보일지
  isRouteConsist?: boolean; // 라우트 이동해도 남아있을지
};

export const popupStore = atom({
  key: "popupStore",
  default: {} as PopupType,
});
