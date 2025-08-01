import { Metadata } from 'next';

const defaultOpenGraph = {
  type: 'website',
  locale: 'fr_FR',
  siteName: "Groupe Scolaire L'Odyssée",
  title: "Groupe Scolaire L'Odyssée",
  description: "Établissement d'excellence à Pointe-Noire, de la maternelle au collège.",
};

const defaultMetadata: Metadata = {
  title: {
    absolute: "Groupe Scolaire L'Odyssée | Éducation de qualité à Pointe-Noire",
  },
  description:
    "Le Groupe Scolaire L'Odyssée offre une éducation innovante, bilingue et inclusive, de la maternelle au collège, à Pointe-Noire, République du Congo.",
  openGraph: defaultOpenGraph,
  robots: {
    index: true,
    follow: true,
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#ffffff',
};

export const getMetadata = (props?: {
  title?: string;
  description?: string;
}): Metadata => {
  const customTitle = props?.title ?? '';
  const customDescription = props?.description ?? defaultMetadata.description ?? '';

  return {
    ...defaultMetadata,
    title: customTitle
      ? { absolute: `${customTitle} | Groupe Scolaire L'Odyssée` }
      : defaultMetadata.title,
    description: customDescription,
    openGraph: {
      ...defaultOpenGraph,
      title: customTitle || defaultOpenGraph.title,
      description: customDescription,
    },
  };
};
