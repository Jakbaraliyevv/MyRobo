import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Kurslar from "../pages/kurslar";
import Blog from "../pages/blog";
import Layout from "../components/layout";
import BlogComponentsId from "../components/blog2";
import KirishComponentsID from "../components/kirish2";
import LoginPage from "../components/login";
import FrontendProfile from "../components/frontned";

const root = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "kurslar",
        element: <Kurslar />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "blog2",
        element: <BlogComponentsId />,
      },
      {
        path: "kirish2",
        element: <KirishComponentsID />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "frontned",
        element: <FrontendProfile />,
      },
    ],
  },
]);

export default root;
