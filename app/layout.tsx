import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ToastProvider } from '@/providers/toast-providers';
import { SupabaseProvider } from '@/contexts/SupabaseContext';

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
      <SupabaseProvider>
        <html lang='en'>
          <body className={inter.className}>
            <ToastProvider />
            {children}
          </body>
        </html>
      </SupabaseProvider>
    </ClerkProvider>
  );
}
