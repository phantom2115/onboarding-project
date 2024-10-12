import axios from "axios";
import { PostType } from "../types/post";
import { BASE_URL } from "../constant/api";

export const getPosts = async () => {
  try {
    const response = await axios.get<PostType[]>(`${BASE_URL}/posts`);
    return response.data;
  } catch (error) {
    throw new Error("error");
  }
};
