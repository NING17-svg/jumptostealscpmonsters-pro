import type { FAQItem } from "@/types/content";

export const faqItems: FAQItem[] = [
  {
    id: "where-to-play",
    question: "Where do I play Jump To Steal SCP Monsters?",
    answer:
      "The official Experience page is https://www.roblox.com/games/123724279728430 (Universe ID 10683945170, Creator Group Code&Bricks). Joining from any open Roblox client or browser lands you in a live server of the collection loop.",
    pageIds: ["home", "faq" ],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "are-codes-active",
    question: "Are any codes working right now?",
    answer:
      "Not announced as of 2026-09-11. Code&Bricks has not published a redemption code for Universe 10683945170 on the official Experience page or its social channels.",
    pageIds: ["home", "jump-to-steal-scp-monsters-codes", "faq" ],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "what-is-the-goal",
    question: "What is the goal of the game?",
    answer:
      "The goal is to capture SCP monsters by completing jump-to-steal routes, then unlock higher rarity tiers (S / A / B / C / D) and progress through additional routes each round. End-of-round summaries post your captured monsters and tier.",
    pageIds: ["home", "faq" ],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "is-this-same-as-other-scp",
    question: "Is this the same as other Roblox SCP games?",
    answer:
      "No. Jump To Steal SCP Monsters is a brand-new Universe created on 2026-08-11 by Code&Bricks; it is not a remake of any older Roblox SCP title. The \"SCP monsters Roblox\" phrase is shared across unrelated games and is not a synonym for Universe 10683945170.",
    pageIds: ["home", "faq" ],
    category: "site",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "where-new-codes",
    question: "Where are new codes announced first?",
    answer:
      "The official Roblox Experience page (https://www.roblox.com/games/123724279728430) and the Code&Bricks creator group's verified social channels. Aggregator sites are useful for cross-reference but should not be the only source.",
    pageIds: ["jump-to-steal-scp-monsters-codes", "faq" ],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "do-codes-expire",
    question: "Do codes in this game expire?",
    answer:
      "Yes, every published code carries an expiry window set by Code&Bricks. Once a code is removed from the official channel it is listed here as \"Expired as of {retrieval date}\" and will no longer redeem in-game.",
    pageIds: ["jump-to-steal-scp-monsters-codes", "faq" ],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "will-codes-come-back",
    question: "Will an expired code ever come back?",
    answer:
      "No. Once Code&Bricks marks a code as retired, the same code string is not reactivated with the same reward. A future patch may publish a new code with the same string but a different reward, which is treated as a new entry rather than a revival.",
    pageIds: ["jump-to-steal-scp-monsters-codes", "faq" ],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "need-private-server",
    question: "Do I need a private server to start playing?",
    answer:
      "No. The official Experience page is publicly playable, and any open server in Universe 10683945170 will accept a new player into the first round. Private servers are an optional convenience for groups, not a requirement to play.",
    pageIds: ["guides", "faq" ],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "round-length",
    question: "How long is one round?",
    answer:
      "Not announced as of 2026-09-11. The Roblox Games API does not expose round length for this universe and Code&Bricks has not published the value; check the updates page after each patch for the current figure.",
    pageIds: ["guides", "faq" ],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "rarest-monster",
    question: "What is the rarest SCP monster I can capture?",
    answer:
      "The S tier is the top of the published rarity ladder, but the specific S-tier SCP monster roster is recorded on the monsters page and the tier list page rather than here, because those pages are the canonical place for per-monster rarity assignments.",
    pageIds: ["guides", "faq" ],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "progress-between-servers",
    question: "Will my progress carry between servers?",
    answer:
      "Not announced as of 2026-09-11. Code&Bricks has not published whether captured SCP monsters and rarity tier counts persist at the account level across servers in Universe 10683945170; check the updates page after each patch for the official answer once Code&Bricks publishes it.",
    pageIds: ["guides", "faq" ],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "play-with-friends",
    question: "Can I play with friends?",
    answer:
      "Yes for the basic collection loop, with caveats. Group up before joining a server and the round still works the same — only the first player to hit the steal window captures the monster. Whether Code&Bricks has enabled a dedicated in-game party feature for the current patch is not announced as of 2026-09-11.",
    pageIds: ["guides", "faq" ],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "how-many-monsters",
    question: "How many SCP monsters are in Jump To Steal SCP Monsters!?",
    answer:
      "The official Roblox game page and Creator Group Code&Bricks social channels have not published a count as of 2026-09-11, so a precise total cannot be listed without inventing a number. Treat any third-party count you see as community speculation until the official roster appears.",
    pageIds: ["wiki", "faq" ],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "where-current-monsters",
    question: "Where can I see the current SCP monster names?",
    answer:
      "Start at the official Roblox game page for Jump To Steal SCP Monsters! and then check Code&Bricks social channels for any roster reveal. When new monsters are added, they normally show up in the game description or a creator announcement before any other source.",
    pageIds: ["wiki", "faq" ],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "all-monsters-in-tier",
    question: "Do all SCP monsters belong to a rarity tier?",
    answer:
      "Yes, the collection loop assigns every SCP monster a rarity tier from S down to D. The exact assignment per monster is part of the game data and is not yet published for any individual SCP monster as of 2026-09-11.",
    pageIds: ["wiki", "faq" ],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "page-updates-with-new-monsters",
    question: "Will this page list new SCP monsters when they are added?",
    answer:
      "This page is a dated status snapshot tied to the 2026-09-11 research run. When Code&Bricks publishes a new SCP monster, the next refresh of this page can record the name, rarity tier, jump route location, and current in-game availability with a new research date.",
    pageIds: ["wiki", "faq" ],
    category: "site",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "routes-officially-documented",
    question: "Are the Jump To Steal SCP Monsters routes officially documented?",
    answer:
      "No. As of 2026-09-11, Code&Bricks has not published per-stage starting points, mid-check geometry, or steal-window timing for any specific route on the official Roblox game page or on its creator group's social channels.",
    pageIds: ["jump-to-steal-scp-monsters-routes", "faq" ],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "community-walkthrough",
    question: "Where can I find a community walkthrough of a Jump To Steal SCP Monsters route?",
    answer:
      "Community walkthroughs exist on YouTube, Discord, and Roblox profile posts. They can show how a player completes a Jump To Steal SCP Monsters route, but Code&Bricks has not endorsed them as the canonical layout, so this page does not present them as current-game facts.",
    pageIds: ["jump-to-steal-scp-monsters-routes", "faq" ],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "routes-change-between-updates",
    question: "Do Jump To Steal SCP Monsters routes change between updates?",
    answer:
      "Code&Bricks can adjust routes through the official update log for Universe 10683945170. As of 2026-09-11, no specific route change has been announced in a dated patch note. Any future route adjustment should be checked against the updates log first.",
    pageIds: ["jump-to-steal-scp-monsters-routes", "faq" ],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "new-routes-added",
    question: "Will new Jump To Steal SCP Monsters routes be added?",
    answer:
      "Whether additional routes will be added has not been announced as of 2026-09-11. Code&Bricks has not published a forward-looking route roadmap on the official Roblox game page.",
    pageIds: ["jump-to-steal-scp-monsters-routes", "faq" ],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "what-tiers-exist",
    question: "What rarity tiers exist in Jump To Steal SCP Monsters!?",
    answer:
      "The collection loop uses five rarity tiers: S, A, B, C, and D, with S as the rarest and D as the most common. The tier labels are confirmed by the official Roblox game page; the per-tier monster names are not.",
    pageIds: ["jump-to-steal-scp-monsters-tier-list", "faq" ],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "which-monster-is-s-tier",
    question: "Which SCP monster is the S tier in Jump To Steal SCP Monsters!?",
    answer:
      "No individual SCP monster has been confirmed under the S tier as of 2026-09-11. The official Roblox game page and Code&Bricks channels have not published a labelled roster, so this page keeps the S tier row as \"Not announced as of 2026-09-11\".",
    pageIds: ["jump-to-steal-scp-monsters-tier-list", "faq" ],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "where-new-player-starts",
    question: "Where should a new player start on the tier list?",
    answer:
      "Treat the tier list as a priority ladder: confirm the published SCP monster names on the official game page, then start with a D or C tier SCP monster, move up to B or A tier SCP monsters once the round loop is consistent, and reserve S tier SCP monsters for sessions where the route can be completed in one piece.",
    pageIds: ["jump-to-steal-scp-monsters-tier-list", "faq" ],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "tier-list-changes-between-patches",
    question: "Does the tier list change between patches?",
    answer:
      "Tier changes happen when Code&Bricks publishes a balance update, a new SCP monster, or a reroll of an existing SCP monster's rarity. This page is a dated status snapshot tied to 2026-09-11 and will need a refresh once a tier change is published.",
    pageIds: ["jump-to-steal-scp-monsters-tier-list", "faq" ],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "where-updates-posted",
    question: "Where do Jump To Steal SCP Monsters updates get posted?",
    answer:
      "Code&Bricks posts Jump To Steal SCP Monsters updates on the official Roblox game page, through the Roblox Games API metadata, and on its creator group's social channels. As of 2026-09-11, the official change list for the most recent patch has not been published in any of those channels.",
    pageIds: ["jump-to-steal-scp-monsters-updates", "faq" ],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "update-cadence",
    question: "How often does Code&Bricks update Jump To Steal SCP Monsters?",
    answer:
      "The Roblox Games API shows a recent Universe updated timestamp, indicating that Code&Bricks has shipped at least one patch on a recent day. A fixed Jump To Steal SCP Monsters update cadence has not been announced.",
    pageIds: ["jump-to-steal-scp-monsters-updates", "faq" ],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "updates-add-codes",
    question: "Do updates usually add new Jump To Steal SCP Monsters codes?",
    answer:
      "Updates often drop alongside Jump To Steal SCP Monsters codes in Roblox games of this type. Whether the most recent Jump To Steal SCP Monsters update added a code has not been announced as of 2026-09-11; the codes page is the place to confirm once the change list ships.",
    pageIds: ["jump-to-steal-scp-monsters-updates", "faq" ],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
];
