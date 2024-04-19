import { useState, useEffect } from "react";

const useScrollDirection = (gap?: number) => {
  const [scrollDirection, setScrollDirection] = useState<1 | -1>(1);

  useEffect(() => {
    let lastScrollTop =
      window.pageYOffset || document.documentElement.scrollTop;

    const handleScroll = () => {
      const currentScroll =
        window.pageYOffset || document.documentElement.scrollTop;
      if (currentScroll > lastScrollTop + (gap || 0)) {
        setScrollDirection(1);
      } else if (currentScroll < lastScrollTop - (gap || 0)) {
        setScrollDirection(-1);
      }
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [gap]);

  return scrollDirection;
};

export default useScrollDirection;
