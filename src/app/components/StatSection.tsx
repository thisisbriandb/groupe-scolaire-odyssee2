"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiUsers, FiBookOpen, FiAward, FiHeart } from "react-icons/fi";

interface Stat {
  id: number;
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix?: string;
  color: string;
}

const stats: Stat[] = [
  {
    id: 1,
    icon: <FiUsers className="w-8 h-8" />,
    value: 500,
    label: "Élèves",
    color: "from-blue-500 to-blue-600"
  },
  {
    id: 2,
    icon: <FiBookOpen className="w-8 h-8" />,
    value: 4,
    label: "Niveaux d'enseignement",
    color: "from-green-500 to-green-600"
  },
  {
    id: 3,
    icon: <FiAward className="w-8 h-8" />,
    value: 98,
    label: "% de réussite",
    suffix: "%",
    color: "from-yellow-500 to-yellow-600"
  },
  {
    id: 4,
    icon: <FiHeart className="w-8 h-8" />,
    value: 15,
    label: "Années d'expérience",
    color: "from-red-500 to-red-600"
  }
];

const AnimatedCounter = ({ value, suffix = "", duration = 2 }: { value: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  // Correction : 'threshold' n'est pas une propriété valide pour useInView dans framer-motion
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const startTime = Date.now();
      const endTime = startTime + duration * 1000;

      const updateCount = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / (duration * 1000), 1);
        const currentCount = Math.floor(value * progress);
        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        } else {
          setCount(value);
        }
      };

      requestAnimationFrame(updateCount);
    }
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl lg:text-6xl font-bold">
      {count}{suffix}
    </span>
  );
};

const StatSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/assets/grid.png')] opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Titre de section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-[#D93030]/10 text-[#D93030] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Chiffres Clés
          </span>
          <h2 className="font-oswald text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            L'Odyssée en Chiffres
          </h2>
          <div className="w-20 h-1.5 bg-[#D93030] rounded-full mx-auto mb-6" />
          <p className="text-gray-600 font-work-sans text-lg max-w-2xl mx-auto">
            Découvrez les statistiques qui témoignent de notre engagement 
            envers l'excellence éducative et le succès de nos élèves.
          </p>
        </motion.div>

        {/* Grille des statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                {/* Icône avec gradient */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.icon}
                </div>

                {/* Valeur animée */}
                <div className="mb-3">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>

                {/* Label */}
                <h3 className="font-oswald text-lg font-semibold text-gray-800">
                  {stat.label}
                </h3>

                {/* Effet de brillance au survol */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section supplémentaire avec témoignage */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-[#19559D] via-[#3BA65E] to-[#F2B600] rounded-3xl p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('/assets/grid.png')] opacity-10" />
            
            <div className="relative z-10 text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-white/20 p-4 rounded-full">
                  <FiAward className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="font-oswald text-2xl md:text-3xl font-bold mb-4">
                Excellence Éducative
              </h3>
              <p className="text-white/90 font-work-sans text-lg max-w-3xl mx-auto leading-relaxed">
                Notre engagement envers l'excellence se traduit par des résultats exceptionnels 
                et une approche pédagogique innovante qui place l'élève au cœur de nos préoccupations.
              </p>
              
              {/* Statistiques supplémentaires */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">25+</div>
                  <div className="text-white/80 font-work-sans">Enseignants qualifiés</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">100%</div>
                  <div className="text-white/80 font-work-sans">Satisfaction parents</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">50+</div>
                  <div className="text-white/80 font-work-sans">Activités extrascolaires</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatSection;
