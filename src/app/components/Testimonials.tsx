"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "M. Paul IKONDO ELENGA",
    role: "Père de Gabriel",
    company: "Élève en Maternelle",
    image: "/assets/temoin1.jpg",
    content:
      "L'Odyssée a transformé l'expérience scolaire de mon fils. L'équipe pédagogique est très investie et les résultats sont au rendez-vous.",
  },
  {
    id: 2,
    name: "Mme Astrid DANDY",
    role: "Mère de Sandra",
    company: "Élève en 6ème",
    image: "/assets/temoin2.jpg",
    content:
      "Une école qui prône vraiment l'excellence. Les activités extrascolaires sont variées et la communication avec les parents est excellente.",
  },
  {
    id: 3,
    name: "M. Georges MAKOSSO",
    role: "Père d'Yvan",
    company: "Élève en Grande Section",
    image: "/assets/temoin3.jpg",
    content:
      "Mon enfant s'épanouit vraiment dans cette école. L'approche pédagogique est moderne et bienveillante.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Titre section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-[#D93030] font-work-sans text-lg font-semibold">
            Témoignages
          </span>
          <h2 className="text-4xl sm:text-5xl font-oswald font-bold mt-2 mb-4 text-gray-800">
            Ce que disent nos parents
          </h2>
          <div className="h-1 w-20 bg-[#D93030] mx-auto rounded-full" />
        </motion.div>

        {/* Cartes de témoignage */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-50 rounded-3xl p-6 pt-14 relative group hover:shadow-lg transition-all duration-300"
              >
                {/* Avatar */}
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden ring-4 ring-[#19559D] shadow-md">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </div>

                {/* Contenu */}
                <div className="text-center mt-4">
                  <svg
                    className="w-10 h-10 text-[#D93030]/20 mx-auto mb-4"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm12 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
                  </svg>
                  <p className="text-gray-600 font-work-sans text-base mb-4 leading-relaxed">
                    {testimonial.content}
                  </p>
                  <div className="border-t border-gray-200 pt-4 mt-4">
                    <p className="font-oswald font-bold text-lg text-gray-800">
                      {testimonial.name}
                    </p>
                    <p className="text-[#D93030] text-sm font-work-sans font-medium">
                      {testimonial.role}
                    </p>
                    <p className="text-gray-500 text-sm font-work-sans">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
