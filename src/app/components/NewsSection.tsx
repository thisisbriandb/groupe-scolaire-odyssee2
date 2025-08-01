"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiCalendar, FiUser, FiArrowRight } from "react-icons/fi";

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

const NewsSection = () => {
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    loadNews();
  }, []);

  const loadNews = async () => {
    try {
      const response = await fetch("/api/news");
      const newsData = await response.json();
      const publishedNews = newsData.filter((item: News) => item.isPublished);
      setNews(publishedNews);
    } catch (error) {
      console.error("Erreur lors du chargement des actualités:", error);
    } finally {
      setLoading(false);
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "inscription":
        return "bg-green-600 text-white";
      case "activites":
        return "bg-yellow-400 text-gray-900";
      case "reunion":
        return "bg-purple-700 text-white";
      default:
        return "bg-[#D93030] text-white";
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "inscription":
        return "Inscription";
      case "activites":
        return "Activités";
      case "reunion":
        return "Réunion";
      default:
        return "Actualité";
    }
  };

  const filteredNews =
    selectedCategory === "all"
      ? news
      : news.filter((item) => item.category === selectedCategory);

  const categories = [
    { value: "all", label: "Toutes" },
    { value: "actualite", label: "Actualités" },
    { value: "inscription", label: "Inscriptions" },
    { value: "activites", label: "Activités" },
    { value: "reunion", label: "Réunions" },
  ];

  if (loading) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#D93030] mx-auto" />
          <p className="mt-4 text-gray-600">Chargement des actualités...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Titre principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-[#D93030]/10 text-[#D93030] px-4 py-1 rounded-full text-sm font-semibold mb-4 font-work-sans">
            Actualités
          </span>
          <h1 className="text-4xl md:text-5xl font-oswald font-bold mb-4 text-gray-900">
            Les Actualités de L'Odyssée
          </h1>
          <div className="h-1 w-20 bg-[#D93030] mx-auto rounded-full mb-6" />
          <p className="text-gray-600 text-lg max-w-2xl mx-auto font-work-sans">
            Restez informés des dernières nouvelles, événements et informations importantes
            du Groupe Scolaire L'Odyssée.
          </p>
        </motion.div>

        {/* Filtres */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`px-5 py-2 rounded-full font-semibold transition-all duration-200 border text-sm font-work-sans ${
                selectedCategory === category.value
                  ? "bg-[#D93030] text-white shadow"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Grille */}
        {filteredNews.length === 0 ? (
          <div className="text-center text-gray-500 font-work-sans text-lg py-12">
            Aucune actualité disponible pour le moment.
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((newsItem, index) => (
              <motion.article
                key={newsItem.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
              >
                <div className="relative h-48">
                  {newsItem.image && (
                    <Image
                      src={newsItem.image}
                      alt={newsItem.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  )}
                  <div className="absolute top-3 left-3">
                    <span
                      className={`text-xs px-3 py-1 rounded-full font-semibold ${getCategoryColor(
                        newsItem.category
                      )}`}
                    >
                      {getCategoryLabel(newsItem.category)}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-oswald text-xl font-semibold mb-2 text-gray-900 group-hover:text-[#D93030] transition-colors line-clamp-2">
                    {newsItem.title}
                  </h3>

                  <p className="text-sm text-gray-600 mb-4 line-clamp-3 font-work-sans">
                    {newsItem.content}
                  </p>

                  <div className="flex justify-between text-xs text-gray-500 font-work-sans mb-4">
                    <div className="flex items-center gap-1">
                      <FiUser className="w-4 h-4" />
                      <span>{newsItem.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FiCalendar className="w-4 h-4" />
                      <span>{new Date(newsItem.date).toLocaleDateString("fr-FR")}</span>
                    </div>
                  </div>

                  <Link
                    href={`/actualites/${newsItem.id}`}
                    className="inline-flex items-center font-semibold text-sm text-[#D93030] hover:text-[#c02020] transition-colors"
                  >
                    Lire la suite
                    <FiArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        )}

        {/* CTA final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-[#1e3a8a] to-[#2563eb] p-10 rounded-2xl text-white shadow-lg">
            <h3 className="font-oswald text-2xl font-bold mb-4">
              Restez connectés avec L'Odyssée
            </h3>
            <p className="text-white/90 mb-6 font-work-sans max-w-xl mx-auto">
              Inscrivez-vous à notre newsletter pour recevoir les dernières actualités et informations importantes directement dans votre boîte mail.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-[#D93030] hover:bg-[#c02020] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Nous contacter
              <FiArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsSection;
