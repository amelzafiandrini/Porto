// components/Experience.js
"use client";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useRef, useState } from "react";

const workExperiences = [
  {
    company: "Niyumicrave",
    period: "Januari 2026 - Saat ini",
    role: "Usaha Pribadi",
    type: "Owner & Designer",
    tasks: [
      "Merancang dan membuat materi visual untuk media sosial serta kebutuhan promosi.",
      "Mengelola desain visual agar sesuai dengan identitas merek."
    ],
    images: ["/projects/logoniyumi.png"],
  },
  {
    company: "Kementerian Pertahanan",
    period: "2025",
    role: "Pusat Data dan Informasi",
    type: "Skripsi",
    tasks: [
    "Menganalisis kebutuhan pengguna dan sistem, serta merancang antarmuka (UI/UX).",
    "Mengembangkan sistem informasi magang berbasis web menggunakan CodeIgniter 4 dan MySQL.",
    "Melakukan pengujian, perbaikan fitur, dan evaluasi sistem."
    ],
    images: ["/experience/pusdatin.jpg"],
  },
  {
    company: "Kementerian Luar Negeri",
    period: "Sep 2024 - Nov 2024",
    role: "Biro SDM Bagian Informasi, Perencanaan, dan Pengembangan",
    type: "Magang",
    tasks: [
      "Mengelola data pada Sistem Informasi Manajemen SDM (SIM SDM), termasuk input, pembaruan, dan validasi data.",
      "Berpatisipasi dalam pengujian fitur aplikasi internal untuk memastikan sistem berfungsi dengan baik.",
      "Mendukung pelaksanaan seleksi CPNS 2024 melalui pengelolaan data dan dokumen administrasi peserta.",
    ],
    images: ["/experience/kemlu1.jpg", "/experience/kemlu2.jpg", "/experience/kemlu5.jpg", "/experience/kemlu6.jpg", "/experience/kemlu7.png", "/experience/kemlu4.jpg"],
  }
];

const orgExperiences = [
  {
    company: "Himpunan Mahasiswa Sistem Informasi",
    period: "2022 - 2023",
    role: "Anggota Divisi Pendidikan",
    type: "Organisasi",
    tasks: [
    "Mengelola administrasi, data, dan dokumentasi kegiatan organisasi.",
    "Menyusun materi serta memberikan pengenalan teknologi dan dasar coding.",
    "Berkoordinasi dalam pelaksanaan kegiatan edukasi dan kompetisi akademik.",
    ],
    images: ["/experience/himsi4.jpg", "/experience/himsi.jpg", "/experience/himsi2.jpg", "/experience/himsi3.jpg"],
  },
];

function TimelineItem({ exp, index, total, progress, onImageClick }) {
  const start = index / total;
  const end = (index + 0.999) / total;

  const active = useTransform(progress, [start, end], [0, 1]);
  const dotBg = useTransform(active, [0, 1], ["#1f2937", "#ec4899"]);
  const dotShadow = useTransform(
    active,
    [0, 1],
    ["0 0 0px rgba(236,72,153,0)", "0 0 18px rgba(236,72,153,0.8)"]
  );
  const dotScale = useTransform(active, [0, 1], [0.85, 1.05]);
  const [pulse, setPulse] = useState(false);

  useMotionValueEvent(active, "change", (v) => {
    if (v >= 0.99) setPulse(true);
  });

  const container = {
    hidden: { opacity: 1 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };
  const item = {
    hidden: { opacity: 0, x: -25 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const isCCC = exp.image && exp.image.includes("ccc.png");

  return (
    <motion.div
      className="relative mb-14 pl-14"
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
    >
      {/* DOT GARIS */}
      <motion.span
        className="absolute top-2 left-4 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-black"
        style={{ backgroundColor: dotBg, boxShadow: dotShadow, scale: dotScale }}
      />
      {pulse && (
        <motion.span
          className="pointer-events-none absolute top-2 left-4 -translate-x-1/2 w-4 h-4 rounded-full"
          animate={{ scale: [1, 2.1], opacity: [0.35, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeOut" }}
          style={{ backgroundColor: "#ec4899" }}
        />
      )}

      {/* KONTEN */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="p-6 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-pink-500/50 transition-colors flex flex-col md:flex-row justify-between items-start gap-6 shadow-lg"
      >
        {/* FOTO */}
     {exp.images && (
  <motion.div
    className="md:w-80 w-full h-56 md:h-52 overflow-hidden flex-shrink-0 cursor-pointer border border-pink-400/50 hover:scale-[1.02] transition-transform duration-300 rounded-[10px]"
    variants={item}
    onClick={() => onImageClick(exp.images, 0)}
  >
    <img
      src={exp.images[0]}
      alt={exp.company}
      className="w-full h-full object-cover rounded-[10px]"
    />
  </motion.div>
)}

        {/* TEKS */}
        <div className="flex-1">
          <motion.h3
            className="text-lg md:text-xl font-semibold text-white"
            variants={item}
          >
            {exp.company}
          </motion.h3>
          <motion.p className="text-sm text-pink-400" variants={item}>
            {exp.period}
          </motion.p>

          <motion.div className="mt-2" variants={item}>
            <p className="font-medium text-gray-200">{exp.role}</p>
            <span className="inline-block px-3 py-1 mt-2 text-xs bg-pink-500/80 rounded-full text-white">
              {exp.type}
            </span>
          </motion.div>

          <motion.ul
            className="list-disc list-inside mt-3 space-y-1 text-gray-400 text-sm"
            variants={item}
          >
            {exp.tasks.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </motion.ul>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Experience() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.2", "end 0.9"],
  });

  const lineProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    mass: 0.2,
  });

const [selectedImages, setSelectedImages] = useState(null);
const [currentIndex, setCurrentIndex] = useState(0);

const handleImageClick = (images, index = 0) => {
  setSelectedImages(images);
  setCurrentIndex(index);
};


 return (
  <section
    id="experience"
    ref={sectionRef}
    className="relative text-white py-10"
    style={{ backgroundColor: "#020314" }}
  >
      <div className="max-w-6xl mx-auto px-5 overflow-visible">
        {/* ======== PENGALAMAN KERJA ======== */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-14 bg-gradient-to-r from-pink-400 to-fuchsia-500 bg-clip-text text-transparent"
        >
          Work Experience
        </motion.h2>

        <div className="relative mb-24">
          <div className="absolute left-4 top-0 bottom-0 w-0.5">
            <motion.div
              className="w-full h-full bg-gradient-to-b from-pink-500 to-fuchsia-600 origin-top"
              style={{ scaleY: lineProgress }}
            />
          </div>

          <div className="ml-6">
            {workExperiences.map((exp, i) => (
              <TimelineItem
                key={i}
                exp={exp}
                index={i}
                total={workExperiences.length}
                progress={lineProgress}
                onImageClick={handleImageClick}
              />
            ))}
          </div>
        </div>

        {/* ======== PENGALAMAN ORGANISASI ======== */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-14 bg-gradient-to-r from-pink-400 to-fuchsia-500 bg-clip-text text-transparent"
        >
          Organizational Experience
        </motion.h2>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5">
            <motion.div
              className="w-full h-full bg-gradient-to-b from-pink-500 to-fuchsia-600 origin-top"
              style={{ scaleY: lineProgress }}
            />
          </div>

          <div className="ml-6">
            {orgExperiences.map((exp, i) => (
              <TimelineItem
                key={i}
                exp={exp}
                index={i}
                total={orgExperiences.length}
                progress={lineProgress}
                onImageClick={handleImageClick}
              />
            ))}
          </div>
        </div>
      </div>

  {/* ======== IMAGE MODAL ======== */}
{selectedImages && (
  <motion.div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={() => setSelectedImages(null)}
  >
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.95, opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={(e) => e.stopPropagation()}
      className="relative w-full max-w-4xl px-14"
    >
    

     <div className="flex items-center justify-center gap-4">
  {/* Previous */}
  <button
    onClick={() =>
      setCurrentIndex((prev) =>
        prev === 0 ? selectedImages.length - 1 : prev - 1
      )
    }
    className="text-4xl text-white/70 hover:text-pink-400 transition"
  >
    ❮
  </button>

  {/* Image + Close */}
  <div className="relative">
    {/* Close */}
    <button
      onClick={() => setSelectedImages(null)}
      className="absolute -top-9 -right-16 text-2xl text-gray-300 hover:text-pink-400 transition"
      aria-label="Close"
    >
      ✕
    </button>

    {/* Image */}
    <motion.img
      key={currentIndex}
      src={selectedImages[currentIndex]}
      alt="Portfolio"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.25 }}
      className="max-w-[80vw] max-h-[70vh] rounded-xl border border-white/10 shadow-2xl object-contain bg-zinc-900"
    />
  </div>

  {/* Next */}
  <button
    onClick={() =>
      setCurrentIndex((prev) =>
        prev === selectedImages.length - 1 ? 0 : prev + 1
      )
    }
    className="text-4xl text-white/70 hover:text-pink-400 transition"
  >
    ❯
  </button>
</div>
      {/* Counter */}
      <div className="mt-5 flex justify-center">
        <span className="text-sm text-gray-400">
          {currentIndex + 1} / {selectedImages.length}
        </span>
      </div>
    </motion.div>
  </motion.div>
)}
</section>
);
}