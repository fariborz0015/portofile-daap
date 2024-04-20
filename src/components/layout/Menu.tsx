import useWindowSize from "@/lib/hooks/utils/useWindowSize";
import React from "react";

import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { MENU_LINKS, MenuLinkInterface } from "@/lib/data/content/menu";
import Link from "next/link";
import { useLenis } from "@/lib/lenis";
import { cn } from "@/lib/utils";
import useScrollDirection from "@/lib/utils/useScrollDirection";
const Menu = () => {
  const isMobile = useWindowSize(530);
  
  const [activeLinkId, setActiveLinkId] = useState("");
  const direction = useScrollDirection(10);
  const { lenis } = useLenis();
  useEffect(() => {
    const onScroll = () => {
      let foundActive = false;

      MENU_LINKS.forEach((link) => {
        const element = document.getElementById(link.id);
        if (element) {
          const bounding = element.getBoundingClientRect();
          if (bounding.top < 300) {
            setActiveLinkId(link.id);
            foundActive = true;
          }
        }
      });

      if (!foundActive) {
        setActiveLinkId("");
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const gotoSection = (id: MenuLinkInterface["id"]) => {
    const element = document.getElementById(id);
    if (element) lenis?.scrollTo(element.offsetTop - 100);
  };

  return (
    <div
      className={cn(
        isMobile &&
          "fixed z-50 bottom-5 bg-primary/5 backdrop-blur-sm !h-fit w-full left-1/2 -translate-x-1/2 justify-center max-w-sm p-2 rounded-xl",
        "flex-1 flex items-center h-full gap-4 transition-all",

        isMobile && direction == -1 ? "-bottom-16" : "bottom-5"
      )}
    >
      {MENU_LINKS.map((link, i) => (
        <Button
          key={i}
          className={cn(isMobile && "!p-3")}
          justIcon={isMobile}
          variant={
            activeLinkId == link.id
              ? "default"
              : isMobile
              ? "glass"
              : "ghost-glass"
          }
          icon={{
            icon: link.icon,
          }}
          arrowMode
          underLineMode={{
            className: "gradient-animation",
          }}
          onClick={() => gotoSection(link.id)}
        >
          {link.text}
        </Button>
      ))}
    </div>
  );
};

export default Menu;
