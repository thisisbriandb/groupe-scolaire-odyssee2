"use client";

import { motion } from 'framer-motion';
import { FaGraduationCap, FaUsers, FaStar, FaHeart, FaShieldAlt, FaLightbulb } from 'react-icons/fa';

const features = [
  {
    title: "Parcours complet",
    description: "De la crèche au collège, un parcours éducatif cohérent et progressif pour chaque enfant.",
    icon: <FaGraduationCap className="w-10 h-10 text-accent-red" />,
    delay: 0.1
  },
  {
    title: "Collaboration parents-enseignants",
    description: "Une relation de confiance mutuelle pour accompagner chaque élève vers la réussite.",
    icon: <FaUsers className="w-10 h-10 text-accent-red" />,
    delay: 0.2
  },
  {
    title: "Excellence académique",
    description: "Programme d'enseignements et d'examens intensifs pour viser l'excellence.",
    icon: <FaStar className="w-10 h-10 text-accent-red" />,
    delay: 0.3
  },
  {
    title: "Développement personnel",
    description: "Activités extrascolaires et périscolaires pour l'épanouissement complet de l'enfant.",
    icon: <FaHeart className="w-10 h-10 text-accent-red" />,
    delay: 0.4
  },
  {
    title: "Égalité des chances",
    description: "Chaque élève mérite d'atteindre son plein potentiel, quelles que soient ses difficultés.",
    icon: <FaShieldAlt className="w-10 h-10 text-accent-red" />,
    delay: 0.5
  },
  {
    title: "Innovation pédagogique",
    description: "Méthodes d'enseignement modernes et adaptées aux besoins de chaque enfant.",
    icon: <FaLightbulb className="w-10 h-10 text-accent-red" />,
    delay: 0.6
  }
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <span className="inline-block bg-accent-red/10 text-accent-red px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Pourquoi choisir L'Odyssée ?
          </span>
          <h2 className="text-4xl font-oswald font-bold mb-6">
            L'excellence éducative à votre service
          </h2>
          <div className="h-1 w-20 bg-accent-red mx-auto rounded-full mb-6" />
          <p className="text-gray-600 font-work-sans text-lg max-w-2xl mx-auto">
            Découvrez les valeurs et l'approche pédagogique qui font du Groupe Scolaire L'Odyssée 
            le partenaire éducatif idéal pour l'épanouissement de votre enfant.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: feature.delay }}
              whileHover={{ y: -5 }}
              className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-oswald font-semibold mb-4 text-gray-900 group-hover:text-accent-red transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 font-work-sans leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 bg-accent-red/5 px-6 py-3 rounded-full">
            <span className="text-accent-red font-oswald text-lg font-semibold">
              Excellence éducative
            </span>
            <div className="w-2 h-2 rounded-full bg-accent-red" />
            <span className="text-gray-600 font-work-sans">
              Égalité des chances pour tous
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs; 