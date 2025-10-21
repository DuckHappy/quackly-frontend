import { useState, useEffect } from "react";

export function useIsTabletOrBigger() {
  const [isTabletOrBigger, setIsTabletOrBigger] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    setIsTabletOrBigger(mediaQuery.matches);
  }, []);

  return isTabletOrBigger;
}
