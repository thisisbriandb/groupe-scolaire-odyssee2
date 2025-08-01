"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const levels = [
  {
    id: 1,
    name: "Crèche",
    image: "/assets/bg1.png",
    description:
      "Accueil des tout-petits de 3 mois à 3 ans dans un environnement bienveillant et sécurisé",
  },
  {
    id: 2,
    name: "Maternelle",
    image: "/assets/bg2.png",
    description:
      "Éveil et développement des compétences fondamentales de 3 à 6 ans",
  },
  {
    id: 3,
    name: "Élémentaire",
    image: "/images/img elementaire.jpg",
    description:
      "Acquisition des savoirs de base et développement de l'autonomie de 6 à 11 ans",
  },
  {
    id: 4,
    name: "Collège",
    image: "/images/logo college.jpg",
    description:
      "Approfondissement des connaissances et préparation au lycée de 11 à 15 ans",
  },
];

const PopularProducts = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Titre de section */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <span className="bg-[#D93030]/10 text-[#D93030] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Nos Niveaux
            </span>
            <h2 className="text-5xl font-oswald font-bold mb-6 text-gray-800">
              Parcours Éducatif Complet
            </h2>
            <div className="w-20 h-1.5 bg-[#D93030] rounded-full mb-6" />
            <p className="text-gray-600 font-work-sans text-lg max-w-2xl">
              De la crèche au collège, découvrez notre approche pédagogique
              adaptée à chaque étape du développement de l&apos;enfant.
            </p>
          </motion.div>
        </div>

        {/* Carousel Swiper */}
        <div className="w-full relative">
          <div className="swiper-container relative">
            <Swiper
              modules={[Navigation, Pagination, A11y]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{
                clickable: true,
                el: ".swiper-pagination",
                type: "bullets",
              }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="!pb-12"
            >
              {levels.map((level, index) => (
                <SwiperSlide key={level.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-3xl shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300 h-full flex flex-col"
                  >
                    <Link href="/niveaux" className="block h-full">
                      <div className="relative h-52 overflow-hidden">
                        <Image
                          src={level.image}
                          alt={level.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-3xl" />
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                        <h3 className="font-oswald text-xl font-bold mb-3 text-gray-800 group-hover:text-[#19559D] transition-colors">
                          {level.name}
                        </h3>
                        <p className="text-gray-600 font-work-sans mb-4 text-sm flex-1">
                          {level.description}
                        </p>
                        <div className="inline-flex items-center gap-2 text-[#19559D] font-semibold group/link text-sm">
                          <span className="relative">
                            En savoir plus
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#19559D] group-hover/link:w-full transition-all duration-300" />
                          </span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 transform group-hover/link:translate-x-1 transition-transform"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-pagination !bottom-2 !top-auto !w-80 right-0 mx-auto bg-gray-100 rounded-full" />
          </div>
        </div>

        {/* Appel à l'action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-8 bg-gradient-to-r from-[#19559D] via-[#3BA65E] to-[#F2B600] p-8 rounded-2xl shadow-xl">
            <div className="flex items-center gap-6">
              <div className="bg-white/20 p-4 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <div className="text-left">
                <p className="font-oswald text-xl font-bold text-white mb-1">
                  Projet Éducatif
                </p>
                <p className="text-white/90 font-work-sans text-sm">
                  Découvrez notre approche pédagogique
                </p>
              </div>
            </div>
            <Link href="/niveaux">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#19559D] hover:bg-gray-100 font-oswald text-base px-8 py-3 
                rounded-xl transition-all shadow-md flex items-center gap-3 group"
              >
                Découvrir nos niveaux
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PopularProducts;
