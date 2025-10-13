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
  const [preview, setPreview] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Tutup modal dengan ESC
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setPreview(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [preview, currentSlide]);

  const openPreview = (cert) => {
    setPreview(cert);
    setCurrentSlide(0);
  };

  const handlePrev = () => {
    if (!preview?.images) return;
    setCurrentSlide(
      (prev) => (prev - 1 + preview.images.length) % preview.images.length
    );
  };

  const handleNext = () => {
    if (!preview?.images) return;
    setCurrentSlide((prev) => (prev + 1) % preview.images.length);
  };

  return (
    <section 
    id="certificate"
    className="relative min-h-screen w-full py-22 px-6 text-white">
      {/* ======== TITLE ======== */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center mb-14 bg-gradient-to-r from-pink-400 to-fuchsia-500 bg-clip-text text-transparent"
      >
        Certificates
      </motion.h2>

      {/* ======== GALLERY ======== */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="relative cursor-pointer group"
            onClick={() => openPreview(cert)}
          >
            <img
              src={cert.images[0]}
              alt="Certificate"
              className="w-full h-52 object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
            />
            {cert.images.length > 1 && (
              <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
                {cert.images.length} slides
              </div>
            )}
          </div>
        ))}
      </div>

      {/* ======== MODAL GAMBAR ======== */}
      <AnimatePresence>
        {preview && (
          <motion.div
            className="fixed inset-0 bg-black/75 flex items-center justify-center z-50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreview(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full max-h-[85vh] flex justify-center items-center px-4"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Tombol Close */}
              <button
                onClick={() => setPreview(null)}
                className="absolute -top-10 right-0 text-gray-300 hover:text-white transition-colors"
                aria-label="Close"
              >
                <span className="text-3xl font-light">×</span>
              </button>

              {/* Tombol Prev */}
              {preview.images && preview.images.length > 1 && (
                <button
                  onClick={handlePrev}
                  className="absolute left-0 md:left-0 text-white/80 hover:text-white text-4xl font-light"
                  aria-label="Previous"
                >
                  ‹
                </button>
              )}

              {/* Gambar */}
              <motion.img
                key={preview.images[currentSlide]}
                src={preview.images[currentSlide]}
                alt="Certificate"
                className="rounded-lg max-h-[80vh] object-contain border border-zinc-700"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.25 }}
              />

              {/* Tombol Next */}
              {preview.images && preview.images.length > 1 && (
                <button
                  onClick={handleNext}
                  className="absolute right-0 md:right-0 text-white/80 hover:text-white text-4xl font-light"
                  aria-label="Next"
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
  