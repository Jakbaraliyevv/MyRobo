// import React, { useEffect, useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, EffectFade } from "swiper/modules";
// import { Link } from "react-router-dom";
// import "swiper/css";
// import "swiper/css/effect-fade";

// const SlayderKomponenti = () => {
//   const ratingRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.remove("opacity-0", "translate-y-10");
//             entry.target.classList.add("animate-float");
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     if (ratingRef.current) {
//       observer.observe(ratingRef.current);
//     }

//     return () => {
//       if (ratingRef.current) {
//         observer.unobserve(ratingRef.current);
//       }
//     };
//   }, []);

//   return (
//     <div className="max-w-[1366px] w-full mx-auto px-4 py-8 relative">
//       <Swiper
//         spaceBetween={30}
//         effect={"fade"}
//         autoplay={{ delay: 4000, disableOnInteraction: false }}
//         loop={true}
//         modules={[Autoplay, EffectFade]}
//         className="w-full rounded-3xl shadow-xl overflow-hidden h-[300px] sm:h-[350px] md:h-[450px] lg:h-[500px]"
//       >
//         {/* 1-slide - Backend */}
//         <SwiperSlide className="relative">
//           <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
//           <img
//             src="https://www.perrill.com/wp-content/uploads/2015/08/stock-web-design.jpg"
//             alt="Backend dasturlash"
//             className="absolute inset-0 w-full h-full object-cover"
//             style={{ objectPosition: "center 30%" }}
//           />
//           <div className="absolute inset-0 z-20 flex flex-col justify-end items-center p-4 pb-20 sm:pb-16 md:justify-center md:pb-8">
//             <div className="bg-white/90 p-4 md:p-6 rounded-xl w-full max-w-md mx-auto mb-2 sm:mb-4">
//               <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 text-gray-800">
//                 <span className="text-blue-600">Backend</span> dasturlash <br />
//                 tilini <span className="text-gray-800">Izzatullox</span> bilan
//                 organing
//               </h1>
//               <Link to="/kurslar">
//                 <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm md:text-base py-2 px-4 md:py-2 md:px-5 rounded-full transition-all duration-300">
//                   Kurs paketlarini ko'rish
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </SwiperSlide>

//         {/* 2-slide - Frontend */}
//         <SwiperSlide className="relative">
//           <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
//           <img
//             src="https://www.teckfine.com/wp-content/uploads/2021/02/cloud-servers.jpg"
//             alt="Frontend dasturlash"
//             className="absolute inset-0 w-full h-full object-cover"
//             style={{ objectPosition: "center 30%" }}
//           />
//           <div className="absolute inset-0 z-20 flex flex-col justify-end items-center p-4 pb-20 sm:pb-16 md:justify-center md:pb-8">
//             <div className="bg-white/90 p-4 md:p-6 rounded-xl w-full max-w-md mx-auto mb-2 sm:mb-4">
//               <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 text-gray-800">
//                 <span className="text-blue-600">Frontend</span> dasturlash{" "}
//                 <br />
//                 tilini <span className="text-gray-800">Maqsadbek</span> bilan
//                 organing
//               </h1>
//               <Link to="/kurslar">
//                 <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm md:text-base py-2 px-4 md:py-2 md:px-5 rounded-full transition-all duration-300">
//                   Kurs paketlarini ko'rish
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </SwiperSlide>

//         {/* 3-slide - Flutter */}
//         <SwiperSlide className="relative">
//           <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
//           <img
//             src="https://global.discourse-cdn.com/auth0/original/3X/e/c/ec121d8cfbeb56e6cb593e3eb98876890c73b37e.png"
//             alt="Flutter dasturlash"
//             className="absolute inset-0 w-full h-full object-cover"
//             style={{ objectPosition: "center 30%" }}
//           />
//           <div className="absolute inset-0 z-20 flex flex-col justify-end items-center p-4 pb-20 sm:pb-16 md:justify-center md:pb-8">
//             <div className="bg-white/90 p-4 md:p-6 rounded-xl w-full max-w-md mx-auto mb-2 sm:mb-4">
//               <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 text-gray-800">
//                 <span className="text-blue-600">Flutter</span> dasturlash <br />
//                 tilini <span className="text-gray-800">Bobur</span> bilan
//                 organing
//               </h1>
//               <Link to="/kurslar">
//                 <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm md:text-base py-2 px-4 md:py-2 md:px-5 rounded-full transition-all duration-300">
//                   Kurs paketlarini ko'rish
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </SwiperSlide>
//       </Swiper>

//       {/* Reyting komponenti - mobil versiyada pastroq joylashgan */}
//       <div
//         ref={ratingRef}
//         className="absolute right-2 sm:right-4 bottom-2 sm:bottom-4 md:right-6 md:bottom-6 z-30 bg-white p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl shadow-lg sm:shadow-xl opacity-0 translate-y-10 transition-all duration-500"
//         style={{ bottom: "0.5rem" }}
//       >
//         <div className="text-center">
//           <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600 mb-1 sm:mb-2">
//             4.85
//           </h1>
//           <p className="text-xs sm:text-sm md:text-base text-gray-700">
//             IJODKORLAR UCHUN <br className="hidden xs:block" />
//             <span className="text-blue-600 font-medium sm:font-semibold">
//               1,2 MINGDAN
//             </span>{" "}
//             ORTIQ <br />
//             KURSLAR{" "}
//             <span className="text-green-500 font-medium sm:font-semibold">
//               BEPUL
//             </span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SlayderKomponenti;

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const SwiperComponent = () => {
  const [isPulsing, setIsPulsing] = useState(false);

  useEffect(() => {
    // Initial animation
    const timer = setTimeout(() => setIsPulsing(true), 500);

    // Continuous pulsing every 3 seconds
    const interval = setInterval(() => {
      setIsPulsing(false);
      setTimeout(() => setIsPulsing(true), 300);
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="w-[90%] rounded-2xl mx-auto overflow-hidden">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay, EffectFade]}
        className="mySwiper relative"
      >
        {/* Slide 1 - Flutter */}
        <SwiperSlide>
          <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-10 bg-white">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                <span className="text-blue-600">Flutter</span> dasturlash
                <br />
                tilini <span  className="text-blue-600">Bobur</span> bilan o'rganing
              </h1>

              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105">
                Kurs paketlarini o'rganing
              </button>
            </div>

            <div className="w-full md:w-1/2 relative">
              <img
                src="https://global.discourse-cdn.com/auth0/original/3X/e/c/ec121d8cfbeb56e6cb593e3eb98876890c73b37e.png"
                alt="Flutter"
                className="rounded-xl w-full h-64 md:h-96 object-cover shadow-lg"
              />

              {/* Improved animation div */}
              <div
                className={`
                absolute -bottom-5 -right-5 md:-right-10 
                bg-white p-4 rounded-xl shadow-2xl
                transition-all duration-500
                ${isPulsing ? "scale-105" : "scale-100"}
              `}
              >
                <h1 className="text-3xl font-bold text-center text-blue-600">
                  4.85
                </h1>
                <p className="text-sm md:text-base text-center mt-1">
                  IJODKORLAR UCHUN{" "}
                  <span className="text-blue-500">12 MINGDAN</span>
                  <br />
                  ORTIQ KURSLAR <span className="text-green-500">BEPUL</span>
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 - Backend */}
        <SwiperSlide>
          <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-10 bg-white">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                <span className="text-blue-600">Backend</span> dasturlash
                <br />
                tilini <span className="text-blue-600">Izzatullox</span> bilan
                o'rganing
              </h1>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105">
                Kurs paketlarini o'rganing
              </button>
            </div>

            <div className="w-full md:w-1/2 relative">
              <img
                src="https://www.perrill.com/wp-content/uploads/2015/08/stock-web-design.jpg"
                alt="Backend"
                className="rounded-xl w-full h-64 md:h-96 object-cover shadow-lg"
              />

              <div
                className={`
                absolute -bottom-5 -right-5 md:-right-10 
                bg-white p-4 rounded-xl shadow-2xl
                transition-all duration-500
                ${isPulsing ? "scale-105" : "scale-100"}
              `}
              >
                <h1 className="text-3xl font-bold text-center text-blue-600">
                  4.85
                </h1>
                <p className="text-sm md:text-base text-center mt-1">
                  IJODKORLAR UCHUN{" "}
                  <span className="text-blue-500">12 MINGDAN</span>
                  <br />
                  ORTIQ KURSLAR <span className="text-green-500">BEPUL</span>
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 - Frontend */}
        <SwiperSlide>
          <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-10 bg-white">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                <span className="text-blue-600">Frontend</span> dasturlash
                <br />
                tilini <span className="text-blue-600">Maqsadbek</span> bilan
                o'rganing
              </h1>

              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105">
                Kurs paketlarini o'rganing
              </button>
            </div>

            <div className="w-full md:w-1/2 relative">
              <img
                src="https://www.teckfine.com/wp-content/uploads/2021/02/cloud-servers.jpg"
                alt="Frontend"
                className="rounded-xl w-full h-64 md:h-96 object-cover shadow-lg"
              />

              <div
                className={`
                absolute -bottom-5 -right-5 md:-right-10 
                bg-white p-4 rounded-xl shadow-2xl
                transition-all duration-500
                ${isPulsing ? "scale-105" : "scale-100"}
              `}
              >
                <h1 className="text-3xl font-bold text-center text-blue-600">
                  4.85
                </h1>
                <p className="text-sm md:text-base text-center mt-1">
                  IJODKORLAR UCHUN{" "}
                  <span className="text-blue-500">12 MINGDAN</span>
                  <br />
                  ORTIQ KURSLAR <span className="text-green-500">BEPUL</span>
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
