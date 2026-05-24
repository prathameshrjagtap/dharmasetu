interface EmptyStateProps {
  title:        string;
  description?: string;
  action?:      React.ReactNode;
}

export default function EmptyState({ title, description, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <p className="text-3xl mb-3">📭</p>
      <h3 className="text-base font-medium text-stone-700">{title}</h3>
      {description && (
        <p className="mt-1 text-sm text-stone-400 max-w-sm">{description}</p>
      )}
      {action && <div className="mt-4">{action}</div>}
    </div>
  );
}