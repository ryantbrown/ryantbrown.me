import Link from "next/link";
import { type VariantProps, tv } from "tailwind-variants";

const styles = tv({
  base: "inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm outline-offset-2 transition active:transition-none disabled:cursor-not-allowed disabled:opacity-50",
  variants: {
    variant: {
      primary:
        "bg-gray-800 font-semibold text-gray-100 hover:bg-gray-700 active:bg-gray-800 active:text-gray-100/70",
      secondary:
        "bg-gray-50 font-medium text-gray-900 hover:bg-gray-100 active:bg-gray-100 active:text-gray-900/60",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

type ButtonProps = VariantProps<typeof styles> &
  (
    | (React.ComponentPropsWithoutRef<"button"> & { href?: undefined })
    | React.ComponentPropsWithoutRef<typeof Link>
  );

export function Button({ variant, className, ...props }: ButtonProps) {
  return typeof props.href === "undefined" ? (
    <button className={styles({ variant, className })} {...props} />
  ) : (
    <Link className={styles({ variant, className })} {...props} />
  );
}
