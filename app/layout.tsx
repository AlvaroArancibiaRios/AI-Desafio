import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Reto AI-Native 21 Días | Platzi',
  description: 'Construye tu sistema de trabajo con IA en 3 semanas',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
