import type { SiteLocaleConfig } from "@/types/localization";

export interface SiteOfficialSource {
  label: string;
  href: string;
  description: string;
}

export interface SiteConfig {
  name: string;
  brandMark?: string;
  gameName: string;
  domain: string;
  baseUrl: string;
  description: string;
  tagline: string;
  primaryLocale: string;
  locales: SiteLocaleConfig[];
  author: string;
  gaMeasurementId: string;
  bingSiteAuthCode: string;
  officialSources: SiteOfficialSource[];
  disclaimer: string;
}

export const site: SiteConfig = {
  name: "Jump To Steal SCP Monsters! Guide",
  brandMark: "JTS",
  gameName: "Jump To Steal SCP Monsters!",
  domain: "jumptostealscpmonsters.pro",
  baseUrl: (process.env.NEXT_PUBLIC_SITE_URL || "https://jumptostealscpmonsters.pro").replace(/\/$/, ""),
  description:
    "An unofficial English-language reference hub for Jump To Steal SCP Monsters! on Roblox (Universe 10683945170): active codes, SCP monster roster, jump-to-steal routes, tier comparison, and updates.",
  tagline: "Jump To Steal SCP Monsters! codes, SCP monster roster, jump-to-steal routes, and patch notes — all dated to 2026-09-11.",
  primaryLocale: "en-US",
  locales: [
    {
      code: "en-US",
      label: "English",
      pathPrefix: "",
      htmlLang: "en-US",
      openGraphLocale: "en_US",
      ui: {
        searchOpen: "Search",
        searchClose: "Close search",
        searchPlaceholder: "Search this guide",
        searchSubmit: "Search",
        searchLoading: "Loading search…",
        searchError: "Search is unavailable right now.",
        searchNoResults: "No matching pages found.",
        recentUpdates: "Recent updates",
        lastReviewed: "Last reviewed",
      },
    },
  ],
  author: "Jump To Steal SCP Monsters! Guide",
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "",
  bingSiteAuthCode: process.env.NEXT_PUBLIC_BING_SITE_AUTH_CODE || "",
  officialSources: [
    {
      label: "Jump To Steal SCP Monsters! on Roblox",
      href: "https://www.roblox.com/games/123724279728430",
      description:
        "Official Roblox game page for Jump To Steal SCP Monsters! (Universe 10683945170, Creator Group Code&Bricks) with the live experience description and current stats.",
    },
    {
      label: "Roblox Games API — Universe 10683945170",
      href: "https://games.roblox.com/v1/games?universeIds=10683945170",
      description:
        "Official Roblox Games API multi-get endpoint for Universe 10683945170, exposing creation and update timestamps, visits, favorites, and player count snapshots.",
    },
    {
      label: "Roblox Creator Groups directory",
      href: "https://www.roblox.com/groups",
      description:
        "Official Roblox creator groups directory where Creator Group Code&Bricks publishes Jump To Steal SCP Monsters!.",
    },
  ],
  disclaimer:
    "Jump To Steal SCP Monsters! is a brand-new Roblox Universe (created 2026-08-11 by Creator Group Code&Bricks). This site is an unofficial English-language reference hub; current-game facts come from the official Roblox game page, the Roblox Games API metadata for Universe 10683945170, and the Code&Bricks verified social channels. Any SCP monster name, jump-to-steal route, rarity tier assignment, or redemption code that is not present in those sources is left as \"Not announced as of 2026-09-11\" rather than filled from community speculation or older SCP-themed Roblox titles.",
};
