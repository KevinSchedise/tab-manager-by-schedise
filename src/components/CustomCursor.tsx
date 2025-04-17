import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    document.addEventListener("mousemove", updatePosition);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      <div
        className="cursor-dot"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />
      <div
        className="cursor-circle"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: `translate(${position.x - 11}px, ${position.y - 11}px)`,
        }}
      />
    </>
  );
};

export default CustomCursor;
