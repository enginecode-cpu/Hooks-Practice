import { useState } from "react";

function useTabs(initialTab, allTab) {
  const [currentIndex, setCurrentIndex] = useState(initialTab);

  if (!allTab || !Array.isArray(allTab)) {
    return;
  }

  return {
    currentItem: allTab[currentIndex],
    changeItem: setCurrentIndex,
  };
}

export default useTabs;
