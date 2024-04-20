import React, { useEffect } from "react";

/**
 *
 * @param size   trigger size
 * @returns
 */
export default function useWindowSize(size: number = 550) {
  const [value, setValue] = React.useState(true);
 
  useEffect(() => {
    setValue(window.innerWidth <= size);
   
    const handleResize = () => {
      setValue(window.innerWidth <= size);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);
    window.addEventListener("load", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
      window.removeEventListener("load", handleResize);
    };
  }, []);

  return value;
}
