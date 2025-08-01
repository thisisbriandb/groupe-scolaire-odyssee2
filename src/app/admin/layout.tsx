"use client";

import { useAuth } from '@/lib/hooks/useAuth';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { user, loading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const checkAuth = async () => {
      // Si on est sur la page login et qu'on est connecté, rediriger vers le dashboard
      if (pathname === '/admin/login' && user) {
        router.push('/admin/dashboard');
        return;
      }

      // Si on n'est pas sur la page login et qu'on n'est pas connecté, rediriger vers login
      if (pathname !== '/admin/login' && !loading && !user) {
        // Nettoyage du stockage par sécurité
        localStorage.clear();
        sessionStorage.clear();
        router.push('/admin/login');
      }
    };

    checkAuth();
  }, [user, loading, router, pathname]);

  // Afficher un loader pendant la vérification
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  // Ne rien afficher pendant la redirection
  if (!user && pathname !== '/admin/login') {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {children}
    </div>
  );
}
