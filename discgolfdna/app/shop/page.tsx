import { DiscCard } from '@/components/DiscCard';
import { discs } from '@/lib/discs';

export default function ShopPage() {
  return <main className="bg-white px-6 py-12 text-black"><div className="mx-auto max-w-7xl"><h1 className="mb-3 text-4xl font-black">Shop Used Discs</h1><p className="mb-8 text-gray-600">Browse hand-reviewed used discs with DiscDNA™ profiles.</p><div className="mb-8 grid gap-4 rounded-xl bg-gray-100 p-4 md:grid-cols-4"><input className="rounded border p-3" placeholder="Search mold"/><select className="rounded border p-3"><option>All types</option><option>Driver</option><option>Midrange</option><option>Putter</option></select><select className="rounded border p-3"><option>All brands</option><option>Innova</option><option>Discraft</option><option>MVP</option></select><select className="rounded border p-3"><option>Condition</option><option>9+</option><option>8+</option><option>7+</option></select></div><div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{discs.map((disc) => <DiscCard key={disc.id} disc={disc}/>)}</div></div></main>;
}
