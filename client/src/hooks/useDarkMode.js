import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = key => {
  const [values, setValues] = useLocalStorage("darkMode");
  useEffect(() => {
    values
      ? document.body.classList.add("dark-mode")
      : document.body.classList.remove("dark-mode");
  }, [values]);
  return [values, setValues];
};


