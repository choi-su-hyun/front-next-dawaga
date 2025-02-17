import React from "react";
import SearchInput from "../Input/SearchInput";
import { useForm } from "react-hook-form";
import Button from "../Button/Button";
import AddIcon from "@/assets/add.svg";
import style from "./Modal.module.scss";
import NoticeIcon from "@/assets/notice.svg";

const AddParticipants = () => {
  const { register } = useForm<{ participantsSearch: string }>({
    defaultValues: {
      participantsSearch: "",
    },
  });

  const searchParticipants = () => {
    console.log("참여자 검색 api");
  };

  return (
    <>
      <div className={style["modal__header"]}>
        <h3 className={style["modal__title"]}>참여 인원 추가</h3>
        <Button variant="text-cta-btn" leftSlot={<AddIcon />}>
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

      <SearchInput
        register={register("participantsSearch")}
        name="participants-search"
        searchAction={searchParticipants}
      />
    </>
  );
};

export default AddParticipants;
