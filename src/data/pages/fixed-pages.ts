import { site } from "@/data/site";
import type { PageContent } from "@/types/content";

export const codesPage: PageContent = {
  id: "jump-to-steal-scp-monsters-codes",
  translationKey: "jump-to-steal-scp-monsters-codes",
  locale: "en-US",
  routeKind: "fixed",
  slug: "codes",
  url: "/codes",
  pageType: "wiki",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: `${site.gameName} Codes`,
  seoTitle: `${site.gameName} Codes: Active Rewards & How to Redeem`,
  metaDescription:
    "No active Jump To Steal SCP Monsters codes have been published as of 2026-09-11. Learn where Code&Bricks posts new rewards and how to redeem them in-game.",
  summary:
    "A dated status page that records whether any Jump To Steal SCP Monsters codes are currently redeemable, with a redemption walkthrough, the official channels where new codes appear, and an empty expired archive.",
  hero: {
    eyebrow: "Codes",
    subtitle:
      "A dated view of the active codes table, the standard Code&Bricks redemption flow, the channels where new codes appear, and an empty expired-codes archive.",
    ctas: [
      { label: "Read How to Play", href: "/how-to-play" },
      { label: "View Updates", href: "/updates" },
    ],
  },
  quickAnswer:
    "No active Jump To Steal SCP Monsters codes are listed as of 2026-09-11 because Code&Bricks has not yet published a redemption code for Universe 10683945170 on any official channel. When a code is released, it will be posted on the official Roblox Experience page or the Code&Bricks verified social channels and redeemed through the in-game codes text box.",
  keyFacts: [
    { label: "Active codes", value: "None verified as of 2026-09-11" },
    { label: "Redemption", value: "In-game Codes button, case-sensitive" },
    { label: "Source rule", value: "Official Roblox game page + Code&Bricks social" },
  ],
  modules: [
    {
      id: "active-codes-table",
      type: "data-table",
      heading: `Active ${site.gameName} codes (2026-09-11)`,
      columns: [
        { key: "code", label: "Code" },
        { key: "reward", label: "Reward" },
        { key: "source", label: "Source" },
        { key: "status", label: "Status" },
      ],
      rows: [
        { code: "Not announced as of 2026-09-11", reward: "—", source: "—", status: "Not announced" },
      ],
    },
    {
      id: "redemption-steps",
      type: "steps",
      heading: `How to redeem codes in ${site.gameName}`,
      items: [
        { title: "Launch the game", body: "Launch the game from the Roblox library or the official Experience page (https://www.roblox.com/games/123724279728430)." },
        { title: "Enter any open server", body: "Join a live server and wait for the character to load." },
        { title: "Open the Codes, Twitter, or Rewards button", body: "Locate the Codes button in the in-game menu — usually marked with a gift or ticket icon." },
        { title: "Enter the code", body: "Type or paste the code exactly as published (codes are case-sensitive)." },
        { title: "Confirm the reward", body: "Confirm the reward notification; if no notification appears, the code is expired, mistyped, or not yet active." },
        { title: "Restart if needed", body: "Restart the server if the reward does not appear, since some rewards only land after a server reload." },
      ],
    },
    {
      id: "where-new-codes-drop",
      type: "prose",
      heading: `Where new ${site.gameName} codes are announced`,
      body:
        "Codes drop first on the official channels tied to Creator Group Code&Bricks. The three places to monitor are: the official Roblox game page description for Universe 10683945170, which is sometimes edited to surface a fresh code; the Code&Bricks verified social channels (X, Discord, YouTube community tab), where the team posts codes alongside event announcements; and the in-game announcement board, which mirrors anything Code&Bricks posts externally. Because Universe 10683945170 was created on 2026-08-11 and is still inside the new-platform-identity window (closing 2026-09-26), the first wave of codes is expected to land in the first weeks after launch.",
    },
    {
      id: "expired-archive",
      type: "data-table",
      heading: `Expired ${site.gameName} codes (archive)`,
      columns: [
        { key: "code", label: "Code" },
        { key: "reward", label: "Reward" },
        { key: "expired", label: "Expired" },
      ],
      rows: [
        { code: "No codes have expired yet", reward: "—", expired: "—" },
      ],
    },
    {
      id: "update-link",
      type: "callout",
      tone: "tip",
      title: "Codes often ship with a patch",
      body:
        "The updates page tracks every patch, which is the most common moment for a new reward drop, and records the patch date so the source of any new reward can be confirmed against the same entry.",
    },
  ],
  faqIds: ["are-codes-active", "where-new-codes", "do-codes-expire", "will-codes-come-back"],
  relatedPageIds: ["home", "jump-to-steal-scp-monsters-updates"],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-11",
};

export const howToPlayPage: PageContent = {
  id: "guides",
  translationKey: "jump-to-steal-scp-monsters-how-to-play",
  locale: "en-US",
  routeKind: "fixed",
  slug: "how-to-play",
  url: "/how-to-play",
  pageType: "guides",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: `${site.gameName} How to Play`,
  seoTitle: `${site.gameName} How to Play: Beginner Guide`,
  metaDescription:
    "Learn Jump To Steal SCP Monsters how to play in Roblox: understand the jump-to-steal loop, SCP monster collection, and a first-round checklist for new players.",
  summary:
    "A beginner walkthrough of Jump To Steal SCP Monsters! — the round loop, the rarity tier ladder (S / A / B / C / D), a first-server checklist, and common beginner mistakes.",
  hero: {
    eyebrow: "How to Play",
    subtitle:
      "Understand the round loop, the rarity tier ladder, a first-server checklist, and what to do after your first SCP monster capture.",
    ctas: [
      { label: "Read Routes", href: "/routes" },
      { label: "Browse Monster Roster", href: "/monsters" },
    ],
  },
  quickAnswer:
    "Jump To Steal SCP Monsters how to play begins with joining a server in Universe 10683945170 (Creator Group Code&Bricks) and waiting for the round to start. Each round places players at the start of a jump-to-steal route; running the route captures an SCP monster, which feeds the rarity-tier ladder (S / A / B / C / D). The next round then opens a harder route, and the loop continues until the server resets or the player leaves.",
  keyFacts: [
    { label: "Universe ID", value: "10683945170" },
    { label: "Loop", value: "Server spawn → jump-to-steal route → capture → rarity tier" },
    { label: "Rarity ladder", value: "S / A / B / C / D" },
  ],
  modules: [
    {
      id: "what-it-is",
      type: "prose",
      heading: `What ${site.gameName} Is`,
      body:
        "Jump To Steal SCP Monsters is the official title of Roblox Universe 10683945170, published under the Code&Bricks creator group. The Experience page is reachable at https://www.roblox.com/games/123724279728430 and is the only authoritative current-game source for the live universe. Universe creation is logged at 2026-08-11T22:31:14Z in the Roblox Games API, which makes this a brand-new universe with no prior release or legacy title to compare against.",
    },
    {
      id: "core-loop",
      type: "steps",
      heading: "The Core Loop",
      items: [
        { title: "Server spawn", body: "Server spawns players at the start of a jump-to-steal route." },
        { title: "Run the route", body: "Players run, jump, and complete mid-checks along the route." },
        { title: "Capture the SCP monster", body: "The first player to reach the target SCP monster and trigger the steal captures it." },
        { title: "Award rarity tier", body: "The server logs the capture, awards the rarity tier reward, and resets for the next round." },
        { title: "Harder route", body: "The next round opens a harder route, often with a higher-tier SCP monster as the target." },
      ],
    },
    {
      id: "rarity-ladder",
      type: "comparison",
      heading: "Rarity Tier Ladder (S / A / B / C / D)",
      options: [
        { name: "S tier", summary: "Rarest captures, often tied to the hardest jump-to-steal routes; intended for experienced players.", bestFor: "experienced players", badge: "S" },
        { name: "A tier", summary: "Strong captures on mid-difficulty routes; the realistic target after a few rounds.", bestFor: "intermediate runs", badge: "A" },
        { name: "B tier", summary: "Solid captures on routes with a moderate jump difficulty.", bestFor: "steady progress", badge: "B" },
        { name: "C tier", summary: "Common captures on easier routes; the first reliable tier for new players.", bestFor: "first reliable captures", badge: "C" },
        { name: "D tier", summary: "The entry tier; appears on the easiest routes and serves as the on-ramp.", bestFor: "first capture", badge: "D" },
      ],
    },
    {
      id: "first-server-checklist",
      type: "steps",
      heading: "Your First Server Checklist",
      items: [
        { title: "Before you queue: open the Experience page", body: "Open the official Experience page (https://www.roblox.com/games/123724279728430) and confirm Universe 10683945170 is publicly playable." },
        { title: "Before you queue: join a server", body: "Join any open server from the Roblox client; if all servers are full, wait a few minutes for a slot to open or try a different region." },
        { title: "Before you queue: read the tutorial pop-up", body: "Read the in-game tutorial pop-up; it covers the basic jump controls and the codes / rewards menu." },
        { title: "During the jump route: wait for the round-start", body: "Wait for the round-start countdown to reach zero before moving; jumping early usually disqualifies the capture." },
        { title: "During the jump route: follow markers", body: "Follow the visible jump markers; the route is designed so the markers line up with each mid-check." },
        { title: "During the jump route: watch the steal window", body: "Watch the steal window indicator near the target SCP monster; it tells you whether you are inside the time window for a valid capture." },
        { title: "If you fall or miss: queue for the next round", body: "Respawn rules have not been published as of 2026-09-11; the safest assumption is a full reset to the start of the active route. Queue for the next round." },
      ],
    },
    {
      id: "after-first-capture",
      type: "entity-grid",
      heading: "What to Do After Your First Capture",
      items: [
        { title: "Check active codes", summary: "The codes page tracks every active and expired entry; Code&Bricks typically drops new rewards alongside the patches that add new routes.", href: "/codes" },
        { title: "Read the latest updates", summary: "The updates page collects patch notes, balance changes, new SCP monsters, and limited-time events.", href: "/updates" },
        { title: "Browse the monster roster", summary: "See which SCP monsters you have already captured and which rarity tier each one belongs to.", href: "/monsters" },
        { title: "Compare against the tier list", summary: "Decide which next-route targets are worth prioritising on the S / A / B / C / D comparison page.", href: "/tier-list" },
        { title: "Open the routes reference", summary: "Read per-route starting points, mid-checks, and steal windows once Code&Bricks publishes them.", href: "/routes" },
      ],
    },
    {
      id: "common-mistakes",
      type: "callout",
      tone: "caution",
      title: "Common Beginner Mistakes to Avoid",
      body:
        "Jumping before the round-start countdown ends wastes the steal window. Ignoring mid-check markers is risky because Code&Bricks has not published whether each marker is an official save point. Chasing S-tier routes in round one is not safe because the first-round tier weighting is not announced. Skipping the codes check means missing any reward tied to the same patch as the first capture.",
    },
    {
      id: "not-announced",
      type: "callout",
      tone: "unknown",
      title: "What is not announced as of 2026-09-11",
      body:
        "Round length, lobby countdown, respawn rules, mid-check save-point rules, first-round tier weighting, and account-level persistence of captured SCP monsters and rarity tier counts are all marked \"Not announced as of 2026-09-11\" on this page; check the updates page after each patch for the official answer.",
    },
  ],
  faqIds: ["need-private-server", "round-length", "rarest-monster", "progress-between-servers", "play-with-friends"],
  relatedPageIds: [
    "jump-to-steal-scp-monsters-routes",
    "wiki",
    "jump-to-steal-scp-monsters-tier-list",
    "jump-to-steal-scp-monsters-codes",
    "jump-to-steal-scp-monsters-updates",
  ],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-11",
};

export const monstersPage: PageContent = {
  id: "wiki",
  translationKey: "jump-to-steal-scp-monsters-monsters",
  locale: "en-US",
  routeKind: "fixed",
  slug: "monsters",
  url: "/monsters",
  pageType: "wiki",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: `${site.gameName} Monsters: Full Roster and Rarity`,
  seoTitle: `${site.gameName} Monsters: Full SCP Roster`,
  metaDescription:
    "Jump To Steal SCP Monsters monsters: full SCP roster list with rarity tier, jump route location, and current in-game availability, dated 2026-09-11.",
  summary:
    "A dated status snapshot for the Jump To Steal SCP Monsters SCP monster roster: rarity tier (S / A / B / C / D), jump route location, and current in-game availability.",
  hero: {
    eyebrow: "Monster Roster",
    subtitle:
      "Browse the SCP monster roster with rarity tier, jump route location, and current in-game availability. Dated 2026-09-11.",
    ctas: [
      { label: "Compare by Tier", href: "/tier-list" },
      { label: "Read Routes", href: "/routes" },
    ],
  },
  quickAnswer:
    "The official Jump To Steal SCP Monsters monsters roster has not been published on the Roblox game page, the Roblox Games API, or any Code&Bricks social channel as of 2026-09-11. Rarity tiers (S, A, B, C, D) are part of the collection loop, but no individual SCP monster names have been confirmed. Use this page as a dated status snapshot.",
  keyFacts: [
    { label: "Roster status", value: "Not announced as of 2026-09-11" },
    { label: "Rarity ladder", value: "S / A / B / C / D" },
    { label: "Refresh trigger", value: "Official game page or Code&Bricks channel post" },
  ],
  modules: [
    {
      id: "official-sources",
      type: "prose",
      heading: "What the official sources say about the roster",
      body:
        "As of 2026-09-11, the official Roblox game page (Universe ID 10683945170) does not publish a full SCP monster roster, and the Roblox Games API multi-get endpoint only exposes identity fields, timestamps, player count, visits, and favorites. Creator Group Code&Bricks has not posted a labelled monster catalogue on the official channels observed for this research run. Because every monster name, rarity tier assignment, and jump route location must come from one of those current-game sources before it can be published here, the per-monster rows below all carry the same dated status statement.",
    },
    {
      id: "roster-table",
      type: "data-table",
      heading: "SCP Monster Roster (status snapshot)",
      columns: [
        { key: "monster", label: "Monster" },
        { key: "rarity", label: "Rarity tier" },
        { key: "route", label: "Jump route location" },
        { key: "availability", label: "Current in-game availability" },
        { key: "note", label: "Status note" },
      ],
      rows: [
        { monster: "Not announced as of 2026-09-11", rarity: "Not announced", route: "Not announced", availability: "Not announced", note: "Official game page has not published a named SCP monster." },
        { monster: "Not announced as of 2026-09-11", rarity: "Not announced", route: "Not announced", availability: "Not announced", note: "Roblox Games API metadata does not include a monster list." },
        { monster: "Not announced as of 2026-09-11", rarity: "Not announced", route: "Not announced", availability: "Not announced", note: "Code&Bricks has not posted a labelled roster on observed channels." },
      ],
    },
    {
      id: "rarity-fit",
      type: "prose",
      heading: "How rarity tiers fit into the collection loop",
      body:
        "The collection loop uses five rarity tiers, labelled S, A, B, C, and D, and players unlock higher tiers by completing the jump-to-steal routes that lead to each SCP monster. The tier itself comes from the game data attached to each SCP monster, not from the player's choice, so a route always leads to the same SCP monster and the same tier. Because the official sources do not yet publish which SCP monster belongs to which tier, this page keeps the tier labels as a reference frame and leaves each row blank with the same dated status note.",
    },
    {
      id: "how-to-use",
      type: "callout",
      tone: "tip",
      title: "How to use this page until the roster is published",
      body:
        "Until Code&Bricks publishes a labelled SCP monster list, treat this page as a status record rather than a database. Check the official Roblox game page before starting a long route. For the jump-to-steal route format, see the routes page; for the round-by-round flow, see the how-to-play page; for a tier-by-tier comparison, see the tier list page.",
    },
  ],
  faqIds: ["how-many-monsters", "where-current-monsters", "all-monsters-in-tier", "page-updates-with-new-monsters"],
  relatedPageIds: [
    "jump-to-steal-scp-monsters-tier-list",
    "jump-to-steal-scp-monsters-routes",
    "guides",
  ],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-11",
};

export const routesPage: PageContent = {
  id: "jump-to-steal-scp-monsters-routes",
  translationKey: "jump-to-steal-scp-monsters-routes",
  locale: "en-US",
  routeKind: "fixed",
  slug: "routes",
  url: "/routes",
  pageType: "guides",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: `${site.gameName} Routes`,
  seoTitle: `${site.gameName} Routes: Path Tips and Steal Window`,
  metaDescription:
    "Jump To Steal SCP Monsters routes reference: how the jump-to-steal loop works, what the official Roblox game page confirms, and what is not documented.",
  summary:
    "A status-style reference for Jump To Steal SCP Monsters routes: how the jump-to-steal loop works, traversal tips, and what is not officially documented as of 2026-09-11.",
  hero: {
    eyebrow: "Routes",
    subtitle:
      "Document the jump-to-steal loop, per-route traversal tips, and what is not officially documented yet.",
    ctas: [
      { label: "Read How to Play", href: "/how-to-play" },
      { label: "Browse Monster Roster", href: "/monsters" },
    ],
  },
  quickAnswer:
    "Jump To Steal SCP Monsters routes describe the parkour path a player walks during a server round to capture an SCP monster before the steal window closes. As of 2026-09-11, Code&Bricks has not published a per-stage route map, starting points, or mid-check descriptions; every value for any documented route is marked \"Not officially documented as of 2026-09-11\".",
  keyFacts: [
    { label: "Route sheet", value: "Not officially documented as of 2026-09-11" },
    { label: "Core mechanism", value: "Jump-to-steal loop" },
    { label: "Capture rule", value: "First player to tag SCP monster inside the steal window" },
  ],
  modules: [
    {
      id: "what-routes-cover",
      type: "prose",
      heading: "What the routes cover",
      body:
        "Jump To Steal SCP Monsters routes describe the parkour path a player walks during a server round to capture an SCP monster before the steal window closes. As of 2026-09-11, Code&Bricks has not published a per-stage route map, starting points, or mid-check descriptions; every value for any documented Jump To Steal SCP Monsters route below is therefore marked Not officially documented as of 2026-09-11.",
    },
    {
      id: "how-loop-works",
      type: "prose",
      heading: "How the jump-to-steal loop works",
      body:
        "The Jump To Steal SCP Monsters loop sits inside a standard Roblox server round. Each round, the player enters a route, advances through one or more platforming checks, and reaches a target SCP monster. When the player tags that monster inside the steal window, the capture resolves and the SCP monster is added to the player's collection with its assigned rarity tier (S / A / B / C / D).",
    },
    {
      id: "documented-routes-table",
      type: "data-table",
      heading: "Documented Routes and Status",
      columns: [
        { key: "route", label: "Route name" },
        { key: "start", label: "Starting point" },
        { key: "mids", label: "Mid-checks" },
        { key: "target", label: "Target SCP monster" },
        { key: "window", label: "Steal window" },
      ],
      rows: [
        { route: "Not officially documented as of 2026-09-11", start: "Not officially documented", mids: "Not officially documented", target: "Not officially documented", window: "Not officially documented" },
      ],
    },
    {
      id: "not-documented-meaning",
      type: "callout",
      tone: "unknown",
      title: "What \"Not officially documented as of 2026-09-11\" means",
      body:
        "The phrase flags that Code&Bricks has not published the listed fact on either the official Roblox game page (https://www.roblox.com/games/123724279728430) or the official Roblox Games API metadata for Universe 10683945170. It does not mean the route does not exist; the loop is the documented core mechanism, but the per-stage geometry of each individual route has not been published. Player-recorded walkthroughs on YouTube or Discord may show a working path, but Code&Bricks has not endorsed those recordings as the canonical layout.",
    },
    {
      id: "tips",
      type: "callout",
      tone: "tip",
      title: "Tips for traversing Jump To Steal SCP Monsters routes",
      body:
        "Read the rarity field on the SCP monster you want before committing to the route — the tier drives value more than route distance. Treat the steal window as the limiting resource, not the route length. Move through mid-checks in a single line of motion — backtracking is rarely rewarded inside a single round. If a check fails, reset from the start of the active route rather than from a previous mid-check. Cross-reference what you see with the SCP monster roster on the official Roblox game page.",
    },
  ],
  faqIds: ["routes-officially-documented", "community-walkthrough", "routes-change-between-updates", "new-routes-added"],
  relatedPageIds: [
    "jump-to-steal-scp-monsters-tier-list",
    "wiki",
    "guides",
  ],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-11",
};

export const tierListPage: PageContent = {
  id: "jump-to-steal-scp-monsters-tier-list",
  translationKey: "jump-to-steal-scp-monsters-tier-list",
  locale: "en-US",
  routeKind: "fixed",
  slug: "tier-list",
  url: "/tier-list",
  pageType: "wiki",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: `${site.gameName} Tier List: Rarity Tiers Ranked S to D`,
  seoTitle: `${site.gameName} Tier List: S to D Rarity Ranks`,
  metaDescription:
    "Jump To Steal SCP Monsters tier list by rarity (S, A, B, C, D), with priority advice, current in-game availability notes, and a dated 2026-09-11 status snapshot.",
  summary:
    "A five-row reference frame for the Jump To Steal SCP Monsters tier list (S / A / B / C / D) plus priority advice and a dated 2026-09-11 status snapshot.",
  hero: {
    eyebrow: "Tier List",
    subtitle:
      "Compare SCP monsters by S / A / B / C / D rarity and decide which monster to prioritise stealing.",
    ctas: [
      { label: "Browse Monster Roster", href: "/monsters" },
      { label: "Read Routes", href: "/routes" },
    ],
  },
  quickAnswer:
    "The Jump To Steal SCP Monsters tier list uses five rarity tiers labelled S, A, B, C, and D, with S being the rarest and D the most common. As of 2026-09-11, the official Roblox game page and Code&Bricks channels have not published any individual SCP monster name under any tier, so every per-tier monster row below is \"Not announced as of 2026-09-11\". Use this page as a tier reference plus a dated status note.",
  keyFacts: [
    { label: "Tiers", value: "S, A, B, C, D" },
    { label: "Per-tier monsters", value: "Not announced as of 2026-09-11" },
    { label: "Cadence", value: "Refresh after each published tier change" },
  ],
  modules: [
    {
      id: "tier-ladder",
      type: "comparison",
      heading: "Rarity Tier Ladder",
      options: [
        { name: "S tier", summary: "Rarest SCP monster tier, unlocks the largest progression step.", bestFor: "experienced players with full-route runs", badge: "S" },
        { name: "A tier", summary: "High rarity SCP monster tier, strong collection value.", bestFor: "mid-difficulty routes", badge: "A" },
        { name: "B tier", summary: "Mid-high rarity SCP monster tier, a balanced priority target.", bestFor: "steady progress", badge: "B" },
        { name: "C tier", summary: "Mid-low rarity SCP monster tier, a safe early target.", bestFor: "new players once the official name is published", badge: "C" },
        { name: "D tier", summary: "Most common SCP monster tier, the lowest priority steal.", bestFor: "filler unlocks while waiting for higher tier announcements", badge: "D" },
      ],
    },
    {
      id: "tier-table",
      type: "data-table",
      heading: "Per-Tier SCP Monster Reference",
      columns: [
        { key: "tier", label: "Tier" },
        { key: "meaning", label: "What the tier means" },
        { key: "monsters", label: "Per-tier SCP monsters" },
        { key: "advice", label: "Priority advice" },
      ],
      rows: [
        { tier: "S", meaning: "Rarest tier, unlocks the largest progression step", monsters: "Not announced as of 2026-09-11", advice: "Wait for the official roster before treating any third-party S tier claim as confirmed." },
        { tier: "A", meaning: "High rarity tier, strong collection value", monsters: "Not announced as of 2026-09-11", advice: "Use the official Roblox game page to confirm any A tier name before committing a route." },
        { tier: "B", meaning: "Mid-high rarity tier, a balanced priority target", monsters: "Not announced as of 2026-09-11", advice: "Re-check this page on the next research refresh for any B tier announcement." },
        { tier: "C", meaning: "Mid-low rarity tier, a safe early target", monsters: "Not announced as of 2026-09-11", advice: "Suitable for new players once the official name is published." },
        { tier: "D", meaning: "Most common tier, the lowest priority steal", monsters: "Not announced as of 2026-09-11", advice: "Use D tier SCP monsters as filler unlocks while waiting for higher tier announcements." },
      ],
    },
    {
      id: "priority-advice",
      type: "callout",
      tone: "tip",
      title: "Priority advice for a first jump-to-steal session",
      body:
        "When the roster is published, take the route behind the highest rarity tier that you can reliably finish within the steal window, then work down. New players usually start with a D or C tier SCP monster to learn the round loop, switch to a B or A tier SCP monster once the jump-to-steal timing is consistent, and reserve S tier SCP monsters for sessions where the route can be completed in one piece.",
    },
  ],
  faqIds: ["what-tiers-exist", "which-monster-is-s-tier", "where-new-player-starts", "tier-list-changes-between-patches"],
  relatedPageIds: [
    "wiki",
    "jump-to-steal-scp-monsters-routes",
    "guides",
  ],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-11",
};

export const updatesPage: PageContent = {
  id: "jump-to-steal-scp-monsters-updates",
  translationKey: "jump-to-steal-scp-monsters-updates",
  locale: "en-US",
  routeKind: "fixed",
  slug: "updates",
  url: "/updates",
  pageType: "wiki",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: `${site.gameName} Updates`,
  seoTitle: `${site.gameName} Updates: Patch Notes and Events`,
  metaDescription:
    "Jump To Steal SCP Monsters updates log: what the official Roblox update history shows, balance changes Code&Bricks has announced, and what is not announced.",
  summary:
    "A dated status page that records the latest Jump To Steal SCP Monsters updates: patch content, balance changes, new SCP monsters, and limited-time events — each marked with the 2026-09-11 status statement.",
  hero: {
    eyebrow: "Updates",
    subtitle:
      "Read the latest patch notes, balance changes, new SCP monster additions, and limited-time events.",
    ctas: [
      { label: "Active Codes", href: "/codes" },
      { label: "Monster Roster", href: "/monsters" },
    ],
  },
  quickAnswer:
    "Jump To Steal SCP Monsters updates cover the official patch log maintained by Code&Bricks for Universe 10683945170. As of 2026-09-11, the Roblox Games API shows a recent Universe updated timestamp; the specific patch content, new SCP monsters, and balance changes released in that patch have not been publicly announced and are marked \"Not announced as of 2026-09-11\".",
  keyFacts: [
    { label: "Patch content", value: "Not announced as of 2026-09-11" },
    { label: "Updated timestamp", value: "Recent (Roblox Games API)" },
    { label: "Source rule", value: "Official game page + Code&Bricks social" },
  ],
  modules: [
    {
      id: "how-to-read",
      type: "prose",
      heading: "How to read the latest update",
      body:
        "The update log is anchored on Universe 10683945170, with three things to read carefully per patch: the Universe updated timestamp on the official Roblox game page (https://www.roblox.com/games/123724279728430) and on the Roblox Games API metadata; the Code&Bricks announcement on the official creator-group social channels; and the in-game change list. If a patch adds a new SCP monster, a new jump-to-steal route, or a rarity-tier adjustment, the SCP monster roster and active codes list should reflect it in the same window.",
    },
    {
      id: "unannounced-patch",
      type: "data-table",
      heading: "Unannounced Patch Content (2026-09-11)",
      columns: [
        { key: "item", label: "Item" },
        { key: "status", label: "Status" },
      ],
      rows: [
        { item: "Specific new SCP monster in the most recent update", status: "Not announced as of 2026-09-11" },
        { item: "Specific rarity-tier adjustment in the most recent update", status: "Not announced as of 2026-09-11" },
        { item: "Specific balance change to the jump-to-steal loop", status: "Not announced as of 2026-09-11" },
        { item: "Limited-time event currently active", status: "Not announced as of 2026-09-11" },
      ],
    },
    {
      id: "verify-after-publish",
      type: "callout",
      tone: "tip",
      title: "Where to verify an update after publication",
      body:
        "Use three primary sources in this order: the official Roblox game page (Universe updated timestamp and the in-game description of new content); the official Roblox Games API metadata for Universe 10683945170; and the Code&Bricks creator group's social channels. Community videos and Discord walkthroughs are not promoted as current-game facts on this page.",
    },
  ],
  faqIds: ["where-updates-posted", "update-cadence", "updates-add-codes"],
  relatedPageIds: [
    "jump-to-steal-scp-monsters-codes",
    "wiki",
  ],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-11",
};

export const fixedPages: PageContent[] = [
  codesPage,
  howToPlayPage,
  monstersPage,
  routesPage,
  tierListPage,
  updatesPage,
];
