import Web3ModalProvider from "@/contexts";
import { Poppins } from "next/font/google";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import Header from "@/components/layout/Header";
import useWindowSize from "@/lib/hooks/utils/useWindowSize";
import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import MotionPathPlugin from "gsap/dist/MotionPathPlugin";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, useGSAP);
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const main = useRef<HTMLDivElement>(null);
  const isMobile = useWindowSize();

  useGSAP(() => {
    // get boxes with .animated-container class name as as HTMLElement[]
    let boxes = document.querySelectorAll<HTMLElement>(".animated-container");
    // let fazanavard = document.querySelector<HTMLElement>("#fazanavard");
    let titles = document.querySelectorAll<HTMLElement>(".animated-title");
    let reverseBoxes = document.querySelectorAll<HTMLElement>(
      ".animated-container-reverse"
    );

    titles.forEach((box) => {
      gsap.set(box, { x: -100, opacity: 0 });

      gsap.to(box, {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: box,
          start: isMobile ? "300px bottom" : "100px bottom",
          end: isMobile ? "650px bottom" : "450px bottom",
          scrub: true,
        },
      });
    });

    boxes.forEach((box, index: number) => {
      gsap.set(box, { x: -100, opacity: 0 });

      gsap.to(box, {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: box,
          start: isMobile ? "350px bottom" : "150px bottom",
          end:
            boxes.length - 1 === index
              ? "bottom bottom"
              : isMobile
              ? "700px bottom"
              : "500px bottom",
          scrub: true,
        },
      });
    });

    reverseBoxes.forEach((box, index: number) => {
      gsap.set(box, { x: 100, opacity: 0 });
      gsap.to(box, {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: box,
          start: isMobile ? "350px bottom" : "150px bottom",
          end:
            boxes.length - 1 === index
              ? "bottom bottom"
              : isMobile
              ? "700px bottom"
              : "500px bottom",
          scrub: true,
        },
      });
    });
  });

  return (
    <ReactLenis root>
      <main className={`${poppins.className}`}>{children}</main>
    </ReactLenis>
  );
}
