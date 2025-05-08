import { Button, Drawer, Dropdown, Menu } from "antd";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo3.png";
import { MenuOutlined, UserOutlined, BookOutlined, LogoutOutlined } from "@ant-design/icons";

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

  const isActive = (path) => {
    return location.pathname === path;
  };

  const token = localStorage.getItem("token");
  const balance = localStorage.getItem("balance");
  const phone = localStorage.getItem("phone");

  // Dropdown menu items
  const menu = (
    <Menu>
      <Menu.Item key="1" icon={<BookOutlined />} onClick={() => navigate("/my-courses")}>
        Kurslarim
      </Menu.Item>
      <Menu.Item key="2" icon={<UserOutlined />} onClick={() => navigate("/profile")}>
        Profilim
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item 
        key="3" 
        icon={<LogoutOutlined />} 
        onClick={() => {
          localStorage.removeItem("token");
          localStorage.removeItem("balance");
          localStorage.removeItem("phone");
          navigate("/login");
        }}
      >
        Chiqish
      </Menu.Item>
    </Menu>
  );

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

          {/* Desktop Navigation remains the same */}
          {/* ... */}

          <div className="flex items-center gap-4">
            {token ? (
              <Dropdown overlay={menu} trigger={["click"]} placement="bottomRight">
                <Button
                  className="hidden sm:block w-[50px] h-[35px] hover:bg-[#40a9ff] hover:border-[#40a9ff] transition-colors text-[17px]"
                  type="primary"
                >
                  <UserOutlined />
                </Button>
              </Dropdown>
            ) : (
              <Button
                onClick={() => navigate("/login")}
                className="hidden sm:block w-[120px] h-[35px] hover:bg-[#40a9ff] hover:border-[#40a9ff] transition-colors"
                type="primary"
              >
                Kirish
              </Button>
            )}

            <button
              className="sm:hidden text-2xl text-[#616161] hover:text-[#1890ff] transition-colors"
              onClick={showDrawer}
            >
              <MenuOutlined />
            </button>
          </div>
        </div>
      </section>

      {/* Updated Mobile Sidebar Drawer */}
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
        width="80%"
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

            {token && (
              <>
                {/* User Info Section */}
                <div className="p-4 border-t border-b border-gray-200 my-2">
                  <div className="text-sm font-medium text-gray-500">Balans:</div>
                  <div className="text-lg font-bold">{balance || '0'} so'm</div>
                  
                  <div className="mt-2 text-sm font-medium text-gray-500">Telefon:</div>
                  <div className="text-lg">{phone || '+998'}</div>
                </div>

                {/* Profile Links */}
                <Link
                  to={"/profile"}
                  onClick={onClose}
                  className={`flex items-center p-3 text-[15px] font-medium ${
                    isActive("/profile")
                      ? "text-[#1890ff] bg-blue-50"
                      : "text-[#616161]"
                  } hover:text-[#1890ff] hover:bg-blue-50 transition-colors rounded`}
                >
                  <span className="mr-2">☒</span> Mening profilim
                </Link>

                <Link
                  to={"/my-courses"}
                  onClick={onClose}
                  className={`flex items-center p-3 text-[15px] font-medium ${
                    isActive("/my-courses")
                      ? "text-[#1890ff] bg-blue-50"
                      : "text-[#616161]"
                  } hover:text-[#1890ff] hover:bg-blue-50 transition-colors rounded`}
                >
                  <span className="mr-2">☐</span> Mening kurslarim
                </Link>

                <button
                  onClick={() => {
                    localStorage.removeItem("token");
                    localStorage.removeItem("balance");
                    localStorage.removeItem("phone");
                    onClose();
                    navigate("/login");
                  }}
                  className="flex items-center p-3 text-[15px] font-medium text-[#616161] hover:text-[#1890ff] hover:bg-blue-50 transition-colors rounded w-full text-left"
                >
                  <span className="mr-2">☒</span> Chiqish
                </button>
              </>
            )}
          </div>

          {!token && (
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
          )}
        </div>
      </Drawer>
    </>
  );
}

export default Navbar;