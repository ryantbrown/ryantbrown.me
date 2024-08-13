import {
  DiscordIcon,
  GitHubIcon,
  LinkedInIcon,
  TikTokIcon,
  XIcon,
  YouTubeIcon,
} from "../components/icons";

/**
 * The Discord server URL.
 */
export const discordUrl = "https://discord.gg/URXstudD";
export const linkedinUrl = "https://www.linkedin.com/in/ryan-t-brown/";

/**
 * The social links.
 */
export const socials = [
  {
    url: "https://twitter.com/ryan_t_brown",
    name: "Twitter",
    label: "Follow me on Twitter",
    icon: XIcon,
  },
  {
    url: linkedinUrl,
    name: "LinkedIn",
    label: "Follow me on LinkedIn",
    icon: LinkedInIcon,
  },
  {
    url: "https://www.youtube.com/@ryan_t_brown",
    name: "YouTube",
    label: "View my YouTube channel",
    icon: YouTubeIcon,
  },
  {
    url: "https://www.tiktok.com/@ryan_t_brown",
    name: "TikTok",
    label: "Follow me on TikTok",
    icon: TikTokIcon,
  },
  {
    url: discordUrl,
    name: "Discord",
    label: "Join my Discord server",
    icon: DiscordIcon,
  },
  {
    url: "https://github.com/ryantbrown",
    name: "GitHub",
    label: "Follow me on GitHub",
    icon: GitHubIcon,
  },
];
