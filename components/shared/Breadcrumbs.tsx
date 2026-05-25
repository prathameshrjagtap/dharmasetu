import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface Props {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({
  items,
}: Props) {

  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-6"
    >

      <ol className="flex flex-wrap items-center gap-2 text-sm text-stone-500">

        {items.map((item, index) => {

          const isLast = index === items.length - 1;

          return (
            <li
              key={`${item.label}-${index}`}
              className="flex items-center gap-2"
            >

              {item.href && !isLast ? (

                <Link
                  href={item.href}
                  className="transition-colors hover:text-stone-800"
                >
                  {item.label}
                </Link>

              ) : (

                <span className="text-stone-700">
                  {item.label}
                </span>

              )}

              {!isLast && (
                <span className="text-stone-400">
                  /
                </span>
              )}

            </li>
          );
        })}

      </ol>

    </nav>
  );
}