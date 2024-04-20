import Header from "@/components/layout/Header";
import Motion from "@/components/pages/index/hero/Motion";
import Web3ModalProvider from "@/contexts";
import useWindowSize from "@/lib/hooks/utils/useWindowSize";
import { LenisProvider } from "@/lib/lenis";
import useGsapUpdate from "@/lib/storage/useGsapUpdate";
import { WebGLParticles } from "@/lib/utils/Particles";
import { poppins } from "@/lib/utils/fonts";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import MotionPathPlugin from "gsap/dist/MotionPathPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef } from "react";

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
  const { dependency } = useGsapUpdate();
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
  }, [dependency]);

  return (
    <Web3ModalProvider>
      <LenisProvider>
        {!isMobile && <Motion />}
        <WebGLParticles size={isMobile ? 260 : 200} />
        <Header />
        <main className={`${poppins.className} pb-64 h-full`}>{children}</main>
      </LenisProvider>
    </Web3ModalProvider>
  );
}
