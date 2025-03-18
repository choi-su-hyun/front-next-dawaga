import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const tokenStore = atom({
  key: "tokenStore",
  default: {
    accessToken: "",
    refreshToken: "",
  },
  effects_UNSTABLE: [persistAtom],
});
