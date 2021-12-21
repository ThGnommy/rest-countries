import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";

export const Header = () => {
  const handleDarkMode = () => {
    const doc = document.documentElement;
    if (localStorage.theme === undefined) {
      localStorage.setItem("theme", "dark");
      doc.classList.add("dark");
    } else if (localStorage.theme === "dark") {
      doc.classList.remove("dark");
      localStorage.clear();
    }
  };

  useEffect(() => {
    const doc = document.documentElement;
    // Create localstorage
    if (localStorage.theme === "dark") {
      doc.classList.add("dark");
    }
  }, []);

  return (
    <header className="flex bg-white items-center justify-between w-full h-20 border-b shadow select-none px-16 dark:bg-dark-element">
      <h1 className="text-3xl font-extrabold dark:text-white">
        Where in the world?
      </h1>
      <div className="flex cursor-pointer" onClick={handleDarkMode}>
        <FontAwesomeIcon
          className="mr-3 dark:text-white"
          icon={faMoon}
          size="lg"
        />
        <p className="font-semibold dark:text-white">Dark Mode</p>
      </div>
    </header>
  );
};
