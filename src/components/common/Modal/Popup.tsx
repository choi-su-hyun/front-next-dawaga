import React from "react";
import style from "./Modal.module.scss";
import { useRecoilState, useRecoilValue } from "recoil";
import { popupStore } from "@/stores/popup";
import Button from "../Button/Button";
import { createPortal } from "react-dom";

const Popup = () => {
  const [popup, setPopup] = useRecoilState(popupStore);

  const renderModal = () => {
    if (!popup.content) return;

    return (
      <>
        <div className={style["modal__overlay"]}>
          <div
            className={`${style["modal__content-box"]} ${style["modal--center"]}`}
          >
            <div className={style["popup-text-wrap"]}>
              <h1 className={style["popup__title"]}>{popup.content}</h1>
            </div>
            {popup.confirm && (
              <div className={style["popup-btn-wrap"]}>
                <Button
                  variant="cta-btn"
                  size={"size-small"}
                  onClick={popup.confirm}
                  isFullWidth
                >
                  {popup.confirmBtnText ?? "확인"}
                </Button>
                <Button
                  size={"size-small"}
                  onClick={() => setPopup({ content: "" })}
                  isFullWidth
                >
                  취소
                </Button>
              </div>
            )}
          </div>
        </div>
      </>
    );
  };

  if (typeof document !== "undefined") {
    return createPortal(
      <>{renderModal()}</>,
      document.getElementById("popup") as HTMLElement
    );
  }
};

export default Popup;
