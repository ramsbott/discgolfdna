import Link from 'next/link';
import { Disc } from '@/lib/discs';

export function DiscCard({ disc }: { disc: Disc }) {
  return (
    <Link href={`/shop/${disc.id}`} className="light-card block rounded-xl p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="mx-auto mb-4 flex aspect-square max-w-56 items-center justify-center rounded-full bg-gradient-to-br from-lime-200 to-white text-6xl shadow-inner">🥏</div>
      <h3 className="font-bold">{disc.manufacturer} {disc.mold}</h3>
      <p className="text-sm text-gray-600">{disc.plastic} • {disc.weight}g • {disc.type}</p>
      <p className="mt-2 text-sm">{disc.speed} | {disc.glide} | {disc.turn} | {disc.fade}</p>
      <div className="mt-3 flex items-center justify-between">
        <span className="font-black text-dna-green">${disc.price.toFixed(2)}</span>
        <span className="rounded border px-2 py-1 text-xs">{disc.condition}/10</span>
      </div>
    </Link>
  );
}
