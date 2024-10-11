import { ChangeEvent, FormEvent, useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";

const Login = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const idHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setId(e.currentTarget.value);
  };

  const pwHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPw(e.currentTarget.value);
  };

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(id, pw);
  };

  return (
    <div className="h-[100vh] flex justify-center items-center">
      <div className="w-48 flex justify-center">
        <form
          onSubmit={onSubmitHandler}
          className="w-full flex justify-center items-center flex-col gap-3"
        >
          <div className="text-xl">로그인</div>
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
