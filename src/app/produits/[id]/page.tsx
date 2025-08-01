"use client";

import { useState, useEffect } from 'react';
import { getProduct } from '@/lib/api';
import { Product } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';

const ProductDetailPage = () => {
  const params = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        if (params.id) {
          const productData = await getProduct(params.id as string);
          setProduct(productData);
        }
      } catch (error) {
        console.error('Erreur lors du chargement du produit:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Produit non trouvé</h1>
        <Link href="/produits" className="text-primary hover:underline">
          Retour aux produits
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Link 
            href="/produits"
            className="text-primary hover:text-primary/80 font-semibold flex items-center gap-2 transition-colors"
          >
            ← Retour aux produits
          </Link>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-md"
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                unoptimized
                priority
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex flex-col justify-between"
            >
              <div>
                <h1 className="text-4xl font-oswald font-bold text-gray-900 mb-4">
                  {product.name}
                </h1>
                <p className="text-gray-800 text-lg leading-relaxed mb-8 font-work-sans">
                  {product.description}
                </p>
                <a 
                  href="https://wa.me/212616966509" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block w-full bg-primary text-white py-4 rounded-lg hover:bg-primary/90 transition-all duration-300 font-semibold text-lg text-center shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  Contacter pour commander
                </a>
                <p className="text-gray-700 text-sm text-center font-work-sans mt-4">
                  Pour plus d'informations sur les prix et la disponibilité
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;

