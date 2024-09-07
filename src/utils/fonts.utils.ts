import { useEffect } from "react";

const useLoadFont = (fontUrl: string) => {
  useEffect(() => {
    const link = document.createElement("link");

    link.rel = "stylesheet";
    link.href = fontUrl;

    document.head.appendChild(link);

    // Clean up by removing the link when the component unmounts
    return () => {
      document.head.removeChild(link);
    };
  }, [fontUrl]);
};

export default useLoadFont;
