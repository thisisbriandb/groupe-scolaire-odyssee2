"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const backgrounds = [
  {
    title: "Excellence Acamdemique",
    subtitle: "Inscrivez vos enfants dans les ...",
  },
  {
    title: "Un Avenir garanti",
    subtitle: "La meilleure école au Congo",
  },
  {
    title: "Un Avenir garanti",
    subtitle: "La meilleure école au Congo",
  },
];

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      className="relative h-screen w-full overflow-hidden"
      aria-label="Bannière principale"
    >
      {/* VIDEO BACKGROUND */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/hero-video.mp4"
        autoPlay
        muted
        loop
        playsInline
      >
        Sorry, your browser doesn't support embedded videos.
      </video>

      {/* Overlay sombre plus léger pour clarté */}
      <div className="absolute inset-0 bg-black/30" aria-hidden="true" />

      {/* CONTENU TEXTUEL */}
      <div className="relative h-full z-20">
        <div className="h-full flex items-center">
          <div className="container">
            <div className="max-w-4xl">
              <motion.span
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="inline-block text-blue-600 font-semibold text-lg md:text-xl mb-4 bg-white/90 px-5 py-1.5 rounded-full shadow-sm"
              >
                Votre partenaire depuis 1995
              </motion.span>

              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-white font-bold text-5xl sm:text-6xl md:text-7xl leading-tight tracking-wide drop-shadow-xl font-[Poppins]"
              >
                L'Odyssée
              </motion.h1>

              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="space-y-3 mt-4"
              >
                <p className="text-xl md:text-2xl text-white font-medium drop-shadow-sm">
                  {backgrounds[activeIndex].title}
                </p>
                <p className="text-lg md:text-xl text-white/90 drop-shadow">
                  {backgrounds[activeIndex].subtitle}
                </p>
              </motion.div>

              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 mt-10"
              >
                <Link
                  href="/assets/JACK PLAQUETTE.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Télécharger notre catalogue au format PDF"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-[#19559D] to-[#3BA65E] text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-xl transition inline-flex items-center justify-center"
                  >
                    <span>Télécharger le catalogue</span>
                  </motion.button>
                </Link>
                <Link href="/contact" aria-label="Accéder au formulaire de demande de devis">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border border-white text-white hover:bg-white hover:text-[#19559D] font-semibold px-6 py-3 rounded-lg transition inline-flex items-center justify-center"
                  >
                    <span>Contactez-nous</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Indicateurs de slide (optionnel si tu ne changes plus les slides) */}
        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2"
          role="tablist"
          aria-label="Navigation des slides"
        >
          {backgrounds.map((_, index) => (
            <motion.button
              key={index}
              role="tab"
              aria-selected={activeIndex === index}
              aria-label={`Slide ${index + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeIndex === index ? "w-8 bg-white" : "w-2 bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-8 text-white flex items-center gap-2"
        aria-hidden="true"
      >
        <div className="animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
        <span className="text-sm font-medium">Scroll pour découvrir</span>
      </motion.div>
    </section>
  );
};

export default HeroSection;
