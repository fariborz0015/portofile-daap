import Lenis from "@studio-freight/lenis";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

interface LenisContextProps {
  lenis: Lenis | null;
  update: () => void;
}

const LenisContext = createContext<LenisContextProps>({
  lenis: null,
  update: () => {},
});

interface LenisProviderProps {
  children: React.ReactNode;
}

export function LenisProvider(props: LenisProviderProps) {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const lenis = new Lenis({
      syncTouch: true,
      duration: 2,
      autoResize: true,
    });

    setLenis(lenis);

    return () => {
      lenis.destroy();
      setLenis(null);
    };
  }, []);

  useEffect(() => {
    let animationFrameHandle = 0;

    const render: FrameRequestCallback = (time) => {
      lenis?.raf(time);
      animationFrameHandle = requestAnimationFrame(render);
    };
    animationFrameHandle = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameHandle);
    };
  }, [lenis]);

  const memoedValue = {
    lenis: lenis,
    update: () =>
      setLenis(
        new Lenis({
          syncTouch: true,
          duration: 2,
          autoResize: true,
        })
      ),
  };

  return (
    <LenisContext.Provider value={memoedValue}>
      {props.children}
    </LenisContext.Provider>
  );
}

export function useLenis() {
  return useContext(LenisContext);
}

interface ScrollProps {
  scroll: number;
}

export function useScroll(callback: ({ scroll }: ScrollProps) => void) {
  const { lenis } = useContext(LenisContext);

  useEffect(() => {
    if (!lenis) return;
    lenis.on("scroll", callback);

    return () => {
      lenis.off("scroll", callback);
    };
  }, [lenis, callback]);
}
