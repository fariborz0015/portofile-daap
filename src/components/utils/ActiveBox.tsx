import { cn } from "@/lib/utils";
import React, { HTMLProps, useEffect, useRef, useState } from "react";

/**
 * Props type for the CardActivator component.
 */
interface lightPropsType {
  /**
   * Specifies the size of the light as px
   * @example  1 == 1px
   */
  lightSize?: number;
  /**
   * Specifies the color of the light in the format 'bg-green-500'.
   * @example "bg-green-500"
   */
  lightColor?: string;

  className?: string;
}
interface CardActivatorPropsType {
  children?: React.ReactNode;
  className?: string;
  lightClassName?: string;
  wrapperClassName?: string;
  light?: lightPropsType | true;
  lensFocuse?: boolean;
}

/**
 * Functional component for a card activator with mouse interaction effects.
 *
 * @param {CardActivatorPropsType} props - The component props.
 * @returns {React.ReactElement} The rendered component.
 */

const initialLight: lightPropsType = {
  lightColor: "bg-purple-400",
  lightSize: 120,
};
const ActiveBox = ({
  children,

  className,
  light = initialLight,
  lensFocuse = false,
}: CardActivatorPropsType): React.ReactElement => {
  // State and ref initialization
  const [isMouseEntered, setisMouseEntered] = useState<boolean>(false);
  const [lightPosition, setLightPosition] = useState({ x: 0, y: 0 });
  const [transformPosition, setTransformPosition] = useState({ x: 0, y: 0 });

  const lightRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  /**
   * Effect to handle mouse events and update component state accordingly.
   */
  useEffect(() => {
    // Event handlers
    const handleMouseEnter = () => {
      setisMouseEntered(true);
    };
    const handleMouseLeave = () => {
      setisMouseEntered(false);
      setTransformPosition({ x: 0, y: 0 });
    };
    const handleMouseMove = (e: MouseEvent) => {
      const container = containerRef.current;
      const light = lightRef.current;

      if (container && light) {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const lightRect = light.getBoundingClientRect();
        setLightPosition({
          x: x - lightRect.width / 2,
          y: y - lightRect.height / 2,
        });

        const tX = (((x - rect.width / 2) / (rect.width / 2)) * 100) / 60;
        const tY = ((y - rect.height / 2) * 10) / 100;
        setTransformPosition({ x: tX < 5 ? tX * 8 : tX, y: tY });
      }
    };

    // Event listener setup
    const container = containerRef.current;
    if (container) {
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
      container.addEventListener("mousemove", handleMouseMove);
    }

    // Event listener cleanup
    return () => {
      if (container) {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
        container.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  // Render the component
  return (
    <div
      className={cn(
        `overflow-hidden w-fit h-fit relative    `,
        transformPosition.y == 0 &&
          transformPosition.x == 0 &&
          "transition-transform",
        className
      )}
      style={{
        transform: `perspective(1000px) rotateX(${
          transformPosition.y
        }deg) rotateY(${-transformPosition.x}deg)`,
      }}
      ref={containerRef}
    >
      {children}
      <div
        className={cn(
          isMouseEntered ? "opacity-20" : "opacity-0",
          typeof light != "boolean" ? light.lightColor : "bg-primary",
          "rounded-full  absolute z-10 blur-xl transition-opacity duration-300 ",
          typeof light != "boolean" && light.className
        )}
        ref={lightRef}
        style={{
          left: lightPosition.x,
          top: lightPosition.y,
          width: typeof light != "boolean" ? light?.lightSize ?? 160 : 160,
          height: typeof light != "boolean" ? light?.lightSize ?? 160 : 160,
        }}
      ></div>
    </div>
  );
};

export default ActiveBox;
