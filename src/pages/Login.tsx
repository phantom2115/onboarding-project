import { ChangeEvent, FormEvent, useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { loginAuth } from "../api/auth";
import { useNavigate } from "react-router-dom";
import { TOKEN_STORAGE_KEY } from "../constant/token";
import { MAIN_PATH } from "../constant/path";

const Login = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const navigate = useNavigate();

  const idHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setId(e.currentTarget.value);
  };

  const pwHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPw(e.currentTarget.value);
  };

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!id || !pw) return alert("아이디와 비밀번호를 입력해주세요.");
    loginAuth({ id, password: pw })
      .then((response) => {
        localStorage.setItem(TOKEN_STORAGE_KEY, response?.data.accessToken);
        alert(`${response?.data.nickname}님 환영합니다!`);
        navigate(MAIN_PATH);
      })
  };

  return (
    <div className="h-[100vh] flex justify-center items-center">
      <div className="w-48 flex justify-center">
        <form
          onSubmit={onSubmitHandler}
          className="w-full flex justify-center items-center flex-col gap-3"
        >
          <h1 className="text-xl">로그인</h1>
          <Input
            placeholder={"아이디"}
            type={"text"}
            value={id}
            onChange={idHandler}
          />
          <Input
            placeholder={"비밀번호"}
            type={"password"}
            value={pw}
            onChange={pwHandler}
          />
          <Button>로그인</Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
