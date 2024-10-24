import { useEffect, useState } from "react";

const useOrigin = () => {
  const [origin, setOrigin] = useState("");

  useEffect(() => {
    // Check if window is defined to avoid issues with server-side rendering
    if (typeof window !== "undefined") {
      setOrigin(window.location.origin);
    }
  }, []);

  return origin;
};

export default useOrigin;
