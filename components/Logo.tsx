import Image from "next/image";

export function Logo({ variant = "dark", height = 58 }: { variant?: "dark" | "light"; height?: number }) {
  return (
    <Image
      src="/img/legacy/logo.png"
      alt="Goldshield"
      width={348}
      height={71}
      style={{ height, width: "auto" }}
      className={variant === "light" ? "brightness-0 invert" : undefined}
      priority
    />
  );
}
