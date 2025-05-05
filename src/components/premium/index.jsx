import React from "react";
import opani_Rasmi from "../../assets/page_2.jpg";
import { motion } from "framer-motion";

const PremiumEducation = () => {
  const text_data = [
    "O'z tezligingiz bilan o'rganing",
    "Eng yaxshi mutaxassislardan o'rganing",
    "Bilim va g'oyalarni baham ko'ring",
    "Global ijodiy hamjamiyat bilan bog'langan",
  ];

  // Animatsiya variantlari
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const leftSlideIn = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const rightSlideIn = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="w-[90%] m-auto mt-[40px]">
      <div className="w-full flex justify-between items-center max-[768px]:flex-col max-[768px]:gap-[30px]">
        {/* Chap qism - Matnlar (chapdan kirib keladi) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          variants={leftSlideIn}
          className=""
        >
          <motion.div
            className="flex flex-col gap-6 max-[618px]:gap-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 font-medium text-center max-[618px]:text-[15px]"
            >
              PREMIUM TA'LIM
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="text-3xl font-bold max-[768px]:text-1xl max-[618px]:text-xl max-[440px]:text-[17px]"
            >
              Eng Zamonaviy-Elektron
              <span className="text-[#0a8ce4]"> Ta'lim Tajribasi</span>
            </motion.h1>

            <motion.div className="space-y-2">
              {text_data?.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="transition-all duration-300 ease-in-out border-b border-gray-200/80 py-2 px-3 hover:bg-blue-50 hover:rounded-lg hover:border-blue-50 cursor-pointer"
                >
                  <p className="font-medium text-lg max-[618px]:text-[14px]">
                    {item}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* O'ng qism - Rasm (o'ngdan kirib keladi) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          variants={rightSlideIn}
          className=""
        >
          <div className="opani_rasmi">
            <motion.img
              src={opani_Rasmi}
              alt="Premium ta'lim tasviri"
              className="w-[630px] h-auto rounded-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PremiumEducation;
