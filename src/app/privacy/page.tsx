'use client';

import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPage = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8"
          >
            <h1 className="text-4xl font-oswald font-bold text-gray-900 mb-8">
              Politique de Confidentialité
            </h1>

            <div className="space-y-8 font-work-sans">
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Collecte des Informations</h2>
                <p className="text-gray-700 leading-relaxed">
                  Nous collectons les informations que vous nous fournissez directement lorsque vous :
                </p>
                <ul className="list-disc list-inside mt-2 space-y-2 text-gray-700">
                  <li>Remplissez notre formulaire de contact</li>
                  <li>Passez une commande</li>
                  <li>Vous inscrivez à notre newsletter</li>
                  <li>Communiquez avec notre service client</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Utilisation des Informations</h2>
                <p className="text-gray-700 leading-relaxed">
                  Les informations que nous collectons sont utilisées pour :
                </p>
                <ul className="list-disc list-inside mt-2 space-y-2 text-gray-700">
                  <li>Traiter vos commandes et demandes</li>
                  <li>Améliorer nos services</li>
                  <li>Communiquer avec vous concernant nos produits et services</li>
                  <li>Personnaliser votre expérience sur notre site</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Protection des Données</h2>
                <p className="text-gray-700 leading-relaxed">
                  Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos informations personnelles contre tout accès non autorisé, modification, divulgation ou destruction.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Cookies</h2>
                <p className="text-gray-700 leading-relaxed">
                  Notre site utilise des cookies pour améliorer votre expérience de navigation. Vous pouvez configurer votre navigateur pour refuser tous les cookies ou pour être averti lorsqu'un cookie est envoyé.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Contact</h2>
                <p className="text-gray-700 leading-relaxed">
                  Pour toute question concernant notre politique de confidentialité, vous pouvez nous contacter à :
                </p>
                <div className="mt-2 text-gray-700">
                  <p>Email : privacy@jackindustries.ma</p>
                  <p>Téléphone : +212 6 16 96 65 09</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Modifications</h2>
                <p className="text-gray-700 leading-relaxed">
                  Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Les modifications entrent en vigueur dès leur publication sur le site.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPage; 