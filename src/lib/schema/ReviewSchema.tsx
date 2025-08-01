import { Review } from 'schema-dts';

type ReviewDetails = {
  author: string;
  reviewBody: string;
  reviewRating: number;
  datePublished: string;
};

export const createReviewSchema = (review: ReviewDetails) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    author: {
      '@type': 'Person',
      name: review.author
    },
    reviewBody: review.reviewBody,
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.reviewRating,
      bestRating: 5,
      worstRating: 1
    },
    datePublished: review.datePublished,
    publisher: {
      '@type': 'Organization',
      name: 'JACK Industries'
    }
  } as Review;
}; 