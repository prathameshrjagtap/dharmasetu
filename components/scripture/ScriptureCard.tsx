import Link from 'next/link';
import type { Scripture } from '@/types';

interface ScriptureCardProps {
  scripture: Scripture;
}

export default function ScriptureCard({ scripture }: ScriptureCardProps) {
  const href = `/scriptures/${scripture.id}`;

  return (
    <Link
      href={href}
      className="group block rounded-lg border border-stone-200 bg-white p-5 transition-colors hover:border-stone-300 hover:bg-stone-50"
    >
      <h2 className="text-base font-semibold text-stone-800 group-hover:text-amber-700 transition-colors">
        {scripture.name}
      </h2>
      <p className="mt-1.5 text-sm text-stone-500 leading-relaxed line-clamp-3">
        {scripture.description}
      </p>
      <span className="mt-3 inline-block text-xs font-medium text-amber-700">
        Explore chapters →
      </span>
    </Link>
  );
}