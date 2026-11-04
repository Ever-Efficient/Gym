import { useState, useEffect } from "react";
import Snowfall from "react-snowfall";

const SnowEffect = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window === "undefined" || !window.matchMedia) {
      return false;
    }
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = (e) => setPrefersReducedMotion(e.matches);

    mediaQuery.addEventListener?.("change", handler);
    return () => mediaQuery.removeEventListener?.("change", handler);
  }, []);

  if (prefersReducedMotion) {
    return null;
  }

  return (
    <>
    
      <Snowfall
        color="#a0d8ef"
        snowflakeCount={70}
        radius={[0.5, 1.8]}
        speed={[0.4, 1.2]}
        wind={[-0.3, 0.8]}
        changeFrequency={250}
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: 48,
          pointerEvents: "none",
          opacity: 0.55,
        }}
      />

     
      <Snowfall
        color="#82c3d9"
        snowflakeCount={65}
        radius={[1.2, 3.2]}
        speed={[0.8, 2.2]}
        wind={[-0.5, 1.5]}
        changeFrequency={180}
        enable3DRotation={true}
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: 49,
          pointerEvents: "none",
          opacity: 0.9,
        }}
      />
    </>
  );
};

export default SnowEffect;
