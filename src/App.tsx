import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Posts from "./pages/Posts";
import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import MyPage from "./pages/MyPage";
import Layout from "./pages/Layout";
import {
  LOGIN_PATH,
  MAIN_PATH,
  MYPAGE_PATH,
  REGISTER_PATH,
} from "./constant/path";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path={MAIN_PATH} element={<Layout />}>
            <Route index element={<Posts />} />
            <Route path={LOGIN_PATH} element={<Login />} />
            <Route path={REGISTER_PATH} element={<Register />} />
            <Route path={MYPAGE_PATH} element={<MyPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
