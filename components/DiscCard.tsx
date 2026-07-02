import type { Disc } from '../lib/discs';

export function DiscCard({ disc }: { disc: Disc }) {
  return (
    <article className="card overflow-hidden">
      <div className="flex aspect-square items-center justify-center bg-gradient-to-br from-white/15 to-white/5">
        <div className="flex h-44 w-44 items-center justify-center rounded-full border-8 border-white/20 bg-dna-green/80 text-center text-dna-black shadow-2xl">
          <div>
            <p className="text-xs font-bold uppercase">{disc.manufacturer}</p>
            <p className="text-2xl font-black">{disc.mold}</p>
          </div>
        </div>
      </div>
      <div className="space-y-3 p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-black">{disc.manufacturer} {disc.mold}</h3>
            <p className="text-sm text-white/60">{disc.plastic} • {disc.weight} • {disc.color}</p>
          </div>
          <span className="rounded-full bg-dna-green/15 px-3 py-1 text-xs font-bold text-dna-green">{disc.condition}</span>
        </div>
        <p className="text-sm text-white/70">{disc.type} • {disc.flight}</p>
        <div className="flex items-center justify-between pt-2">
          <span className="text-xl font-black text-dna-green">{disc.price}</span>
          <span className="text-xs text-white/50">{disc.id}</span>
        </div>
      </div>
    </article>
  );
}
