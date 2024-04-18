import BuyMeCoffee from "@/components/pages/index/BuyMeCoffee";
import BuyMeCoffeeByContract from "@/components/pages/index/BuyMeCoffeeByContract";
import WalletStatus from "@/components/pages/index/WalletStatus";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import AboutMe from "@/components/pages/index/proto/AboutMe";
import { CardTitle } from "@/components/ui/card";
import Title from "@/components/utils/Title";
import ActiveBox from "@/components/utils/ActiveBox";
const Hero = dynamic(() => import("@/components/pages/index/hero/Hero"), {
  ssr: false,
});

export default function Home() {
 
  return (
    <>
      <div
        className={`flex min-h-screen flex-col items-center justify-between   `}
      >
        {/* Hero Section   */}
        <Hero />
        <ActiveBox className="w-40 h-40" light={{ lightColor: "blue", lightSize: 200 }}/>
         
   
        <div className="container relative z-20  h-screen  flex items-center   justify-center   ">
          <div className="  sm:backdrop-blur-sm  pt-20 ">
            <h1 className="welcomeText">Fariborz Dapp</h1>
            <p className="font-bold mt-2">
              Hi ✌️, Welcome to my Dapp
              <span className="mt-2 block text-gray-200 font-light">
                {" "}
                this web app developed with Web3Modal , so you can by me a
                coffee by your crypto currency
              </span>
            </p>
            <Button variant={"glass"} className="mt-4 gap-4">
              <Icon
                icon={"akar-icons:github-outline-fill"}
                className="size-6"
              />
              This Project on Github
            </Button>
          </div>
        </div>
        {/* About me Section */}
        <div className="w-full animated-container sm:container sm:p-0 p-6 space-y-4">
          <Title title="Who Am I ?" description="my activity area" />
          <AboutMe />
        </div>
        {/* Skills Section */}
        <div className="w-full animated-container sm:container sm:p-0 p-6 space-y-4 mt-14">
          <Title title="Skills " description="And Tools" />
          <AboutMe />
        </div>
      
        {/* <div className="container  relative z-100  mt-40 max-w-[700px] justify-center   ">
          <div className="mt-4  ">
            <WalletStatus />
          </div>
          <Tabs defaultValue="matic" className=" mt-12">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="matic">MATIC</TabsTrigger>
              <TabsTrigger value="contract">PME Contract</TabsTrigger>
            </TabsList>
            <TabsContent value="matic">
              <div className="mt-4  ">
                <BuyMeCoffee />
              </div>
            </TabsContent>
            <TabsContent value="contract">
              <div className="   mt-8">
                <BuyMeCoffeeByContract />
              </div>
            </TabsContent>
          </Tabs>
        </div> */}
      </div>
    </>
  );
}
