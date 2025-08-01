import { LocalBusiness } from 'schema-dts';

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'JACK Industries Showroom',
  image: 'https://www.jackindustries.ma/images/showroom.jpg',
  '@id': 'https://www.jackindustries.ma/#showroom',
  url: 'https://www.jackindustries.ma',
  telephone: '+212 6 16 96 65 09',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '[Adresse du showroom]',
    addressLocality: 'Casablanca',
    postalCode: '[Code postal]',
    addressCountry: 'MA'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '[Latitude]',
    longitude: '[Longitude]'
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '16:00'
    }
  ],
  priceRange: '$$',
  currenciesAccepted: 'MAD',
  hasMap: 'https://maps.app.goo.gl/xfRYSWF8jQosQrV2A'
} as LocalBusiness; 