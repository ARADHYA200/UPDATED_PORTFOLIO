export default function Badge({ children }) {
  return (
    <span className="px-3 py-1 rounded-full bg-blue-600/20 text-cyan-300 text-sm border border-blue-500/20">
      {children}
    </span>
  );
}