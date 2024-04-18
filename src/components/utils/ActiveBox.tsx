import React, { useEffect, useRef, useState } from "react";

/**
 * Props type for the CardActivator component.
 */
interface lightPropsType {
  lightSize?: number;
  // Tailwind background color class name or Css class name provided background color
  lightColor?: string;
}
interface CardActivatorPropsType {
  children?: React.ReactNode;
  className?: string;
  lightClassName?: string;
  wrapperClassName?: string;
  light?: lightPropsType | false;
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
  wrapperClassName,
}: CardActivatorPropsType): React.ReactElement => {
  // State and ref initialization

  const [transformPostion, setTransformPosition] = useState({ x: 0, y: 0 });

  const containerRef = useRef<HTMLDivElement>(null);

  /**
   * Effect to handle mouse events and update component state accordingly.
   */
  useEffect(() => {
    // Event handlers
    const handleMouseEnter = () => {};

    // Event listener setup
    const container = containerRef.current;

    if (container) {
      console.log(container);
      container.addEventListener("mouseenter", () => console.log("sssssss"));
    }
  }, []);

  // Render the component
  return (
    <div
    onMouseEnter={()=>console.log('first')}
      className={`overflow-hidden w-40 h-40 z-[9999999] border absolute   `}
      ref={containerRef}
    ></div>
  );
};

export default ActiveBox;
