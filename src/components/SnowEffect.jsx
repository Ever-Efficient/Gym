import { useState, useEffect } from "react";
import Snowfall from "react-snowfall";
import { SNOWFLAKE_SVGS } from "../data/snowflakes";

/**
 * Enhanced snowfall effect with authentic 6-fold symmetrical ice crystals.
 * Combines soft atmospheric background flakes with crystalline foreground snowflakes
 * that rotate and tumble in 3D space.
 */
const SnowEffect = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window === "undefined" || !window.matchMedia) {
      return false;
    }
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  const [crystalImages, setCrystalImages] = useState([]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (window.matchMedia) {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      const handler = (e) => setPrefersReducedMotion(e.matches);
      mediaQuery.addEventListener?.("change", handler);
    }

    let isMounted = true;
    const loadedImages = [];

    SNOWFLAKE_SVGS.forEach((svg) => {
      const img = new Image();
      img.onload = () => {
        loadedImages.push(img);
        if (isMounted && loadedImages.length === SNOWFLAKE_SVGS.length) {
          setCrystalImages([...loadedImages]);
        }
      };
      img.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
    });

    return () => {
      isMounted = false;
    };
  }, []);

  if (prefersReducedMotion) {
    return null;
  }

  const hasCrystals = crystalImages.length > 0;

  return (
    <>
      {/* Background Depth Layer: Soft ambient drifting micro-flakes */}
      <Snowfall
        color="#a0d8ef"
        snowflakeCount={60}
        radius={[0.6, 2.0]}
        speed={[0.4, 1.2]}
        wind={[-0.3, 0.8]}
        changeFrequency={250}
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: 48,
          pointerEvents: "none",
          opacity: 0.5,
        }}
      />

      {/* Foreground Layer: Real 6-fold symmetrical snowflake crystals with 3D tumbling */}
      <Snowfall
        images={hasCrystals ? crystalImages : undefined}
        color="#82c3d9"
        snowflakeCount={hasCrystals ? 55 : 60}
        radius={hasCrystals ? [7, 16] : [1.2, 3.2]}
        speed={[0.6, 1.8]}
        wind={[-0.4, 1.2]}
        changeFrequency={180}
        rotationSpeed={[-1.2, 1.2]}
        enable3DRotation={true}
        opacity={[0.7, 0.95]}
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: 49,
          pointerEvents: "none",
        }}
      />
    </>
  );
};

export default SnowEffect;
