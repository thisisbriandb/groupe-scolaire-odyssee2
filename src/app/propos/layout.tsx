import { Metadata } from 'next';
import { getMetadata } from '@/lib/metadata';

export const metadata: Metadata = getMetadata({
  title: 'À Propos',
  description: ''
});

export default function ProposLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 