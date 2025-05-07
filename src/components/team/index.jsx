import { Button } from "antd";
import React from "react";

function TeamComponents() {
  return (
    <section className="w-[90%] m-auto mt-[140px] mb-11 flex items-center justify-center max-[768px]:mt-[80px]  max-[568px]:mt-[40px]">
      <div className=" flex flex-col gap-[60px] items-center justify-center  max-[768px]:gap-[35px]">
        <h1 className="text-[35px] font-bold max-[632px]:text-[29px] max-[525px]:text-[24px] max-[436px]:text-[21px]">
          Professional <span className="text-blue-600"> o'qtuvchilar </span>
          jamoasi
        </h1>
        <div className="flex items-center justify-center w-full">
          <div className="flex items-center w-full justify-center gap-[40px] min-[768px]:flex-wrap max-[740px]:grid max-[740px]:grid-cols-2 max-[540px]:grid-cols-1">
            <div className="border-[1px] w-[310px] p-[25px] rounded-lg max-[740px]:w-full ">
              <div>
                <img
                  className="w-full h-[280px] object-cover rounded-lg"
                  src="https://i.pinimg.com/236x/9f/8a/04/9f8a04de9dc05da8123f530d29818472.jpg"
                  alt=""
                />
              </div>
              <div className="flex items-center justify-center flex-col gap-[40px] pt-[20px]  max-[768px]:gap-[30px]  max-[568px]:mt-[15px]">
                <h2 className="text-[22px] font-bold  max-[568px]:text-[19px]">
                  Madaminov Salohiddin
                </h2>
                <div className="flex flex-col gap-[20px]">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-[17px] text-gray-500  max-[568px]:text-[15px]">
                      <span className="font-medium text-black ">17</span>{" "}
                      Student
                    </p>
                    <p className="text-[17px] text-gray-500 max-[568px]:text-[15px]">
                      <span className="font-medium text-black">0</span> Course
                    </p>
                  </div>
                  <Button>Batafsil ko'rish</Button>
                </div>
              </div>
            </div>

            <div className="border-[1px] w-[310px] p-[25px] rounded-lg max-[740px]:w-full ">
              <div>
                <img
                  className="w-full h-[280px] object-cover rounded-lg"
                  src="https://i.pinimg.com/236x/9f/8a/04/9f8a04de9dc05da8123f530d29818472.jpg"
                  alt=""
                />
              </div>
              <div className="flex items-center justify-center flex-col gap-[40px] pt-[20px]  max-[768px]:gap-[30px]  max-[568px]:mt-[15px]">
                <h2 className="text-[22px] font-bold  max-[568px]:text-[19px]">
                  Madaminov Salohiddin
                </h2>
                <div className="flex flex-col gap-[20px]">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-[17px] text-gray-500  max-[568px]:text-[15px]">
                      <span className="font-medium text-black ">17</span>{" "}
                      Student
                    </p>
                    <p className="text-[17px] text-gray-500 max-[568px]:text-[15px]">
                      <span className="font-medium text-black">0</span> Course
                    </p>
                  </div>
                  <Button>Batafsil ko'rish</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamComponents;
