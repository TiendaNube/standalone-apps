import { useState, useEffect } from "react";

const useWindowWidth = (): number | null => {
  const [windowWidth, setWindowWidth] = useState<number | null>(
    typeof window !== "undefined" ? window.innerWidth : null
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowWidth;
};

export default useWindowWidth;
