import Link from "next/link";
import { type VariantProps, tv } from "tailwind-variants";

const styles = tv({
  base: "relative isolate inline-flex items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-lg px-4 py-2 font-semibold text-sm outline-offset-2 transition active:transition-none disabled:cursor-not-allowed disabled:opacity-50",
  variants: {
    variant: {
      primary: [
        "bg-gradient-to-b from-gray-700 to-gray-950 dark:from-gray-700 dark:to-gray-700",
        "text-white",
        "border border-gray-950 dark:border-gray-800",

        "after:-z-10 after:absolute after:inset-0 after:rounded-[7px] after:shadow-[inset_0_1px_rgba(255,255,255,0.15)]",
        "after:hover:bg-white/10 after:active:bg-white/10",
      ],
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
