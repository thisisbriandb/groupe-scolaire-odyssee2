import { Product } from 'schema-dts';

type ProductDetails = {
  name: string;
  description: string;
  image: string;
  price: number;
  sku: string;
  category: string;
  brand?: string;
  manufacturer?: string;
  model?: string;
  weight?: string;
  dimensions?: {
    length: number;
    width: number;
    height: number;
    unit: string;
  };
  inStock?: boolean;
  rating?: {
    ratingValue: number;
    reviewCount: number;
  };
};

export const createProductSchema = (product: ProductDetails) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image,
    sku: product.sku,
    category: product.category,
    brand: product.brand && {
      '@type': 'Brand',
      name: product.brand
    },
    manufacturer: product.manufacturer && {
      '@type': 'Organization',
      name: product.manufacturer
    },
    model: product.model,
    weight: product.weight,
    size: product.dimensions && `${product.dimensions.length}x${product.dimensions.width}x${product.dimensions.height} ${product.dimensions.unit}`,
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: 'MAD',
      availability: product.inStock 
        ? 'https://schema.org/InStock' 
        : 'https://schema.org/OutOfStock',
      seller: {
        '@type': 'Organization',
        name: 'JACK Industries',
      },
      priceValidUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
    },
    aggregateRating: product.rating && {
      '@type': 'AggregateRating',
      ratingValue: product.rating.ratingValue,
      reviewCount: product.rating.reviewCount
    }
  } as Product;
}; 