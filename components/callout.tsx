import { tv } from "tailwind-variants";
import { AlertIcon, InfoIcon } from "./icons";

const variants = tv({
  slots: {
    container: "my-8 flex rounded-3xl p-6",
    title: "m-0 font-semibold text-lg",
    body: "prose mt-2.5",
    icon: "size-8 flex-none",
  },
  variants: {
    variant: {
      info: {
        icon: "text-sky-900 dark:text-sky-400",
        container:
          "bg-sky-50 dark:bg-slate-800/60 dark:ring-1 dark:ring-slate-300/10",
        title: "text-sky-900 dark:text-sky-400",
        body: "prose-a:text-sky-900 prose-code:text-sky-900 text-sky-800 [--tw-prose-background:theme(colors.sky.50)] dark:prose-code:text-slate-300 dark:text-slate-300",
      },
      warning: {
        icon: "text-amber-900 dark:text-amber-500",
        container:
          "bg-amber-50 dark:bg-slate-800/60 dark:ring-1 dark:ring-slate-300/10",
        title: "text-amber-900 dark:text-amber-500",
        body: "prose-a:text-amber-900 prose-code:text-amber-900 text-amber-800 [--tw-prose-background:theme(colors.amber.50)] [--tw-prose-underline:theme(colors.amber.400)] dark:prose-code:text-slate-300 dark:text-slate-300 dark:[--tw-prose-underline:theme(colors.sky.700)]",
      },
    },
  },
});

const icons = {
  info: (props: { className?: string }) => <InfoIcon {...props} />,
  warning: (props: { className?: string }) => <AlertIcon {...props} />,
};

export type CalloutProps = {
  title: string;
  children: React.ReactNode;
  variant?: keyof typeof icons;
};

export function Callout({ title, children, variant = "info" }: CalloutProps) {
  const IconComponent = icons[variant];
  const styles = variants({ variant });

  return (
    <div className={styles.container()}>
      <IconComponent className={styles.icon()} />
      <div className="ml-4 flex-auto">
        <p className={styles.title()}>{title}</p>
        <div className={styles.body()}>{children}</div>
      </div>
    </div>
  );
}
