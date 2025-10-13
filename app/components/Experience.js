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
    company: "Kementerian Pertahanan",
    period: "2025",
    role: "Pusat Data dan Informasi",
    type: "Skripsi",
    tasks: [
      "Perancangan & pengembangan website magang (CodeIgniter 4).",
      "Desain UI/UX responsif untuk pengelolaan data peserta.",
      "Implementasi fitur utama registrasi & manajemen dokumen digital.",
    ],
    image: "/experience/pusdatin.jpg",
  },
  {
    company: "Kementerian Luar Negeri",
    period: "Sep 2024 - Des 2024",
    role: "Biro SDM Bagian Informasi, Perencanaan, dan Pengembangan",
    type: "Magang",
    tasks: [
      "Analisis SIM SDM untuk peningkatan manajemen kepegawaian.",
      "Pengelolaan data pegawai & dukungan operasional CPNS.",
      "Review & testing aplikasi internal (UI & responsivitas web).",
      "Menjadi panitia CPNS Tahun Anggaran 2024.",
    ],
    image: "/experience/kemlu.jpg",
  },
  {
    company: "Cemalcemilcomel",
    period: "2022 - 2024",
    role: "Usaha Pribadi",
    type: "Owner & Designer",
    tasks: [
      "Desain banner & konten promosi untuk kebutuhan branding.",
      "Pengelolaan identitas visual & materi pemasaran digital.",
    ],
    image: "/experience/ccc.png",
  },
];

const orgExperiences = [
  {
    company: "Himpunan Mahasiswa Sistem Informasi",
    period: "2022 - 2023",
    role: "Anggota Divisi Pendidikan",
    type: "Organisasi",
    tasks: [
      "Menyusun dan melaksanakan program kerja divisi pendidikan.",
      "Membantu pelaksanaan seminar & pelatihan akademik bagi mahasiswa.",
      "Berkoordinasi dengan pengurus lain untuk kegiatan kampus.",
    ],
    image: "/experience/himsi.jpg",
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
        {exp.image && (
          <motion.div
            className="md:w-80 w-full h-56 md:h-52 overflow-hidden flex-shrink-0 cursor-pointer border border-pink-400/50 hover:scale-[1.02] transition-transform duration-300 rounded-[10px]"
            variants={item}
            onClick={() => onImageClick(exp.image)}
          >
            <img
              src={exp.image}
              alt={exp.company}
              className={`w-full h-full rounded-[10px] ${
                isCCC ? "object-contain bg-[#0a0a0a]" : "object-cover"
              }`}
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

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative text-white py-10"
      style={{ backgroundColor: "#020314" }}
    >
      <div className="max-w-5xl mx-auto px-6 overflow-visible">
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
                onImageClick={setSelectedImage}
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
                onImageClick={setSelectedImage}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ======== MODAL GAMBAR (versi elegan) ======== */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black/75 flex items-center justify-center z-50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            className="relative max-w-3xl w-full max-h-[85vh] flex justify-center items-center px-4"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Tombol Close */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-gray-300 hover:text-white transition-colors"
              aria-label="Close"
            >
              <span className="text-3xl font-light">×</span>
            </button>

            {/* Gambar */}
            <img
              src={selectedImage}
              alt="Bukti dokumentasi"
              className="rounded-lg max-h-[80vh] object-contain border border-zinc-700"
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
