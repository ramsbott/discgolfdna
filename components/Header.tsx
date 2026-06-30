import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-dna-black/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-dna-green text-dna-green">DNA</div>
          <div>
            <div className="text-xl font-black tracking-tight">DiscGolf<span className="text-dna-green">DNA</span></div>
            <div className="text-xs uppercase tracking-[0.3em] text-white/50">Used Disc Marketplace</div>
          </div>
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-bold uppercase text-white/80 md:flex">
          <Link href="/shop" className="hover:text-dna-green">Shop</Link>
          <Link href="/sell" className="hover:text-dna-green">Sell Discs</Link>
          <Link href="/about" className="hover:text-dna-green">About</Link>
          <Link href="/contact" className="hover:text-dna-green">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
