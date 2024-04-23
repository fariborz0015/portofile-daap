/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutMe = () => {
  return (
    <Card className="w-full px-8 py-6    animated-container bg-transparent backdrop-blur relative z-10">
      <div className="w-full flex sm:gap-x-10 flex-wrap ">
        <div className=" w-full sm:w-fit flex items-center justify-center sm:mb-0 mb-8 ">
          <Image
            src={"/assets/images/avatar.jpg"}
            fill
            className="rounded-full -scale-x-100   !relative  !h-[200px]   !w-[200px]  "
            alt="فریبرز شالقونی پور- Fariborz shalghooni por "
          />
        </div>
        <div className="flex-1 min-w-[300px]  ">
          <p className="aboutme-text text-justify   ">
            Greetings!
             I'm <strong>Fariborz Shalghouni</strong>, a seasoned
            professional with over <strong>5 years</strong> of experience in{" "}
            <b>Front-End development</b>, specializing in{" "}
            <b>Web3 technologies</b>.
         
            With a strong focus on delivering <b>clean code</b> ,{" "}
            <b>high-quality</b> projects and exceptional <b>UI</b>/<b>UX</b>{" "}
            My commitment to staying ahead ensures cutting-edge solutions
            tailored to exceed expectations. With a proven track record of
            meeting deadlines, creativity, precision, and the principle of fast
            delivery to every project.
    
           <strong> Let's embark on this journey of innovation together!</strong>
          </p>
        </div>
      </div>

      <div className="w-full flex gap-6 items-center mt-8 flex-wrap ">
        <Link
          href={"mailto:fariborz0015@gmail.com"}
          className="sm:w-fit w-full"
        >
          <Button
            size={"lg"}
            variant={"glass"}
            className="sm:w-fit w-full"
            arrowMode
            underLineMode
            icon={{ icon: "mage:email" }}
          >
            Email To Me
          </Button>
        </Link>
        <Link
          href={
            "tg://resolve?text=Hi👋, Mr Fariborz, Im Connecting To You From Your DAPP , &domain=fariborzjs"
          }
          className="sm:w-fit w-full"
        >
          <Button
            size={"lg"}
            variant={"glass"}
            className="sm:w-fit w-full"
            arrowMode
            underLineMode
            icon={{ icon: "iconoir:telegram-circle" }}
          >
            Telegram To Me
          </Button>
        </Link>
        <Link
          href={"https://www.linkedin.com/in/fariborzamm"}
          className="sm:w-fit w-full"
        >
          <Button
            size={"lg"}
            variant={"glass"}
            className="sm:w-fit w-full"
            arrowMode
            underLineMode
            icon={{ icon: "jam:linkedin-square" }}
          >
            {" "}
            MY Linkedin
          </Button>
        </Link>
        <Link
          href={"https://twitter.com/fariborzz_ir"}
          className="sm:w-fit w-full"
        >
          <Button
            size={"lg"}
            variant={"glass"}
            className="sm:w-fit w-full"
            arrowMode
            underLineMode
            icon={{ icon: "jam:twitter-square" }}
          >
            {" "}
            MY Twitter
          </Button>
        </Link>
        <Link
          href={"https://github.com/fariborz0015"}
          className="sm:w-fit w-full"
        >
          <Button
            size={"lg"}
            variant={"glass"}
            className="sm:w-fit w-full"
            arrowMode
            underLineMode
            icon={{ icon: "uiw:github-o" }}
          >
            My Github
          </Button>
        </Link>
      </div>
    </Card>
  );
};

export default AboutMe;
