import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from './contexts/ThemeProvider';

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
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
