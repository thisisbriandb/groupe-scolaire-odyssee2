import { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NewsSection from '../components/NewsSection';

export const metadata: Metadata = {
  title: 'Actualités | Groupe Scolaire L\'Odyssée',
  description: 'Découvrez les dernières actualités du Groupe Scolaire L\'Odyssée : inscriptions, activités, événements et informations importantes.',
  keywords: 'actualités école, nouvelles L\'Odyssée, événements scolaires, inscriptions, activités extrascolaires',
  openGraph: {
    title: 'Actualités | Groupe Scolaire L\'Odyssée',
    description: 'Les dernières actualités et informations du Groupe Scolaire L\'Odyssée.',
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Groupe Scolaire L\'Odyssée',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#223F7B',
  alternates: {
    canonical: 'https://www.lodyssee.ma/actualites'
  }
};

export default function ActualitesPage() {
  return (
    <main>
      <Header />
      <NewsSection />
      <Footer />
    </main>
  );
} 