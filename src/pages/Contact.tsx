import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FIELD_CLASS, LABEL_CLASS } from "../lib/fieldStyles";
import Select from "../components/Select";
import imgContactHero from "@/imports/contact-hero.jpg";
import PageHero from "../components/PageHero";

const MAP_QUERY = "Dubai Motor City, Dubai, UAE";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function resetContact() {
    setSubmitted(false);
    setErrors({});
    setFormData({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  }

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required.";
    if (!formData.email.trim()) newErrors.email = "Email address is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Please enter a valid email.";
    if (!formData.subject) newErrors.subject = "Please select a subject.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const infoBlocks = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: "Address",
      value: "AG Cars Showroom, Dubai Motor City, Dubai, UAE",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: "Phone",
      value: "+971 4 123 4567",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: "Email",
      value: "hello@agcars.ae",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      label: "Hours",
      value: "Mon–Sat: 9:00 AM – 8:00 PM\nSun: 10:00 AM – 6:00 PM",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <PageHero image={imgContactHero} imagePosition="left center" title="Contact Us" subtitle="Our team is ready to help you find the perfect car or answer any questions you may have." />

      {/* Main Content */}
      <main className="flex-1 bg-white">
        <div className="container-x py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Left: Contact Info */}
            <div>
              <h2 className="text-text-brand text-2xl font-extrabold mb-2">Get In Touch</h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                Whether you are looking to buy, sell, or just have a question, our friendly team is here to help. Visit us at our Dubai Motor City showroom or reach out through any of the channels below.
              </p>

              <div className="space-y-6 mb-10">
                {infoBlocks.map((block) => (
                  <div key={block.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-bg-brand-soft rounded-full flex items-center justify-center text-text-brand flex-shrink-0">
                      {block.icon}
                    </div>
                    <div>
                      <p className="text-text-secondary text-sm mb-0.5">{block.label}</p>
                      <p className="text-text-primary font-semibold whitespace-pre-line">{block.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Showroom map — embed needs no API key, and loads only when scrolled into view */}
              <div className="rounded-[12px] overflow-hidden border border-border-default">
                <iframe
                  title="Map showing the Cared showroom in Dubai Motor City"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&hl=en&z=14&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block w-full h-64 border-0"
                />
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAP_QUERY)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-3 bg-bg-surface px-4 py-3 text-sm font-semibold text-text-brand hover:bg-bg-brand-soft transition-colors"
                >
                  Get directions
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" className="size-[18px]" aria-hidden="true">
                    <path d="M6 18L18 6M8.25 6H18v9.75" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="bg-bg-surface rounded-[16px] p-8">
              <h2 className="text-text-brand text-xl font-extrabold mb-6">Send Us a Message</h2>

              {submitted ? (
                <div role="status" className="relative bg-green-50 border border-green-200 rounded-[12px] p-6 text-center">
                  <button
                    type="button"
                    onClick={resetContact}
                    aria-label="Close"
                    className="absolute top-2.5 end-2.5 size-9 flex items-center justify-center rounded-full text-green-700/70 hover:text-green-800 hover:bg-green-100 transition-colors"
                  >
                    <svg fill="none" height="16" viewBox="0 0 24 24" width="16" aria-hidden="true"><path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                  </button>
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-green-700 font-semibold text-lg">
                    Thanks! We'll get back to you within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={resetContact}
                    className="mt-5 h-11 px-6 rounded-full border border-green-300 text-green-800 text-sm font-semibold hover:bg-green-100 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div>
                    <label className={LABEL_CLASS}>
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className={FIELD_CLASS}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className={LABEL_CLASS}>
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={FIELD_CLASS}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className={LABEL_CLASS}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+971 50 000 0000"
                      className={FIELD_CLASS}
                    />
                  </div>

                  <div>
                    <label className={LABEL_CLASS}>
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <Select
                      placeholder="Select a subject"
                      value={formData.subject}
                      onChange={(v) => { setFormData((d) => ({ ...d, subject: v })); setErrors((prev) => ({ ...prev, subject: "" })); }}
                      options={[
                        { value: "General Enquiry", label: "General Enquiry" },
                        { value: "Buy a Car", label: "Buy a Car" },
                        { value: "Sell a Car", label: "Sell a Car" },
                        { value: "Finance", label: "Finance" },
                        { value: "Book a Visit", label: "Book a Visit" },
                        { value: "Other", label: "Other" },
                      ]}
                    />
                    {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
                  </div>

                  <div>
                    <label className={LABEL_CLASS}>
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      rows={5}
                      className={`${FIELD_CLASS} resize-none`}
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-bg-brand text-white font-bold py-3 rounded-full hover:bg-blue-700 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
