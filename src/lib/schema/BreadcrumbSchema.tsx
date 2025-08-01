import { BreadcrumbList } from 'schema-dts';

type BreadcrumbItem = {
  name: string;
  url: string;
};

export const createBreadcrumbSchema = (items: BreadcrumbItem[]) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://www.jackindustries.ma${item.url}`
    }))
  } as BreadcrumbList;
}; 