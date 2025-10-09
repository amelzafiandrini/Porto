// components/Navbar.js
"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[90%] md:w-auto bg-black/70 backdrop-blur-md rounded-full shadow-lg px-6 py-3 flex items-center justify-between">
      {/* Logo */}
      <div className="text-lg font-semibold text-white">Portofolio</div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 text-white font-medium">
        <li><Link href="#hero" className="hover:text-blue-400 transition">Home</Link></li>
        <li><Link href="#experience" className="hover:text-blue-400 transition">Experience</Link></li>
        <li><Link href="#projects" className="hover:text-blue-400 transition">Projects</Link></li>
        <li><Link href="#contact" className="hover:text-blue-400 transition">Contact</Link></li>
      </ul>

      {/* Hamburger Icon */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-8 h-8 relative"
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.span
          animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
          className="w-6 h-0.5 bg-white rounded absolute"
        />
        <motion.span
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          className="w-6 h-0.5 bg-white rounded absolute"
        />
        <motion.span
          animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
          className="w-6 h-0.5 bg-white rounded absolute"
        />
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-black/95 backdrop-blur-md shadow-md rounded-lg p-5 flex flex-col gap-4 md:hidden">
          <Link href="#hero" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="#experience" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>Experience</Link>
          <Link href="#projects" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link href="#contact" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
