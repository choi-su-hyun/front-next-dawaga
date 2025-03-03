import Seo from "@/components/Seo";
import { NextPage } from "next";
import PenIcon from "@/assets/icon/pen.svg";
import UserFullbackIcon from "@/assets/icon/userFullback.svg";
import ArrowRightIcon from "@/assets/icon/arrow-right.svg";
import myPageStyle from "./MyPage.module.scss";
import Button from "@/components/common/Button/Button";
import { useState } from "react";
import { popupStore } from "@/stores/popup";
import { useRecoilValue, useSetRecoilState } from "recoil";

const MyPage: NextPage = ({}) => {
  const setPopup = useSetRecoilState(popupStore);

  // ============================= 프로필 이미지 수정 [START] =============================
  const [isProfileImage, setIsProfileImage] = useState(false);
  const handleProfileImage = () => {
    if (!isProfileImage) {
      setIsProfileImage(true);
    } else {
      setPopup({
        content: "프로필을 저장하시겠습니까?",
        confirm: () => {},
      });
    }
  };
  const saveProfileImage = () => {
    setPopup({
      content: "프로필을 저장하시겠습니까?",
      confirm: () => {},
    });
  };
  // ============================= 프로필 이미지 수정 [END] =============================

  return (
    <>
      <Seo title="마이페이지" />
      <div className="gray-background">
        {/* ============================= 프로필 이미지 [START] ============================= */}
        <section className="section section--shadow-type">
          <div className="section-container section-container--shadow-type">
            <div className="setting-title-wrap">
              <h1 className="setting-title">프로필</h1>
            </div>

            <div className={myPageStyle["profile-wrap"]}>
              <div className={myPageStyle["profile"]}>
                <img src="" alt="" />
                <UserFullbackIcon />
                <button
                  className={myPageStyle["edit-btn"]}
                  onClick={handleProfileImage}
                >
                  <PenIcon />
                </button>
              </div>
              <h4 className="edited-title">사용자 1</h4>
            </div>
            {/* ============================= 수정 버튼 [START] ============================= */}
            {isProfileImage && (
              <div className={myPageStyle["edit-mode"]}>
                <Button
                  variant="cta-ghost-btn"
                  size={"size-x-small"}
                  onClick={saveProfileImage}
                  isFullWidth
                >
                  변경
                </Button>
                <Button
                  size={"size-x-small"}
                  onClick={() => setIsProfileImage(false)}
                  isFullWidth
                >
                  취소
                </Button>
              </div>
            )}
            {/* ============================= 수정 버튼 [END] ============================= */}
          </div>
        </section>
        {/* ============================= 프로필 이미지 [END] ============================= */}

        <section className="section section--shadow-type">
          <div className="section-container section-container--shadow-type">
            <div className="setting-title-wrap--left">
              <h1 className="setting-title">내 정보</h1>
            </div>

            <div className={myPageStyle["profile-content"]}>
              <div className={myPageStyle["profile-content__row"]}>
                <h5 className={myPageStyle["profile-content__title"]}>이름</h5>
                <span className={myPageStyle["profile-content__value"]}>
                  사용자 이름
                </span>
              </div>
              <div className={myPageStyle["profile-content__row"]}>
                <h5 className={myPageStyle["profile-content__title"]}>
                  아이디
                </h5>
                <span className={myPageStyle["profile-content__value"]}>
                  아이디
                </span>
              </div>
              <div className={myPageStyle["profile-content__row"]}>
                <h5 className={myPageStyle["profile-content__title"]}>
                  닉네임
                </h5>
                <div className={myPageStyle["profile-content__value-wrap"]}>
                  <span className={myPageStyle["profile-content__value"]}>
                    닉네임
                  </span>
                  <Button size={"size-xx-small"}>편집</Button>
                </div>
              </div>
              <div className={myPageStyle["profile-content__row"]}>
                <h5 className={myPageStyle["profile-content__title"]}>
                  가입일자
                </h5>
                <span className={myPageStyle["profile-content__value"]}>
                  가입일자
                </span>
              </div>
              <div className={myPageStyle["profile-content__row"]}>
                <h5 className={myPageStyle["profile-content__title"]}>
                  집 주소
                </h5>
                <div className={myPageStyle["profile-content__value-wrap"]}>
                  <span className={myPageStyle["profile-content__value"]}>
                    집 주소
                  </span>
                  <Button size={"size-xx-small"}>편집</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--shadow-type">
          <div className={myPageStyle["setting-btn-wrap"]}>
            <Button variant="section-row-btn" rightSlot={<ArrowRightIcon />}>
              로그아웃
            </Button>
            <Button variant="section-row-btn" rightSlot={<ArrowRightIcon />}>
              회원탈퇴
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default MyPage;
