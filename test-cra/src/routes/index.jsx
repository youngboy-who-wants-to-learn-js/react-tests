import { Routes, Route } from "react-router-dom";
import { MainPage } from "../pages/MainPage";
import { AboutPage } from "../pages/AboutPage";
import { ErrorPage } from "../pages/ErrorPage";
import { User } from "../pages/User";
import { Users } from "../Users/Users";
import { HelloWorld } from "../pages/HelloWorld";
import { UsersForTest } from "../Users/UsersForTest";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<ErrorPage />} />
      <Route path="/users" element={<Users />} />
      <Route path="/user/:id" element={<User />} />
      <Route path="/hello" element={<HelloWorld />} />
      <Route path="/users-test" element={<UsersForTest />} />
    </Routes>
  );
};
