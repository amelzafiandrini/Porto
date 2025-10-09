"use client";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: "transparent" },
        fpsLimit: 120,
        particles: {
          number: { value: 60, density: { enable: true, area: 800 } },
          color: { value: ["#ff4d8d", "#7f5af0", "#00c2ff"] }, // gradiasi pink ungu biru
          opacity: { value: 0.6 },
          size: { value: { min: 2, max: 4 } },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            outModes: { default: "bounce" },
          },
        },
      }}
      className="absolute inset-0 -z-10"
    />
  );
}
