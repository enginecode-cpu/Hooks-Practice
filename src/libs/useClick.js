import { useRef, useEffect } from "react";

function useClick(onClick) {
  const element = useRef();

  useEffect(() => {
    const el = element.current;
    if (el) {
      el.addEventListener("click", onClick);
    }
    return () => {
      if (el) {
        el.removeEventListener("click", onClick);
      }
    };
  }, [onClick]);

  if (typeof onClick !== "function") {
    return;
  }

  return element;
}

export default useClick;
