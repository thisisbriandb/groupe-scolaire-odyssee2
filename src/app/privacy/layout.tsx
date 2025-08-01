import { Metadata } from 'next';
import { getMetadata } from '@/lib/metadata';

export const metadata: Metadata = getMetadata({
  title: 'Politique de Confidentialité',
  description: 'Découvrez notre politique de confidentialité et comment JACK Industries protège vos données personnelles.'
});

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 