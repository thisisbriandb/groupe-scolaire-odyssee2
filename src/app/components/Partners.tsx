'use client';

import { motion } from 'framer-motion';

const actualites = [
  {
    id: 1,
    titre: "Rentrée Scolaire 2024-2025",
    contenu: "La rentrée aura lieu le lundi 9 septembre. Merci de consulter le planning détaillé dans votre espace parent.",
  },
  {
    id: 2,
    titre: "Résultats du Brevet",
    contenu: "100% de réussite au Brevet des Collèges pour nos élèves cette année ! Félicitations à tous.",
  },
  {
    id: 3,
    titre: "Forum des Métiers",
    contenu: "Nos élèves du collège participeront au Forum des Métiers organisé le 15 octobre avec des intervenants professionnels.",
  },
  {
    id: 4,
    titre: "Journée Portes Ouvertes",
    contenu: "Nous vous invitons à découvrir notre établissement le samedi 12 novembre de 9h à 13h.",
  },
  {
    id: 5,
    titre: "Nouvelle Bibliothèque",
    contenu: "Un nouvel espace lecture est disponible pour tous les élèves, équipé de ressources pédagogiques modernes.",
  }
];

const Actualites = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-accent/10 text-accent px-5 py-2 rounded-full text-sm font-semibold">
            Actualités
          </span>
          <h2 className="text-4xl font-oswald font-bold mt-4 text-primary">Les dernières nouvelles</h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "5rem" }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="h-1.5 bg-accent mt-4 mx-auto rounded-full"
          />
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {actualites.map((actu, index) => (
            <motion.div
              key={actu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-gray-50 border border-gray-200 hover:border-primary rounded-xl p-6 shadow-sm transition duration-300"
            >
              <h3 className="font-oswald text-xl text-primary font-semibold mb-2">{actu.titre}</h3>
              <p className="text-gray-700 font-work-sans text-sm leading-relaxed">{actu.contenu}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 font-work-sans text-base max-w-3xl mx-auto">
            Restez informés des événements, projets pédagogiques et succès de nos élèves tout au long de l’année scolaire.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Actualites;
