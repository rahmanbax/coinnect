import { useRef } from "react";

const useDebounce = () => {
  const debounceTimeout = useRef(null);
  
  const debounce = (func, delay) => {
    return (...args) => { // Terima argumen
      if (debounceTimeout.current) clearTimeout(debounceTimeout.current);
      debounceTimeout.current = setTimeout(() => {
        func(...args); // Panggil fungsi dengan argumen
        debounceTimeout.current = null;
      }, delay);
    };
  };

  return { debounce };
};

export default useDebounce;
