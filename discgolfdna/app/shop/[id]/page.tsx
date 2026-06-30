import { discs } from '@/lib/discs';
import { notFound } from 'next/navigation';

export default function DiscDetail({ params }: { params: { id: string } }) {
  const disc = discs.find((d) => d.id === params.id);
  if (!disc) notFound();
  return <main className="bg-white px-6 py-12 text-black"><div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2"><div className="flex aspect-square items-center justify-center rounded-3xl bg-gray-100 text-[12rem]">🥏</div><div><p className="font-bold text-dna-green">{disc.discDnaId}</p><h1 className="text-5xl font-black">{disc.manufacturer} {disc.mold}</h1><p className="mt-2 text-xl text-gray-600">{disc.plastic} • {disc.weight}g • {disc.color}</p><p className="mt-6 text-4xl font-black text-dna-green">${disc.price.toFixed(2)}</p><button className="mt-6 w-full rounded-full bg-black px-8 py-4 font-black text-white">Add to Cart</button><section className="mt-8 rounded-2xl border p-6"><h2 className="mb-4 text-2xl font-black">DiscDNA™ Profile</h2><dl className="grid grid-cols-2 gap-3 text-sm"><dt className="font-bold">Condition</dt><dd>{disc.condition}/10</dd><dt className="font-bold">Flight Numbers</dt><dd>{disc.speed} | {disc.glide} | {disc.turn} | {disc.fade}</dd><dt className="font-bold">Dome</dt><dd>{disc.dome}</dd><dt className="font-bold">Estimated Stability</dt><dd>{disc.estimatedStability}</dd><dt className="font-bold">Collector Rating</dt><dd>{'★'.repeat(disc.collectorRating)}{'☆'.repeat(5-disc.collectorRating)}</dd><dt className="font-bold">SKU</dt><dd>{disc.sku}</dd></dl></section></div></div></main>;
}
