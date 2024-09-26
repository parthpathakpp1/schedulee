import { useState, useEffect } from "react";

export const useWindowLocation = () => {
  const [windowLocation, setWindowLocation] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowLocation(window.location);
    }
  }, []);

  return windowLocation;
};
