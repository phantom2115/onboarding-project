import axios from "axios";
import { AUTH_URL } from "../constant/api";
import { TOKEN_STORAGE_KEY } from "../constant/token";
import { LOGIN_PATH } from "../constant/path";

const authAxios = axios.create({
  baseURL: AUTH_URL,
});

authAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    alert(error.response.data.message);

    if (error.status === 401) {
      localStorage.removeItem(TOKEN_STORAGE_KEY);
      location.href = LOGIN_PATH;
    }
    return Promise.reject(error);
  }
);

export default authAxios;
