// src/components/TagPill.tsx
type Props = { label: string; active?: boolean; onClick: () => void };
export default function TagPill({ label, active, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full border px-4 py-2 text-sm transition-all duration-300 ease-out
      ${active ? "bg-white text-black border-white" : "border-white/30 text-white/90 hover:border-white/60 hover:text-white"}`}
    >
      {label}
    </button>
  );
}