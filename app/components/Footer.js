"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#0f0f1a] via-[#141428] to-[#1a1a2e] text-gray-300 py-10 mt-20">
      {/* Glow background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-72 h-72 bg-pink-500/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            Amelza Fiandrini
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#hero" className="hover:text-pink-400 transition">Home</a></li>
            <li><a href="#about" className="hover:text-pink-400 transition">About</a></li>
            <li><a href="#skill" className="hover:text-pink-400 transition">Tools & Skills</a></li>
            <li><a href="#experience" className="hover:text-pink-400 transition">Experience</a></li>
            <li><a href="#projects" className="hover:text-pink-400 transition">Projects</a></li>
            <li><a href="#certificate" className="hover:text-pink-400 transition">Certificates</a></li>
            <li><a href="#contact" className="hover:text-pink-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Connect</h3>
          <div className="flex justify-center md:justify-start gap-4">
            <motion.a whileHover={{ scale: 1.2 }} href="https://linkedin.com/amelza-fiandrini-0b06402a4/" target="_blank">
              <Linkedin className="w-6 h-6 text-blue-400" />
            </motion.a>
            <motion.a whileHover={{ scale: 1.2 }} href="https://github.com/amelzafiandrini" target="_blank">
              <Github className="w-6 h-6 text-gray-300" />
            </motion.a>
            <motion.a whileHover={{ scale: 1.2 }} href="https://instagram.com/melzaf_" target="_blank">
              <Instagram className="w-6 h-6 text-pink-400" />
            </motion.a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative z-10 mt-10 border-t border-white/10 pt-6 text-center text-sm text-gray-400">
        All rights reserved. © {new Date().getFullYear()}
      </div>
    </footer>
  );
}
