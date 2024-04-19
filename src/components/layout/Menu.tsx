import useWindowSize from "@/lib/hooks/utils/useWindowSize";
import React from "react";

import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { MENU_LINKS, MenuLinkInterface } from "@/lib/data/content/menu";
import Link from "next/link";
import { useLenis } from "@/lib/lenis";
const Menu = () => {
  const isMobile = useWindowSize(530);
  const isTablet = useWindowSize(1050);
  const [activeLinkId, setActiveLinkId] = useState("");

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
    <>
      {MENU_LINKS.map((link, i) => (
        <Button
          key={i}
          variant={activeLinkId == link.id ? "default" : "ghost-glass"}
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
    </>
  );
};

export default Menu;
