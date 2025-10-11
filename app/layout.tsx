import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '진상우 포트폴리오',
  description: 'JJacksang Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
