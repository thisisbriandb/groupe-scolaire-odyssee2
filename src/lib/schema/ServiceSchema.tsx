import { Service } from 'schema-dts';

export const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Construction Equipment and Tools Supply',
  provider: {
    '@type': 'Organization',
    name: 'JACK Industries'
  },
  areaServed: {
    '@type': 'Country',
    name: 'Maroc'
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Services JACK Industries',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Installation d\'équipements',
          description: 'Service professionnel d\'installation et de mise en service de vos équipements'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Formation technique',
          description: 'Formation à l\'utilisation des machines et équipements professionnels'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Service après-vente',
          description: 'Support technique et maintenance de vos équipements'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Livraison',
          description: 'Service de livraison rapide dans tout le Maroc'
        }
      }
    ]
  },
  availableChannel: {
    '@type': 'ServiceChannel',
    serviceUrl: 'https://www.jackindustries.ma/services',
    servicePhone: {
      '@type': 'ContactPoint',
      telephone: '+212 6 16 96 65 09'
    },
    availableLanguage: ['fr', 'ar']
  }
} as unknown as Service; 