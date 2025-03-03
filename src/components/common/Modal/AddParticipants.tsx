import React from "react";
import SearchInput from "../Input/SearchInput";
import { useForm } from "react-hook-form";
import Button from "../Button/Button";
import AddIcon from "@/assets/icon/add.svg";
import style from "./Modal.module.scss";
import NoticeIcon from "@/assets/icon/notice.svg";
import SearchedParticipantsItem from "@/components/SearchedParticipantsItem/SearchedParticipantsItem";
import ModalContainer from "./ModalContainer";
import AddParticipantsNonMember from "./AddParticipantsNonMember";
import useModal from "@/hooks/useModal";

const AddParticipants = () => {
  const { register } = useForm<{ participantsSearch: string }>({
    defaultValues: {
      participantsSearch: "",
    },
  });

  const searchParticipants = () => {
    console.log("참여자 검색 api");
  };

  const {
    isOpened: isOpenAddParticipantsNonMemberModal,
    openModal: openAddParticipantsNonMemberModal,
    closeModal: closeAddParticipantsNonMemberModal,
  } = useModal("AddParticipantsNonMember");

  return (
    <>
      <div className="modal-height-wide">
        <div>
          <div className={style["modal__header-wrap"]}>
            <div className={style["modal__header"]}>
              <h3 className={style["modal__title"]}>참여 인원 추가</h3>
              <Button
                variant="text-cta-btn"
                leftSlot={<AddIcon />}
                onClick={openAddParticipantsNonMemberModal}
              >
                비회원 초대
              </Button>
            </div>

            <div className={style["modal__explanation-wrap"]}>
              <NoticeIcon />
              <span className={style["modal__explanation"]}>
                아직 가입하지 않은 인원을 초대하시려면{" "}
                <b className="bold">‘비회원 초대’</b>를 이용해주세요.
              </span>
            </div>
          </div>

          <SearchInput
            register={register("participantsSearch")}
            name="participants-search"
            searchAction={searchParticipants}
            placeholder="검색어를 입력하세요."
          />

          <div
            className={`scroll-wrap scroll-wrap--160h ${style["scroll-wrap--margin-top"]}`}
          >
            <SearchedParticipantsItem name={"친구"} />
          </div>

          <div className={style["modal__header-wrap"]}>
            <div className={style["modal__header"]}>
              <h3 className={style["modal__title"]}>초대할 비회원 인원</h3>
            </div>
          </div>

          <div
            className={`scroll-wrap scroll-wrap--160h ${style["scroll-wrap--margin-top"]}`}
          >
            <SearchedParticipantsItem name={"친구"} isNonMember />
          </div>
        </div>

        <div className="btn-wrap btn-wrap--column">
          <Button variant="cta-btn" size="size-small" type="submit" isFullWidth>
            선택한 인원 추가
          </Button>
        </div>
      </div>

      {/* ============================= 비회원 추가 [START] ============================= */}
      {isOpenAddParticipantsNonMemberModal && (
        <ModalContainer id="AddParticipantsNonMember" position="center">
          <AddParticipantsNonMember
            closeFunc={closeAddParticipantsNonMemberModal}
          />
        </ModalContainer>
      )}
      {/* ============================= 비회원 추가 [END] ============================= */}
    </>
  );
};

export default AddParticipants;
