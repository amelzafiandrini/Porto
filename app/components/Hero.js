"use client";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { Linkedin, Github } from "lucide-react";
import { SiBehance, SiInstagram } from "react-icons/si";
import { useCallback } from "react";

export default function Hero() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  // Animasi floating zigzag
  const float = (delay = 0) => ({
    y: [0, -10, 0, 10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    },
  });

  return (
    <section 
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Background Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "#020314ff" },
          fpsLimit: 60,
          interactivity: {
            events: { onHover: { enable: true, mode: "bubble" } },
            modes: {
              bubble: { distance: 200, size: 6, duration: 2, opacity: 0.8 },
            },
          },
          particles: {
            number: { value: 40, density: { enable: true, area: 800 } },
            color: { value: ["#ff4d9d", "#a855f7", "#3b82f6"] },
            shape: { type: "circle" },
            opacity: {
              value: 0.6,
              random: true,
              animation: { enable: true, speed: 1, minimumValue: 0.3 },
            },
            size: {
              value: { min: 2, max: 5 },
              animation: { enable: true, speed: 2, minimumValue: 1 },
            },
            move: { enable: true, speed: 1, outModes: "out" },
            links: { enable: false },
          },
          detectRetina: true,
        }}
        className="absolute inset-0"
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl px-6">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block mb-5 px-3 py-1 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 text-white text-xs font-medium shadow-md tracking-wide"
        >
          Welcome to My Portfolio
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-5xl font-bold text-white mb-3 leading-snug"
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-pink-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Amelza Fiandrini
          </span>
        </motion.h1>

        {/* Typing Roles */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-base md:text-lg text-gray-300 mb-6"
        >
          <TypeAnimation
            sequence={[
              "UI/UX Enthusiast",
              1500,
              "Creative Thinker",
              1500,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.div>

        {/* Short Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-gray-400 text-sm md:text-base mb-8"
        >
          Suka mengubah ide menjadi desain yang mudah digunakan dan menyenangkan bagi pengguna.
        </motion.p>

        {/* Sosmed Icons Floating */}
        <div className="mt-10 flex justify-center gap-10">
          <motion.a
            href="https://www.linkedin.com/in/amelza-fiandrini-0b06402a4/"
            target="_blank"
            rel="noopener noreferrer"
            animate={float(0)}
          >
            <Linkedin size={34} color="#0A66C2" />
          </motion.a>

          <motion.a
            href="https://instagram.com/melzaf_"
            target="_blank"
            rel="noopener noreferrer"
            animate={float(0.2)}
          >
            <SiInstagram size={34} color="#E4405F" />
          </motion.a>

          <motion.a
            href="https://github.com/amelzafiandrini"
            target="_blank"
            rel="noopener noreferrer"
            animate={float(0.6)}
          >
            <Github size={34} color="#7a57aeff" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
