import { useNavigate } from "react-router-dom";
import { TOKEN_STORAGE_KEY } from "../constant/token";
import Button from "./Button";
import {
  LOGIN_PATH,
  MAIN_PATH,
  MYPAGE_PATH,
  REGISTER_PATH,
} from "../constant/path";

const Header = () => {
  const navigate = useNavigate();
  const isLogin = localStorage.getItem(TOKEN_STORAGE_KEY);
  const logOutHandler = () => {
    localStorage.removeItem(TOKEN_STORAGE_KEY);
    alert("로그아웃 되었습니다.");
    navigate(MAIN_PATH);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-16 flex items-center justify-between px-5 bg-green-500">
      <div>
        <Button to={MAIN_PATH}>Onboarding</Button>
      </div>
      {isLogin ? (
        <div className="flex gap-3 items-center">
          <div>
            <Button to={MYPAGE_PATH}>마이페이지</Button>
          </div>
          <div>
            <Button onClick={logOutHandler}>로그아웃</Button>
          </div>
        </div>
      ) : (
        <div className="flex gap-3">
          <div>
            <Button to={LOGIN_PATH}>로그인</Button>
          </div>
          <div>
            <Button to={REGISTER_PATH}>회원가입</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
