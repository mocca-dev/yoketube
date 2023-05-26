import './globals.css';
import { Roboto_Condensed } from 'next/font/google';
import styles from './page.module.css';
import Header from '@/components/Header/Header';

const roboto_Condensed = Roboto_Condensed({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
});

export const metadata = {
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
      <body className={`${roboto_Condensed.className} ${styles.body}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
