import { Metadata } from 'next';
import { getMetadata } from '@/lib/metadata';

export const metadata: Metadata = getMetadata({
  title: 'Contactez-nous',
  description: 'Contactez nous pour les etudes de vos enfants'
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 