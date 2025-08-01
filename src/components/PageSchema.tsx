import { organizationSchema } from '@/lib/schema/OrganizationSchema';
import { createFAQSchema } from '@/lib/schema/FAQSchema';
import { createBreadcrumbSchema } from '@/lib/schema/BreadcrumbSchema';
import { createProductSchema } from '@/lib/schema/ProductSchema';
import { localBusinessSchema } from '@/lib/schema/LocalBusinessSchema';
import { servicesSchema } from '@/lib/schema/ServiceSchema';
import { createReviewSchema } from '@/lib/schema/ReviewSchema';
import { Thing } from 'schema-dts';

type PageSchemaProps = {
  product?: {
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
  breadcrumbs?: Array<{ name: string; url: string }>;
  faqs?: Array<{ question: string; answer: string }>;
  showLocalBusiness?: boolean;
  showServices?: boolean;
  reviews?: Array<{
    author: string;
    reviewBody: string;
    reviewRating: number;
    datePublished: string;
  }>;
};

export default function PageSchema({ 
  product, 
  breadcrumbs, 
  faqs,
  showLocalBusiness,
  showServices,
  reviews 
}: PageSchemaProps) {
  const schemas: Thing[] = [organizationSchema];

  if (product) {
    schemas.push(createProductSchema(product));
  }

  if (breadcrumbs) {
    schemas.push(createBreadcrumbSchema(breadcrumbs));
  }

  if (faqs) {
    schemas.push(createFAQSchema(faqs));
  }

  if (showLocalBusiness) {
    schemas.push(localBusinessSchema);
  }

  if (showServices) {
    schemas.push(servicesSchema);
  }

  if (reviews) {
    reviews.forEach(review => {
      schemas.push(createReviewSchema(review));
    });
  }

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
    </>
  );
} 