import { ChangeEvent, FormEvent, useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { registerAuth } from "../api/auth";
import { LOGIN_PATH } from "../constant/path";

const Register = () => {
  const [nickname, setNickname] = useState("");
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [confirmPw, setConfirmPw] = useState("");
  const navigate = useNavigate();

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

  const onSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!id || !nickname || !pw || !confirmPw)
      return alert("모든 값은 필수 입력값입니다.");
    if (pw !== confirmPw) return alert("비밀번호를 확인해주세요.");

    registerAuth({ nickname, id, password: pw }).then((message) => {
      alert(message);
      navigate(LOGIN_PATH);
    });
  };

  return (
    <div className="h-[100vh] flex justify-center items-center">
      <div className="w-48 flex justify-center">
        <form
          onSubmit={onSubmitHandler}
          className="w-full flex justify-center items-center flex-col gap-3"
        >
          <h1 className="text-xl">회원가입</h1>
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
