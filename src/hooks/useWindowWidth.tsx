import { useState, useEffect } from "react";

export default function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Update the window width state when the window is resized
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Attach the event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { windowWidth };
}
