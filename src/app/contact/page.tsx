'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: formData.email,
          name: formData.name,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (!response.ok) throw new Error('Erreur lors de l\'envoi du message');

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Erreur:', error);
      setStatus('error');
    }
  };

  return (
    <>
      <Header />
      <main>

        {/* Hero Section avec fond image */}
        <section
          className="relative h-[40vh] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/odyssee.png')" }}
        >
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-white"
            >
              <h1 className="font-oswald text-5xl font-bold mb-4">Contactez-nous</h1>
              <p className="font-work-sans text-lg">Nous sommes à votre écoute</p>
            </motion.div>
          </div>
        </section>

        {/* Infos + Form */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

              {/* Infos de contact */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-oswald font-bold mb-6 text-[#1D3557]">Restons en contact</h2>
                  <p className="text-gray-600 font-work-sans">
                    N'hésitez pas à nous contacter pour toute question ou demande de devis. 
                    Notre équipe est à votre disposition pour vous accompagner.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#D93030]/10 p-3 rounded-full">
                      <FaPhone className="text-[#D93030] w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-oswald font-semibold text-lg text-[#1D3557]">Téléphone</h3>
                      <p className="text-gray-600 font-work-sans">+242 05 585 02 02</p>
                      <p className="text-gray-600 font-work-sans">+242 04 061 34 48</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-[#D93030]/10 p-3 rounded-full">
                      <FaEnvelope className="text-[#D93030] w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-oswald font-semibold text-lg text-[#1D3557]">Email</h3>
                      <p className="text-gray-600 font-work-sans">contact@gs-lodysse.com</p>
                      <p className="text-gray-600 font-work-sans">contact@gs-lodysse.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-[#D93030]/10 p-3 rounded-full">
                      <FaMapMarkerAlt className="text-[#D93030] w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-oswald font-semibold text-lg text-[#1D3557]">Adresse</h3>
                      <p className="text-gray-600 font-work-sans">
                        Rue de BOUK' LI - BWALI, Camp 31 juillet, vers le PELLIGRIN<br />
                        Pointe-noire, Congo
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Formulaire */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-xl p-8"
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  {['name', 'email', 'subject'].map((field) => (
                    <div key={field}>
                      <label htmlFor={field} className="block font-work-sans text-gray-700 mb-2 capitalize">
                        {field === 'name' ? 'Nom complet' : field === 'email' ? 'Email' : 'Sujet'}
                      </label>
                      <input
                        type={field === 'email' ? 'email' : 'text'}
                        id={field}
                        name={field}
                        value={formData[field as keyof typeof formData]}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D93030] focus:ring-2 focus:ring-[#D93030]/20 outline-none transition-all font-work-sans"
                        required
                      />
                    </div>
                  ))}

                  <div>
                    <label htmlFor="message" className="block font-work-sans text-gray-700 mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D93030] focus:ring-2 focus:ring-[#D93030]/20 outline-none transition-all font-work-sans resize-none"
                      required
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={status === 'loading'}
                    className={`w-full bg-[#D93030] text-white font-oswald text-lg py-4 rounded-lg hover:bg-[#b22020] transition-colors ${
                      status === 'loading' ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {status === 'loading' ? 'Envoi en cours...' : 'Envoyer le message'}
                  </motion.button>
                </form>

                {status === 'success' && (
                  <div className="mt-4 p-4 bg-green-50 text-green-700 rounded-xl">
                    Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.
                  </div>
                )}
                {status === 'error' && (
                  <div className="mt-4 p-4 bg-red-50 text-red-700 rounded-xl">
                    Une erreur est survenue lors de l'envoi du message. Veuillez réessayer.
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Carte Google Maps */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-xl overflow-hidden shadow-lg h-[500px]"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d19989.191899139356!2d11.850262!3d-4.797496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2scg!4v1698888888888!5m2!1sfr!2scg"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
export default ContactPage;
