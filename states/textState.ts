import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: 'recoil-persist'
})

const textState = atom<string>({
  key: "textState",
  default: "",
  effects_UNSTABLE: [persistAtom]
})

export default textState