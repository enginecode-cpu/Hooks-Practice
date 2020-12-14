import { useEffect } from "react";

function usePageLeave(onBefore) {
  const handle = (e) => {
    const { clientY, clientX } = e;
    if (clientX < 0 || clientX > window.innerWidth) onBefore();
    if (clientY < 0 || clientY > window.innerHeight) onBefore();
  };

  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  });
  return;
}

export default usePageLeave;
