const BRAND = {
  olive: "#3b6d11",
  cream: "#fbf9f4",
  terracota: "#d85a30",
};

type Variant = "onLight" | "onDark";

export function LogoMark({
  variant = "onLight",
  size = 28,
}: {
  variant?: Variant;
  size?: number;
}) {
  const bg = variant === "onLight" ? BRAND.olive : BRAND.cream;
  const fg = variant === "onLight" ? BRAND.cream : BRAND.olive;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <rect width="32" height="32" rx="9" fill={bg} />
      <rect x="10" y="8" width="5" height="14" rx="2.5" fill={fg} />
      <rect x="10" y="17" width="11" height="5" rx="2.5" fill={fg} />
      <circle cx="22.5" cy="9" r="2.6" fill={BRAND.terracota} />
    </svg>
  );
}

export default function Logo({
  variant = "onLight",
  size = 28,
  className = "",
}: {
  variant?: Variant;
  size?: number;
  className?: string;
}) {
  const textColor = variant === "onLight" ? "text-ink" : "text-cream";
  const accentColor = variant === "onLight" ? BRAND.olive : BRAND.terracota;

  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <LogoMark variant={variant} size={size} />
      <span
        className={`font-display text-[22px] font-semibold tracking-tight ${textColor}`}
      >
        lum<span style={{ color: accentColor }}>e</span>a
      </span>
    </span>
  );
}
