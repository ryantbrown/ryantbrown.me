import { discordUrl } from "./socials";

export const navigation = [
  {
    name: "Home",
    href: "/",
    target: "_self",
  },
  // {
  //   name: "About",
  //   href: "/about",
  //   target: "_self",
  // },
  {
    name: "Articles",
    href: "/articles",
    target: "_self",
  },
  {
    name: "Community",
    href: discordUrl,
    target: "_blank",
  },
] as const;
