export const routes = {
  home: '/',
  products: {
    root: '/produits',
    category: (slug: string) => `/produits/categories/${slug}`,
    product: (id: string) => `/produits/${id}`,
  },
  categories: {
    root: '/categories',
    single: (slug: string) => `/categories/${slug}`,
  },
  about: '/propos',
  contact: '/contact',
  privacy: '/privacy',
  terms: '/terms',
  blog: {
    root: '/blog',
    post: (slug: string) => `/blog/${slug}`,
  },
} as const

// Structure recommandée des dossiers dans app/:
/*
app/
  page.tsx (accueil)
  produits/
    page.tsx (liste des produits)
    [id]/
      page.tsx (détail produit)
    categories/
      [slug]/
        page.tsx (produits par catégorie)
  categories/
    page.tsx (liste des catégories)
    [slug]/
      page.tsx (détail catégorie)
  propos/
    page.tsx
  contact/
    page.tsx
  blog/
    page.tsx (liste articles)
    [slug]/
      page.tsx (article unique)
*/ 