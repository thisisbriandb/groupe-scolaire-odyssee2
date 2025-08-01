"use client";

import { useState, useEffect, useRef } from 'react';
import { useAuth } from '@/lib/hooks/useAuth';
import { signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiUpload, FiX, FiCalendar, FiUser } from 'react-icons/fi';

// Type pour les actualités
interface News {
  id: string;
  title: string;
  content: string;
  image: string;
  author: string;
  date: Date;
  category: string;
  isPublished: boolean;
}

// Fonctions API pour les actualités (à implémenter dans lib/api.ts)
const getNews = async (): Promise<News[]> => {
  // TODO: Implémenter l'appel API réel
  const response = await fetch('/api/news');
  return response.json();
};

const addNews = async (newsData: Omit<News, 'id'>): Promise<News> => {
  const response = await fetch('/api/news', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newsData),
  });
  return response.json();
};

const updateNews = async (id: string, newsData: Partial<News>): Promise<News> => {
  const response = await fetch(`/api/news/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newsData),
  });
  return response.json();
};

const deleteNews = async (id: string): Promise<void> => {
  await fetch(`/api/news/${id}`, {
    method: 'DELETE',
  });
};

const Dashboard = () => {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [news, setNews] = useState<News[]>([]);
  const [isAddingNews, setIsAddingNews] = useState(false);
  const [editingNews, setEditingNews] = useState<News | null>(null);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    image: '',
    author: '',
    category: 'actualite',
    isPublished: true
  });

  useEffect(() => {
    loadNews();
  }, []);

  const loadNews = async () => {
    try {
      const newsData = await getNews();
      console.log('Actualités chargées:', newsData);
      setNews(newsData);
    } catch (error) {
      console.error('Erreur lors du chargement des actualités:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.clear();
      sessionStorage.clear();
      document.cookie.split(";").forEach(function(c) { 
        document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
      });
      await new Promise(resolve => setTimeout(resolve, 100));
      window.location.replace('/admin/login');
    } catch (error) {
      console.error('Erreur lors de la déconnexion:', error);
      alert('Erreur lors de la déconnexion');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      if (!formData.image) {
        alert('Veuillez ajouter une image');
        return;
      }

      const newsData = {
        title: formData.title,
        content: formData.content,
        image: formData.image,
        author: formData.author,
        category: formData.category,
        isPublished: formData.isPublished,
        date: new Date()
      };

      if (editingNews) {
        await updateNews(editingNews.id, newsData);
      } else {
        await addNews(newsData);
      }

      await loadNews();
      resetForm();
      setIsAddingNews(false);
      setEditingNews(null);
    } catch (error) {
      console.error('Erreur lors de la sauvegarde:', error);
      alert('Erreur lors de la sauvegarde de l\'actualité');
    }
  };

  const handleEdit = (newsItem: News) => {
    setEditingNews(newsItem);
    setFormData({
      title: newsItem.title,
      content: newsItem.content,
      image: newsItem.image,
      author: newsItem.author,
      category: newsItem.category,
      isPublished: newsItem.isPublished
    });
    setIsAddingNews(true);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cette actualité ?')) {
      try {
        await deleteNews(id);
        await loadNews();
        setIsAddingNews(false);
        setEditingNews(null);
      } catch (error) {
        console.error('Erreur lors de la suppression:', error);
        alert('Erreur lors de la suppression');
      }
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      content: '',
      image: '',
      author: '',
      category: 'actualite',
      isPublished: true
    });
  };

  const handleImageUpload = async (file: File) => {
    try {
      setUploading(true);
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'jack_products');

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: 'POST',
          body: formData,
        }
      );

      const data = await response.json();
      if (data.secure_url) {
        setFormData(prev => ({
          ...prev,
          image: data.secure_url
        }));
      }
    } catch (error) {
      console.error('Erreur lors de l\'upload:', error);
      alert('Erreur lors de l\'upload de l\'image');
    } finally {
      setUploading(false);
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'inscription': return 'bg-accent-green text-white';
      case 'activites': return 'bg-accent-yellow text-gray-900';
      case 'reunion': return 'bg-accent-bordeaux text-white';
      default: return 'bg-accent-red text-white';
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'inscription': return 'Inscription';
      case 'activites': return 'Activités';
      case 'reunion': return 'Réunion';
      default: return 'Actualité';
    }
  };

  if (loading) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Navbar fixe */}
      <nav className="bg-primary shadow-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-accent-red rounded-full flex items-center justify-center">
                <span className="text-white font-oswald font-bold text-sm">L</span>
              </div>
              <h1 className="font-oswald text-xl font-bold text-white">Dashboard L'Odyssée</h1>
            </div>
            <button
              onClick={handleLogout}
              className="text-white hover:text-accent-red transition-colors"
            >
              Déconnexion
            </button>
          </div>
        </div>
      </nav>

      {/* Contenu principal avec défilement */}
      <main className="flex-1 overflow-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Bouton d'ajout fixe en bas à droite */}
          <button
            onClick={() => {
              resetForm();
              setIsAddingNews(true);
            }}
            className="fixed bottom-6 right-6 bg-accent-red text-white p-4 rounded-full shadow-lg hover:bg-accent-red/90 transition-colors z-30"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>

          {/* Liste des actualités */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 pb-20">
            {news.map((newsItem) => (
              <motion.div
                key={newsItem.id}
                layout
                className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48">
                  {newsItem.image && (
                    <Image
                      src={newsItem.image}
                      alt={newsItem.title}
                      fill
                      className="object-cover"
                      unoptimized
                      priority
                    />
                  )}
                  <div className="absolute top-2 left-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getCategoryColor(newsItem.category)}`}>
                      {getCategoryLabel(newsItem.category)}
                    </span>
                  </div>
                  <div className="absolute top-2 right-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${newsItem.isPublished ? 'bg-accent-green text-white' : 'bg-gray-500 text-white'}`}>
                      {newsItem.isPublished ? 'Publié' : 'Brouillon'}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button
                      onClick={() => handleEdit(newsItem)}
                      className="bg-white text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors transform hover:scale-105"
                    >
                      Modifier
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-oswald text-lg font-semibold line-clamp-2 mb-2">{newsItem.title}</h3>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-3">{newsItem.content}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center space-x-2">
                      <FiUser className="w-3 h-3" />
                      <span>{newsItem.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FiCalendar className="w-3 h-3" />
                      <span>{new Date(newsItem.date).toLocaleDateString('fr-FR')}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      {/* Modal d'ajout/édition d'actualité */}
      {isAddingNews && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-8 rounded-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-oswald font-bold">
                {editingNews ? 'Modifier l\'actualité' : 'Ajouter une actualité'}
              </h2>
              <div className="flex gap-2">
                {editingNews && (
                  <button
                    onClick={() => handleDelete(editingNews.id)}
                    className="text-red-500 hover:text-red-700 px-3 py-1 rounded"
                  >
                    Supprimer
                  </button>
                )}
                <button
                  onClick={() => {
                    resetForm();
                    setIsAddingNews(false);
                    setEditingNews(null);
                  }}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <FiX size={24} />
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Image upload */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Image de l'actualité
                </label>
                <div className="relative">
                  {!formData.image ? (
                    <div 
                      onClick={() => fileInputRef.current?.click()}
                      className="w-full border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-accent-red transition-colors bg-gray-50 hover:bg-gray-100"
                    >
                      <input
                        type="file"
                        ref={fileInputRef}
                        className="hidden"
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            handleImageUpload(file);
                          }
                        }}
                      />
                      <div>
                        <FiUpload className="mx-auto h-8 w-8 text-gray-500" />
                        <p className="mt-2 text-sm text-gray-700 font-medium">
                          {uploading ? 'Upload en cours...' : 'Cliquez pour sélectionner une image'}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          PNG, JPG jusqu'à 5MB
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="relative w-full h-48 rounded-lg overflow-hidden mb-2">
                      <Image
                        src={formData.image}
                        alt="Aperçu"
                        fill
                        className="object-cover"
                        unoptimized
                        priority
                      />
                      <button
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, image: '' }))}
                        className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 z-20"
                      >
                        <FiX size={20} />
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Titre */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Titre de l'actualité
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-accent-red/20 focus:border-accent-red outline-none"
                  required
                />
              </div>

              {/* Contenu */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Contenu
                </label>
                <textarea
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-accent-red/20 focus:border-accent-red outline-none min-h-[120px]"
                  required
                />
              </div>

              {/* Auteur */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Auteur
                </label>
                <input
                  type="text"
                  value={formData.author}
                  onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-accent-red/20 focus:border-accent-red outline-none"
                  required
                />
              </div>

              {/* Catégorie */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Catégorie
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-accent-red/20 focus:border-accent-red outline-none"
                >
                  <option value="actualite">Actualité</option>
                  <option value="inscription">Inscription</option>
                  <option value="activites">Activités</option>
                  <option value="reunion">Réunion</option>
                </select>
              </div>

              {/* Statut de publication */}
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="isPublished"
                  checked={formData.isPublished}
                  onChange={(e) => setFormData({ ...formData, isPublished: e.target.checked })}
                  className="rounded focus:ring-accent-red"
                />
                <label htmlFor="isPublished" className="text-sm font-medium text-gray-700">
                  Publier immédiatement
                </label>
              </div>

              <div className="flex justify-center mt-6">
                <button
                  type="submit"
                  className="w-full bg-accent-red text-white py-3 rounded-lg hover:bg-accent-red/90 transition-colors font-semibold text-lg shadow-md"
                >
                  {editingNews ? 'Mettre à jour' : 'Publier l\'actualité'}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Dashboard; 