import React from "react";
import opani_Rasmi from "../../assets/page_2.jpg";

const PremiumEducation = () => {
  const text_data = [
    "O'z tezligingiz bilan o'rganing",
    "Eng yaxshi mutaxassislardan o'rganing",
    "Bilim va g'oyalarni baham ko'ring",
    "Global ijodiy hamjamiyat bilan bog'laning",
  ];

  return (
    <section className="w-[90%] m-auto">
      <div className=" w-full flex justify-between items-center max-[768px]:flex-col max-[768px]:gap-[30px]">
        <div className="">
          <div className="flex flex-col gap-6 max-[618px]:gap-3">
            <p className="text-xl  text-gray-600 font-medium text-center max-[618px]:text-[15px]">
              PREMIUM TA'LIM
            </p>
            <h1 className=" text-3xl font-bold max-[768px]:text-1xl max-[618px]:text-xl max-[440px]:text-[17px]">
              Eng Zamonaviy-Elektron
              <span className="text-[#0a8ce4]"> Ta'lim Tajribasi</span>
            </h1>

            <div className="space-y-2">
              {text_data?.map((item, index) => (
                <div
                  key={index}
                  className="transition-all duration-300 ease-in-out border-b border-gray-200/80 py-2 px-3 hover:bg-blue-50 hover:rounded-lg hover:border-blue-50 cursor-pointer "
                >
                  <p className="font-medium text-lg max-[618px]:text-[14px]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="">
          <div className="opani_rasmi">
            <img
              src={opani_Rasmi}
              alt="Premium ta'lim tasviri"
              className="w-[630px] h-auto rounded-lg "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumEducation;
