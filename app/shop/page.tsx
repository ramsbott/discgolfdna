import { DiscCard } from '../../components/DiscCard';
import { featuredDiscs } from '../../lib/discs';

export default function ShopPage() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <p className="font-bold uppercase tracking-[0.3em] text-dna-green">Shop</p>
        <h1 className="mt-3 text-5xl font-black">Used Disc Inventory</h1>
        <p className="mt-4 max-w-2xl text-white/70">Phase 1 catalog preview. Search, filters, cart, and live inventory will be added next.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {featuredDiscs.map((disc) => <DiscCard key={disc.id} disc={disc} />)}
        </div>
      </div>
    </section>
  );
}
