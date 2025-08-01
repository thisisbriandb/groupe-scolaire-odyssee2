import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import "./globals.css";

const geistSans = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
});

const geistMono = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gs-odyssee.com"),
  title: {
    template: "%s | Groupe Scolaire L'Odyssée",
    default: "Groupe Scolaire L'Odyssée - De la crèche au collège",
  },
  description:
    "Le Groupe Scolaire L'Odyssée accueille vos enfants de la crèche au collège dans un cadre éducatif stimulant, axé sur l’excellence, l’épanouissement et l’égalité des chances.",
  keywords: [
    "école privée",
    "groupe scolaire",
    "crèche",
    "maternelle",
    "élémentaire",
    "collège",
    "enseignement privé Maroc",
    "école Rabat",
    "éducation L’Odyssée",
    "inscription école privée",
    "programme scolaire Maroc",
    "valeurs éducatives",
    "activités périscolaires",
    "enseignement de qualité"
  ],
  icons: {
    icon: "/favicon.jpg",
     },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://ecole-odyssee.ma",
    siteName: "Groupe Scolaire L'Odyssée",
    title: "L'Odyssée - École Privée | Crèche, Maternelle, Primaire, Collège",
    description:
      "Le Groupe Scolaire L'Odyssée propose un enseignement de qualité, de la crèche au collège, dans un cadre bienveillant et moderne.",
    images: [
      {
        url: "/assets/og-image-ecole.jpg",
        width: 1200,
        height: 630,
        alt: "École L'Odyssée - Apprendre autrement",
      },
    ],
  },
  alternates: {
    canonical: "https://ecole-odyssee.ma",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
