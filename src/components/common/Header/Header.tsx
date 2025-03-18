// "use client";

import { NextPage } from "next";
import Logo from "@/assets/icon/logo.svg";
import Alarm from "@/assets/icon/alarm.svg";
import UserIcon from "@/assets/icon/userIcon.svg";
import Cogwheel from "@/assets/icon/cogwheel.svg";
import Link from "next/link";
import S from "./Header.module.scss";
import { usePathname } from "next/navigation";
import { getPageName } from "@/utils/pageHeaderName";
import { useRecoilValue } from "recoil";
import GoBackIcon from "@/assets/icon/goBack.svg";

const Header: NextPage = ({}) => {
  const pathName = usePathname();

  return (
    <header className={S.header}>
      {getPageName(pathName).canBack ? (
        <GoBackIcon />
      ) : (
        <Link href={"/"}>
          <Logo />
        </Link>
      )}
      <h1>{getPageName(pathName).pageName}</h1>
      <nav>
        <ul>
          <li>
            <Link href={"/"}>
              <Alarm />
            </Link>
          </li>
          {}
          <li>
            <Link href={"/sign-in"}>
              <UserIcon />
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              <Cogwheel />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
