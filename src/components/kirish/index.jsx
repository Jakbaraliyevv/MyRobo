// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Button } from "antd";

// function KirishComponents() {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <section className="w-[90%] m-auto mt-[60px] mb-[60px]">
//       <div className="flex items-center justify-center gap-[60px] max-[640px]:flex max-[640px]:flex-col max-[640px]:gap-[40px]">
//         <div
//           className="relative w-[280px] h-auto shadow-md rounded-b-md cursor-pointer max-[640px]:w-[350px]"
//           onMouseEnter={() => setIsHovered(true)}
//           onMouseLeave={() => setIsHovered(false)}
//         >
//           {/* Asosiy karta */}
//           <div>
//             <img
//               className="rounded-t-md w-full object-cover"
//               src="https://www.perrill.com/wp-content/uploads/2015/08/stock-web-design.jpg"
//               alt="Frontend dasturlash"
//             />
//           </div>
//           <div className="border-[#d7d4d4] border-[1px] rounded-b-md p-5 flex flex-col gap-[30px]">
//             <span className="flex items-center gap-2">
//               <div className="w-[17px] h-[17px] bg-[#f1f2f7] rounded-full"></div>
//               <h4 className="text-[17px] text-green-600">275000 so'm</h4>
//             </span>
//             <h4 className="text-[17px] font-bold">
//               Front-End Dasturlashga kirish
//             </h4>

//             <div className="flex items-center justify-between">
//               <span className="flex items-center gap-2">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="#098CE9"
//                   width="16px"
//                   height="16px"
//                   viewBox="0 0 256 256"
//                   id="Flat"
//                 >
//                   <path d="M227.79492,52.61621l-96-32a11.98464,11.98464,0,0,0-7.58984,0L28.44678,52.53564l-.05078.01685-.19092.06372c-.17383.05786-.34107.12793-.51074.19312-.20118.07739-.40052.15722-.5962.24487-.24487.10962-.48706.22339-.72216.34814-.11817.06275-.23181.13233-.34766.199-.199.11426-.39526.23144-.58618.3562-.10938.07153-.21655.14551-.32361.2207q-.295.20655-.575.42993c-.09009.07154-.18091.14185-.26892.21607q-.33453.282-.64575.58691c-.04444.04346-.09192.0835-.13575.12744q-.37243.375-.70947.78077c-.06335.07592-.12109.15625-.18249.23364-.15516.1958-.30579.39453-.44837.59961-.07861.11279-.15332.22778-.228.34326q-.175.271-.33483.55127c-.07264.12671-.14551.25268-.21363.38257-.10583.20166-.20251.40844-.297.61645-.05225.115-.10987.22657-.15845.34351-.12842.30835-.24243.62353-.34522.94311-.04187.13086-.07544.2649-.113.39746-.06128.21656-.1189.43384-.16822.65455-.03125.14062-.05908.28222-.08545.4248-.04345.23462-.07861.47119-.10839.71-.01526.124-.03321.24732-.04468.37256C20.02209,63.2583,20,63.627,20,64v80a12,12,0,0,0,24,0V80.64868l23.7146,7.905a67.90093,67.90093,0,0,0,18.11377,84.73047,99.97006,99.97006,0,0,0-41.64819,36.16016,12.00007,12.00007,0,0,0,20.10351,13.10937,76.02217,76.02217,0,0,1,127.43213,0,12.00007,12.00007,0,0,0,20.10352-13.10937,99.97238,99.97238,0,0,0-41.64783-36.16016A67.9008,67.9008,0,0,0,188.2854,88.55371l39.50952-13.16992a11.99952,11.99952,0,0,0,0-22.76758ZM128,44.64941,186.05273,64l-20.70739,6.90234-.03272.011L128,83.35059,90.68677,70.91309l-.02844-.00953L69.94727,64ZM172,120A44,44,0,1,1,90.93738,96.29443l33.2677,11.08936a11.99358,11.99358,0,0,0,7.58984,0l33.2677-11.08936A43.87528,43.87528,0,0,1,172,120Z"></path>
//                 </svg>
//                 <p className="text-[15px] text-gray-500">0 O'quvchilar</p>
//               </span>
//               <span className="flex items-center gap-2">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="16"
//                   height="17"
//                   viewBox="0 0 16 17"
//                   fill="none"
//                 >
//                   <path
//                     d="M9.33317 1.83331H3.99984C3.64622 1.83331 3.30708 1.97379 3.05703 2.22384C2.80698 2.47389 2.6665 2.81302 2.6665 3.16665V13.8333C2.6665 14.1869 2.80698 14.5261 3.05703 14.7761C3.30708 15.0262 3.64622 15.1666 3.99984 15.1666H11.9998C12.3535 15.1666 12.6926 15.0262 12.9426 14.7761C13.1927 14.5261 13.3332 14.1869 13.3332 13.8333V5.83331L9.33317 1.83331Z"
//                     stroke="#098CE9"
//                     strokeWidth="1.5"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   ></path>
//                   <path
//                     d="M9.3335 1.83331V5.83331H13.3335"
//                     stroke="#098CE9"
//                     strokeWidth="1.5"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   ></path>
//                   <path
//                     d="M10.6668 9.16669H5.3335"
//                     stroke="#098CE9"
//                     strokeWidth="1.5"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   ></path>
//                   <path
//                     d="M10.6668 11.8333H5.3335"
//                     stroke="#098CE9"
//                     strokeWidth="1.5"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   ></path>
//                   <path
//                     d="M6.66683 6.5H6.00016H5.3335"
//                     stroke="#098CE9"
//                     strokeWidth="1.5"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   ></path>
//                 </svg>
//                 <p className="text-[15px] text-gray-500">3 Darsliklar</p>
//               </span>
//             </div>
//           </div>

//           {/* Modal qismi - Pastdan chiqadigan animatsiya */}
//           <AnimatePresence>
//             {isHovered && (
//               <motion.div
//                 initial={{ opacity: 0, y: "100%" }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: "100%" }}
//                 transition={{ type: "spring", damping: 30, stiffness: 200 }}
//                 className="absolute inset-0 bg-[#f1f2f7] rounded-md p-5 flex flex-col gap-4 z-10 shadow-xl"
//               >
//                 <div className="flex flex-col gap-[30px]">
//                   <div className="p-2 bg-blue-100 rounded-md text-[17px] font-medium">
//                     Frontend Dasturlashga kirish
//                   </div>
//                   <h4 className="text-[17px] font-bold">
//                     Front-End Dasturlashga kirish
//                   </h4>
//                   <div className="flex items-center justify-between">
//                     <span className="flex items-center gap-2">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="#098CE9"
//                         width="16px"
//                         height="16px"
//                         viewBox="0 0 256 256"
//                         id="Flat"
//                       >
//                         <path d="M227.79492,52.61621l-96-32a11.98464,11.98464,0,0,0-7.58984,0L28.44678,52.53564l-.05078.01685-.19092.06372c-.17383.05786-.34107.12793-.51074.19312-.20118.07739-.40052.15722-.5962.24487-.24487.10962-.48706.22339-.72216.34814-.11817.06275-.23181.13233-.34766.199-.199.11426-.39526.23144-.58618.3562-.10938.07153-.21655.14551-.32361.2207q-.295.20655-.575.42993c-.09009.07154-.18091.14185-.26892.21607q-.33453.282-.64575.58691c-.04444.04346-.09192.0835-.13575.12744q-.37243.375-.70947.78077c-.06335.07592-.12109.15625-.18249.23364-.15516.1958-.30579.39453-.44837.59961-.07861.11279-.15332.22778-.228.34326q-.175.271-.33483.55127c-.07264.12671-.14551.25268-.21363.38257-.10583.20166-.20251.40844-.297.61645-.05225.115-.10987.22657-.15845.34351-.12842.30835-.24243.62353-.34522.94311-.04187.13086-.07544.2649-.113.39746-.06128.21656-.1189.43384-.16822.65455-.03125.14062-.05908.28222-.08545.4248-.04345.23462-.07861.47119-.10839.71-.01526.124-.03321.24732-.04468.37256C20.02209,63.2583,20,63.627,20,64v80a12,12,0,0,0,24,0V80.64868l23.7146,7.905a67.90093,67.90093,0,0,0,18.11377,84.73047,99.97006,99.97006,0,0,0-41.64819,36.16016,12.00007,12.00007,0,0,0,20.10351,13.10937,76.02217,76.02217,0,0,1,127.43213,0,12.00007,12.00007,0,0,0,20.10352-13.10937,99.97238,99.97238,0,0,0-41.64783-36.16016A67.9008,67.9008,0,0,0,188.2854,88.55371l39.50952-13.16992a11.99952,11.99952,0,0,0,0-22.76758ZM128,44.64941,186.05273,64l-20.70739,6.90234-.03272.011L128,83.35059,90.68677,70.91309l-.02844-.00953L69.94727,64ZM172,120A44,44,0,1,1,90.93738,96.29443l33.2677,11.08936a11.99358,11.99358,0,0,0,7.58984,0l33.2677-11.08936A43.87528,43.87528,0,0,1,172,120Z"></path>
//                       </svg>
//                       <p className="text-[15px] text-gray-500">0 O'quvchilar</p>
//                     </span>
//                     <span className="flex items-center gap-2">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="16"
//                         height="17"
//                         viewBox="0 0 16 17"
//                         fill="none"
//                       >
//                         <path
//                           d="M9.33317 1.83331H3.99984C3.64622 1.83331 3.30708 1.97379 3.05703 2.22384C2.80698 2.47389 2.6665 2.81302 2.6665 3.16665V13.8333C2.6665 14.1869 2.80698 14.5261 3.05703 14.7761C3.30708 15.0262 3.64622 15.1666 3.99984 15.1666H11.9998C12.3535 15.1666 12.6926 15.0262 12.9426 14.7761C13.1927 14.5261 13.3332 14.1869 13.3332 13.8333V5.83331L9.33317 1.83331Z"
//                           stroke="#098CE9"
//                           strokeWidth="1.5"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         ></path>
//                         <path
//                           d="M9.3335 1.83331V5.83331H13.3335"
//                           stroke="#098CE9"
//                           strokeWidth="1.5"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         ></path>
//                         <path
//                           d="M10.6668 9.16669H5.3335"
//                           stroke="#098CE9"
//                           strokeWidth="1.5"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         ></path>
//                         <path
//                           d="M10.6668 11.8333H5.3335"
//                           stroke="#098CE9"
//                           strokeWidth="1.5"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         ></path>
//                         <path
//                           d="M6.66683 6.5H6.00016H5.3335"
//                           stroke="#098CE9"
//                           strokeWidth="1.5"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         ></path>
//                       </svg>
//                       <p className="text-[15px] text-gray-500">3 Darsliklar</p>
//                     </span>
//                   </div>

//                   <div className="flex flex-col gap-[20px]">
//                     <p>
//                       1. Frontend Nima? Frontend – bu foydalanuvchilar
//                       ko‘radigan va ulanish imkoniyatiga ega bo‘lgan veb-sahifa
//                       yoki ilova qismi. Oddi
//                     </p>
//                     <Button type="primary">Batafsil</Button>
//                   </div>
//                 </div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//         <div
//           className="relative w-[280px] h-auto shadow-md rounded-b-md cursor-pointer max-[640px]:w-[350px]"
//           onMouseEnter={() => setIsHovered(true)}
//           onMouseLeave={() => setIsHovered(false)}
//         >
//           {/* Asosiy karta */}
//           <div>
//             <img
//               className="rounded-t-md w-full object-cover"
//               src="https://www.perrill.com/wp-content/uploads/2015/08/stock-web-design.jpg"
//               alt="Frontend dasturlash"
//             />
//           </div>
//           <div className="border-[#d7d4d4] border-[1px] rounded-b-md p-5 flex flex-col gap-[30px]">
//             <span className="flex items-center gap-2">
//               <div className="w-[17px] h-[17px] bg-[#f1f2f7] rounded-full"></div>
//               <h4 className="text-[17px] text-green-600">275000 so'm</h4>
//             </span>
//             <h4 className="text-[17px] font-bold">
//               Front-End Dasturlashga kirish
//             </h4>

//             <div className="flex items-center justify-between">
//               <span className="flex items-center gap-2">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="#098CE9"
//                   width="16px"
//                   height="16px"
//                   viewBox="0 0 256 256"
//                   id="Flat"
//                 >
//                   <path d="M227.79492,52.61621l-96-32a11.98464,11.98464,0,0,0-7.58984,0L28.44678,52.53564l-.05078.01685-.19092.06372c-.17383.05786-.34107.12793-.51074.19312-.20118.07739-.40052.15722-.5962.24487-.24487.10962-.48706.22339-.72216.34814-.11817.06275-.23181.13233-.34766.199-.199.11426-.39526.23144-.58618.3562-.10938.07153-.21655.14551-.32361.2207q-.295.20655-.575.42993c-.09009.07154-.18091.14185-.26892.21607q-.33453.282-.64575.58691c-.04444.04346-.09192.0835-.13575.12744q-.37243.375-.70947.78077c-.06335.07592-.12109.15625-.18249.23364-.15516.1958-.30579.39453-.44837.59961-.07861.11279-.15332.22778-.228.34326q-.175.271-.33483.55127c-.07264.12671-.14551.25268-.21363.38257-.10583.20166-.20251.40844-.297.61645-.05225.115-.10987.22657-.15845.34351-.12842.30835-.24243.62353-.34522.94311-.04187.13086-.07544.2649-.113.39746-.06128.21656-.1189.43384-.16822.65455-.03125.14062-.05908.28222-.08545.4248-.04345.23462-.07861.47119-.10839.71-.01526.124-.03321.24732-.04468.37256C20.02209,63.2583,20,63.627,20,64v80a12,12,0,0,0,24,0V80.64868l23.7146,7.905a67.90093,67.90093,0,0,0,18.11377,84.73047,99.97006,99.97006,0,0,0-41.64819,36.16016,12.00007,12.00007,0,0,0,20.10351,13.10937,76.02217,76.02217,0,0,1,127.43213,0,12.00007,12.00007,0,0,0,20.10352-13.10937,99.97238,99.97238,0,0,0-41.64783-36.16016A67.9008,67.9008,0,0,0,188.2854,88.55371l39.50952-13.16992a11.99952,11.99952,0,0,0,0-22.76758ZM128,44.64941,186.05273,64l-20.70739,6.90234-.03272.011L128,83.35059,90.68677,70.91309l-.02844-.00953L69.94727,64ZM172,120A44,44,0,1,1,90.93738,96.29443l33.2677,11.08936a11.99358,11.99358,0,0,0,7.58984,0l33.2677-11.08936A43.87528,43.87528,0,0,1,172,120Z"></path>
//                 </svg>
//                 <p className="text-[15px] text-gray-500">0 O'quvchilar</p>
//               </span>
//               <span className="flex items-center gap-2">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="16"
//                   height="17"
//                   viewBox="0 0 16 17"
//                   fill="none"
//                 >
//                   <path
//                     d="M9.33317 1.83331H3.99984C3.64622 1.83331 3.30708 1.97379 3.05703 2.22384C2.80698 2.47389 2.6665 2.81302 2.6665 3.16665V13.8333C2.6665 14.1869 2.80698 14.5261 3.05703 14.7761C3.30708 15.0262 3.64622 15.1666 3.99984 15.1666H11.9998C12.3535 15.1666 12.6926 15.0262 12.9426 14.7761C13.1927 14.5261 13.3332 14.1869 13.3332 13.8333V5.83331L9.33317 1.83331Z"
//                     stroke="#098CE9"
//                     strokeWidth="1.5"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   ></path>
//                   <path
//                     d="M9.3335 1.83331V5.83331H13.3335"
//                     stroke="#098CE9"
//                     strokeWidth="1.5"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   ></path>
//                   <path
//                     d="M10.6668 9.16669H5.3335"
//                     stroke="#098CE9"
//                     strokeWidth="1.5"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   ></path>
//                   <path
//                     d="M10.6668 11.8333H5.3335"
//                     stroke="#098CE9"
//                     strokeWidth="1.5"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   ></path>
//                   <path
//                     d="M6.66683 6.5H6.00016H5.3335"
//                     stroke="#098CE9"
//                     strokeWidth="1.5"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   ></path>
//                 </svg>
//                 <p className="text-[15px] text-gray-500">3 Darsliklar</p>
//               </span>
//             </div>
//           </div>

//           {/* Modal qismi - Pastdan chiqadigan animatsiya */}
//           <AnimatePresence>
//             {isHovered && (
//               <motion.div
//                 initial={{ opacity: 0, y: "100%" }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: "100%" }}
//                 transition={{ type: "spring", damping: 30, stiffness: 200 }}
//                 className="absolute inset-0 bg-[#f1f2f7] rounded-md p-5 flex flex-col gap-4 z-10 shadow-xl"
//               >
//                 <div className="flex flex-col gap-[30px]">
//                   <div className="p-2 bg-blue-100 rounded-md text-[17px] font-medium">
//                     Frontend Dasturlashga kirish
//                   </div>
//                   <h4 className="text-[17px] font-bold">
//                     Front-End Dasturlashga kirish
//                   </h4>
//                   <div className="flex items-center justify-between">
//                     <span className="flex items-center gap-2">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="#098CE9"
//                         width="16px"
//                         height="16px"
//                         viewBox="0 0 256 256"
//                         id="Flat"
//                       >
//                         <path d="M227.79492,52.61621l-96-32a11.98464,11.98464,0,0,0-7.58984,0L28.44678,52.53564l-.05078.01685-.19092.06372c-.17383.05786-.34107.12793-.51074.19312-.20118.07739-.40052.15722-.5962.24487-.24487.10962-.48706.22339-.72216.34814-.11817.06275-.23181.13233-.34766.199-.199.11426-.39526.23144-.58618.3562-.10938.07153-.21655.14551-.32361.2207q-.295.20655-.575.42993c-.09009.07154-.18091.14185-.26892.21607q-.33453.282-.64575.58691c-.04444.04346-.09192.0835-.13575.12744q-.37243.375-.70947.78077c-.06335.07592-.12109.15625-.18249.23364-.15516.1958-.30579.39453-.44837.59961-.07861.11279-.15332.22778-.228.34326q-.175.271-.33483.55127c-.07264.12671-.14551.25268-.21363.38257-.10583.20166-.20251.40844-.297.61645-.05225.115-.10987.22657-.15845.34351-.12842.30835-.24243.62353-.34522.94311-.04187.13086-.07544.2649-.113.39746-.06128.21656-.1189.43384-.16822.65455-.03125.14062-.05908.28222-.08545.4248-.04345.23462-.07861.47119-.10839.71-.01526.124-.03321.24732-.04468.37256C20.02209,63.2583,20,63.627,20,64v80a12,12,0,0,0,24,0V80.64868l23.7146,7.905a67.90093,67.90093,0,0,0,18.11377,84.73047,99.97006,99.97006,0,0,0-41.64819,36.16016,12.00007,12.00007,0,0,0,20.10351,13.10937,76.02217,76.02217,0,0,1,127.43213,0,12.00007,12.00007,0,0,0,20.10352-13.10937,99.97238,99.97238,0,0,0-41.64783-36.16016A67.9008,67.9008,0,0,0,188.2854,88.55371l39.50952-13.16992a11.99952,11.99952,0,0,0,0-22.76758ZM128,44.64941,186.05273,64l-20.70739,6.90234-.03272.011L128,83.35059,90.68677,70.91309l-.02844-.00953L69.94727,64ZM172,120A44,44,0,1,1,90.93738,96.29443l33.2677,11.08936a11.99358,11.99358,0,0,0,7.58984,0l33.2677-11.08936A43.87528,43.87528,0,0,1,172,120Z"></path>
//                       </svg>
//                       <p className="text-[15px] text-gray-500">0 O'quvchilar</p>
//                     </span>
//                     <span className="flex items-center gap-2">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="16"
//                         height="17"
//                         viewBox="0 0 16 17"
//                         fill="none"
//                       >
//                         <path
//                           d="M9.33317 1.83331H3.99984C3.64622 1.83331 3.30708 1.97379 3.05703 2.22384C2.80698 2.47389 2.6665 2.81302 2.6665 3.16665V13.8333C2.6665 14.1869 2.80698 14.5261 3.05703 14.7761C3.30708 15.0262 3.64622 15.1666 3.99984 15.1666H11.9998C12.3535 15.1666 12.6926 15.0262 12.9426 14.7761C13.1927 14.5261 13.3332 14.1869 13.3332 13.8333V5.83331L9.33317 1.83331Z"
//                           stroke="#098CE9"
//                           strokeWidth="1.5"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         ></path>
//                         <path
//                           d="M9.3335 1.83331V5.83331H13.3335"
//                           stroke="#098CE9"
//                           strokeWidth="1.5"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         ></path>
//                         <path
//                           d="M10.6668 9.16669H5.3335"
//                           stroke="#098CE9"
//                           strokeWidth="1.5"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         ></path>
//                         <path
//                           d="M10.6668 11.8333H5.3335"
//                           stroke="#098CE9"
//                           strokeWidth="1.5"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         ></path>
//                         <path
//                           d="M6.66683 6.5H6.00016H5.3335"
//                           stroke="#098CE9"
//                           strokeWidth="1.5"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         ></path>
//                       </svg>
//                       <p className="text-[15px] text-gray-500">3 Darsliklar</p>
//                     </span>
//                   </div>

//                   <div className="flex flex-col gap-[20px]">
//                     <p>
//                       1. Frontend Nima? Frontend – bu foydalanuvchilar
//                       ko‘radigan va ulanish imkoniyatiga ega bo‘lgan veb-sahifa
//                       yoki ilova qismi. Oddi
//                     </p>
//                     <Button type="primary">Batafsil</Button>
//                   </div>
//                 </div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default KirishComponents;



import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "antd";

function KirishComponents() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleCardClick = (index) => {
    if (hoveredCard === index) {
      setHoveredCard(null); // Agar bir xil karta bosilsa, yopish
    } else {
      setHoveredCard(index); // Yangi karta bosilsa, uni ochish
    }
  };

  const cards = [
    {
      title: "Front-End Dasturlashga kirish",
      price: "275000 so'm",
      students: "0 O'quvchilar",
      lessons: "3 Darsliklar",
      description:
        "1. Frontend Nima? Frontend – bu foydalanuvchilar ko‘radigan va ulanish imkoniyatiga ega bo‘lgan veb-sahifa yoki ilova qismi.",
    },
    {
      title: "Back-End Dasturlashga kirish",
      price: "300000 so'm",
      students: "0 O'quvchilar",
      lessons: "4 Darsliklar",
      description:
        "1. Backend Nima? Backend – bu foydalanuvchilar ko‘rmaydigan, lekin veb-ilovalar ishlashi uchun zarur bo'lgan qism.",
    },
  ];

  return (
    <section className="w-[90%] m-auto mt-[60px]">
      <div className="flex items-center justify-center gap-[60px] max-[640px]:flex max-[640px]:flex-col max-[640px]:gap-[40px]">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative w-[280px] h-auto shadow-md rounded-b-md cursor-pointer max-[640px]:w-[350px]"
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={() => handleCardClick(index)}
          >
            {/* Asosiy karta */}
            <div>
              <img
                className="rounded-t-md w-full object-cover"
                src="https://www.perrill.com/wp-content/uploads/2015/08/stock-web-design.jpg"
                alt={card.title}
              />
            </div>
            <div className="border-[#d7d4d4] border-[1px] rounded-b-md p-5 flex flex-col gap-[30px]">
              <span className="flex items-center gap-2">
                <div className="w-[17px] h-[17px] bg-[#f1f2f7] rounded-full"></div>
                <h4 className="text-[17px] text-green-600">{card.price}</h4>
              </span>
              <h4 className="text-[17px] font-bold">{card.title}</h4>

              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#098CE9"
                    width="16px"
                    height="16px"
                    viewBox="0 0 256 256"
                    id="Flat"
                  >
                    <path d="M227.79492,52.61621l-96-32a11.98464,11.98464,0,0,0-7.58984,0L28.44678,52.53564l-.05078.01685-.19092.06372c-.17383.05786-.34107.12793-.51074.19312-.20118.07739-.40052.15722-.5962.24487-.24487.10962-.48706.22339-.72216.34814-.11817.06275-.23181.13233-.34766.199-.199.11426-.39526.23144-.58618.3562-.10938.07153-.21655.14551-.32361.2207q-.295.20655-.575.42993c-.09009.07154-.18091.14185-.26892.21607q-.33453.282-.64575.58691c-.04444.04346-.09192.0835-.13575.12744q-.37243.375-.70947.78077c-.06335.07592-.12109.15625-.18249.23364-.15516.1958-.30579.39453-.44837.59961-.07861.11279-.15332.22778-.228.34326q-.175.271-.33483.55127c-.07264.12671-.14551.25268-.21363.38257-.10583.20166-.20251.40844-.297.61645-.05225.115-.10987.22657-.15845.34351-.12842.30835-.24243.62353-.34522.94311-.04187.13086-.07544.2649-.113.39746-.06128.21656-.1189.43384-.16822.65455-.03125.14062-.05908.28222-.08545.4248-.04345.23462-.07861.47119-.10839.71-.01526.124-.03321.24732-.04468.37256C20.02209,63.2583,20,63.627,20,64v80a12,12,0,0,0,24,0V80.64868l23.7146,7.905a67.90093,67.90093,0,0,0,18.11377,84.73047,99.97006,99.97006,0,0,0-41.64819,36.16016,12.00007,12.00007,0,0,0,20.10351,13.10937,76.02217,76.02217,0,0,1,127.43213,0,12.00007,12.00007,0,0,0,20.10352-13.10937,99.97238,99.97238,0,0,0-41.64783-36.16016A67.9008,67.9008,0,0,0,188.2854,88.55371l39.50952-13.16992a11.99952,11.99952,0,0,0,0-22.76758ZM128,44.64941,186.05273,64l-20.70739,6.90234-.03272.011L128,83.35059,90.68677,70.91309l-.02844-.00953L69.94727,64ZM172,120A44,44,0,1,1,90.93738,96.29443l33.2677,11.08936a11.99358,11.99358,0,0,0,7.58984,0l33.2677-11.08936A43.87528,43.87528,0,0,1,172,120Z"></path>
                  </svg>
                  <p className="text-[15px] text-gray-500">{card.students}</p>
                </span>
                <span className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                  >
                    <path
                      d="M9.33317 1.83331H3.99984C3.64622 1.83331 3.30708 1.97379 3.05703 2.22384C2.80698 2.47389 2.6665 2.81302 2.6665 3.16665V13.8333C2.6665 14.1869 2.80698 14.5261 3.05703 14.7761C3.30708 15.0262 3.64622 15.1666 3.99984 15.1666H11.9998C12.3535 15.1666 12.6926 15.0262 12.9426 14.7761C13.1927 14.5261 13.3332 14.1869 13.3332 13.8333V5.83331L9.33317 1.83331Z"
                      stroke="#098CE9"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M9.3335 1.83331V5.83331H13.3335"
                      stroke="#098CE9"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M10.6668 9.16669H5.3335"
                      stroke="#098CE9"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M10.6668 11.8333H5.3335"
                      stroke="#098CE9"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M6.66683 6.5H6.00016H5.3335"
                      stroke="#098CE9"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <p className="text-[15px] text-gray-500">{card.lessons}</p>
                </span>
              </div>
            </div>

            {/* Modal qismi - Pastdan chiqadigan animatsiya */}
            <AnimatePresence>
              {hoveredCard === index && (
                <motion.div
                  initial={{ opacity: 0, y: "100%" }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: "100%" }}
                  transition={{ type: "spring", damping: 30, stiffness: 200 }}
                  className="absolute inset-0 bg-[#f1f2f7] rounded-md p-5 flex flex-col gap-4 z-10 shadow-xl"
                >
                  <div className="flex flex-col gap-[30px]">
                    <div className="p-2 bg-blue-100 rounded-md text-[17px] font-medium">
                      {card.title}
                    </div>
                    <h4 className="text-[17px] font-bold">{card.title}</h4>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#098CE9"
                          width="16px"
                          height="16px"
                          viewBox="0 0 256 256"
                          id="Flat"
                        >
                          <path d="M227.79492,52.61621l-96-32a11.98464,11.98464,0,0,0-7.58984,0L28.44678,52.53564l-.05078.01685-.19092.06372c-.17383.05786-.34107.12793-.51074.19312-.20118.07739-.40052.15722-.5962.24487-.24487.10962-.48706.22339-.72216.34814-.11817.06275-.23181.13233-.34766.199-.199.11426-.39526.23144-.58618.3562-.10938.07153-.21655.14551-.32361.2207q-.295.20655-.575.42993c-.09009.07154-.18091.14185-.26892.21607q-.33453.282-.64575.58691c-.04444.04346-.09192.0835-.13575.12744q-.37243.375-.70947.78077c-.06335.07592-.12109.15625-.18249.23364-.15516.1958-.30579.39453-.44837.59961-.07861.11279-.15332.22778-.228.34326q-.175.271-.33483.55127c-.07264.12671-.14551.25268-.21363.38257-.10583.20166-.20251.40844-.297.61645-.05225.115-.10987.22657-.15845.34351-.12842.30835-.24243.62353-.34522.94311-.04187.13086-.07544.2649-.113.39746-.06128.21656-.1189.43384-.16822.65455-.03125.14062-.05908.28222-.08545.4248-.04345.23462-.07861.47119-.10839.71-.01526.124-.03321.24732-.04468.37256C20.02209,63.2583,20,63.627,20,64v80a12,12,0,0,0,24,0V80.64868l23.7146,7.905a67.90093,67.90093,0,0,0,18.11377,84.73047,99.97006,99.97006,0,0,0-41.64819,36.16016,12.00007,12.00007,0,0,0,20.10351,13.10937,76.02217,76.02217,0,0,1,127.43213,0,12.00007,12.00007,0,0,0,20.10352-13.10937,99.97238,99.97238,0,0,0-41.64783-36.16016A67.9008,67.9008,0,0,0,188.2854,88.55371l39.50952-13.16992a11.99952,11.99952,0,0,0,0-22.76758ZM128,44.64941,186.05273,64l-20.70739,6.90234-.03272.011L128,83.35059,90.68677,70.91309l-.02844-.00953L69.94727,64ZM172,120A44,44,0,1,1,90.93738,96.29443l33.2677,11.08936a11.99358,11.99358,0,0,0,7.58984,0l33.2677-11.08936A43.87528,43.87528,0,0,1,172,120Z"></path>
                        </svg>
                        <p className="text-[15px] text-gray-500">
                          {card.students}
                        </p>
                      </span>
                      <span className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="17"
                          viewBox="0 0 16 17"
                          fill="none"
                        >
                          <path
                            d="M9.33317 1.83331H3.99984C3.64622 1.83331 3.30708 1.97379 3.05703 2.22384C2.80698 2.47389 2.6665 2.81302 2.6665 3.16665V13.8333C2.6665 14.1869 2.80698 14.5261 3.05703 14.7761C3.30708 15.0262 3.64622 15.1666 3.99984 15.1666H11.9998C12.3535 15.1666 12.6926 15.0262 12.9426 14.7761C13.1927 14.5261 13.3332 14.1869 13.3332 13.8333V5.83331L9.33317 1.83331Z"
                            stroke="#098CE9"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M9.3335 1.83331V5.83331H13.3335"
                            stroke="#098CE9"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M10.6668 9.16669H5.3335"
                            stroke="#098CE9"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M10.6668 11.8333H5.3335"
                            stroke="#098CE9"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M6.66683 6.5H6.00016H5.3335"
                            stroke="#098CE9"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                        <p className="text-[15px] text-gray-500">
                          {card.lessons}
                        </p>
                      </span>
                    </div>

                    <div className="flex flex-col gap-[20px]">
                      <p>{card.description}</p>
                      <Button type="primary">Batafsil</Button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}

export default KirishComponents;
