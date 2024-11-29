import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ToastProvider } from '@/providers/toast-providers';
import { SupabaseProvider } from '@/contexts/SupabaseContext';
import ReactQueryProvider from '@/providers/react-query-providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Swiperyt Int.',
  description: 'Admin / client area',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={inter.className}>
          <ToastProvider />
          <SupabaseProvider>
            <ReactQueryProvider>{children}</ReactQueryProvider>
          </SupabaseProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
