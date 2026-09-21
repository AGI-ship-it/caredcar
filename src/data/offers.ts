export interface Offer {
  id: number;
  slug: string;
  title: string;
  description: string;
  validity: string;
  img: string;
  highlights: string[];
  steps: string[];
  terms: string[];
  cta: { label: string; to: string };
  secondary: { label: string; to: string };
}

export const OFFERS: Offer[] = [
  {
    id: 1,
    slug: "zero-apr-finance",
    title: "0% APR Finance",
    description: "Drive away today with zero interest on selected vehicles. Available for up to 60 months with flexible repayment options.",
    validity: "Valid until 31 Oct 2026",
    img: "https://images.unsplash.com/photo-1617615544432-4dfd6b8dbd25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxjYXIlMjBmaW5hbmNlJTIwYnVzaW5lc3MlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzg5MDM3ODYwfDA&ixlib=rb-4.1.0&q=80&w=600",
    highlights: ["0% interest on selected vehicles", "Terms of up to 60 months", "Flexible down payment options", "Fast approval through our partner banks"],
    steps: ["Pick an eligible car from our stock", "Check your monthly payment in the EMI calculator", "Apply — we handle the paperwork with the bank"],
    terms: ["Available on selected vehicles only.", "Subject to bank approval and eligibility.", "Minimum down payment applies."],
    cta: { label: "Calculate My Payments", to: "/finance#emi-calculator" },
    secondary: { label: "Browse Cars", to: "/buy" },
  },
  {
    id: 2,
    slug: "free-2-year-warranty",
    title: "Free 2-Year Warranty",
    description: "Every car sold comes with a complimentary 2-year comprehensive warranty covering mechanical and electrical components.",
    validity: "On all purchases in Sep 2026",
    img: "https://images.unsplash.com/photo-1618642624018-a370cbf3cd80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjBjYXIlMjBleHRlcmlvciUyMG9mZmVyJTIwcHJvbW90aW9ufGVufDF8fHx8MTc4OTAzNzg2NXww&ixlib=rb-4.1.0&q=80&w=600",
    highlights: ["2 years of comprehensive cover", "Mechanical and electrical components included", "Claims handled at our UAE service centers", "No extra cost at purchase"],
    steps: ["Choose any car from our stock", "Complete your purchase this month", "Your warranty activates on handover"],
    terms: ["Applies to purchases completed in September 2026.", "Wear-and-tear items are excluded.", "Full terms are shared in your warranty booklet."],
    cta: { label: "Browse Cars", to: "/buy" },
    secondary: { label: "Contact Us", to: "/contact" },
  },
  {
    id: 3,
    slug: "trade-in-bonus",
    title: "AED 5,000 Trade-In Bonus",
    description: "Get AED 5,000 extra on top of your trade-in valuation when you purchase any car from our current stock.",
    validity: "Valid until 15 Oct 2026",
    img: "https://images.unsplash.com/photo-1610099610040-ab19f3a5ec35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBleHRlcmlvciUyMG9mZmVyJTIwcHJvbW90aW9ufGVufDF8fHx8MTc4OTAzNzg2NXww&ixlib=rb-4.1.0&q=80&w=600",
    highlights: ["AED 5,000 on top of your valuation", "Free, no-obligation valuation", "Same-day offer on your current car", "Put the value straight into your next car"],
    steps: ["Get a free valuation for your current car", "Pick your next car from our stock", "We add AED 5,000 to your trade-in value"],
    terms: ["Valid on trade-ins against a purchase from current stock.", "One bonus per purchase.", "Valuation subject to inspection."],
    cta: { label: "Value My Car", to: "/sell" },
    secondary: { label: "Browse Cars", to: "/buy" },
  },
  {
    id: 4,
    slug: "free-service-package",
    title: "Free Service Package",
    description: "Receive 3 free services including oil change, filter replacement, and full vehicle health check for the first year.",
    validity: "Valid until 30 Nov 2026",
    img: "https://images.unsplash.com/photo-1673166105764-a6aa7e0e73a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxsdXh1cnklMjBjYXIlMjBleHRlcmlvciUyMG9mZmVyJTIwcHJvbW90aW9ufGVufDF8fHx8MTc4OTAzNzg2NXww&ixlib=rb-4.1.0&q=80&w=600",
    highlights: ["3 free services in the first year", "Oil change and filter replacement", "Full vehicle health check", "Serviced at any of our 6 UAE centers"],
    steps: ["Buy any eligible car", "Book each service when it's due", "Drive in — there's nothing to pay"],
    terms: ["Services must be used within 12 months of purchase.", "Parts outside the listed items are charged separately.", "Non-transferable."],
    cta: { label: "Browse Cars", to: "/buy" },
    secondary: { label: "Contact Us", to: "/contact" },
  },
  {
    id: 5,
    slug: "extended-test-drive",
    title: "Extended Test Drive",
    description: "Take the car home for 48 hours. Experience it in your daily routine before making any commitment.",
    validity: "Available weekends only",
    img: "https://images.unsplash.com/photo-1599912027611-484b9fc447af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjBjYXIlMjBleHRlcmlvciUyMG9mZmVyJTIwcHJvbW90aW9ufGVufDF8fHx8MTc4OTAzNzg2NXww&ixlib=rb-4.1.0&q=80&w=600",
    highlights: ["Keep the car for 48 hours", "Try it on your daily commute", "No commitment to buy", "Insurance covered during the drive"],
    steps: ["Choose the car you'd like to try", "Book a weekend slot with our team", "Pick it up, drive it, and bring it back"],
    terms: ["Weekends only, subject to availability.", "Valid UAE driving licence required.", "A refundable security deposit may apply."],
    cta: { label: "Browse Cars", to: "/buy" },
    secondary: { label: "Book With Our Team", to: "/contact" },
  },
  {
    id: 6,
    slug: "referral-reward",
    title: "Referral Reward",
    description: "Refer a friend and earn AED 1,000 cash when they complete a purchase. No limit on referrals.",
    validity: "Ongoing offer",
    img: "https://images.unsplash.com/photo-1574023240744-64c47c8c0676?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBkZWFsZXJzaGlwJTIwbHV4dXJ5JTIwc2hvd3Jvb218ZW58MXx8fHwxNzg5MDM3ODU5fDA&ixlib=rb-4.1.0&q=80&w=600",
    highlights: ["AED 1,000 cash per referral", "No limit on how many friends you refer", "Paid once your friend's purchase completes", "Your friend gets the full Cared experience"],
    steps: ["Tell a friend about Cared", "Share their details with our team", "Get paid when they complete a purchase"],
    terms: ["Reward paid after the referred purchase completes.", "The referred buyer must be a new Cared customer.", "Cash reward paid by bank transfer."],
    cta: { label: "Refer a Friend", to: "/contact" },
    secondary: { label: "Browse Cars", to: "/buy" },
  },
];
