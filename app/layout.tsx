import type { Metadata } from 'next';
import { Crimson_Pro, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';

const crimson = Crimson_Pro({
  variable: '--font-crimson',
  subsets: ['latin'],
  display: 'swap',
});

const inter = Inter({
  variable: '--font-geist',
  subsets: ['latin'],
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Zubia Mughal, Ed.D. | Data Researcher, AI and ML Systems',
  description:
    'Theory-Constrained Machine Learning for High-Stakes Decisions. Operationalizing organizational psychology and supply chain theory as computational constraints.',
  openGraph: {
    title: 'Zubia Mughal, Ed.D. | Data Researcher, AI and ML Systems',
    description:
      'Theory-Constrained ML for High-Stakes Decisions. Governed AI systems that outperform black-box models on small, critical datasets.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${crimson.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans antialiased">
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  );
}
