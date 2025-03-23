import {
  modalListSelector,
  modalListState,
  ModalIdType,
} from "@/stores/modalStore";
import { useRecoilValue, useSetRecoilState } from "recoil";

function useModal(modalId: ModalIdType) {
  const setModal = useSetRecoilState(modalListSelector(modalId));
  const modalList = useRecoilValue(modalListState);
  const isOpened = modalList.some(
    (modalListItem) => modalListItem.id === modalId
  );

  const openModal = () => {
    setModal({ id: modalId, isOpen: true });
  };

  const closeModal = () => {
    setModal({ id: modalId, isOpen: false });
  };

  return { isOpened, openModal, closeModal };
}

export default useModal;
