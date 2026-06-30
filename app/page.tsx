import Link from 'next/link';
import { DiscCard } from '@/components/DiscCard';
import { featuredDiscs } from '@/lib/discs';

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden px-6 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(122,193,66,0.28),transparent_35%),linear-gradient(135deg,#050705,#10200f)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 font-bold uppercase tracking-[0.3em] text-dna-green">Every disc has a story</p>
            <h1 className="text-5xl font-black leading-tight md:text-7xl">Used discs. New flights.</h1>
            <p className="mt-6 max-w-xl text-lg text-white/75">DiscGolfDNA is a used disc golf marketplace built around real condition, real photos, and a unique DiscDNA™ Profile for every disc.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/shop" className="btn-primary">Shop Used Discs</Link>
              <Link href="/sell" className="btn-secondary">Sell Your Discs</Link>
            </div>
          </div>
          <div className="card p-8">
            <div className="relative mx-auto h-72 max-w-md">
              <div className="absolute left-4 top-28 h-10 w-72 -rotate-12 rounded-full bg-dna-green/30 blur-xl" />
              <div className="absolute left-6 top-28 h-8 w-72 -rotate-12 rounded-full border-t-4 border-dna-green" />
              <div className="absolute left-24 top-28 h-24 w-52 -rotate-12 rounded-[100%] border-4 border-white" />
              <div className="absolute left-40 top-14 h-24 w-56 -rotate-12 rounded-[100%] border-8 border-white bg-white/10" />
              <div className="absolute bottom-4 right-4 h-40 w-32 rounded-b-3xl border-4 border-dna-green/70" />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-dna-cream px-6 py-16 text-dna-black">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="font-bold uppercase tracking-[0.25em] text-dna-green">Newest arrivals</p>
              <h2 className="text-4xl font-black">Featured Discs</h2>
            </div>
            <Link href="/shop" className="hidden rounded-full border border-dna-green px-5 py-3 font-bold text-dna-black md:block">View All</Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {featuredDiscs.map((disc) => <DiscCard key={disc.id} disc={disc} />)}
          </div>
        </div>
      </section>
      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-4">
          {['Actual disc photos', 'Condition verified', 'Only one available', 'DiscDNA™ profile'].map((item) => (
            <div className="card p-6" key={item}><p className="text-xl font-black text-dna-green">✓</p><p className="mt-3 font-bold">{item}</p></div>
          ))}
        </div>
      </section>
    </>
  );
}
