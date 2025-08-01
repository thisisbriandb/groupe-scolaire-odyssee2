"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft, FiUsers, FiBookOpen, FiTarget, FiHeart } from "react-icons/fi";

const levels = [
  {
    id: 1,
    name: "Crèche",
    image: "/assets/bg1.png",
    description: "Accueil des tout-petits de 3 mois à 3 ans dans un environnement bienveillant et sécurisé",
    ageRange: "3 mois - 3 ans",
    features: [
      "Éveil sensoriel et moteur",
      "Développement du langage",
      "Socialisation en douceur",
      "Activités créatives adaptées"
    ],
    objectives: [
      "Favoriser l'autonomie",
      "Développer la confiance en soi",
      "Éveiller la curiosité",
      "Préparer l'entrée en maternelle"
    ]
  },
  {
    id: 2,
    name: "Maternelle",
    image: "/assets/bg2.png",
    description: "Éveil et développement des compétences fondamentales de 3 à 6 ans",
    ageRange: "3 - 6 ans",
    features: [
      "Apprentissage par le jeu",
      "Développement du langage oral",
      "Découverte du monde",
      "Activités artistiques et sportives"
    ],
    objectives: [
      "Acquérir les bases du langage",
      "Développer la motricité fine",
      "Apprendre à vivre ensemble",
      "Préparer l'entrée en CP"
    ]
  },
  {
    id: 3,
    name: "Élémentaire",
    image: "/images/img elementaire.jpg",
    description: "Acquisition des savoirs de base et développement de l'autonomie de 6 à 11 ans",
    ageRange: "6 - 11 ans",
    features: [
      "Apprentissage de la lecture et de l'écriture",
      "Mathématiques et sciences",
      "Histoire-géographie",
      "Langues étrangères"
    ],
    objectives: [
      "Maîtriser les fondamentaux",
      "Développer l'esprit critique",
      "Favoriser l'autonomie",
      "Préparer l'entrée au collège"
    ]
  },
  {
    id: 4,
    name: "Collège",
    image: "/images/logo college.jpg",
    description: "Approfondissement des connaissances et préparation au lycée de 11 à 15 ans",
    ageRange: "11 - 15 ans",
    features: [
      "Enseignements disciplinaires",
      "Projets interdisciplinaires",
      "Orientation et découverte des métiers",
      "Préparation au brevet"
    ],
    objectives: [
      "Consolider les acquis",
      "Développer l'esprit d'analyse",
      "Préparer l'orientation",
      "Réussir le brevet des collèges"
    ]
  },
];

const NiveauxPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header avec navigation */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <Link
            href="/"
            className="inline-flex items-center text-gray-600 hover:text-[#D93030] transition-colors font-work-sans"
          >
            <FiArrowLeft className="mr-2 w-5 h-5" />
            Retour à l'accueil
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-[#19559D] via-[#3BA65E] to-[#F2B600] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/grid.png')] opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white max-w-4xl mx-auto"
          >
            <span className="inline-block bg-white/20 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
              Notre Parcours Éducatif
            </span>
            <h1 className="font-oswald text-5xl md:text-6xl font-bold mb-6">
              De la Crèche au Collège
            </h1>
            <div className="w-24 h-2 bg-white rounded-full mx-auto mb-8" />
            <p className="text-xl text-white/90 font-work-sans max-w-3xl mx-auto leading-relaxed">
              Un parcours éducatif complet et cohérent, adapté à chaque étape du développement de l'enfant. 
              Notre approche pédagogique vise l'excellence tout en respectant le rythme de chaque élève.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section des niveaux */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12">
            {levels.map((level, index) => (
              <motion.div
                key={level.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Image */}
                <div className={`relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl ${
                  index % 2 === 1 ? 'lg:order-2' : ''
                }`}>
                  <Image
                    src={level.image}
                    alt={level.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <span className="bg-white/90 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold">
                      {level.ageRange}
                    </span>
                  </div>
                </div>

                {/* Contenu */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div>
                    <h2 className="font-oswald text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                      {level.name}
                    </h2>
                    <p className="text-gray-600 text-lg font-work-sans leading-relaxed">
                      {level.description}
                    </p>
                  </div>

                  {/* Fonctionnalités */}
                  <div>
                    <h3 className="font-oswald text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                      <FiBookOpen className="w-5 h-5 text-[#19559D]" />
                      Nos Approches
                    </h3>
                    <ul className="space-y-3">
                      {level.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-[#3BA65E] rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-700 font-work-sans">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Objectifs */}
                  <div>
                    <h3 className="font-oswald text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                      <FiTarget className="w-5 h-5 text-[#F2B600]" />
                      Nos Objectifs
                    </h3>
                    <ul className="space-y-3">
                      {level.objectives.map((objective, objectiveIndex) => (
                        <li key={objectiveIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-[#D93030] rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-700 font-work-sans">{objective}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="pt-4">
                    <Link
                      href="/contact"
                      className="inline-flex items-center bg-gradient-to-r from-[#19559D] to-[#3BA65E] text-white font-semibold px-8 py-4 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <FiUsers className="mr-2 w-5 h-5" />
                      En savoir plus sur ce niveau
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Projet Éducatif */}
      <section className="py-20 bg-gradient-to-r from-[#19559D] via-[#3BA65E] to-[#F2B600] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/grid.png')] opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white max-w-4xl mx-auto"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12">
              <div className="flex items-center justify-center mb-8">
                <div className="bg-white/20 p-6 rounded-full">
                  <FiHeart className="w-12 h-12 text-white" />
                </div>
              </div>
              <h2 className="font-oswald text-4xl md:text-5xl font-bold mb-6">
                Notre Projet Éducatif
              </h2>
              <p className="text-xl text-white/90 font-work-sans mb-8 leading-relaxed">
                Nous visons l'excellence avec un programme d'enseignements et d'examens intensifs, 
                émaillé par des activités extrascolaires et périscolaires pour un développement complet de l'élève.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FiTarget className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-oswald text-xl font-bold mb-2">Excellence</h3>
                  <p className="text-white/80 font-work-sans">Viser le meilleur de chaque élève</p>
                </div>
                <div className="text-center">
                  <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FiUsers className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-oswald text-xl font-bold mb-2">Collaboration</h3>
                  <p className="text-white/80 font-work-sans">Parents et enseignants main dans la main</p>
                </div>
                <div className="text-center">
                  <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FiBookOpen className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-oswald text-xl font-bold mb-2">Développement</h3>
                  <p className="text-white/80 font-work-sans">Activités extrascolaires enrichissantes</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-4xl mx-auto">
              <h2 className="font-oswald text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Prêt à Rejoindre L'Odyssée ?
              </h2>
              <p className="text-gray-600 text-lg font-work-sans mb-8 max-w-2xl mx-auto">
                Découvrez comment notre approche pédagogique peut accompagner votre enfant 
                dans son parcours éducatif et son développement personnel.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-[#19559D] to-[#3BA65E] text-white font-semibold px-8 py-4 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  Nous Contacter
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default NiveauxPage;
