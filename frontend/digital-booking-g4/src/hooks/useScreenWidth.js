import { useState, useLayoutEffect } from "react";

export default function useScreenWidth() {
  const [anchoPantalla, setAnchoPantalla] = useState(window.innerWidth);
  useLayoutEffect(() => {
    function updateSize() {
      setAnchoPantalla(window.innerWidth);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return anchoPantalla;
}