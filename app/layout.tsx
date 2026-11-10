import './globals.css';
import type { Metadata } from 'next';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

export const metadata: Metadata = {
  metadataBase: new URL('https://cejabogados.com'),
  title: {
    default: 'CEJ Abogados | Despacho Jurídico en Torreón',
    template: '%s | CEJ Abogados',
  },
  description:
    'Despacho jurídico en Torreón especializado en divorcio, manutención, derecho penal y civil. Asesoría legal profesional.',
  keywords: [
    'abogados en Torreón',
    'abogado divorcio Torreón',
    'abogado penal Torreón',
    'abogado civil Torreón',
    'consultoría jurídica Torreón',
  ],
  authors: [{ name: 'CEJ Abogados' }],
  creator: 'CEJ Abogados',
  openGraph: {
    title: 'CEJ Abogados',
    description:
      'Defensa legal con ética, estrategia y resultados en Torreón, Coahuila.',
    url: 'https://cejabogados.com',
    siteName: 'CEJ Abogados',
    locale: 'es_MX',
    type: 'website',
    images: [
      {
        url: '/logo1.png',
        width: 1200,
        height: 666,
        alt: 'CEJ Abogados',
      },
    ],
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-gray-50 text-gray-900">
        <Navbar />
        {children}
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
