import React from "react";
import style from "./Modal.module.scss";
import Button from "../Button/Button";
import Calendar from "@/assets/icon/calendar.svg";
import Clock from "@/assets/icon/clock.svg";
import UserFullback from "@/assets/icon/userFullback.svg";

interface Props {
  closeFunc: () => void;
}

const InvitationCreation = ({ closeFunc }: Props) => {
  return (
    <>
      <div className="modal-height-wide">
        <div className={style["title-content-wrap"]}>
          <div className={style["modal__header--center"]}>
            <h2 className={style["modal__title--center"]}>
              초대장을 전송합니다.
            </h2>
          </div>

          <div className={style["modal__content-box--center"]}>
            <div className={style["invitation__wrap"]}>
              <div className={style["invitation__info-row"]}>
                <h5 className={style["invitation__title"]}>장소</h5>
                <span className={style["invitation__value"]}>장소 데이터</span>
              </div>
              <div className={style["invitation__info-row"]}>
                <h5 className={style["invitation__title"]}>약속 시간</h5>
                <div className={style["invitation__time-chip-wrap"]}>
                  <span className={style["invitation__time-chip"]}>
                    <Calendar fill={"#FF8861"} />
                    2024-08-01
                  </span>
                  <span className={style["invitation__time-chip"]}>
                    <Clock fill={"#FF8861"} />
                    08:01
                  </span>
                </div>
              </div>
              <div className={style["invitation__info-row"]}>
                <h5 className={style["invitation__title"]}>모임 인원</h5>
                <div
                  className={`${style["invitation__participant-list"]} scroll-wrap scroll-wrap--104h`}
                >
                  <div
                    className={`${style["invitation__participant-list__row"]}`}
                  >
                    <UserFullback width={"2.4rem"} />
                    친구 1
                  </div>
                </div>
              </div>
            </div>

            <div className="btn-wrap btn-wrap--column btn-wrap--gap-top">
              <Button
                variant="cta-btn"
                size="size-small"
                type="submit"
                isFullWidth
              >
                전송하기
              </Button>
              <Button
                size="size-small"
                type="submit"
                isFullWidth
                onClick={closeFunc}
              >
                취소하기
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvitationCreation;
