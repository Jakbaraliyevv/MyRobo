import React from "react";
import { CalendarOutlined } from "@ant-design/icons";
import { EyeOutlined } from "@ant-design/icons";

import {
  FaTelegramPlane,
  FaInstagram,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa";
function BlogComponentsId() {
  return (
    <section className="w-[90%] m-auto mt-[40px]">
      <div className="w-full flex flex-col gap-[40px] max-[500px]:gap-[25px]">
        <div className="w-full flex flex-col gap-[20px] ">
          <img
            className="w-full h-[500px] object-cover rounded-2xl"
            src="data:image/jpeg;base64,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"
            alt=""
          />
          <div className=" gap-[40px] hidden max-[700px]:flex max-[524px]:justify-end">
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
        <div className="flex flex-col gap-[40px] max-[500px]:gap-[20px]">
          <div className="flex items-end justify-between gap-[40px] ">
            <h1 className="text-[29px] font-bold max-[768px]:text-[22px] max-[590px]:text-[17px]">
              Microsoft bosh texnologiya direktori: Kelgusi 5 yilda kodning 95%
              AI tomonidan yoziladi
            </h1>

            <div className="flex  gap-[40px] max-[700px]:hidden">
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
          <div className=" flex flex-col gap-[30px]">
            <p className="text-[17px] text-gray-600 max-[590px]:text-[15px] max-[490px]:text-[13px]">
              Microsoft CTO'si Kevin Scottning ta'kidlashicha, kelgusi besh yil
              ichida kodning 95 foizi sun'iy intellekt tomonidan generatsiya
              qilinadi. Biroq, inson dasturchilari hali ham muhim rol o‘ynaydi,
              chunki ijodiy va muammolarni hal qilish qobiliyatlari AI tomonidan
              to‘liq almashtirilmaydi.
            </p>

            <div className="flex items-center gap-[20px] max-[524px]:justify-center">
              <div className="w-[45px] cursor-pointer h-[45px] p-3 rounded-full  shadow-md shadow-blue-300 flex items-center justify-center text-[22px] hover:bg-blue-600 hover:text-[#FFF] transition-all duration-300 ">
                <FaTelegramPlane />
              </div>
              <div className="w-[45px] cursor-pointer h-[45px] p-3 rounded-full  shadow-md shadow-blue-300 flex items-center justify-center text-[22px] hover:bg-blue-600 hover:text-[#FFF] transition-all duration-300">
                <FaInstagram />
              </div>
              <div className="w-[45px] cursor-pointer h-[45px] p-3 rounded-full  shadow-md shadow-blue-300 flex items-center justify-center text-[22px] hover:bg-blue-600 hover:text-[#FFF] transition-all duration-300 ">
                <FaYoutube />
              </div>
              <div className="w-[45px] h-[45px] cursor-pointer p-3 rounded-full  shadow-md shadow-blue-300 flex items-center justify-center text-[22px] hover:bg-blue-600 hover:text-[#FFF] transition-all duration-300">
                <FaFacebookF />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogComponentsId;
