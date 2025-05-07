import React from "react";
import SwiperComponent from "../../components/swipper";
import SertificateComponents from "../../components/sertificate";
import KirishComponents from "../../components/kirish";
import KursToifalariComponents from "../../components/kurs-toifalar";
import PremiumEducation from "../../components/premium";
import AnimatedStats from "../../components/animated";
import TeamComponents from "../../components/team";
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
      <AnimatedStats />
      <TeamComponents />
    </div>
  );
}

export default Home;
