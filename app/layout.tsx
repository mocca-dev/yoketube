import { Analytics } from '@vercel/analytics/react';
import { Roboto_Condensed } from 'next/font/google';
import './globals.css';
import styles from './page.module.css';
import Header from '@/components/Header/Header';
import AuthProvider from '@/components/AuthProvider/AuthProvider';

const roboto_Condensed = Roboto_Condensed({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
});

const metadata = {
  title: 'YokeTube',
  description: 'Make your workout video routine list and track your progres',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="manifest" href="/manifest.json" />
      <link rel="apple-touch-icon" href="/ios/icon-512x512.png"></link>
      <meta name="theme-color" content="#101014" />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
      />
      <link rel="icon" href="/favicon.ico" />
      <body className={`${roboto_Condensed.className} ${styles.body}`}>
        <AuthProvider>
          <Header />
          {children}
          <Analytics />
        </AuthProvider>
      </body>
    </html>
  );
}
