"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const certificates = [
  { id: 1, images: ["sertif_odoo.png"] },
  { id: 2, images: ["sertif_bootcamp_uiux1.png", "sertif_bootcamp_uiux2.png"] },
  { id: 3, images: ["sertif_design_canva.png"] },
  { id: 4, images: ["sertif_uiux_design.png"] },
  { id: 5, images: ["sertif_bnsp.png"] },
];

export default function Certificates() {
  const [selected, setSelected] = useState(null); // { certIndex, imgIndex }
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    if (!selected) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeModal();
      else if (e.key === "ArrowLeft") prevSlide();
      else if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected]);

  const openModal = (certIndex, imgIndex = 0) => {
    setDirection(0);
    setSelected({ certIndex, imgIndex });
  };

  const closeModal = () => setSelected(null);

  const prevSlide = () => {
    if (!selected) return;
    const cert = certificates[selected.certIndex];
    const len = cert.images.length;
    setDirection(-1);
    setSelected((prev) => ({
      ...prev,
      imgIndex: (prev.imgIndex - 1 + len) % len,
    }));
  };

  const nextSlide = () => {
    if (!selected) return;
    const cert = certificates[selected.certIndex];
    const len = cert.images.length;
    setDirection(1);
    setSelected((prev) => ({
      ...prev,
      imgIndex: (prev.imgIndex + 1) % len,
    }));
  };

  return (
    <section className="relative min-h-screen w-full py-16 px-6 text-white">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center mb-14 bg-gradient-to-r from-pink-400 to-fuchsia-500 bg-clip-text text-transparent"
      >
        Certificates
      </motion.h2>

      {/* Grid Gallery */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {certificates.map((cert, i) => (
          <div
            key={i}
            className="relative cursor-pointer group"
            onClick={() => openModal(i, 0)}
          >
            <img
              src={cert.images[0]}
              alt={`Certificate ${i + 1}`}
              className="w-full h-52 object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
            />
            {/* Indikator langsung tampil di pojok atas */}
            {cert.images.length > 1 && (
              <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
                {cert.images.length} slides
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            key="overlay"
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative max-w-5xl w-[92%] p-2 flex items-center justify-center"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 bg-white/20 hover:bg-white/30 text-white rounded-full p-2"
              >
                ✕
              </button>

              {/* Indicator */}
              {certificates[selected.certIndex].images.length > 1 && (
                <div className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                  {selected.imgIndex + 1} /{" "}
                  {certificates[selected.certIndex].images.length}
                </div>
              )}

              {/* Prev */}
              {certificates[selected.certIndex].images.length > 1 && (
                <button
                  onClick={prevSlide}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-2"
                >
                  ‹
                </button>
              )}

              {/* Image */}
              <motion.img
                key={
                  certificates[selected.certIndex].images[selected.imgIndex]
                }
                src={
                  certificates[selected.certIndex].images[selected.imgIndex]
                }
                alt="Certificate"
                className="max-h-[80vh] object-contain rounded-lg"
                initial={{ opacity: 0, x: direction * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -direction * 60 }}
                transition={{ duration: 0.28 }}
              />

              {/* Next */}
              {certificates[selected.certIndex].images.length > 1 && (
                <button
                  onClick={nextSlide}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-2"
                >
                  ›
                </button>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
