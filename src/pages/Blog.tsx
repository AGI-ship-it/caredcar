import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import BrandShape from "../components/BrandShape";

const blogPosts = [
  {
    id: "1",
    category: "Buying Guide",
    title: "10 Things to Check Before Buying a Used Car in the UAE",
    excerpt: "Purchasing a used car in the UAE can be a smart financial move, but only if you know what to look for. Our comprehensive checklist helps you avoid costly mistakes and drive away with confidence.",
    readTime: "5 min read",
    date: "Dec 15, 2025",
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

const categories = [
  "All",
  "Buying Guide",
  "Selling Guide",
  "Finance",
  "Car Maintenance",
  "Car Reviews",
  "Ownership Tips",
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const featuredPost = blogPosts.find((p) => p.featured);
  const filteredPosts = blogPosts
    .filter((p) => !p.featured)
    .filter((p) => activeCategory === "All" || p.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <PageHero title="Car Tips & Guides" subtitle="Expert advice, buying guides, and the latest insights from the UAE automotive world." />

      <main className="flex-1 bg-white">
        <div className="container-x py-16">

          {/* Featured Article */}
          {featuredPost && (
            <div className="mb-14">
 <h2 className="ty-h1 ty-title ty-title-gradient mb-6">Featured Article</h2>
              <div className="bg-white rounded-[12px] shadow overflow-hidden flex flex-col md:flex-row">
                <div className="md:w-[40%]">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full aspect-square md:aspect-auto md:h-full object-cover"
                  />
                </div>
                <div className="md:w-[60%] p-8 flex flex-col justify-center">
                  <span className="inline-block bg-bg-brand-soft text-text-brand text-xs font-semibold px-3 py-1 rounded-full mb-4 w-fit">
                    {featuredPost.category}
                  </span>
                  <h3 className="text-text-brand text-2xl md:text-3xl font-extrabold mb-4 leading-tight">
                    {featuredPost.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-text-secondary mb-6">
                    <span>{featuredPost.date}</span>
                    <span>·</span>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <Link
                    to="/blog/1"
                    className="text-text-brand font-semibold hover:underline w-fit"
                  >
                    Read Article <span className="inline-block rtl:-scale-x-100">&#8594;</span>
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Category Filter — same pill style as the Home page's Featured Cars tabs */}
          <div className="overflow-x-auto pb-2 mb-10 scrollbar-hide">
            <div className="border border-(--color-text-primary) inline-flex items-center p-[4px] rounded-[99px]">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="h-[48px] flex items-center justify-center px-[24px] py-[12px] rounded-[99px] transition-all whitespace-nowrap"
                  style={{ background: activeCategory === cat ? "var(--color-bg-inverse)" : "transparent" }}
                >
                  <span
                    className="text-base font-bold leading-[1.5] tracking-[-0.32px] whitespace-nowrap"
                    style={{ color: activeCategory === cat ? "white" : "rgba(18,42,94,0.6)" }}
                  >
                    {cat}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Articles Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-bg-surface rounded-[12px] overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-[0px_18px_20px_rgba(28,41,88,0.12)]"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full aspect-square sm:aspect-[416/375] object-cover"
                  />
                  <div className="p-5">
                    <span className="inline-block bg-bg-brand-soft text-text-brand text-xs font-semibold px-3 py-1 rounded-full mb-3">
                      {post.category}
                    </span>
                    <h3 className="text-text-brand font-extrabold text-lg leading-snug mb-2">
                      {post.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-text-secondary">
                      <span>
                        {post.date} · {post.readTime}
                      </span>
                      <Link
                        to={`/blog/${post.id}`}
                        className="text-text-brand font-semibold hover:underline"
                      >
                        Read More <span className="inline-block rtl:-scale-x-100">&#8594;</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-text-secondary text-center py-12">
              No articles found in this category yet.
            </p>
          )}
        </div>

        {/* CTA */}
        <section className="relative overflow-hidden bg-bg-brand py-12 text-white text-center">
          <BrandShape />
          <div className="container-x">
 <h2 className="ty-h1 ty-title mb-2">Looking for your next car?</h2>
            <p className="text-white/80 mb-6">
              Browse hundreds of quality-checked vehicles available across the UAE.
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
