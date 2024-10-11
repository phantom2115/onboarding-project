import Button from "./Button";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-16 flex items-center justify-between px-5 bg-green-500">
      <div>
        <Button href={"/"}>Onboarding</Button>
      </div>
      <div className="flex gap-3">
        <div>
          <Button href={"/login"}>로그인</Button>
        </div>
        <div>
          <Button href={"/register"}>회원가입</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
