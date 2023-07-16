import { useEffect, useState } from "react";

export default function useDarkMode() {
  const [isDark, setIsDark] = useState(() =>
    localStorage.getItem("theme") === "dark" ? true : false
  );

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggleDark = () => {
    setIsDark((prev) => !prev);
  };

  return { isDark, toggleDark };
}
