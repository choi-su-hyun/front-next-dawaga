import Button from "@/components/common/Button/Button";
import Seo from "@/components/Seo";
import { NextPage } from "next";
import Link from "next/link";
import React from "react";

const InviteSuccess: NextPage = () => {
  return (
    <>
      <Seo title="초대장 전송완료" />
      <section className="section">
        <div className="section-container">
          <div className="state-page__page-layout-container">
            <div className="state-page-text">
              <h1 className="state-page-text__title--lg">
                초대장이 전송되었어요
              </h1>
              <p className="state-page-text__paragraph">일정을 확인해보세요.</p>
            </div>

            <div className="state-page__btn-wrap">
              <span className="state-page__description">
                모든인원이 초대를 거절하면 약속이 취소될 수 있어요.
              </span>
              {/* <Link href={"/"}> */}
              <Button variant={"cta-btn"} size="size-small" isFullWidth>
                완료
              </Button>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InviteSuccess;
