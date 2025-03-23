/**
 * 토큰 관련 함수
 */

const useToken = () => {
  const sessionStorage = window.sessionStorage;
  const localStorage = window.localStorage;

  // 등록
  const getAccessToken = () => {
    const access = localStorage.getItem("accessToken");
    return access && access;
  };

  // const getNickName = () => {
  //   const nickname = localStorage.getItem('nickname');
  //   return nickname && nickname;
  // };

  const getRefreshToken = () => {
    const refresh = localStorage.getItem("refreshToken");
    return refresh && refresh;
  };

  const getRememberToken = () => {
    const remember = sessionStorage.getItem("rememberToken");
    return remember && remember;
  };

  // 수정
  const setToken = (accessToken: string, refreshToken: string) => {
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
  };

  const setAccessToken = (accessToken: string) => {
    localStorage.setItem("accessToken", accessToken);
  };
  const setRefreshToken = (refreshToken: string) => {
    localStorage.setItem("refreshToken", refreshToken);
  };

  const setRememberToken = (rememberToken: string) => {
    sessionStorage.setItem("rememberToken", rememberToken);
  };

  const resetToken = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("rememberToken");
  };

  return {
    getAccessToken,
    getRefreshToken,
    getRememberToken,
    // getNickName,
    setToken,
    setAccessToken,
    setRefreshToken,
    setRememberToken,
    resetToken,
  };
};

export default useToken;
