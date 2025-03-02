import React from "react";
import style from "./Modal.module.scss";

const AddParticipantsNonMember = () => {
  return (
    <>
      <h2 className={style["modal__title--center"]}>
        비회원 초대인원 추가하기
      </h2>
      <p>초대장 전송 시 비회원 사용자에게 초대링크가 전달됩니다.</p>
    </>
  );
};

export default AddParticipantsNonMember;
