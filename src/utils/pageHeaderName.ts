interface IPageHeader {
  pageName: string;
  canBack: boolean;
}

export const getPageName = (pathName: string): IPageHeader => {
  switch (pathName) {
    case "/":
      return {
        pageName: "",
        canBack: false,
      };
      break;
    case "/sign-in":
      return {
        pageName: "로그인",
        canBack: true,
      };
      break;
    case "/sign-up":
      return {
        pageName: "회원가입",
        canBack: true,
      };
      break;
    case "/my-page":
      return {
        pageName: "마이페이지",
        canBack: true,
      };
      break;
    case "/invite-success":
      return {
        pageName: "초대장 전송완료",
        canBack: true,
      };
      break;

    default:
      return {
        pageName: "",
        canBack: false,
      };
      break;
  }
};
