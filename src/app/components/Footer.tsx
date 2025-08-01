"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineLocationMarker, HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
import { SiTiktok } from "react-icons/si";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white relative overflow-hidden">
      {/* Fond décoratif */}
      <div className="absolute inset-0 bg-[url('/assets/grid.png')] opacity-5 pointer-events-none" />

      {/* Section principale */}
      <div className="relative border-b border-white/10">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 leading-relaxed">
            {/* 1. Logo + description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Link href="/" className="block" aria-label="Retour à l'accueil">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-[#D93030] rounded-full flex items-center justify-center">
                    <span className="text-white font-oswald font-bold text-lg">L</span>
                  </div>
                  <div>
                    <h1 className="font-oswald font-bold text-lg text-white">L'Odyssée</h1>
                    <p className="text-xs text-[#D93030]">Groupe Scolaire</p>
                  </div>
                </div>
              </Link>
              <p className="text-gray-300 font-work-sans text-sm leading-relaxed">
                Groupe Scolaire Privé L'Odyssée : excellence éducative de la crèche au collège.
                Programme intensif, activités extrascolaires et collaboration parents-enseignants.
              </p>
              <div className="flex space-x-4 text-gray-300 mt-2">
                <a
                  href="https://web.facebook.com/GroupeScolaireOdyssee/?_rdc=1&_rdr#"
                  aria-label="Facebook"
                  className="hover:text-[#D93030] transition-transform hover:scale-110"
                >
                  <FaFacebookF className="text-xl" />
                </a>
                <a
                  href="https://www.tiktok.com/@groupe.scolaire.odyssee"
                  aria-label="TikTok"
                  className="hover:text-[#D93030] transition-transform hover:scale-110"
                >
                  <SiTiktok className="text-xl" />
                </a>
                <a
                  href="https://www.linkedin.com/company/groupe-scolaire-odyssee/?viewAsMember=true"
                  aria-label="LinkedIn"
                  className="hover:text-[#D93030] transition-transform hover:scale-110"
                >
                  <FaLinkedinIn className="text-xl" />
                </a>
              </div>
            </motion.div>

            {/* 2. Liens rapides */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="font-oswald text-xl font-bold mb-6 text-white">Liens Rapides</h3>
              <ul className="space-y-4 text-sm">
                <li><Link href="/" className="text-gray-300 hover:text-[#D93030]">Accueil</Link></li>
                <li><Link href="/niveaux" className="text-gray-300 hover:text-[#D93030]">Nos Niveaux</Link></li>
                <li><Link href="/propos" className="text-gray-300 hover:text-[#D93030]">À Propos</Link></li>
                <li><Link href="/contact" className="text-gray-300 hover:text-[#D93030]">Contact</Link></li>
              </ul>
            </motion.div>

            {/* 3. Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="font-oswald text-xl font-bold mb-6 text-white">Contact</h3>
              <ul className="space-y-4 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <HiOutlineLocationMarker className="mt-1 text-[#D93030]" />
                  <span>
                    97116, Rue de BOUK' LI - BWALI, Camp 31 juillet,
                    vers le PELLIGRINI et la direction d'OFIS, Pointe-Noire, République du Congo
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <HiOutlinePhone className="mt-1 text-[#D93030]" />
                  <span>+242 05 585 02 02 / +242 04 061 34 48</span>
                </li>
                <li className="flex items-start gap-2">
                  <HiOutlineMail className="mt-1 text-[#D93030]" />
                  <span>contact@lodyssee.com</span>
                </li>
              </ul>
            </motion.div>

            {/* 4. Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="font-oswald text-xl font-bold mb-6 text-white">Newsletter</h3>
              <p className="text-gray-300 text-sm mb-4">
                Inscrivez-vous pour recevoir nos actualités éducatives et informations importantes.
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[#D93030] text-white"
                />
                <button
                  type="submit"
                  className="w-full bg-[#D93030] hover:bg-[#c02020] text-white font-semibold py-3 rounded-lg transition-colors"
                >
                  S'inscrire
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative bg-gray-900">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p className="text-center md:text-left">
              © {currentYear} Groupe Scolaire L'Odyssée. Tous droits réservés.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-[#D93030] transition-colors">
                Politique de confidentialité
              </Link>
              <Link href="/terms" className="hover:text-[#D93030] transition-colors">
                Conditions d'utilisation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
