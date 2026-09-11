import { site } from "@/data/site";
import type { PageContent } from "@/types/content";

export const sitePages: PageContent[] = [
  {
    id: "faq",
    translationKey: "faq",
    locale: "en-US",
    routeKind: "fixed",
    slug: "faq",
    url: "/faq",
    pageType: "faq",
    presentation: { shell: "content", variant: "reading-full" },
    h1: `${site.gameName} FAQ`,
    seoTitle: `${site.gameName} FAQ`,
    metaDescription:
      "Frequently asked questions about Jump To Steal SCP Monsters!: codes, how-to-play, monsters, routes, tier list, and updates.",
    summary:
      "A consolidated FAQ covering the codes, how-to-play, monsters, routes, tier list, and updates questions that come up around Jump To Steal SCP Monsters!.",
    hero: {
      eyebrow: "FAQ",
      subtitle:
        "A consolidated FAQ covering the codes, how-to-play, monsters, routes, tier list, and updates questions that come up around Jump To Steal SCP Monsters!.",
      ctas: [
        { label: "Read How to Play", href: "/how-to-play" },
        { label: "View Codes", href: "/codes" },
      ],
    },
    quickAnswer:
      "This FAQ consolidates the questions that recur across the codes, how-to-play, monsters, routes, tier list, and updates pages. For deeper walkthroughs and the latest status, follow the links into the dedicated page.",
    keyFacts: [
      { label: "Universe", value: "10683945170 (Code&Bricks)" },
      { label: "Schema", value: "FAQ JSON-LD enabled" },
      { label: "Last reviewed", value: "2026-09-11" },
    ],
    modules: [
      {
        id: "faq-overview",
        type: "prose",
        heading: "FAQ overview",
        body:
          "Every answer on this page is sourced from the official Roblox Experience page (https://www.roblox.com/games/123724279728430), the Roblox Games API metadata for Universe 10683945170, or the Code&Bricks verified social channels, and is dated to the 2026-09-11 research run. Answers that depend on a fact Code&Bricks has not yet published read \"Not announced as of 2026-09-11\" rather than filling the gap with community speculation.",
      },
    ],
    faqIds: [
      "where-to-play",
      "are-codes-active",
      "what-is-the-goal",
      "is-this-same-as-other-scp",
      "where-new-codes",
      "do-codes-expire",
      "will-codes-come-back",
      "need-private-server",
      "round-length",
      "rarest-monster",
      "progress-between-servers",
      "play-with-friends",
      "how-many-monsters",
      "where-current-monsters",
      "all-monsters-in-tier",
      "page-updates-with-new-monsters",
      "routes-officially-documented",
      "community-walkthrough",
      "routes-change-between-updates",
      "new-routes-added",
      "what-tiers-exist",
      "which-monster-is-s-tier",
      "where-new-player-starts",
      "tier-list-changes-between-patches",
      "where-updates-posted",
      "update-cadence",
      "updates-add-codes",
    ],
    relatedPageIds: [
      "jump-to-steal-scp-monsters-codes",
      "guides",
      "wiki",
      "jump-to-steal-scp-monsters-routes",
      "jump-to-steal-scp-monsters-tier-list",
      "jump-to-steal-scp-monsters-updates",
    ],
    schemaTypes: ["FAQPage", "BreadcrumbList"],
    sourceStatus: "official",
    lastReviewed: "2026-09-11",
  },
  {
    id: "about",
    translationKey: "about",
    locale: "en-US",
    routeKind: "fixed",
    slug: "about",
    url: "/about",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: `About ${site.name}`,
    seoTitle: `About ${site.name}`,
    metaDescription:
      "About the Jump To Steal SCP Monsters! Guide: unofficial status, sourcing rules, and editorial scope.",
    summary:
      "A trust page explaining the site's unofficial status, the official sources used for current-game facts, and the editorial scope.",
    hero: {
      eyebrow: "About",
      subtitle:
        "What this site covers, how facts are sourced, and what readers should expect from the dated status snapshots.",
      ctas: [{ label: "Contact", href: "/contact" }],
    },
    quickAnswer:
      `${site.name} is an unofficial English-language reference hub for ${site.gameName} on Roblox (Universe 10683945170, Creator Group Code&Bricks). The site records the active codes, SCP monster roster, jump-to-steal routes, tier comparison, and the latest patch notes, all dated to 2026-09-11.`,
    keyFacts: [
      { label: "Status", value: "Unofficial fan guide" },
      { label: "Universe", value: "10683945170 (Code&Bricks)" },
      { label: "Editorial rule", value: "Official sources only; never invent facts" },
    ],
    modules: [
      {
        id: "mission",
        type: "prose",
        heading: "Mission",
        body:
          "Provide the fastest English-language reference for the active codes, SCP monster roster, jump-to-steal route documentation, tier comparison, and recent patch notes while Universe 10683945170 is still inside its new-platform-identity window.",
      },
      {
        id: "sourcing",
        type: "prose",
        heading: "Sourcing",
        body:
          "Current-game facts come only from the official Roblox game page (https://www.roblox.com/games/123724279728430), the Roblox Games API metadata for Universe 10683945170, and the Code&Bricks verified social channels. Any SCP monster name, jump-to-steal route, rarity tier assignment, or redemption code that is not present in those sources is left as \"Not announced as of 2026-09-11\" rather than filled from community speculation or older SCP-themed Roblox titles.",
      },
      {
        id: "scope",
        type: "prose",
        heading: "Scope",
        body:
          "Six fixed pages cover the day-to-day information a new player needs: codes, how-to-play, monsters, tier list, routes, and updates. There are no entity-family detail pages, no tool pages, and no login or comment system. Every fact is dated to the 2026-09-11 research run and will need a refresh once Code&Bricks publishes new official detail.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["contact", "privacy-policy", "terms"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-09-11",
  },
  {
    id: "contact",
    translationKey: "contact",
    locale: "en-US",
    routeKind: "fixed",
    slug: "contact",
    url: "/contact",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Contact",
    seoTitle: `Contact | ${site.name}`,
    metaDescription:
      "How to reach the Jump To Steal SCP Monsters! Guide team for corrections, source updates, and feedback.",
    summary:
      "A trust page for corrections, source updates, and feedback, with a dedicated support email routed through Cloudflare Email Routing.",
    hero: {
      eyebrow: "Contact",
      subtitle:
        "Reach out for corrections, source updates, and feedback.",
      ctas: [{ label: "Read About", href: "/about" }],
    },
    quickAnswer:
      `Send corrections, source links, and feedback to support@${site.domain}. The mailbox is configured through Cloudflare Email Routing and is monitored by the site maintainer.`,
    keyFacts: [
      { label: "Email", value: `support@${site.domain}` },
      { label: "Use", value: "Corrections and source links" },
      { label: "Do not send", value: "Game account credentials" },
    ],
    modules: [
      {
        id: "contact-method",
        type: "prose",
        heading: "Contact method",
        body:
          `Email support@${site.domain} with corrections, official source links, or feedback. The mailbox is configured through Cloudflare Email Routing on the production domain and is monitored by the site maintainer.`,
      },
      {
        id: "corrections",
        type: "prose",
        heading: "Corrections",
        body:
          "When sending a correction, include the official source link (Roblox game page URL, Code&Bricks social channel post, or Roblox Games API snapshot) so the change can be verified before the next refresh of the relevant page.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["about", "privacy-policy", "terms"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-09-11",
  },
  {
    id: "privacy-policy",
    translationKey: "privacy-policy",
    locale: "en-US",
    routeKind: "fixed",
    slug: "privacy-policy",
    url: "/privacy-policy",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Privacy Policy",
    seoTitle: `Privacy Policy | ${site.name}`,
    metaDescription:
      "Privacy policy for the Jump To Steal SCP Monsters! Guide, including analytics, hosting, and contact channels.",
    summary:
      "A starter privacy policy page covering analytics, logs, and contact messages for the Jump To Steal SCP Monsters! Guide.",
    hero: {
      eyebrow: "Privacy",
      subtitle:
        "Explain what data the site collects, why it is used, and how visitors can make contact.",
      ctas: [{ label: "Terms", href: "/terms" }],
    },
    quickAnswer:
      "This site does not include accounts, comments, or payments. If Google Analytics 4 is configured, analytics may collect aggregate usage information according to Google Analytics settings. Contact messages are routed through Cloudflare Email Routing and used only for the purpose of the message.",
    keyFacts: [
      { label: "Analytics", value: "GA4 only when configured" },
      { label: "Accounts", value: "No user accounts" },
      { label: "Ads", value: "Adsterra only when enabled downstream" },
    ],
    modules: [
      {
        id: "data",
        type: "prose",
        heading: "Information we collect",
        body:
          "This site does not include accounts, comments, or payments. If Google Analytics 4 is configured, analytics may collect aggregate usage information according to Google Analytics settings. If advertising is enabled by a downstream integrator, the third-party advertising provider may process technical request data and use cookies or similar technologies to deliver and measure ads.",
      },
      {
        id: "contact",
        type: "prose",
        heading: "Contact messages",
        body:
          `If a visitor emails support@${site.domain}, the message contents are routed through Cloudflare Email Routing to the site maintainer and used only for the purpose of the message. Do not send sensitive personal information or game account credentials.`,
      },
      {
        id: "updates",
        type: "prose",
        heading: "Policy updates",
        body:
          "Update this policy when analytics, hosting, contact methods, advertising providers, or other data collection behavior changes.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["about", "contact", "terms"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-09-11",
  },
  {
    id: "terms",
    translationKey: "terms",
    locale: "en-US",
    routeKind: "fixed",
    slug: "terms",
    url: "/terms",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Terms of Use",
    seoTitle: `Terms of Use | ${site.name}`,
    metaDescription:
      "Terms of use for the Jump To Steal SCP Monsters! Guide, including unofficial status, disclaimers, and acceptable use.",
    summary:
      "Starter terms for an unofficial guide site: unofficial status, informational use, and acceptable use.",
    hero: {
      eyebrow: "Terms",
      subtitle:
        "Set clear expectations for unofficial status, informational use, and site changes.",
      ctas: [{ label: "Privacy Policy", href: "/privacy-policy" }],
    },
    quickAnswer:
      "This site is an unofficial English-language reference hub for Jump To Steal SCP Monsters! on Roblox. It is not affiliated with the Roblox platform, Creator Group Code&Bricks, or any trademark owner named in the SCP Foundation space.",
    keyFacts: [
      { label: "Use", value: "Informational guide content" },
      { label: "Official status", value: "Unofficial fan site" },
      { label: "Trademarks", value: "Owned by their respective owners" },
    ],
    modules: [
      {
        id: "unofficial",
        type: "prose",
        heading: "Unofficial site",
        body:
          "This site is not affiliated with Roblox, Creator Group Code&Bricks, or any trademark owner referenced on this site, including any trademark that may appear in the broader SCP-themed universe. The Jump To Steal SCP Monsters! mark and game content belong to their respective owners.",
      },
      {
        id: "accuracy",
        type: "prose",
        heading: "Information accuracy",
        body:
          "Guide information may change as Code&Bricks publishes new official detail. Use the official Roblox game page (https://www.roblox.com/games/123724279728430), the Roblox Games API metadata for Universe 10683945170, and the Code&Bricks social channels for final purchase, playability, and update decisions.",
      },
      {
        id: "acceptable-use",
        type: "prose",
        heading: "Acceptable use",
        body:
          "Do not misuse the site, scrape aggressively, interfere with service availability, or submit harmful content through the support contact channel.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["about", "contact", "privacy-policy"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-09-11",
  },
];
