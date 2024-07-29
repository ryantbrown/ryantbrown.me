import { discordUrl } from "./socials";

export const navigation = [
  {
    name: "About",
    href: "/",
    target: "_self",
  },
  {
    name: "Articles",
    href: "/articles",
    target: "_self",
  },
  {
    name: "Newsletter",
    href: "/newsletter",
    target: "_self",
  },
  {
    name: "Community",
    href: discordUrl,
    target: "_blank",
  },
] as const;
