import {
  EditUserResponseType,
  EditUserType,
  LoginResponseType,
  LoginType,
  RegisterResponseType,
  RegisterType,
} from "../types/auth";
import { AUTH_URL } from "../constant/api";
import { TOKEN_STORAGE_KEY } from "../constant/token";
import authAxios from "./axios";

export const registerAuth = async ({
  nickname,
  id,
  password,
}: RegisterType) => {
  const response = await authAxios.post<RegisterResponseType>(`/register`, {
    id,
    password,
    nickname,
  });
  return response.data.message;
};

export const loginAuth = async ({ id, password }: LoginType) => {
  return await authAxios.post<LoginResponseType>(`/login?expiresIn=30m`, {
    id,
    password,
  });
};

export const getUserInfoAuth = async () => {
  return await authAxios.get(`/user`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem(TOKEN_STORAGE_KEY)}`,
    },
  });
};

export const editUserAuth = async ({ nickname, avatar }: EditUserType) => {
  const formData = new FormData();
  formData.append("nickname", nickname);
  if (avatar) formData.append("avatar", avatar);
  return await authAxios.patch<EditUserResponseType>(
    `${AUTH_URL}/profile`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem(TOKEN_STORAGE_KEY)}`,
      },
    }
  );
};
