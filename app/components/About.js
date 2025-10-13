"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  User,
  GraduationCap,
  BookOpen,
  Star,
  Mail,
  Phone,
  Copy,
} from "lucide-react";
import { useState, useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const biodata = [
  {
    type: "text",
    icon: <User className="w-5 h-5 text-pink-400" />,
    label: "Nama Lengkap",
    value: "Amelza Fiandrini",
  },
  {
    type: "text",
    icon: <GraduationCap className="w-5 h-5 text-pink-400" />,
    label: "Universitas",
    value: "Universitas Bina Sarana Informatika",
  },
  {
    type: "text",
    icon: <BookOpen className="w-5 h-5 text-pink-400" />,
    label: "Jurusan",
    value: "Sistem Informasi",
  },
  {
    type: "text",
    icon: <Star className="w-5 h-5 text-pink-400" />,
    label: "GPA",
    value: "3.88 / 4.00",
  },
  {
    type: "email",
    icon: <Mail className="w-5 h-5 text-pink-400" />,
    label: "Email",
    value: "amelzafiandrini10@gmail.com",
  },
  {
    type: "text",
    icon: <Phone className="w-5 h-5 text-pink-400" />,
    label: "No. HP",
    value: "+62*****2",
  },
];

export default function AboutMe() {
  const [copied, setCopied] = useState(false);

  const handleCopy = (email) => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <section
      id="about"
      className="relative bg-darkblue text-white py-16 px-6 overflow-hidden"
    >
      {/* Background Particles */}
      <Particles
        id="tsparticles-about"
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
            color: { value: ["#3b70f5ff", "#9858d8ff", "#f65ae4ff"] },
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

      <div className="max-w-6xl mx-auto  min-h-screen grid grid-cols-1 md:grid-cols-2 gap-16 items-center justify-items-center relative z-10">
        {/* Foto kiri dengan border gradient animasi */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl p-[2px] bg-gradient-to-tr from-pink-500 via-purple-500 to-blue-500 animate-border">
            <div className="w-full h-full rounded-3xl overflow-hidden bg-black/80 backdrop-blur-sm">
              <Image
                src="/profile.jpg"
                alt="Foto Profil"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Biodata kanan */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="space-y-10"
        >
          {/* Heading */}
          <div>
            <h2 className="text-3xl font-extrabold text-center md:text-left bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-gray-400 mt-4 leading-relaxed text-center md:text-left">
              Saya lulusan Program Studi Sistem Informasi Universitas Bina Sarana Informatika tahun 2025. 
              Berpengalaman dalam desain UI/UX aplikasi berbasis website dan mobile, mampu 
              memvisualisasikan kebutuhan pengguna, serta terbiasa bekerja mandiri maupun dalam tim. 
              Memiliki pengalaman magang di instansi pemerintahan dan ingin terus mengembangkan 
              keterampilan di bidang desain UI/UX.  
            </p>
          </div>

          {/* Grid biodata */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {biodata.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10 
                          hover:border-pink-500 hover:shadow-[0_0_30px_rgba(236,72,153,0.4)] 
                          transition-all duration-300 flex items-center gap-4"
              >
                <div className="grid place-items-center w-12 h-12 rounded-xl bg-pink-500/10 ring-1 ring-pink-500/30 flex-shrink-0">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <p className="text-xs uppercase tracking-wide text-gray-400">
                    {item.label}
                  </p>
                  {item.type === "email" ? (
                    <button
                      onClick={() => handleCopy(item.value)}
                      className="flex items-center gap-2 text-pink-400 hover:text-pink-300 font-medium text-sm mt-1"
                    >
                      <Copy className="w-4 h-4" />
                      {copied ? "Tersalin!" : "Salin Email"}
                    </button>
                  ) : (
                    <p className="text-base font-semibold text-white">
                      {item.value}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
