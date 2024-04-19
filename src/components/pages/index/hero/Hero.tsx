import Image from "next/image";
import React from "react";
import astronautAnimation from "@/lib/lottie/astronaut.json";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("react-lottie-player"), {
  ssr: false,
});
const Hero = () => {
  return (
    <div className="w-full absolute h-screen -z-100 ">
      <Image
        src={"/assets/images/moons.webp"}
        className="Images_hollowplanets__NOFlf"
        width={1300}
        height={1300}
        alt=""
      />
      <div className="planet">
        <Image
          src={"/assets/images/planet.svg"}
          className="Images_bigplanet__LgSiS"
          width={200}
          height={200}
          alt=""
        />
      </div>
      <Image
        src={"/assets/images/planet.svg"}
        className="Images_smallplanet__JD3DP"
        width={200}
        height={200}
        alt=""
      />
      <div     className="sm:container max-w-[100%] h-[400px] mx-auto sm:overflow-visible overflow-hidden ">
        <Lottie
     
          loop
          animationData={astronautAnimation}
          className="blur-animation-free sm:relative    top-2 sm:scale-100 scale-150   "
          play
          style={{ width: "100%", height: "auto" }}
        />
        <Image alt="" src={'/assets/images/fazanavard.svg'} width={300} height={300} className="top-40 absolute animate-floating   sm:hidden block" />
      </div>
    </div>
  );
};

export default Hero;
