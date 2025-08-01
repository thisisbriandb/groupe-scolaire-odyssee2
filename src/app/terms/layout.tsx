import { Metadata } from 'next';
import { getMetadata } from '@/lib/metadata';

export const metadata: Metadata = getMetadata({
  title: 'Conditions d\'Utilisation',
  description: 'Consultez les conditions d\'utilisation de JACK Industries pour comprendre vos droits et obligations lors de l\'utilisation de nos services.'
});

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 