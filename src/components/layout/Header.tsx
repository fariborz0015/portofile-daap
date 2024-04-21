import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { useLenis as useOriginLenis } from "@studio-freight/react-lenis";
import { cn } from "@/lib/utils";
import Menu from "./Menu";
import useWindowSize from "@/lib/hooks/utils/useWindowSize";
import { useLenis as useLenisCustom } from "@/lib/lenis";

const Header = () => {
  const [active, setActive] = useState<boolean>(false);
  const isMobile = useWindowSize(500);
  useOriginLenis(({ scroll }) => {
    if (scroll > 0) setActive(true);
    else setActive(false);
  });
  const { lenis } = useLenisCustom();

  return (
    <>
      <div
        className={cn(
          "w-full z-50 h-14 sticky transition-all top-10 mt-4  rounded-lg container mx-auto flex items-center gap-4 justify-between",
          isMobile && "!max-w-sm !px-3",
          active && " bg-gray-700/20 backdrop-blur-sm    "
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

        {!isMobile && <Menu />}

        {active && (
          <Button
            variant={"glass"}
            icon={{
              icon: "line-md:chevron-triple-up",
            }}
            justIcon
            onClick={() => lenis?.scrollTo(0)}
          ></Button>
        )}

        <Link href={"/assets/cv/fariborz-shalghooni-front-end.pdf"}>
          <Button
            key={"s"}
            variant={"glass"}
            icon={{
              icon: "line-md:text-box",
            }}
            arrowMode
            arrowIcon={{
              icon: "line-md:download-outline",
            }}
          >
            My Resume
          </Button>
        </Link>
      </div>
      {isMobile && <Menu />}
    </>
  );
};

export default Header;
