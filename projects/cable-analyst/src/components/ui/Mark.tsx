/**
 * Brand mark: a price path crossing a circle — the cable across the Atlantic.
 */
export default function Mark({ className = "size-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle
        cx="20"
        cy="20"
        r="18.5"
        stroke="url(#mark-ring)"
        strokeWidth="1.5"
      />
      <path
        d="M7 25.5 L14 19 L18.5 22.5 L25 13.5 L28.5 17 L33 11"
        stroke="url(#mark-line)"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="33" cy="11" r="2" fill="#7fa7ff" />
      <defs>
        <linearGradient id="mark-ring" x1="0" y1="0" x2="40" y2="40">
          <stop stopColor="rgba(255,255,255,0.35)" />
          <stop offset="1" stopColor="rgba(255,255,255,0.08)" />
        </linearGradient>
        <linearGradient id="mark-line" x1="7" y1="26" x2="33" y2="11">
          <stop stopColor="#4e80ee" />
          <stop offset="1" stopColor="#7fa7ff" />
        </linearGradient>
      </defs>
    </svg>
  );
}
