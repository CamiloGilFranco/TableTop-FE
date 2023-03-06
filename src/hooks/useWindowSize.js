import { useEffect, useState } from "react";

export const useWindowSize = () => {
  const windowInnerSize = window.innerWidth;
  const [windowSize, setWindowSize] = useState(windowInnerSize);

  useEffect(() => {
    const changeWindowSize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", changeWindowSize);

    return () => window.removeEventListener("resize", changeWindowSize);
  }, []);

  return windowSize;
};
