import { Button, Drawer } from "antd";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo3.png";
import { MenuOutlined } from "@ant-design/icons";

function Navbar() {
  const [visible, setVisible] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  // Check if current route matches nav link
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <section className="bg-[#FFF] border-b-[1px] border-[#eaeaea] top-0 z-[999] sticky">
        <div className="w-[90%] h-[70px] m-auto flex items-center justify-between py-[45px]">
          <div>
            <Link to={"/"}>
              <img
                className="w-[250px] md:w-[200px] sm:w-[180px] hover:opacity-90 transition-opacity"
                src={logo}
                alt=""
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex items-center gap-[40px] text-[17px] font-medium text-[#616161]">
            <Link
              to={"/"}
              className={`relative group ${
                isActive("/") ? "text-[#1890ff]" : ""
              }`}
            >
              Bosh sahifa
              <span
                className={`absolute left-0 -bottom-1 h-0.5 bg-[#1890ff] transition-all duration-300 ${
                  isActive("/") ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>

            <Link
              to={"/kurslar"}
              className={`relative group ${
                isActive("/kurslar") ? "text-[#1890ff]" : ""
              }`}
            >
              Kurslar
              <span
                className={`absolute left-0 -bottom-1 h-0.5 bg-[#1890ff] transition-all duration-300 ${
                  isActive("/kurslar") ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>

            <Link
              to={"/blog"}
              className={`relative group ${
                isActive("/blog") ? "text-[#1890ff]" : ""
              }`}
            >
              Blog
              <span
                className={`absolute left-0 -bottom-1 h-0.5 bg-[#1890ff] transition-all duration-300 ${
                  isActive("/blog") ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Button
              onClick={() => navigate("/login")}
              className="hidden sm:block w-[120px] h-[35px] hover:bg-[#40a9ff] hover:border-[#40a9ff] transition-colors"
              type="primary"
            >
              Kirish
            </Button>

            <button
              className="sm:hidden text-2xl text-[#616161] hover:text-[#1890ff] transition-colors"
              onClick={showDrawer}
            >
              <MenuOutlined />
            </button>
          </div>
        </div>
      </section>

      {/* Mobile Sidebar Drawer */}
      <Drawer
        title={
          <Link to={"/"} onClick={onClose}>
            <img
              className="w-[180px] hover:opacity-90 transition-opacity"
              src={logo}
              alt=""
            />
          </Link>
        }
        placement="left"
        closable={true}
        onClose={onClose}
        visible={visible}
        width="70%"
        bodyStyle={{ padding: 0 }}
        headerStyle={{ padding: "16px 20px" }}
      >
        <div className="flex flex-col h-full">
          <div className="flex flex-col gap-1 p-2">
            <Link
              to={"/"}
              onClick={onClose}
              className={`p-3 text-[15px] font-medium ${
                isActive("/") ? "text-[#1890ff] bg-blue-50" : "text-[#616161]"
              } hover:text-[#1890ff] hover:bg-blue-50 transition-colors rounded`}
            >
              Bosh sahifa
            </Link>

            <Link
              to={"/kurslar"}
              onClick={onClose}
              className={`p-3 text-[15px] font-medium ${
                isActive("/kurslar")
                  ? "text-[#1890ff] bg-blue-50"
                  : "text-[#616161]"
              } hover:text-[#1890ff] hover:bg-blue-50 transition-colors rounded`}
            >
              Kurslar
            </Link>

            <Link
              to={"/blog"}
              onClick={onClose}
              className={`p-3 text-[15px] font-medium ${
                isActive("/blog")
                  ? "text-[#1890ff] bg-blue-50"
                  : "text-[#616161]"
              } hover:text-[#1890ff] hover:bg-blue-50 transition-colors rounded`}
            >
              Blog
            </Link>
          </div>

          <div className="mt-auto p-4">
            <Button
              className="w-full h-[38px] hover:bg-[#40a9ff] hover:border-[#40a9ff] transition-colors"
              type="primary"
              onClick={() => {
                onClose();
                navigate("/login");
              }}
            >
              Kirish
            </Button>
          </div>
        </div>
      </Drawer>
    </>
  );
}

export default Navbar;
