import { editUserAuth, getUserInfoAuth } from "../api/auth";
import Button from "../components/Button";
import { ChangeEvent, FormEvent, MouseEvent, useEffect, useState } from "react";
import { EditUserType, UserType } from "../types/auth";
import userDefaultImg from "../assets/userImg.png";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";
import { MYPAGE_PATH } from "../constant/path";

const MyPage = () => {
  const [user, setUser] = useState<UserType | null>(null);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [editUserImg, setEditUserImg] = useState<EditUserType["avatar"]>(null);
  const [editUserNickname, setEditUserNickname] =
    useState<EditUserType["nickname"]>("");
  const navigate = useNavigate();

  useEffect(() => {
    getUserInfoAuth().then((response) => {
      setUser(response.data);
    });
  }, []);

  const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsEditMode(!isEditMode);
  };

  const onChangImgHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files) {
      setEditUserImg(e.currentTarget.files[0]);
      const avatarURL = URL.createObjectURL(e.currentTarget.files[0]);
      if (user) {
        setUser({
          ...user,
          avatar: avatarURL,
        });
      }
    }
  };

  const onChangNickNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEditUserNickname(e.target.value);
  };

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    console.log("submit!!!!!!!!!!!");
    e.preventDefault();
    if (!editUserNickname && !editUserImg) {
      setIsEditMode(false);
      return;
    }

    editUserAuth({ nickname: editUserNickname, avatar: editUserImg }).then(
      (response) => {
        alert(response.data.message);
        navigate(MYPAGE_PATH);
        if (user) {
          setUser({
            ...user,
            nickname: response.data.nickname,
          });
        }
      }
    );
  };

  return (
    <div className="h-[100vh] flex justify-center items-center">
      <div className="w-48 flex justify-center items-center flex-col gap-3">
        <h1 className="text-xl">내 정보</h1>
        <form
          onSubmit={onSubmitHandler}
          className="w-full flex flex-col items-center gap-3"
        >
          <label>
            {isEditMode ? (
              <input
                type="file"
                className="hidden"
                accept="image/jpeg,image/jpg"
                onChange={onChangImgHandler}
              />
            ) : (
              <></>
            )}
            <img
              className={`border-4 w-24 h-24 rounded-full object-cover ${
                isEditMode
                  ? "hover:cursor-pointer border-green-500"
                  : "border-gray-400"
              }`}
              src={user?.avatar ? user.avatar : userDefaultImg}
              alt="프로필 이미지"
            />
          </label>
          <div>{user?.id}</div>
          {isEditMode ? (
            <Input
              placeholder={user?.nickname}
              onChange={onChangNickNameHandler}
            />
          ) : (
            <div className="flex items-center h-8">{user?.nickname}</div>
          )}
          <Button type="button" onClick={onClickHandler} hidden={isEditMode}>
            수정하기
          </Button>
          <Button type="submit" onClick={onClickHandler} hidden={!isEditMode}>
            수정완료
          </Button>
        </form>
      </div>
    </div>
  );
};

export default MyPage;
