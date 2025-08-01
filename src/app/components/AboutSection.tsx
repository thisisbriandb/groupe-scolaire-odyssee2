"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contenu texte */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-block">
                <motion.span
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
            viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="inline-block h-1 w-20 bg-primary mb-4"
                />
                <h2 className="text-4xl font-oswald font-bold mb-2">Notre Histoire</h2>
                <p className="text-primary font-work-sans text-lg">Une expertise qui perdure depuis 1995</p>
              </div>

              <div className="font-work-sans text-gray-600 space-y-4">
                <p className="text-lg leading-relaxed">
                  Jack Industries a été créé en 1995 pour répondre aux besoins des entreprises de construction, 
                  des professionnels de la rénovation et des particuliers. Depuis lors, notre clientèle s'est 
                  élargie pour inclure entre autres de grandes entreprises multinationales.
                </p>
                <p className="text-lg leading-relaxed">
                  Spécialiste de la quincaillerie générale de bâtiment, nous proposons des produits de qualité 
                  dédiés aux métiers du bâtiment, de l'industrie et des travaux publics.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary">
                  <p className="text-lg font-semibold text-gray-800">
                    Des performances fiables : Jack Industries travaille avec les mêmes marques depuis 1995. 
                    Notre entreprise a été fondée dans le but de proposer du matériel et des solutions de 
                    qualité aux personnes et entreprises en ayant besoin.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-8 mt-8">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <span className="text-primary font-oswald text-2xl font-bold">28+</span>
                  </div>
                  <div>
                    <p className="font-work-sans text-gray-600">Années</p>
                    <p className="font-work-sans font-semibold">d'expérience</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <span className="text-primary font-oswald text-2xl font-bold">1000+</span>
                  </div>
                  <div>
                    <p className="font-work-sans text-gray-600">Clients</p>
                    <p className="font-work-sans font-semibold">satisfaits</p>
                  </div>
                </div>
              </div>
          </motion.div>

            {/* Image */}
          <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative h-[600px] rounded-lg overflow-hidden">
                <Image
                  src="/assets/history.jpg"
                  alt="Histoire de Jack Industries"
                  fill
                  className="object-cover"
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="flex items-center gap-4"
                >
                  <div className="p-3 bg-primary rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-oswald text-lg font-semibold">Certifié ISO 9001</p>
                    <p className="text-gray-600 font-work-sans">Qualité garantie</p>
                  </div>
                </motion.div>
              </div>
          </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 