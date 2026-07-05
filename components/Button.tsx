import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  type?: "button" | "submit";
  onClick?: () => void;
};

const variants = {
  primary:
    "bg-rose-deep text-white hover:bg-mulberry shadow-sm shadow-rose-deep/20",
  secondary:
    "border border-rose-deep/25 bg-white/75 text-mulberry hover:bg-linen"
};

export function Button({
  href,
  children,
  variant = "primary",
  type = "button",
  onClick
}: ButtonProps) {
  const className = `focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-5 py-3 text-base font-semibold transition ${variants[variant]}`;
  const content = (
    <>
      <span>{children}</span>
      {href ? <ArrowRight aria-hidden="true" className="h-4 w-4" /> : null}
    </>
  );

  if (href) {
    return (
      <Link className={className} href={href}>
        {content}
      </Link>
    );
  }

  return (
    <button className={className} onClick={onClick} type={type}>
      {content}
    </button>
  );
}
