import React from "react";
import UserFullback from "@/assets/icon/userFullback.svg";
import ListCheck from "@/assets/icon/listCheck.svg";
import style from "./SearchedParticipantsItem.module.scss";

interface IProps {
  name: string;
  thumbnail?: string;
  isNonMember?: boolean;
}

const SearchedParticipantsItem = ({ name, thumbnail, isNonMember }: IProps) => {
  return (
    <>
      <div className={style["item"]}>
        <div className={style["item__left"]}>
          {thumbnail ? <img src={thumbnail} alt="" /> : <UserFullback />}
          <span className={style["item__left__name"]}>{name}</span>
          {isNonMember && (
            <span className={style["item__left__non-member"]}>비회원</span>
          )}
        </div>
        <ListCheck fill={"#C2CCD6"} />
      </div>
    </>
  );
};

export default SearchedParticipantsItem;
