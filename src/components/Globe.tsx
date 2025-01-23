import createGlobe from "cobe";
import { useEffect, useRef } from "react";

const Globe = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    const globe = createGlobe(canvasRef.current!, {
      devicePixelRatio: 2,
      width: 800 * 2,
      height: 800 * 2,
      phi: 0,
      theta: 0.3,
      dark: 0,
      diffuse: 1.2,
      mapSamples: 20000,
      mapBrightness: 6,
      baseColor: [1, 0.95, 0.9],
      markerColor: [0.93, 0.4, 0.15],
      glowColor: [1, 0.8, 0.5],
      opacity: 1,
      markers: [
        { location: [12.9716, 77.5946], size: 0.08 },
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.002;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <div className="relative flex w-full items-center justify-center">
      <canvas
        ref={canvasRef}
        style={{
          width: 800,
          height: 800,
          maxWidth: "100%",
          aspectRatio: 1,
        }}
      />
    </div>
  );
};

export default Globe;
