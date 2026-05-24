interface ErrorStateProps {
  title:        string;
  description?: string;
}

export default function ErrorState({ title, description }: ErrorStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <p className="text-3xl mb-3">⚠️</p>
      <h3 className="text-base font-medium text-stone-700">{title}</h3>
      {description && (
        <p className="mt-1 text-sm text-stone-400 max-w-sm">{description}</p>
      )}
    </div>
  );
}