import { useRef } from "react";

function useFullscreen() {
  const element = useRef();

  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
    }
  };

  return { element, triggerFull };
}

export default useFullscreen;
