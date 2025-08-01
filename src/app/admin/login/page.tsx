"use client";

import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, checkIsAdmin } from '@/lib/firebase';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Cookies from 'js-cookie';

const AdminLoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Connexion de l'utilisateur
      console.log('Tentative de connexion pour:', email);
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      
      if (userCredential.user) {
        console.log('Utilisateur connecté, vérification des droits admin...');
        
        // Vérifier si l'utilisateur est admin
        const isAdmin = await checkIsAdmin(userCredential.user);
        console.log('Résultat de la vérification admin:', isAdmin);
        
        if (!isAdmin) {
          setError('Vous n\'avez pas les droits administrateur. Veuillez contacter l\'administrateur du site.');
          setLoading(false);
          return;
        }

        // Si admin, procéder à la connexion
        console.log('Droits admin confirmés, génération du token...');
        const token = await userCredential.user.getIdToken();
        Cookies.set('admin-token', token, { expires: 7 });
        console.log('Token défini, redirection vers le tableau de bord...');
        router.replace('/admin/dashboard');
      }
    } catch (error: any) {
      console.error('Erreur détaillée:', {
        code: error.code,
        message: error.message,
        name: error.name
      });
      
      // Gestion des différents types d'erreurs
      let errorMessage = 'Une erreur est survenue lors de la connexion';
      
      switch(error.code) {
        case 'auth/invalid-credential':
          errorMessage = 'Email ou mot de passe incorrect';
          break;
        case 'auth/too-many-requests':
          errorMessage = 'Trop de tentatives de connexion. Veuillez réessayer plus tard';
          break;
        case 'auth/network-request-failed':
          errorMessage = 'Erreur de connexion réseau. Vérifiez votre connexion internet';
          break;
        default:
          errorMessage = `Erreur: ${error.message}`;
      }
      
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full"
      >
        <div className="text-center mb-8">
          <h1 className="text-2xl font-oswald font-bold">Administration</h1>
          <p className="text-gray-600 font-work-sans">Connectez-vous pour gérer vos produits</p>
        </div>

        {error && (
          <div className="bg-red-50 text-red-500 p-4 rounded-lg mb-6 text-sm font-work-sans">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-gray-700 font-work-sans mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-700 font-work-sans mb-2">
              Mot de passe
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all pr-12"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
              >
                {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
              </button>
            </div>
          </div>

          <div className="pt-2">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white font-oswald text-lg py-4 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 mb-4 shadow-md"
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Connexion...
                </div>
              ) : (
                'Valider'
              )}
            </motion.button>

            <button
              type="button"
              onClick={() => router.push('/')}
              className="w-full bg-gray-200 text-gray-800 font-oswald text-lg py-4 rounded-lg hover:bg-gray-300 transition-colors shadow-md"
            >
              Retour
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default AdminLoginPage; 