import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3 font-black italic tracking-tight">
          <span className="text-3xl">🧬</span>
          <span className="text-2xl">DISCGOLF<span className="text-dna-green">DNA</span><span className="text-sm">.com</span></span>
        </Link>
        <nav className="hidden gap-7 text-sm font-bold uppercase md:flex">
          <Link href="/shop">Shop</Link>
          <Link href="/sell">Sell Discs</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/admin">Admin</Link>
        </nav>
      </div>
    </header>
  );
}
