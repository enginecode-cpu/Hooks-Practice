import { useRef, useEffect } from "react";

function useFadeIn(duration = 1, delay = 0) {
  const el = useRef();

  useEffect(() => {
    if (el.current) {
      const { current } = el;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = `1`;
    }
  });

  return { el };
}

export default useFadeIn;
