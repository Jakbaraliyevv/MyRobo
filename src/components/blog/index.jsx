import React from "react";
import { EyeOutlined } from "@ant-design/icons";
import { CalendarOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
function BlogComponents() {
  return (
    <section className="w-[90%] m-auto mt-[40px]">
      <div className="grid grid-cols-2 gap-[25px] w-full max-[1081px]:grid-cols-1">
        <Link to={"/blog2"}>
          <div className="bg-[#f1f2f7] flex items-center justify-between gap-[20px] p-5 rounded-lg w-full max-[540px]:flex-col hover:shadow-xl transition-shadow duration-800 cursor-pointer">
            <div className="w-full">
              <img
                className="rounded-lg w-full h-auto object-cover"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQynvJHNYYVYBxRFV08e9G3Fpcv3g3fr2zl3A&s"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <h3 className="text-[19px] font-bold">Time to build </h3>
              </div>
              <p className="text-[15px] text-gray-500">Blog</p>
              <p className="text-[15px] text-gray-500">
                We are thrilled to partner with Alibaba Cloud for a new DEV
                challenge. Running through April 13
              </p>
              <div className="flex flex-col gap-5">
                <div className="border border-gray-400"></div>
                <div className="flex  gap-[40px]">
                  <div className="flex items-center gap-2">
                    <div className="w-[25px] h-[25px] bg-[#525254] rounded-full flex items-center justify-center text-[#fff]">
                      <EyeOutlined />
                    </div>
                    <p className="text-[17px] text-gray-500">0</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-[25px] h-[25px] bg-[#525254] rounded-full flex items-center justify-center text-[#fff]">
                      <CalendarOutlined />
                    </div>
                    <p className="text-[17px] text-gray-500">4/7/2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link to={"/blog2"}>
          <div className="bg-[#f1f2f7] flex items-center justify-between gap-[20px] p-5 rounded-lg w-full max-[540px]:flex-col hover:shadow-xl transition-shadow duration-500 cursor-pointer">
            <div className="w-full">
              <img
                className="rounded-lg w-full h-auto object-cover"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQynvJHNYYVYBxRFV08e9G3Fpcv3g3fr2zl3A&s"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <h3 className="text-[19px] font-bold">Time to build </h3>
              </div>
              <p className="text-[15px] text-gray-500">Blog</p>
              <p className="text-[15px] text-gray-500">
                We are thrilled to partner with Alibaba Cloud for a new DEV
                challenge. Running through April 13
              </p>
              <div className="flex flex-col gap-5">
                <div className="border border-gray-400"></div>
                <div className="flex  gap-[40px]">
                  <div className="flex items-center gap-2">
                    <div className="w-[25px] h-[25px] bg-[#525254] rounded-full flex items-center justify-center text-[#fff]">
                      <EyeOutlined />
                    </div>
                    <p className="text-[17px] text-gray-500">0</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-[25px] h-[25px] bg-[#525254] rounded-full flex items-center justify-center text-[#fff]">
                      <CalendarOutlined />
                    </div>
                    <p className="text-[17px] text-gray-500">4/7/2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}

export default BlogComponents;
