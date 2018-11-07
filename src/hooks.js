import { useState, useRef, useEffect } from "react";

export function useHover() {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (ref && ref.current) {
      ref.current.addEventListener("mouseover", () => setIsHovered(true));
      ref.current.addEventListener("mouseout", () => setIsHovered(false));
    }

    return () => {
      if (ref && ref.current) {
        ref.current.removeEventListener("mouseover", () => setIsHovered(true));
        ref.current.removeEventListener("mouseout", () => setIsHovered(false));
      }
    };
  }, []);

  return [ref, isHovered];
}
