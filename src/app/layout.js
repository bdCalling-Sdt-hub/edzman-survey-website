import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import ReduxWrapper from './provider/redux/ReduxWrapper';
import { Toaster } from '@/components/ui/sonner';
import NextTopLoader from 'nextjs-toploader';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Find your Why',
  description: 'Find your Why',
};

export default function RootLayout({ children }) {
  return (
    <ReduxWrapper>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <div>{children}</div>
          <NextTopLoader />
          <Toaster position="top-center" duration={1000} />
        </body>
      </html>
    </ReduxWrapper>
  );
}
