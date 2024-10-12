export interface RegisterType extends LoginType {
  nickname: NicknameType;
}

export interface LoginType {
  id: IdType;
  password: PasswordType;
}

export interface RegisterResponseType {
  message: MessageType;
  success: SuccessType;
}

export interface LoginResponseType {
  accessToken: string;
  userId: IdType;
  success: SuccessType;
  avatar: AvatarType;
  nickname: NicknameType;
}

export interface UserType {
  id: IdType;
  nickname: NicknameType;
  avatar: AvatarType;
  success: SuccessType;
}

export interface EditUserType {
  avatar: File | null;
  nickname: NicknameType;
}

export interface EditUserResponseType {
  avatar: File | null;
  nickname: NicknameType;
  message: MessageType;
  success: SuccessType;
}

type IdType = string;
type PasswordType = string;
type AvatarType = null | string;
type NicknameType = string;
type MessageType = string;
type SuccessType = boolean;
