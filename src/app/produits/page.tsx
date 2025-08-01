'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Product } from '@/lib/types';
import { getProducts } from '@/lib/api';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PRODUCTS_PER_PAGE = 9;

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const productsData = await getProducts();
        setProducts(productsData);
      } catch (error) {
        console.error('Erreur lors du chargement des produits:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          <p className="text-gray-600 font-work-sans">Chargement des produits...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section améliorée */}
        <section className="relative h-[50vh] bg-gradient-to-r from-gray-900 via-primary/90 to-gray-900 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/assets/grid.png')] opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute inset-0 flex items-center justify-center text-center px-4"
          >
            <div className="max-w-3xl">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="font-oswald text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg"
              >
                Nos Produits
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="font-work-sans text-xl text-white/90 max-w-2xl mx-auto leading-relaxed"
              >
                Découvrez notre gamme complète de produits professionnels, sélectionnés pour leur qualité et leur performance exceptionnelle.
              </motion.p>
            </div>
          </motion.div>
        </section>

        {/* Barre de recherche améliorée */}
        <section className="py-12 relative z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative group"
              >
                <input
                  type="text"
                  placeholder="Rechercher un produit..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 rounded-xl border border-gray-200 shadow-lg 
                    focus:ring-4 focus:ring-primary/20 focus:border-primary outline-none
                    transition-all duration-300 bg-white/80 backdrop-blur-sm"
                />
                <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </span>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Grille de produits améliorée */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            {products.length === 0 ? (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16 bg-white rounded-2xl shadow-xl"
              >
                <p className="text-gray-500 text-lg mb-4">
                  Aucun produit disponible pour le moment.
                </p>
              </motion.div>
            ) : currentProducts.length === 0 ? (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16 bg-white rounded-2xl shadow-xl"
              >
                <p className="text-gray-500 text-lg mb-4">
                  Aucun produit ne correspond à votre recherche.
                </p>
                <button 
                  onClick={() => {
                    setSearchTerm('');
                    setCurrentPage(1);
                  }}
                  className="text-primary hover:text-primary-dark transition-colors font-semibold"
                >
                  Réinitialiser la recherche
                </button>
              </motion.div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {currentProducts.map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                      className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                    >
                      <Link href={`/produits/${product.id}`} className="block">
                        <div className="relative h-64 w-full overflow-hidden">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            priority={index < 3}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="bg-white text-primary px-6 py-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 font-semibold shadow-lg">
                              Voir les détails
                            </span>
                          </div>
                        </div>
                      </Link>

                      <div className="p-6">
                        <Link href={`/produits/${product.id}`}>
                          <h2 className="font-oswald text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                            {product.name}
                          </h2>
                          <p className="text-gray-600 text-sm mb-4 line-clamp-2 font-work-sans">
                            {product.description}
                          </p>
                        </Link>
                        <div className="flex justify-between items-center gap-4">
                          <Link href={`/produits/${product.id}`} className="text-sm text-gray-500 group-hover:text-primary transition-colors flex items-center gap-2">
                            En savoir plus
                            <svg 
                              xmlns="http://www.w3.org/2000/svg" 
                              className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" 
                              fill="none" 
                              viewBox="0 0 24 24" 
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                          <a
                            href="https://wa.me/212616966509"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary/90 transition-all duration-300 font-semibold text-center shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                          >
                            Contacter
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Pagination améliorée */}
                {totalPages > 1 && (
                  <div className="mt-16 flex flex-wrap justify-center gap-3">
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                        currentPage === 1
                          ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                          : 'bg-white text-primary hover:bg-primary hover:text-white shadow-md hover:shadow-xl border border-primary'
                      }`}
                    >
                      Précédent
                    </button>
                    
                    {[...Array(totalPages)].map((_, index) => (
                      <button
                        key={index + 1}
                        onClick={() => handlePageChange(index + 1)}
                        className={`w-12 h-12 rounded-xl font-semibold transition-all duration-300 ${
                          currentPage === index + 1
                            ? 'bg-primary text-white shadow-lg scale-110'
                            : 'bg-white text-primary hover:bg-primary hover:text-white shadow-md hover:shadow-xl border border-primary'
                        }`}
                      >
                        {index + 1}
                      </button>
                    ))}
                    
                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                        currentPage === totalPages
                          ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                          : 'bg-white text-primary hover:bg-primary hover:text-white shadow-md hover:shadow-xl border border-primary'
                      }`}
                    >
                      Suivant
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ProductsPage;
