import { Organization } from 'schema-dts';

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'JACK Industries',
  url: 'https://www.jackindustries.ma',
  logo: 'https://www.jackindustries.ma/images/logo.png',
  description: 'Fournisseur leader de matériel de construction, outils et quincaillerie au Maroc. Spécialiste en outillage professionnel et équipements de construction.',
  slogan: 'Votre partenaire de confiance en matériel de construction',
  foundingDate: '1995',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'MA',
    addressLocality: 'Casablanca',
    streetAddress: '[Votre adresse exacte]',
    postalCode: '[Code postal]',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+212 6 16 96 65 09',
      contactType: 'customer service',
      availableLanguage: ['fr', 'ar'],
      areaServed: 'MA',
      hoursAvailable: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '18:00'
      }
    },
    {
      '@type': 'ContactPoint',
      telephone: '+212 6 16 96 65 09',
      contactType: 'sales',
      availableLanguage: ['fr', 'ar'],
      areaServed: 'MA'
    }
  ],
  sameAs: [
    'https://web.facebook.com/jack.industries.2024/',
    'https://www.linkedin.com/company/jack-industrie/',
  ],
  areaServed: {
    '@type': 'Country',
    name: 'Maroc'
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Catalogue JACK Industries',
    itemListElement: [
      {
        '@type': 'OfferCatalog',
        name: 'Outillage Professionnel'
      },
      {
        '@type': 'OfferCatalog',
        name: 'Matériel de Construction'
      },
      {
        '@type': 'OfferCatalog',
        name: 'Quincaillerie'
      }
    ]
  }
} as Organization; 