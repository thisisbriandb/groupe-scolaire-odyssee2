import { Metadata } from 'next';
import { getNews } from '@/app/api/news/[id]/route';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Image from 'next/image';
import { FiCalendar, FiUser, FiShare2 } from 'react-icons/fi';

interface NewsPageProps {
  params: { id: string };
}

export async function generateMetadata(
  { params }: NewsPageProps
): Promise<Metadata> {
  const news = await getNews(params.id);

  if (!news) {
    return {
      title: "Actualité non trouvée | Groupe Scolaire L'Odyssée",
      description: "Cette actualité n'existe pas ou a été supprimée.",
    };
  }

  return {
    title: `${news.title} | Groupe Scolaire L'Odyssée`,
    description: news.content.substring(0, 160),
    openGraph: {
      title: news.title,
      description: news.content.substring(0, 160),
      images: [news.image],
      type: 'article',
      locale: 'fr_FR',
      siteName: "Groupe Scolaire L'Odyssée",
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `https://www.lodyssee.ma/actualites/${params.id}`,
    },
  };
}

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'inscription':
      return 'bg-green-600 text-white';
    case 'activites':
      return 'bg-yellow-400 text-gray-900';
    case 'reunion':
      return 'bg-purple-700 text-white';
    default:
      return 'bg-[#D93030] text-white';
  }
};

const getCategoryLabel = (category: string) => {
  switch (category) {
    case 'inscription':
      return 'Inscription';
    case 'activites':
      return 'Activités';
    case 'reunion':
      return 'Réunion';
    default:
      return 'Actualité';
  }
};

export default async function NewsDetailPage({ params }: NewsPageProps) {
  const news = await getNews(params.id);

  if (!news) {
    return (
      <main>
        <Header />
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-oswald font-bold text-gray-900 mb-4">
              Actualité non trouvée
            </h1>
            <p className="text-gray-600">
              Cette actualité n'existe pas ou a été supprimée.
            </p>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  const shareUrl = `https://www.lodyssee.ma/actualites/${params.id}`;
  const shareText = `${news.title} - Groupe Scolaire L'Odyssée`;

  return (
    <main>
      <Header />
      <article className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex items-center gap-4 mb-6">
              <span
                className={`px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(news.category)}`}
              >
                {getCategoryLabel(news.category)}
              </span>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <FiCalendar className="w-4 h-4" />
                <time dateTime={news.date.toISOString()}>
                  {new Date(news.date).toLocaleDateString('fr-FR', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </time>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <FiUser className="w-4 h-4" />
                <span>{news.author}</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-oswald font-bold text-gray-900 mb-8">
              {news.title}
            </h1>
          </div>

          <div className="max-w-4xl mx-auto mb-12 relative aspect-video rounded-xl overflow-hidden">
            <Image
              src={news.image}
              alt={news.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none mb-12">
              {news.content.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="border-t pt-8">
              <div className="flex items-center gap-4">
                <span className="font-semibold text-gray-700 flex items-center gap-2">
                  <FiShare2 className="w-5 h-5" />
                  Partager
                </span>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    shareUrl
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 transition-colors"
                >
                  Facebook
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                    shareUrl
                  )}&text=${encodeURIComponent(shareText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-500 hover:text-sky-600 transition-colors"
                >
                  Twitter
                </a>
                <a
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                    shareUrl
                  )}&title=${encodeURIComponent(shareText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-800 hover:text-blue-900 transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}