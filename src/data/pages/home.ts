import { site } from "@/data/site";
import type { PageContent } from "@/types/content";

export const homePage: PageContent = {
  id: "home",
  translationKey: "home",
  locale: "en-US",
  routeKind: "home",
  slug: "",
  url: "/",
  pageType: "home",
  presentation: { shell: "home", variant: "split-panel" },
  h1: `${site.gameName}`,
  seoTitle: `${site.gameName}: Roblox Codes, Routes & Updates`,
  metaDescription:
    "Jump To Steal SCP Monsters is a Roblox parkour-and-collection universe by Code&Bricks. Track active codes, the SCP monster roster, jump-to-steal routes, and updates.",
  summary:
    "An English-language reference hub for the new Roblox collection-and-parkour Universe 10683945170 — active codes, SCP monster roster, jump-to-steal routes, tier comparison, and the latest patch notes.",
  hero: {
    eyebrow: site.gameName,
    subtitle:
      "A new Roblox collection-and-parkour universe: join a server, run a jump-to-steal route, capture an SCP monster, and unlock a rarity tier (S / A / B / C / D). Universe 10683945170, Creator Group Code&Bricks.",
    ctas: [
      { label: "Play on Roblox", href: "https://www.roblox.com/games/123724279728430" },
      { label: "Read How to Play", href: "/how-to-play" },
    ],
  },
  quickAnswer:
    "Jump To Steal SCP Monsters is a Roblox collection-and-parkour universe created by the Code&Bricks group on 2026-08-11 (Universe ID 10683945170). Players join a server, run a jump-to-steal route, capture an SCP monster, and unlock a rarity tier (S / A / B / C / D) before the round ends. This site tracks currently active codes, the SCP monster roster, jump-to-steal route documentation, and the latest patch notes for English-language players.",
  keyFacts: [
    { label: "Universe ID", value: "10683945170" },
    { label: "Creator group", value: "Code&Bricks" },
    { label: "Created", value: "2026-08-11" },
    { label: "Playing now", value: "8,262 (2026-09-11 API snapshot)" },
    { label: "Visits", value: "8,270,000 (2026-09-11 API snapshot)" },
    { label: "Favorites", value: "545,712 (2026-09-11 API snapshot)" },
    { label: "Top trending", value: "Rank 34 (2026-09-11 brief snapshot)" },
  ],
  modules: [
    {
      id: "quick-answer",
      type: "prose",
      heading: `What ${site.gameName} Is and Where to Play`,
      body:
        "Jump To Steal SCP Monsters is the official title of Universe 10683945170 on Roblox, published under the Code&Bricks creator group. The Experience page is reachable at https://www.roblox.com/games/123724279728430 and is the only authoritative current-game source for the live universe. Universe creation is logged at 2026-08-11T22:31:14Z in the Roblox Games API, which makes this a brand-new universe with no prior release or legacy title.",
    },
    {
      id: "scale-signals",
      type: "prose",
      heading: "Scale Signals Recorded on 2026-09-11",
      body:
        "Brief scale signals recorded on 2026-09-11 include approximately 8.27M visits, 545,712 favorites, and a player_count around 8,262, with a favorites-to-visits ratio near 6.6 percent. The game is publicly playable and was still being updated on the snapshot date. For a first visit, open the Experience page linked above and join any open server to enter the collection loop.",
    },
    {
      id: "reference-pages",
      type: "entity-grid",
      heading: "Active Codes, Monster Roster, and Update Log",
      items: [
        {
          title: "Codes",
          summary: "Currently active Jump To Steal SCP Monsters codes, what each rewards, and where Code&Bricks announces new codes.",
          href: "/codes",
        },
        {
          title: "Monster Roster",
          summary: "SCP monsters by rarity tier, jump route location, and current in-game availability.",
          href: "/monsters",
        },
        {
          title: "Tier List",
          summary: "Compare the SCP monsters by S / A / B / C / D rarity tier and pick the next steal target.",
          href: "/tier-list",
        },
        {
          title: "Updates",
          summary: "Latest patch notes, balance changes, new SCP monsters, and limited-time events.",
          href: "/updates",
        },
      ],
    },
    {
      id: "entry-points",
      type: "entity-grid",
      heading: "How to Start and Where to Find Routes",
      items: [
        {
          title: "How to Play",
          summary: "Server round walkthrough, rarity tier ladder, and a first-match checklist for new players.",
          href: "/how-to-play",
        },
        {
          title: "Routes",
          summary: "Jump-to-steal route format, traversal tips, and what is not yet officially documented.",
          href: "/routes",
        },
      ],
    },
    {
      id: "not-announced",
      type: "callout",
      tone: "caution",
      title: "What is not publicly documented yet",
      body:
        "Because the universe is still inside its new-platform-identity window (open from 2026-08-11, scheduled to close 2026-09-26), some entries on the codes, monsters, and updates pages may currently read \"Not announced as of 2026-09-11.\" That phrasing means Code&Bricks has not yet published the detail in an official channel; revisit the page after a new patch or social post for changes.",
    },
    {
      id: "if-you-only-have-a-minute",
      type: "callout",
      tone: "tip",
      title: "If you only have a minute",
      body:
        "Start with the how-to-play walkthrough if you are about to open the game for the first time. If you only want to know what just changed, jump straight to updates. Codes drop first on the Code&Bricks verified social channels and are tracked on the codes page.",
    },
  ],
  faqIds: ["where-to-play", "are-codes-active", "what-is-the-goal", "is-this-same-as-other-scp"],
  relatedPageIds: [
    "jump-to-steal-scp-monsters-codes",
    "guides",
    "wiki",
    "jump-to-steal-scp-monsters-updates",
  ],
  schemaTypes: ["WebSite", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-11",
};
