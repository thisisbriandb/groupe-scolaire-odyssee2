import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PopularProducts from './components/PopularProducts';
import Testimonials from './components/Testimonials';
import NewsSection from './components/NewsSection';
import StatSection from './components/StatSection';
import Footer from './components/Footer';
import PageSchema from '@/components/PageSchema';
import { Metadata } from 'next';

const homeFAQs = [
  {
    question: "Quels sont les niveaux d'enseignement proposés ?",
    answer: "Notre Groupe Scolaire L'Odyssée accueille les élèves de la crèche au collège, en passant par la maternelle et l'élémentaire, offrant ainsi un parcours éducatif complet et cohérent."
  },
  {
    question: "Quelle est votre approche pédagogique ?",
    answer: "Nous visons l'excellence avec un programme d'enseignements et d'examens intensifs, émaillé par des activités extrascolaires et périscolaires pour un développement complet de l'élève."
  },
  {
    question: "Comment se déroule la collaboration parents-enseignants ?",
    answer: "Les parents et les enseignants se font mutuellement confiance et avancent vers le même but, en se penchant ensemble sur les difficultés et les capacités de l'élève pour assurer l'égalité des chances."
  },
  {
    question: "Proposez-vous des activités extrascolaires ?",
    answer: "Oui, nous proposons un large éventail d'activités extrascolaires et périscolaires pour enrichir l'expérience éducative et développer les talents de chaque élève."
  },
  {
    question: "Quels sont les horaires d'ouverture ?",
    answer: "Notre école est ouverte du lundi au vendredi avec des horaires adaptés à chaque niveau. La crèche propose également un accueil flexible pour les familles."
  },
  {
    question: "Comment s'inscrire à l'école L'Odyssée ?",
    answer: "Les inscriptions se font sur rendez-vous. Notre équipe administrative vous accompagne dans toutes les démarches et répond à vos questions sur notre projet éducatif."
  },
  {
    question: "Proposez-vous un service de restauration ?",
    answer: "Oui, nous proposons un service de restauration scolaire avec des menus équilibrés et variés, préparés sur place dans notre cuisine."
  },
  {
    question: "Quels sont les tarifs de scolarité ?",
    answer: "Les tarifs varient selon le niveau d'enseignement. Nous proposons également des facilités de paiement et des réductions pour les fratries. Contactez-nous pour plus d'informations."
  }
];

const testimonials = [
  {
    author: "Fatima Alami",
    reviewBody: "Excellente école avec un projet éducatif solide. Mon fils a fait d'énormes progrès depuis son entrée à L'Odyssée. L'équipe pédagogique est très investie.",
    reviewRating: 5,
    datePublished: "2024-01-15"
  },
  {
    author: "Karim Benjelloun",
    reviewBody: "Une école qui prône vraiment l'excellence. Les activités extrascolaires sont variées et les résultats scolaires sont au rendez-vous. Je recommande vivement.",
    reviewRating: 5,
    datePublished: "2024-01-20"
  },
  {
    author: "Sara Mansouri",
    reviewBody: "L'équipe enseignante est très professionnelle et bienveillante. La communication avec les parents est excellente. Mon enfant s'épanouit vraiment dans cette école.",
    reviewRating: 5,
    datePublished: "2024-01-25"
  }
];

export const metadata: Metadata = {
  title: 'Groupe Scolaire L\'Odyssée | Excellence Éducative de la Crèche au Collège',
  description: 'Groupe Scolaire Privé L\'Odyssée : excellence éducative de la crèche au collège. Programme intensif, activités extrascolaires et collaboration parents-enseignants pour l\'égalité des chances.',
  keywords: 'école privée Maroc, groupe scolaire, crèche, maternelle, élémentaire, collège, excellence éducative, activités extrascolaires, pédagogie, inscription école, éducation Maroc',
  openGraph: {
    title: 'Groupe Scolaire L\'Odyssée | Excellence Éducative',
    description: 'Votre partenaire éducatif de la crèche au collège. Excellence, activités extrascolaires et égalité des chances.',
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
    canonical: 'https://www.gs-lodyssee.com'
  }
};

export default function Home() {
  return (
    <main>
      <PageSchema 
        faqs={homeFAQs}
        breadcrumbs={[
          { name: 'Accueil', url: '/' }
        ]}
        showLocalBusiness={true}
        showServices={true}
        reviews={testimonials}
      />
      <Header />
      <HeroSection />
      <PopularProducts />
      <StatSection />
      <NewsSection />
      <Testimonials />
        <Footer />
    </main>
  );
}
