import Link from 'next/link';
import { DiscCard } from '@/components/DiscCard';
import { discs } from '@/lib/discs';

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_70%_30%,rgba(131,189,63,.35),transparent_35%),linear-gradient(135deg,#071008,#111)] px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-4 font-bold uppercase tracking-[.3em] text-dna-green">Used discs. New adventures.</p>
            <h1 className="text-5xl font-black uppercase leading-tight md:text-7xl">Every disc has a past. Give it a new flight path.</h1>
            <p className="mt-6 max-w-xl text-lg text-white/75">DiscGolfDNA is a used disc golf marketplace built around actual-condition resale, DiscDNA™ profiles, and hand-reviewed inventory.</p>
            <div className="mt-8 flex gap-4">
              <Link href="/shop" className="rounded-full bg-dna-green px-7 py-3 font-black text-black">Shop Discs</Link>
              <Link href="/sell" className="rounded-full border border-white px-7 py-3 font-black">Sell Yours</Link>
            </div>
          </div>
          <div className="relative flex min-h-80 items-center justify-center">
            <div className="absolute h-24 w-96 rotate-[-18deg] rounded-full bg-dna-green/30 blur-2xl" />
            <div className="text-[12rem] drop-shadow-2xl">🥏</div>
            <div className="absolute bottom-4 left-4 text-8xl opacity-80">🧬</div>
          </div>
        </div>
      </section>
      <section className="bg-dna-charcoal px-6 py-8">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-4">
          {['Sustainable resale', 'Condition checked', 'Real disc profiles', 'Fast simple checkout'].map((item) => <div key={item} className="card rounded-xl p-5 font-bold text-dna-green">{item}</div>)}
        </div>
      </section>
      <section className="bg-white px-6 py-14 text-black">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-end justify-between">
            <h2 className="text-3xl font-black uppercase">Featured Discs</h2>
            <Link href="/shop" className="font-bold text-dna-green">View all</Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{discs.map((disc) => <DiscCard key={disc.id} disc={disc} />)}</div>
        </div>
      </section>
    </main>
  );
}
