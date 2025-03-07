import BuyMeCoffee from "@/components/pages/index/BuyMeCoffee";
import BuyMeCoffeeByContract from "@/components/pages/index/BuyMeCoffeeByContract";
import WalletStatus from "@/components/pages/index/WalletStatus";
import AboutMe from "@/components/pages/index/proto/AboutMe";
import Education from "@/components/pages/index/proto/Education";
import Experience from "@/components/pages/index/proto/Experience";
import Languages from "@/components/pages/index/proto/Languages";
import Skills from "@/components/pages/index/proto/Skills";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ActiveBox from "@/components/utils/ActiveBox";
import Title from "@/components/utils/Title";
import { Icon } from "@iconify/react/dist/iconify.js";
import dynamic from "next/dynamic";
import Head from "next/head";
const Hero = dynamic(() => import("@/components/pages/index/hero/Hero"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Fariborz Shalghouni por</title>
        <link rel="icon" href="/favicon.png" sizes="48x48" />
        <link rel="icon" href="/favicon.png" sizes="any" type="image" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta
          property="og:title"
          content="  Fariborz Shalghooni por - Senior FrontEnd Developer"
        />
        <meta name="card" content="summary_large_image" />
        <meta
          name="description"
          content={`I'm  Fariborz Shalghouni , a seasoned professional with over  5 years  of experience in Front-End development , specializing in Web3 technologies`}
        />
        <meta
          property="og:description"
          content={`I'm  Fariborz Shalghouni , a seasoned professional with over  5 years  of experience in Front-End development , specializing in Web3 technologies`}
        />
        <meta property="og:image" content="https://fariborz.vercel.app/pwa/screen/desktop.png" />
        <meta property="og:url" content="https://fariborz.vercel.app" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:description"
          content={`I'm  Fariborz Shalghouni , a seasoned professional with over  5 years  of experience in Front-End development , specializing in Web3 technologies`}
        />
        <meta property="twitter:image" content="https://fariborz.vercel.app/pwa/screen/desktop.png" />
        <meta property="twitter:url" content="https://fariborz.vercel.app" />

        <meta property="twitter:title" content=" Fariborz Shalghooni por - Senior FrontEnd Developer"/>
     
      </Head>
      <div
        className={`flex min-h-screen flex-col items-center justify-between   `}
      >
        {/* Hero Section   */}
        <Hero />
        <ActiveBox
          className="w-40 h-40"
          light={{ lightColor: "blue", lightSize: 200 }}
        />

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
     
          </div>
        </div>
        {/* About me Section */}
        <div className="w-full  sm:container sm:p-0 p-6 space-y-4" id="summary">
          <Title
            title="Who Am I ?"
            className="animated-container"
            description="my activity area"
          />
          <AboutMe />
        </div>
        {/* Skills Section */}

        <div
          className="w-full  sm:container sm:p-0 p-6 space-y-4 mt-14"
          id="skills"
        >
          <Title
            title="Skills "
            className="animated-container"
            description="And Tools"
          />
          <Skills />
        </div>
        {/* Work Experience  Section */}
        <div
          className="w-full  sm:container sm:p-0 p-6 space-y-4 mt-14"
          id="experiences"
        >
          <Title
            title="Education "
            className="animated-container"
            description="And Tools"
          />
          <Experience />
        </div>
        {/* Education  Section */}
        <div
          className="w-full  sm:container sm:p-0 p-6 space-y-4 mt-14"
          id="educations"
        >
          <Title
            title="Education "
            className="animated-container"
            description="Academic Background"
          />
          <Education />
        </div>
        {/* Languages  Section */}
        <div
          className="w-full  sm:container sm:p-0 p-6 space-y-4 mt-14"
          id="languages"
        >
          <Title
            title="Languages "
            className="animated-container"
            description="Communication Skills"
          />
          <Languages />
        </div>

        {/* Wallet status */}
          <div
          id="coffee"
          className="container  relative z-100  mt-40 max-w-[700px] justify-center   "
        >
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
        </div>  
      </div>
    </>
  );
}
