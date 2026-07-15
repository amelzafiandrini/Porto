"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ParticlesBackground from "./ParticlesBackground";

const projects = [
  {
    id: 1,
    title: "Website Magang Pusdatin Kementerian Pertahanan",
    client: "Pusadatin Kementerian Pertahanan",
    category: "UI/UX",
    desc: "“Mendigitalisasi proses pendaftaran magang di Pusdatin untuk mempermudah administrasi.",
    image: "/projects/pusdatin.png",
    link: "https://www.figma.com/design/63t7CgGusiM5DGrpfPnK91/Website-Magang-Pusdatin-Kemhan?node-id=0-1&t=o7DvanK8XFWRIieF-1",
  },
  {
    id: 2,
    title: "Redesign Mobile Dibimbing",
    category: "UI/UX",
    desc: "Melakukan redesign aplikasi kursus online di Dibimbing.id untuk meningkatkan UX pengguna.",
    image: "/projects/dibimbing.png",
    link: "https://www.figma.com/design/nVcXnsIQOPt3ZaIBAtd4WA/Project-Dibimbing?node-id=4-243&t=POO868e2UKh0I3LC-1",
  },
  {
    id: 3,
    title: "Website Donasi Panti Jompo Kencana",
    category: "UI/UX",
    desc: "Mendesain website donasi untuk Panti Jompo Kencana agar memudahkan proses donasi.",
    image: "/projects/panti.png",
    link: "https://www.figma.com/design/GaT1GbgoAuQFWTDrbq1kQa/Website-Panti-Jompo?node-id=458-810&t=PJCqnBEgVRTp4TFx-1",
  },
  {
    id: 4,
    title: "Desain Logo, Stiker & Feeds Cemalcemilcomel",
    client: "Cemalcemilcomel",
    category: "Desain Grafis",
    desc: "Merancang logo, desain sticker, dan feed Cemalcemilcomel.",
    images: ["/projects/cemalcemil.png", "/projects/cemalcemilall.png"],
    link: "#",
  },
  {
    id: 5,
    title: "Desain Logo & Label Kuliner Wenny",
    client: "Kuliner Wenny",
    category: "Desain Grafis",
    desc: "Merancang logo dan desain stiker kemasan untuk usaha Kuliner Wenny.",
    image: "/projects/stickeribu.png",
    link: "#",
  },
  {
    id: 6,
    title: "Desain Logo, Label dan Gift Card Niyumi Crave",
    client: "Niyumicrave",
    category: "Desain Grafis",
    desc: "Merancang logo, desain sticker, dan gift card Niyumi Crave.",
    images: ["/projects/niyumicrave.png", "/projects/gcniyumi.png", "/projects/feedsinstagramsatu.png", "/projects/feedsinstagramdua.png"],
    link: "#",
  },
  {
    id: 7,
    title: "Desain Id Card HUT RI",
    client: "",
    category: "Desain Grafis",
    desc: "Merancang desain Id Card.",
    images: ["/projects/hut78.png", "/projects/hut79.png", "/projects/hut80.png"],
    link: "#",
  },
];

export default function Projects() {
  const [preview, setPreview] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    if (!preview?.images) return;
    setCurrentSlide((prev) => (prev + 1) % preview.images.length);
  };

  const handlePrev = () => {
    if (!preview?.images) return;
    setCurrentSlide((prev) =>
      prev === 0 ? preview.images.length - 1 : prev - 1
    );
  };

  return (
    <section
      id="projects"
      className="relative text-white py-22 px-6"
      style={{ backgroundColor: "#020314ff" }}
    >
      <ParticlesBackground />
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-fuchsia-500 bg-clip-text text-transparent">
          Projects
        </h2>
      </div>

      {/* Kartu Projek */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
        {projects.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md 
                       overflow-hidden group hover:-translate-y-2 transition 
                       hover:shadow-lg hover:shadow-pink-500/20"
          >
            {/* Thumbnail */}
            <div
              className="relative w-full h-52 cursor-pointer overflow-hidden"
              onClick={() => {
                setPreview(p);
                setCurrentSlide(0);
              }}
            >
              <img
                src={p.images ? p.images[0] : p.image}
                alt={p.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <span className="absolute top-3 left-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                {p.category}
              </span>

              {/* Label jumlah slides */}
              {p.images && p.images.length > 1 && (
                <span className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm text-xs text-white font-medium px-2 py-1 rounded-lg">
                  {p.images.length} Slides
                </span>
              )}
            </div>

            {/* Konten */}
            <div className="p-6">
              <h3 className="text-xl font-bold">{p.title}</h3>
              {p.client && (
                <p className="text-sm text-pink-300 font-medium">{p.client}</p>
              )}
              <p className="text-sm text-gray-400 mt-2 line-clamp-2">{p.desc}</p>

              {p.link !== "#" && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center font-medium
                             bg-gradient-to-r from-pink-400 via-fuchsia-500 to-blue-400
                             text-white px-5 py-2 rounded-xl transition hover:scale-105 shadow-md"
                >
                  View Project →
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
{/* ======== MODAL GAMBAR ======== */}
<AnimatePresence>
  {preview && (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-[2px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setPreview(null)}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-center gap-4">
          {/* Previous */}
          {preview.images && preview.images.length > 1 && (
            <button
              onClick={handlePrev}
              className="text-4xl text-white/70 hover:text-pink-400 transition"
              aria-label="Previous"
            >
              ❮
            </button>
          )}

          {/* Image Wrapper */}
          <div className="relative">
            {/* Close */}
            <button
              onClick={() => setPreview(null)}
              className="absolute -top-10 -right-4 text-2xl text-gray-300 hover:text-pink-400 transition"
              aria-label="Close"
            >
              ✕
            </button>

            {/* Image */}
            <motion.img
              key={preview.images ? preview.images[currentSlide] : preview.image}
              src={preview.images ? preview.images[currentSlide] : preview.image}
              alt={preview.title}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="max-w-[80vw] max-h-[70vh] rounded-xl border border-white/10 shadow-2xl object-contain bg-zinc-900"
            />
          </div>

          {/* Next */}
          {preview.images && preview.images.length > 1 && (
            <button
              onClick={handleNext}
              className="text-4xl text-white/70 hover:text-pink-400 transition"
              aria-label="Next"
            >
              ❯
            </button>
          )}
        </div>

{/* Counter */}
<div className="mt-4 flex justify-center">
  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">
    {preview.images
      ? `${currentSlide + 1} / ${preview.images.length}`
      : "1 / 1"}
  </span>
</div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

</section>
);
}