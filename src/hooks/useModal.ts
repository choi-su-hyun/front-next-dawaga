import { modalListSelector, ModalType } from "@/stores/modalStore";
import { useRecoilValue, useSetRecoilState } from "recoil";

function useModal(modalId: ModalType) {
  const setModal = useSetRecoilState(modalListSelector(modalId));
  const isOpened = useRecoilValue(modalListSelector(modalId));

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return { isOpened, openModal, closeModal };
}

export default useModal;
