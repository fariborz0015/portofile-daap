import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { useLenis } from "@studio-freight/react-lenis";
import { cn } from "@/lib/utils";
import Menu from "./Menu";

const Header = () => {
  const [active, setActive] = useState<boolean>(false);
  const lenis = useLenis(({ scroll }) => {
    if (scroll > 0) setActive(true);
    else setActive(false);
  });
  return (
    <div
      className={cn(
        "w-full z-50 h-14 sticky transition-all top-10 mt-4  rounded-lg container mx-auto flex items-center gap-4",
        active && " bg-gray-700/20 backdrop-blur-sm transform scale-[1.02] "
      )}
    >
      <Link href={"#"}>
        <Image
          src="/assets/images/logo.svg"
          width={120}
          height={40}
          alt="fariborzamm"
          className="filter  invert "
        />
      </Link>
      <div className=" flex-1 flex items-center h-full gap-4">
        <Menu />
      </div>
      <div>
        <Button
          key={"s"}
          variant={"ghost-glass"}
          icon={{
            icon: "line-md:document",
          }}
          arrowMode
          arrowIcon={{
            icon: "line-md:download-outline",
          }}
        >
          My Resume
        </Button>
      </div>
    </div>
  );
};

export default Header;
