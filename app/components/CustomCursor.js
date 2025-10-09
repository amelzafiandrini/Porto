"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Lingkaran besar */}
      <motion.div
        className="fixed top-0 left-0 w-16 h-16 rounded-full pointer-events-none z-[9999] border-2 border-pink-400 mix-blend-difference"
        animate={{ x: mousePosition.x - 32, y: mousePosition.y - 32 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      />
      {/* Lingkaran kecil */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-[9999] bg-gradient-to-r from-pink-400 via-purple-500 to-blue-400"
        animate={{ x: mousePosition.x - 8, y: mousePosition.y - 8 }}
        transition={{ type: "spring", stiffness: 500, damping: 25 }}
      />
    </>
  );
};

export default CustomCursor;
