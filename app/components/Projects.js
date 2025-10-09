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
    desc: "Digitalisasi proses pendaftaran magang di pusdatin.",
    image: "/projects/pusdatin.png",
    link: "https://www.figma.com/design/63t7CgGusiM5DGrpfPnK91/Website-Magang-Pusdatin-Kemhan?node-id=0-1&t=o7DvanK8XFWRIieF-1",
  },
  {
    id: 2,
    title: "Design Mobile Dibimbing",
    client: "",
    category: "UI/UX",
    desc: "Perancangan konsep aplikasi kursus online di Dibimbing.id.",
    image: "/projects/dibimbing.png",
    link: "https://www.figma.com/design/nVcXnsIQOPt3ZaIBAtd4WA/Project-Dibimbing?node-id=4-243&t=POO868e2UKh0I3LC-1",
  },
  {
    id: 3,
    title: "Website Donasi Panti Jompo Kencana",
    client: "",
    category: "UI/UX",
    desc: "Desain website donasi untuk panti jompo Kencana.",
    image: "/projects/panti.png",
    link: "https://www.figma.com/design/GaT1GbgoAuQFWTDrbq1kQa/Website-Panti-Jompo?node-id=458-810&t=PJCqnBEgVRTp4TFx-1",
  },
  {
    id: 4,
    title: "Desain Logo,Stiker & Feeds Produk Cemalcemilcomel",
    client: "Cemalcemilcomel",
    category: "Desain Grafis",
    desc: "Pembuatan desain logo, stiker dan feeds produk untuk brand cemalcemilcomel.",
    images: ["/projects/cemalcemil.png", "/projects/cemalcemilall.png"],
    link: "#",
  },
  {
    id: 5,
    title: "Desain Logo & Label Kemasan Kuliner Wenny",
    client: "Kuliner Wenny",
    category: "Desain Grafis",
    desc: "Perancangan logo dan label kemasan untuk usaha Kuliner Wenny.",
    image: "/projects/masakanpadang.png",
    link: "#",
  },
];

export default function Projects() {
  const [preview, setPreview] = useState(null);

  return (
    <section
      className="relative text-white py-20 px-6"
      style={{ backgroundColor: "#020314ff" }}
    >
      <ParticlesBackground />
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-fuchsia-500 bg-clip-text text-transparent">
          Projects
        </h2>
      </div>

      {/* Cards */}
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
            {/* Gambar Thumbnail */}
            <div
              className="relative w-full h-52 cursor-pointer overflow-hidden"
              onClick={() => setPreview(p)}
            >
              <img
                src={p.images ? p.images[0] : p.image}
                alt={p.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <span className="absolute top-3 left-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                {p.category}
              </span>

              {/* Label jumlah foto */}
              {p.images && p.images.length > 1 && (
                <span className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm text-xs text-white font-medium px-2 py-1 rounded-lg">
                  {p.images.length} Foto
                </span>
              )}
            </div>

            {/* Konten */}
            <div className="p-6">
              <h3 className="text-xl font-bold">{p.title}</h3>
              <p className="text-sm text-pink-300 font-medium">{p.client}</p>
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

      {/* Modal Preview */}
      <AnimatePresence>
        {preview && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full flex gap-4"
            >
              {/* Foto dalam modal */}
              {(preview.images ? preview.images : [preview.image]).map(
                (img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`${preview.title} ${idx + 1}`}
                    className="w-1/2 rounded-2xl border border-white/20 shadow-xl shadow-pink-400/20 object-contain"
                  />
                )
              )}

              {/* Tombol X */}
              <button
                onClick={() => setPreview(null)}
                className="absolute top-3 right-3 bg-gradient-to-r from-pink-500 to-blue-500 
                           text-white px-3 py-1 rounded-full text-sm hover:scale-105 transition shadow-md"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
