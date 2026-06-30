import './globals.css';
import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'DiscGolfDNA | Used Disc Golf Discs',
  description: 'Quality used disc golf discs for resale. Every disc has a past. Give it a new flight path.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><Header />{children}<Footer /></body></html>;
}
