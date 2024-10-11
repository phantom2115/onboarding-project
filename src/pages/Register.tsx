import { ChangeEvent, FormEvent, useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Register = () => {
  const [nickname, setNickname] = useState("");
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [confirmPw, setConfirmPw] = useState("");

  const nicknameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNickname(e.currentTarget.value);
  };

  const idHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setId(e.currentTarget.value);
  };

  const pwHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPw(e.currentTarget.value);
  };

  const confirmPwHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmPw(e.currentTarget.value);
  };

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(nickname, id, pw, confirmPw);
    if (nickname)
      if (pw !== confirmPw) {
        return;
      }
    console.log("gkgk");
    // 1. 비밀번호랑 비밀번호 확인 같은지 체크
    // 2. 아이디 중복인지 체크
    // 3. 닉네임 중복인지 체크 (가 필요한가???)
    // 다 만족하면 post
  };
  return (
    <div className="h-[100vh] flex justify-center items-center">
      <div className="w-48 flex justify-center">
        <form
          onSubmit={onSubmitHandler}
          className="w-full flex justify-center items-center flex-col gap-3"
        >
          <div className="text-xl">회원가입</div>
          <Input
            placeholder="이름"
            type={"text"}
            value={nickname}
            onChange={nicknameHandler}
          />
          <Input
            placeholder="아이디"
            type={"text"}
            value={id}
            onChange={idHandler}
          />
          <Input
            placeholder="비밀번호"
            type={"password"}
            value={pw}
            onChange={pwHandler}
          />
          <Input
            placeholder="비밀번호 확인"
            type={"password"}
            value={confirmPw}
            onChange={confirmPwHandler}
          />
          <Button>회원가입</Button>
        </form>
      </div>
    </div>
  );
};

export default Register;
