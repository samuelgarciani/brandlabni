export function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <span
      className={`font-extrabold text-lg tracking-[-0.02em] ${light ? "text-white" : "text-navy"}`}
    >
      BRAND<span className="text-orange">LAB</span>
      <span className={`text-[0.625rem] align-super ${light ? "text-sky" : "text-quiet"}`}>
        .
      </span>
    </span>
  );
}
