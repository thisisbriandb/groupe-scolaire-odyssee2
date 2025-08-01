import { Metadata } from 'next';
import { getMetadata } from '@/lib/metadata';

export const metadata: Metadata = getMetadata({
  title: 'Nos Produits',
  description: 'Découvrez notre gamme complète de matériel de construction, outillage professionnel et quincaillerie. Large choix de produits de qualité aux meilleurs prix.'
});

export default function ProduitsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 