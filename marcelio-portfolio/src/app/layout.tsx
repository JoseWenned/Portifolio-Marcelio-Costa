import type { Metadata } from 'next';
import '../app/globals.scss';
import { ScrollToTop } from '@/components/ScrollToTop/scrollToTop';

export const metadata: Metadata = {
  title: 'Marcélio Costa Ribeiro | Operador de Retroescavadeira',
  description:
    'Portfólio profissional de Marcélio Costa Ribeiro, operador de retroescavadeira.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <ScrollToTop />
      <body>{children}</body>
    </html>
  );
}