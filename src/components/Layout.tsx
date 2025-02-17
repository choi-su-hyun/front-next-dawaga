import { ReactNode } from "react";
import Header from "./common/Header/Header";

interface Props {
  children: ReactNode;
}

// COMMENT : 모달까지 적용하기 위해 fontFace로 pretenderd를 적용하였습니다.
// const pretendard = localFont({
//   src: "../pages/fonts/PretendardVariable.woff2",
//   display: "swap",
//   weight: "45 920",
//   variable: "--font-pretendard",
// });

export default function Layout({ children }: Props) {
  return (
    <>
      {/* <div className={`${pretendard.variable}`}> */}
      <div>
        <Header />
        <main>{children}</main>
      </div>
    </>
  );
}
