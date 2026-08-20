type IconName =
  | "safe"
  | "clock"
  | "document"
  | "molecule"
  | "mail"
  | "phone"
  | "pin"
  | "wind"
  | "arrow"
  | "arrow-small"
  | "chevron-down";

export function Icon({ name, className }: { name: IconName; className?: string }) {
  switch (name) {
    case "safe":
      return (
        <svg viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden className={className}>
          <circle cx={25} cy={25} r={21} />
          <circle cx={25} cy={25} r={15} />
          <text x={25} y={22} textAnchor="middle" fontSize={6.5} fill="currentColor" stroke="none" fontWeight="bold" fontFamily="sans-serif">EPA</text>
          <text x={25} y={31} textAnchor="middle" fontSize={6.5} fill="currentColor" stroke="none" fontWeight="bold" fontFamily="sans-serif">FDA</text>
        </svg>
      );
    case "clock":
      return (
        <svg viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden className={className}>
          <circle cx={25} cy={25} r={21} />
          <polyline points="25,12 25,25 33,30" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "document":
      return (
        <svg viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden className={className}>
          <rect x={9} y={5} width={32} height={40} rx={2} />
          <line x1={16} y1={16} x2={34} y2={16} />
          <line x1={16} y1={23} x2={34} y2={23} />
          <line x1={16} y1={30} x2={26} y2={30} />
          <circle cx={33} cy={36} r={7} />
          <polyline points="30,36 32,38.5 37,33.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "molecule":
      return (
        <svg viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden className={className}>
          <circle cx={25} cy={25} r={5} fill="currentColor" stroke="none" />
          <circle cx={10} cy={13} r={4.5} />
          <circle cx={40} cy={13} r={4.5} />
          <circle cx={10} cy={37} r={4.5} />
          <circle cx={40} cy={37} r={4.5} />
          <line x1={14} y1={15.5} x2={21} y2={21.5} strokeLinecap="round" />
          <line x1={36} y1={15.5} x2={29} y2={21.5} strokeLinecap="round" />
          <line x1={14} y1={34.5} x2={21} y2={28.5} strokeLinecap="round" />
          <line x1={36} y1={34.5} x2={29} y2={28.5} strokeLinecap="round" />
        </svg>
      );
    case "mail":
      return (
        <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden className={className}>
          <path d="M4 4h20c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="26,6 14,15 2,6" />
        </svg>
      );
    case "phone":
      return (
        <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden className={className}>
          <path d="M22 17.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 015.5 14a19.79 19.79 0 01-3.07-8.67A2 2 0 014.41 3.27h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 11.08a16 16 0 006.93 6.93l1.17-1.17a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 17.92z" />
        </svg>
      );
    case "pin":
      return (
        <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden className={className}>
          <path d="M21 10c0 7-7 13-7 13S7 17 7 10a7 7 0 0114 0z" />
          <circle cx={14} cy={10} r={3} />
        </svg>
      );
    case "wind":
      return (
        <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden className={className}>
          <path d="M3 9h13a3.5 3.5 0 10-3.5-3.5" />
          <path d="M3 14h17a3.5 3.5 0 11-3.5 3.5" />
          <path d="M3 19h11a3 3 0 10-3-3" />
        </svg>
      );
    case "arrow":
      return (
        <svg viewBox="0 0 22 14" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden className={className}>
          <path d="M15 1L21 7L15 13M0 7H21" />
        </svg>
      );
    case "arrow-small":
      return (
        <svg viewBox="0 0 14 10" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden className={className}>
          <line x1={0} y1={5} x2={12} y2={5} />
          <polyline points="8,1 12,5 8,9" />
        </svg>
      );
    case "chevron-down":
      return (
        <svg viewBox="0 0 12 8" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" aria-hidden className={className}>
          <path d="M1 1l5 5 5-5" />
        </svg>
      );
  }
}
