interface PageHeaderProps {
  title: string;
  description?: string;
  centered?: boolean;
}

export default function PageHeader({
  title,
  description,
  centered = false,
}: PageHeaderProps) {
  return (
    <div
      className={`mb-8 ${
        centered
          ? 'text-center'
          : ''
      }`}
    >
      <h1 className="text-2xl font-semibold text-stone-800 sm:text-3xl">
        {title}
      </h1>

      {description && (
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-stone-500">
          {description}
        </p>
      )}
    </div>
  );
}