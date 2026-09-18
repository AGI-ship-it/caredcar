import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BrandShape from "../components/BrandShape";

const blogPosts = [
  {
    id: "traffic-fines",
    category: "Ownership Tips",
    title: "UAE Traffic Fines Every Driver Should Know",
    excerpt: "In the UAE, even small lapses behind the wheel can lead to significant penalties, black points, and vehicle impoundment. Here is a clear guide to the fines every driver should know — and how to avoid them.",
    readTime: "6 min read",
    date: "Jul 12, 2026",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&auto=format",
    featured: true,
  },
  {
    id: "1",
    category: "Buying Guide",
    title: "Used Car Test Drive Checklist: What to Inspect Before Making a Purchase",
    excerpt: "A test drive is one of the most important steps when buying a used car — it lets you judge how the car performs on the road and uncover maintenance issues or hidden damage. Here is exactly what to inspect before, during, and after the drive.",
    readTime: "7 min read",
    date: "Jun 21, 2026",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&auto=format",
    featured: true,
  },
  {
    id: "2",
    category: "Finance",
    title: "How to Get the Best Car Finance Deal in Dubai",
    excerpt: "Navigating car finance in Dubai can be overwhelming with so many banks and lenders competing for your business. Learn how to compare offers and secure the lowest interest rate possible.",
    readTime: "7 min read",
    date: "Dec 10, 2025",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&auto=format",
  },
  {
    id: "3",
    category: "Car Maintenance",
    title: "Essential Car Maintenance Tips for UAE's Hot Climate",
    excerpt: "Extreme heat and sandy conditions in the UAE put unique stress on your vehicle. Follow these expert maintenance tips to keep your car running reliably all year round.",
    readTime: "4 min read",
    date: "Dec 5, 2025",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&auto=format",
  },
  {
    id: "4",
    category: "Selling Guide",
    title: "When is the Best Time to Sell Your Car in the UAE?",
    excerpt: "Timing your car sale correctly can mean the difference of thousands of dirhams. Discover the seasonal patterns and market conditions that favour sellers in the UAE.",
    readTime: "6 min read",
    date: "Nov 28, 2025",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&auto=format",
  },
  {
    id: "5",
    category: "Car Reviews",
    title: "Toyota Land Cruiser 2023: The Ultimate UAE Family SUV",
    excerpt: "The Land Cruiser has long been the go-to vehicle for UAE families, and the 2023 model raises the bar even higher. We put it through its paces on both city streets and desert dunes.",
    readTime: "8 min read",
    date: "Nov 20, 2025",
    image: "https://images.unsplash.com/photo-1593055357429-62c0b8e2e07e?w=600&auto=format",
  },
  {
    id: "6",
    category: "Ownership Tips",
    title: "How to Reduce Your Car Insurance Premium in the UAE",
    excerpt: "Car insurance is a significant ongoing cost for UAE drivers, but many people pay more than they need to. These practical strategies can help you lower your premium without sacrificing coverage.",
    readTime: "5 min read",
    date: "Nov 15, 2025",
    image: "https://images.unsplash.com/photo-1558979158-65a1eaa08691?w=600&auto=format",
  },
  {
    id: "7",
    category: "Buying Guide",
    title: "GCC Spec vs Import: What UAE Buyers Need to Know",
    excerpt: "When shopping for a used car in the UAE, you will often see listings specifying GCC spec or personal import. Understanding the differences could save you from expensive surprises.",
    readTime: "6 min read",
    date: "Nov 10, 2025",
    image: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?w=600&auto=format",
  },
  {
    id: "8",
    category: "Finance",
    title: "Understanding Car Finance Terms: A UAE Buyer Guide",
    excerpt: "APR, flat rate, balloon payment, early settlement — car finance jargon can be confusing. This plain-English guide explains every term you need to know before signing a finance agreement.",
    readTime: "9 min read",
    date: "Nov 5, 2025",
    image: "https://images.unsplash.com/photo-1532619187608-e5375cab36aa?w=600&auto=format",
  },
];

const accidentSigns = [
  "Uneven panel gaps between doors, bonnet, and boot",
  "Mismatched or slightly different paint shades across panels",
  "Doors, bonnet, or boot that sit misaligned or don't close cleanly",
  "Unusual vibrations or noises while driving",
];

const odometerSigns = [
  "A worn steering wheel, gear knob, or pedals despite low displayed mileage",
  "Seats and trim that look heavily used for the age shown",
  "Missing or incomplete service records",
  "General signs of heavy use that don't match the odometer",
];

const floodSigns = [
  "A damp or musty smell inside the cabin",
  "Water stains or dampness under the carpets and mats",
  "Rust forming in unusual, hidden spots",
  "Moisture or condensation trapped inside the headlights and tail lights",
];

const exteriorSteps = [
  "Examine the bodywork for dents, rust, and paint inconsistencies.",
  "Inspect the tyres for uneven tread wear and sidewall cracks.",
  "Check the roof and sunroof seals for wear or leaks.",
  "Test all lights and inspect the glass for chips or cracks.",
  "Assess the suspension by pressing down on each corner — watch for excessive bouncing or noises.",
];

const interiorSteps = [
  "Evaluate the overall cabin condition for wear and any signs of water damage.",
  "Test the air conditioning and electronics thoroughly — in the UAE a strong, cold AC is essential.",
  "Verify every feature and accessory works as it should.",
];

const interiorFeatures = [
  "Parking sensors and reverse camera",
  "Power windows and mirrors",
  "Wipers and washers",
  "Steering-wheel controls",
  "Dashboard gauges and warning lights",
];

const driveSteps = [
  { title: "Engine Performance", desc: "A smooth start, consistent idle, and power delivered without hesitation." },
  { title: "Steering Response", desc: "Responsive and precise, with no drifting to one side or vibration through the wheel." },
  { title: "Brake Performance", desc: "Smooth and progressive, with no noise, grinding, or pulling under braking." },
  { title: "Transmission Operation", desc: "Smooth, timely gear changes with no jerks or delays." },
  { title: "Ride Quality and Stability", desc: "A settled ride — watch for rattles, vibrations, or any instability at speed." },
];

const checklistGroups = [
  { group: "Common Issues", items: ["No signs of accident damage", "Mileage matches overall wear", "No evidence of flood or water damage"] },
  { group: "Red Flags", items: ["Consistent paintwork throughout", "No warning lights on the dashboard", "Even tyre wear across all four corners"] },
  { group: "Exterior", items: ["Bodywork, tyres, and glass in good condition", "Lights all working", "Suspension settles cleanly"] },
  { group: "Interior", items: ["Cabin clean and free of odours", "AC cold and electronics working", "All features and accessories functional"] },
  { group: "During the Drive", items: ["Engine, steering, and brakes perform well", "Transmission shifts smoothly", "Ride is stable and quiet"] },
  { group: "Final Decision", items: ["Documents and service history verified", "Independent inspection completed", "Fair price agreed"] },
];

const usedCarRedFlags = [
  { sign: "Uneven paintwork", meaning: "Previous accident repairs" },
  { sign: "Excessive wear despite low mileage", meaning: "Possible odometer tampering" },
  { sign: "Damp smell inside the cabin", meaning: "Previous water or flood damage" },
  { sign: "Vehicle pulling to one side", meaning: "Alignment or suspension issues" },
  { sign: "Delayed gear shifts", meaning: "Transmission concerns" },
  { sign: "Dashboard warning lights", meaning: "Mechanical or electrical faults" },
  { sign: "Uneven tyre wear", meaning: "Suspension or wheel alignment problems" },
];

const trafficViolations = [
  { violation: "Using a mobile phone while driving", fine: "800", points: "4", impound: "—" },
  { violation: "Not wearing a seat belt", fine: "400", points: "4", impound: "—" },
  { violation: "Jumping a red light", fine: "1,000", points: "12", impound: "30 days" },
  { violation: "Exceeding speed limit by more than 60 km/h", fine: "2,000", points: "12", impound: "30 days" },
  { violation: "Driving a vehicle with expired registration", fine: "500", points: "4", impound: "7 days" },
  { violation: "Reckless driving", fine: "2,000", points: "23", impound: "60 days" },
  { violation: "Endangering the lives of others", fine: "2,000", points: "23", impound: "60 days" },
  { violation: "Parking in a People of Determination space", fine: "1,000", points: "6", impound: "—" },
  { violation: "Unauthorised vehicle modifications", fine: "1,000", points: "12", impound: "30 days" },
  { violation: "Driving without due attention", fine: "800", points: "4", impound: "—" },
];

const trafficTips = [
  "Stay within the posted speed limit and keep a safe following distance at all times.",
  "Never touch your phone while driving — use hands-free or pull over safely.",
  "Always wear your seat belt and make sure every passenger does too.",
  "Renew your vehicle registration (Mulkiya) before it expires to avoid impoundment.",
  "Check for outstanding fines regularly through the MOI app or Emirates Vehicle Gate (EVG).",
  "Respect designated parking, including People of Determination spaces.",
  "Keep your vehicle in standard, road-legal condition and avoid unauthorised modifications.",
];

const articleContent: Record<string, React.ReactNode> = {
  "traffic-fines": (
    <div>
      <p className="text-text-secondary leading-relaxed mb-6">
        Driving in the UAE is a smooth and well-organised experience, thanks to some of the best road infrastructure in the world. But with that convenience comes strict enforcement. Even a small lapse of attention behind the wheel can result in a hefty fine, black points on your licence, and in serious cases, your vehicle being impounded. Knowing the rules — and the cost of breaking them — is the first step to becoming a safer, more confident driver.
      </p>

      <h2 className="text-text-brand text-xl font-extrabold mt-8 mb-3">Understanding the UAE Black Points System</h2>
      <p className="text-text-secondary leading-relaxed mb-6">
        Alongside monetary fines, the UAE operates a black points system to track driving behaviour. Every serious violation adds points to your record. If you accumulate <strong>24 black points</strong> within a rolling 12-month period, your driving licence is suspended. Repeat suspensions lead to longer bans and, ultimately, cancellation of your licence. Black points are just as important to watch as the fines themselves — they are the clearest signal of how the authorities view your driving.
      </p>

      <h2 className="text-text-brand text-xl font-extrabold mt-8 mb-4">Common Traffic Violations and Their Penalties</h2>
      <div className="overflow-x-auto mb-8 rounded-[16px] border border-border-default">
        <table className="w-full text-start border-collapse min-w-[560px]">
          <thead>
            <tr className="bg-bg-inverse text-white">
              <th className="px-5 py-4 text-sm font-semibold">Violation</th>
              <th className="px-5 py-4 text-sm font-semibold whitespace-nowrap">Fine (AED)</th>
              <th className="px-5 py-4 text-sm font-semibold whitespace-nowrap">Black Points</th>
              <th className="px-5 py-4 text-sm font-semibold whitespace-nowrap">Impoundment</th>
            </tr>
          </thead>
          <tbody>
            {trafficViolations.map((row, i) => (
              <tr key={row.violation} className={i % 2 === 0 ? "bg-white" : "bg-bg-surface"}>
                <td className="px-5 py-4 text-sm text-text-secondary border-t border-border-default">{row.violation}</td>
                <td className="px-5 py-4 text-sm font-semibold text-text-primary border-t border-border-default whitespace-nowrap">{row.fine}</td>
                <td className="px-5 py-4 text-sm text-text-secondary border-t border-border-default">{row.points}</td>
                <td className="px-5 py-4 text-sm text-text-secondary border-t border-border-default whitespace-nowrap">{row.impound}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-text-secondary text-sm leading-relaxed mb-8">
        Note: Fines and penalties are indicative and set by the relevant traffic authorities. Amounts and black points may vary by emirate and are subject to change. Always confirm the latest figures through official channels.
      </p>

      <h2 className="text-text-brand text-xl font-extrabold mt-8 mb-3">The Most Serious Offences</h2>
      <p className="text-text-secondary leading-relaxed mb-6">
        <strong>Reckless driving and endangering others</strong> carry the heaviest consequences — up to 23 black points, a 2,000 AED fine, and a 60-day vehicle impoundment. These offences cover behaviour such as weaving aggressively through traffic, tailgating at high speed, and driving in a manner that puts other road users at risk. Because the black points alone push you close to a licence suspension, a single reckless driving charge can dramatically affect your ability to drive.
      </p>
      <p className="text-text-secondary leading-relaxed mb-6">
        <strong>Jumping a red light and extreme speeding</strong> (more than 60 km/h over the limit) both attract a 1,000–2,000 AED fine, 12 black points, and a 30-day impoundment. Red-light and speed cameras are widespread across the UAE, so these violations are almost always detected. The safest approach is simple: slow down as lights change and always leave a margin below the posted limit.
      </p>

      <h2 className="text-text-brand text-xl font-extrabold mt-8 mb-3">The Everyday Fines That Add Up</h2>
      <p className="text-text-secondary leading-relaxed mb-6">
        Not every fine is dramatic, but the everyday ones are the most common. <strong>Using a mobile phone while driving</strong> costs 800 AED and 4 black points, while <strong>not wearing a seat belt</strong> — for the driver or any passenger — costs 400 AED and 4 points. <strong>Driving with expired registration</strong> can see your car impounded for a week on top of a 500 AED fine. These are entirely avoidable with a few good habits, yet they account for a large share of penalties issued each year.
      </p>

      <h2 className="text-text-brand text-xl font-extrabold mt-8 mb-3">Why Understanding Fines Matters</h2>
      <p className="text-text-secondary leading-relaxed mb-6">
        Knowing the fines is not about fear — it is about awareness. Understanding the real cost of a violation makes you a more deliberate driver, protects your licence, and keeps everyone on the road safer. Unpaid fines can also block services such as registration renewal and vehicle transfer, so they have a way of catching up with you. Checking your record regularly through the Ministry of Interior (MOI) app or Emirates Vehicle Gate (EVG) takes only a minute and keeps you in control.
      </p>

      <h2 className="text-text-brand text-xl font-extrabold mt-8 mb-4">Tips to Avoid Traffic Fines</h2>
      <ul className="mb-8 space-y-3">
        {trafficTips.map((tip) => (
          <li key={tip} className="flex items-start gap-3 text-text-secondary leading-relaxed">
            <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-bg-accent" />
            <span>{tip}</span>
          </li>
        ))}
      </ul>

      <h2 className="text-text-brand text-xl font-extrabold mt-8 mb-3">Final Thoughts</h2>
      <p className="text-text-secondary leading-relaxed mb-6">
        Traffic rules in the UAE exist to protect everyone on the road, and staying informed is the easiest way to avoid unnecessary costs and stress. Drive attentively, keep your paperwork current, and check your fines regularly — and the roads will remain the safe, effortless experience they are designed to be.
      </p>
      <div className="rounded-[16px] bg-bg-brand-soft border border-(--color-bg-brand-soft) p-6">
        <p className="text-text-primary leading-relaxed">
          Looking to buy or sell a quality-checked car in the UAE? The team at CARED (AG Cars) is here to help. Call us on <a href="tel:600540045" className="text-text-brand font-semibold hover:underline">600 540045</a> and drive away with confidence.
        </p>
      </div>
    </div>
  ),
  "1": (
    <div>
      <p className="text-text-secondary leading-relaxed mb-6">
        A test drive is one of the most important steps when buying a used car. It's your chance to judge how the vehicle actually performs on the road and to surface maintenance issues or hidden damage that photos and paperwork will never show. Just as important, though, are the checks you make before you even turn the key — a thorough walk-around often reveals more than the drive itself. This checklist takes you through everything to inspect, in order.
      </p>

      <h2 className="text-text-brand text-2xl font-extrabold mt-10 mb-4">Common Issues a Test Drive Can Reveal</h2>
      <p className="text-text-secondary leading-relaxed mb-6">
        Some of the most costly problems on a used car are the ones a seller may not mention. A careful inspection and drive can bring these to the surface before you commit.
      </p>

      <h3 className="text-text-brand text-lg font-extrabold mt-6 mb-3">1. Accident Damage</h3>
      <p className="text-text-secondary leading-relaxed mb-3">
        Repairs aren't always obvious at a glance. Look closely for:
      </p>
      <ul className="mb-6 space-y-2">
        {accidentSigns.map((s) => (
          <li key={s} className="flex items-start gap-3 text-text-secondary leading-relaxed">
            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-bg-accent" />
            <span>{s}</span>
          </li>
        ))}
      </ul>

      <h3 className="text-text-brand text-lg font-extrabold mt-6 mb-3">2. Odometer Rollback</h3>
      <p className="text-text-secondary leading-relaxed mb-3">
        The mileage should be consistent with the car's overall wear. Be suspicious if you notice:
      </p>
      <ul className="mb-6 space-y-2">
        {odometerSigns.map((s) => (
          <li key={s} className="flex items-start gap-3 text-text-secondary leading-relaxed">
            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-bg-accent" />
            <span>{s}</span>
          </li>
        ))}
      </ul>

      <h3 className="text-text-brand text-lg font-extrabold mt-6 mb-3">3. Flood Damage</h3>
      <p className="text-text-secondary leading-relaxed mb-3">
        Water damage can cause electrical faults for years to come. Watch for:
      </p>
      <ul className="mb-6 space-y-2">
        {floodSigns.map((s) => (
          <li key={s} className="flex items-start gap-3 text-text-secondary leading-relaxed">
            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-bg-accent" />
            <span>{s}</span>
          </li>
        ))}
      </ul>

      <h2 className="text-text-brand text-2xl font-extrabold mt-10 mb-4">Common Red Flags When Buying a Used Car</h2>
      <p className="text-text-secondary leading-relaxed mb-4">
        Keep this quick reference in mind while you inspect. Each warning sign points to a likely underlying cause worth investigating further.
      </p>
      <div className="overflow-x-auto mb-8 rounded-[16px] border border-border-default">
        <table className="w-full text-start border-collapse min-w-[520px]">
          <thead>
            <tr className="bg-bg-inverse text-white">
              <th className="px-5 py-4 text-sm font-semibold">Warning Sign</th>
              <th className="px-5 py-4 text-sm font-semibold">What It Could Indicate</th>
            </tr>
          </thead>
          <tbody>
            {usedCarRedFlags.map((row, i) => (
              <tr key={row.sign} className={i % 2 === 0 ? "bg-white" : "bg-bg-surface"}>
                <td className="px-5 py-4 text-sm font-semibold text-text-primary border-t border-border-default">{row.sign}</td>
                <td className="px-5 py-4 text-sm text-text-secondary border-t border-border-default">{row.meaning}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-text-brand text-2xl font-extrabold mt-10 mb-4">Before You Start the Test Drive</h2>
      <p className="text-text-secondary leading-relaxed mb-6">
        Never skip the walk-around. A methodical inspection of the outside and inside of the car sets you up to know exactly what to feel for once you're moving.
      </p>

      <h3 className="text-text-brand text-lg font-extrabold mt-6 mb-3">Exterior Inspection</h3>
      <ol className="mb-6 space-y-3">
        {exteriorSteps.map((s, i) => (
          <li key={s} className="flex items-start gap-3 text-text-secondary leading-relaxed">
            <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-bg-brand-soft text-xs font-bold text-text-brand">{i + 1}</span>
            <span>{s}</span>
          </li>
        ))}
      </ol>

      <h3 className="text-text-brand text-lg font-extrabold mt-6 mb-3">Interior Inspection</h3>
      <ol className="mb-4 space-y-3">
        {interiorSteps.map((s, i) => (
          <li key={s} className="flex items-start gap-3 text-text-secondary leading-relaxed">
            <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-bg-brand-soft text-xs font-bold text-text-brand">{i + 1}</span>
            <span>{s}</span>
          </li>
        ))}
      </ol>
      <p className="text-text-secondary leading-relaxed mb-3">Key features and accessories to test:</p>
      <ul className="mb-6 space-y-2">
        {interiorFeatures.map((f) => (
          <li key={f} className="flex items-start gap-3 text-text-secondary leading-relaxed">
            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-bg-accent" />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <h2 className="text-text-brand text-2xl font-extrabold mt-10 mb-4">During the Test Drive</h2>
      <p className="text-text-secondary leading-relaxed mb-6">
        With the walk-around done, take the car onto real roads and up to motorway speed where you can. Assess each of these on the move:
      </p>
      <ol className="mb-6 space-y-4">
        {driveSteps.map((step, i) => (
          <li key={step.title} className="flex items-start gap-3">
            <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-bg-brand-soft text-xs font-bold text-text-brand">{i + 1}</span>
            <span className="text-text-secondary leading-relaxed">
              <strong className="text-text-primary">{step.title}</strong> — {step.desc}
            </span>
          </li>
        ))}
      </ol>
      <p className="text-text-secondary leading-relaxed mb-8">
        Combining a careful inspection with a thorough on-road assessment is the surest way to understand a vehicle's true condition before you buy. Take your time, trust what you find, and never feel pressured to skip a step.
      </p>

      <h2 className="text-text-brand text-2xl font-extrabold mt-10 mb-4">Used Car Test Drive Checklist</h2>
      <p className="text-text-secondary leading-relaxed mb-6">
        Use this consolidated checklist on the day. Tick each item off before you make your final decision.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
        {checklistGroups.map((group) => (
          <div key={group.group} className="rounded-[16px] border border-border-default bg-bg-surface p-5">
            <h4 className="text-text-brand font-extrabold text-base mb-3">{group.group}</h4>
            <ul className="space-y-2.5">
              {group.items.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-text-secondary leading-relaxed">
                  <span className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded border border-border-default bg-white text-[9px] text-text-success">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="rounded-[16px] bg-bg-brand-soft border border-(--color-bg-brand-soft) p-6 mt-8">
        <p className="text-text-primary leading-relaxed">
          Want a professional eye before you commit? Contact CARED (AG Cars) at <a href="tel:600540045" className="text-text-brand font-semibold hover:underline">600 540045</a> to schedule a comprehensive vehicle inspection and buy your next car with complete confidence.
        </p>
      </div>
    </div>
  ),
};

const defaultContent = (post: (typeof blogPosts)[0]) => (
  <div>
    <p className="text-text-secondary leading-relaxed mb-6">{post.excerpt}</p>
    <p className="text-text-secondary leading-relaxed mb-6">
      The UAE automotive market continues to evolve rapidly, offering buyers and sellers exciting opportunities. Whether you are a first-time buyer or an experienced car enthusiast, staying informed about the latest trends and best practices is essential for making sound decisions in this dynamic marketplace.
    </p>
    <h2 className="text-text-brand text-xl font-extrabold mt-8 mb-3">Key Insights</h2>
    <p className="text-text-secondary leading-relaxed mb-6">
      Understanding the nuances of the UAE car market can save you significant time and money. The market is one of the most competitive in the Middle East, with vehicles from every major global manufacturer available through both official dealerships and the active used car sector.
    </p>
    <h2 className="text-text-brand text-xl font-extrabold mt-8 mb-3">What This Means for You</h2>
    <p className="text-text-secondary leading-relaxed mb-6">
      Armed with the right knowledge, you can approach any automotive transaction in the UAE with confidence. Our team at AG Cars is always on hand to provide expert guidance tailored to your specific situation and requirements.
    </p>
    <p className="text-text-secondary leading-relaxed">
      Stay tuned to the AG Cars blog for more expert advice, market updates, and in-depth guides designed specifically for UAE drivers and automotive enthusiasts.
    </p>
  </div>
);

export default function BlogDetail() {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find((p) => p.id === id) || blogPosts[0];
  const relatedPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 3);

  const content = articleContent[post.id] || defaultContent(post);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-white">
        {/* Breadcrumb */}
        <div className="container-x pt-[124px]">
          <nav className="flex items-center gap-2 text-sm text-text-secondary">
            <Link to="/" className="hover:text-text-brand">Home</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-text-brand">Blog</Link>
            <span>/</span>
            <span className="text-text-primary font-medium line-clamp-1">{post.title}</span>
          </nav>
        </div>

        {/* Article Header */}
        <div className="container-x pt-8 pb-0">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block bg-bg-brand-soft text-text-brand text-xs font-semibold px-3 py-1 rounded-full mb-4">
              {post.category}
            </span>
            <h1 className="text-text-brand text-3xl md:text-4xl font-extrabold leading-tight mb-6">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-text-secondary mb-8">
              <span className="font-medium text-text-primary">AG Cars Editorial Team</span>
              <span>·</span>
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="container-x mb-12">
          <div className="max-w-3xl mx-auto">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover rounded-[16px]"
            />
          </div>
        </div>

        {/* Article Body */}
        <div className="max-w-3xl mx-auto px-5 pb-16">
          {content}
        </div>

        {/* Related Articles */}
        <div className="bg-bg-surface py-16">
          <div className="container-x">
 <h2 className="ty-h2 text-text-brand mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((related) => (
                <Link
                  key={related.id}
                  to={`/blog/${related.id}`}
                  className="bg-white rounded-[12px] overflow-hidden hover:shadow-md transition-shadow"
                >
                  <img
                    src={related.image}
                    alt={related.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-5">
                    <span className="inline-block bg-bg-brand-soft text-text-brand text-xs font-semibold px-3 py-1 rounded-full mb-3">
                      {related.category}
                    </span>
                    <h3 className="text-text-brand font-extrabold text-base leading-snug mb-2">
                      {related.title}
                    </h3>
                    <div className="text-xs text-text-secondary">
                      {related.date} · {related.readTime}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <section className="relative overflow-hidden bg-bg-brand py-12 text-white text-center">
          <BrandShape />
          <div className="container-x">
 <h2 className="ty-h1 mb-2 font-display">Find Your Perfect Car</h2>
            <p className="text-white/80 mb-6">
              Browse our quality-checked inventory and drive away with confidence.
            </p>
            <Link
              to="/buy"
              className="inline-block bg-white text-text-brand font-bold px-8 py-3 rounded-full hover:bg-bg-brand-soft transition-colors"
            >
              Browse Cars
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
