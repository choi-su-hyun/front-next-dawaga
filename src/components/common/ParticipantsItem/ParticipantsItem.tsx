import React from "react";
import DeleteItem from "@/assets/icon/deleteItem.svg";
import Button from "../Button/Button";
import UserFullback from "@/assets/icon/userFullback.svg";
import style from "./ParticipantsItem.module.scss";

const ParticipantsItem = () => {
  return (
    <>
      <div className={style["participants-item"]}>
        <div className={style["text-wrap"]}>
          {/* <img src="" alt="" /> */}
          <UserFullback width={"2.4rem"} />
          <h4>참여자</h4>
        </div>

        <Button type="button" variant="icon-btn">
          <DeleteItem />
        </Button>
      </div>
    </>
  );
};

export default ParticipantsItem;
