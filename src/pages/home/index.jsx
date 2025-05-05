import React from "react";
import SwiperComponent from "../../components/swipper";
import SertificateComponents from "../../components/sertificate";
import KirishComponents from "../../components/kirish";
import KursToifalariComponents from "../../components/kurs-toifalar";
import PremiumEducation from "../../components/premium";
// import SlayderKomponenti from "../../components/swipper";

function Home() {
  return (
    <div>
      {/* <SlayderKomponenti /> */}
      <SwiperComponent />
      <SertificateComponents />
      <KirishComponents />
      <KursToifalariComponents />
      <PremiumEducation />
    </div>
  );
}

export default Home;
