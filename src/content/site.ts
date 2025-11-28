type NavItem = {
  label: string;
  href: string;
};

type Feature = {
  title: string;
  description: string;
  icon?: "trace" | "webhooks" | "replay" | "alerts" | "audit";
};

type Step = {
  title: string;
  description: string;
};

type PricingTier = {
  name: string;
  price: string;
  tagline: string;
  bullets: string[];
  highlighted?: boolean;
};

type FaqItem = {
  question: string;
  answer: string;
};

type SocialProofLogo = {
  name: string;
  wordmark: "text" | "svg";
};

type FooterLink = {
  label: string;
  href: string;
};

type FooterLinkGroup = {
  title: string;
  links: FooterLink[];
};

export const NAV_ITEMS: Readonly<NavItem[]> = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
] as const;

export const FEATURES: Readonly<Feature[]> = [
  {
    title: "Request tracing",
    description:
      "Correlate every hop of a failing request with millisecond timestamps and payload diffs.",
    icon: "trace",
  },
  {
    title: "Webhook inspection",
    description:
      "Capture Stripe, GitHub, and Shopify-style traffic with searchable headers and JSON payloads.",
    icon: "webhooks",
  },
  {
    title: "Replay + curl export",
    description:
      "Re-run the exact payload or grab a one-liner curl command to reproduce the failure locally.",
    icon: "replay",
  },
  {
    title: "Alerts + retries",
    description:
      "Auto-retry flaky deliveries and ship alerts to Slack or PagerDuty when ingest spikes.",
    icon: "alerts",
  },
  {
    title: "Team audit log",
    description:
      "Know who replayed, muted, or redelivered each event to keep incident response accountable.",
    icon: "audit",
  },
] as const;

export const STEPS: Readonly<Step[]> = [
  {
    title: "Connect your endpoints",
    description: "Point Tracekit at your webhook URL or drop in the SDK for server tracing.",
  },
  {
    title: "Inspect and filter traffic",
    description:
      "Search by request ID, header, or status code to find the failing delivery in seconds.",
  },
  {
    title: "Replay or export",
    description:
      "Push a retry, replay in staging, or export a curl snippet to hand off to another engineer.",
  },
] as const;

export const PRICING_TIERS: Readonly<PricingTier[]> = [
  {
    name: "Hobby",
    price: "$0",
    tagline: "5K events / mo for personal projects",
    bullets: [
      "Single workspace",
      "7-day retention",
      "Email alerts",
      "Community support",
    ],
  },
  {
    name: "Pro",
    price: "$49",
    tagline: "50K events / mo for growing startups",
    bullets: [
      "Unlimited workspaces",
      "30-day retention",
      "Slack + PagerDuty alerts",
      "Replay & curl export",
      "Audit log",
    ],
    highlighted: true,
  },
  {
    name: "Team",
    price: "Contact us",
    tagline: "Custom ingest with SSO and on-call workflows",
    bullets: [
      "Priority ingest lanes",
      "90-day retention",
      "Role-based access control",
      "Enterprise SSO + SCIM",
      "Dedicated support channel",
    ],
  },
] as const;

export const FAQ_ITEMS: Readonly<FaqItem[]> = [
  {
    question: "How is Tracekit deployed?",
    answer:
      "We run fully managed on Vercel infrastructure. You add a signer key and point your providers at the Tracekit URL—no agents to host.",
  },
  {
    question: "Does it work with existing queues?",
    answer:
      "Yes. We ingest from HTTPS webhooks, Kafka, or straight from your worker code via the Node and Go SDKs.",
  },
  {
    question: "What about PII in payloads?",
    answer:
      "Define redaction rules per workspace. Sensitive fields are masked before they ever hit disk.",
  },
  {
    question: "Can I export events to my own storage?",
    answer:
      "Every request can be streamed to S3, BigQuery, or your SIEM using the event export hooks.",
  },
  {
    question: "Do you offer SLAs?",
    answer:
      "Pro tiers include a 99.9% uptime SLA. Team accounts can negotiate higher ingest guarantees and dedicated on-call.",
  },
] as const;

export const CODE_SNIPPET = `curl -X POST https://api.tracekit.dev/v1/events \\
  -H "X-Tracekit-Key: sk_live_123" \\
  -H "Content-Type: application/json" \\
  -d '{
    "event": "invoice.payment_failed",
    "requestId": "req_82f0b1",
    "payload": {
      "customer": "cus_9af31",
      "amount": 4900,
      "currency": "usd"
    }
  }'` as const;

// Fictional placeholder companies for demo purposes only.
export const SOCIAL_PROOF_LOGOS: Readonly<SocialProofLogo[]> = [
  { name: "Byteforge", wordmark: "text" },
  { name: "CloudHarbor", wordmark: "text" },
  { name: "SignalLint", wordmark: "text" },
  { name: "NeonPulse", wordmark: "text" },
  { name: "RelayNest", wordmark: "text" },
  { name: "DeltaMesh", wordmark: "text" },
  { name: "StackBeacon", wordmark: "text" },
  { name: "OrbitOps", wordmark: "text" },
] as const;

export const FOOTER_LINK_GROUPS: Readonly<FooterLinkGroup[]> = [
  {
    title: "Product",
    links: [
      { label: "Docs", href: "#" },
      { label: "Pricing", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
      { label: "Status", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
] as const;

