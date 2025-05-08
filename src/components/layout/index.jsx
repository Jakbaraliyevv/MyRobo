import React from "react";
import Navbar from "../navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../footer";

function Layout() {
  const location = useLocation();

  // Login sahifasi yoki boshqa layoutsiz sahifalar uchun
  const hideLayout = location.pathname === "/login";

  return (
    <>
      {!hideLayout && <Navbar />}
      <main>
        <Outlet />
      </main>
      {!hideLayout && <Footer />}
    </>
  );
}

export default Layout;
