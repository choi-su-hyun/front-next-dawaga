import React from "react";
import style from "./Modal.module.scss";
import TextInput from "../Input/TextInput";
import { useForm } from "react-hook-form";
import Button from "../Button/Button";

interface Props {
  closeFunc: () => void;
}

interface FormInput {
  phoneNumber: string;
}

const AddParticipantsNonMember = ({ closeFunc }: Props) => {
  // ============================= 전화번호 입력란 [START] =============================
  const {
    register,
    handleSubmit,
    clearErrors,
    setValue,
    formState: { errors },
  } = useForm<FormInput>();
  // ============================= 전화번호 입력란 [END] =============================

  return (
    <>
      <div className="modal-height-wide">
        <div className={style["title-content-wrap"]}>
          <div className={style["modal__header--center"]}>
            <h2 className={style["modal__title--center"]}>
              비회원 초대인원 추가하기
            </h2>
            <p className={style["modal__sub-text"]}>
              초대장 전송 시 비회원 사용자에게 초대링크가 전달됩니다.
            </p>
          </div>

          <div className={style["modal__content-box--center"]}>
            <div className={style["modal__content-box--center__input"]}>
              <TextInput
                register={register("phoneNumber", {
                  required: {
                    value: true,
                    message: "연락처를 입력해주세요.",
                  },
                })}
                type="text"
                placeholder="연락처를 입력해주세요."
                className={style["modal__input"]}
                name="phoneNumber"
                errorText={errors.phoneNumber?.message}
              />
            </div>

            <div className="btn-wrap btn-wrap--column btn-wrap--gap-top">
              <Button
                variant="cta-btn"
                size="size-small"
                type="submit"
                isFullWidth
              >
                추가
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

export default AddParticipantsNonMember;
