import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-white pt-[156px] pb-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="ty-title normal-case ty-title-gradient font-extrabold text-4xl mb-2">Privacy Policy</h1>
          <p className="text-text-secondary mb-10">Last updated: January 2026</p>

          {/* 1. Introduction */}
          <section>
            <h2 className="text-text-brand font-extrabold text-xl mt-8 mb-3">1. Introduction</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              AG Cars is committed to protecting your privacy and handling your personal data with care, transparency, and respect. This Privacy Policy explains how we collect, use, store, and protect information about you when you visit our website at www.agcars.ae, submit an enquiry, or engage with our services. We comply with the UAE Federal Decree-Law No. 45 of 2021 on the Protection of Personal Data (PDPL) and all applicable data protection regulations.
            </p>
            <p className="text-text-secondary leading-relaxed">
              By using our website or submitting your details through any of our forms, you agree to the collection and use of your information in accordance with this Privacy Policy. If you do not agree with any part of this policy, please refrain from using our website or services.
            </p>
          </section>

          {/* 2. What Information We Collect */}
          <section>
            <h2 className="text-text-brand font-extrabold text-xl mt-8 mb-3">2. What Information We Collect</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              <strong>Personal data:</strong> When you submit a contact form, request a finance quote, book a showroom visit, or otherwise interact with our services, we may collect your full name, email address, phone number, and any information you voluntarily provide in message fields. If you engage in a vehicle transaction, we may also collect identification documents as required by UAE law.
            </p>
            <p className="text-text-secondary leading-relaxed mb-4">
              <strong>Usage data:</strong> When you visit our website, we automatically collect certain technical information including your IP address, browser type and version, pages visited, time spent on pages, referring URLs, and device identifiers. This data helps us understand how users interact with our website and improve our services accordingly.
            </p>
            <p className="text-text-secondary leading-relaxed">
              <strong>Cookies:</strong> We use cookies and similar tracking technologies to enhance your browsing experience, remember your preferences, and analyse website traffic. You can control cookie settings through your browser preferences. Please see Section 5 for more details on our cookie practices.
            </p>
          </section>

          {/* 3. How We Use Your Information */}
          <section>
            <h2 className="text-text-brand font-extrabold text-xl mt-8 mb-3">3. How We Use Your Information</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              <strong>Service provision:</strong> We use your personal data to respond to your enquiries, process finance applications, manage vehicle transactions, and provide the services you have requested. Without this information, we may be unable to assist you effectively.
            </p>
            <p className="text-text-secondary leading-relaxed mb-4">
              <strong>Communication:</strong> With your consent, we may send you updates about new vehicle listings, special offers, and automotive news that we believe may interest you. You can opt out of marketing communications at any time by clicking the unsubscribe link in any email or by contacting us directly.
            </p>
            <p className="text-text-secondary leading-relaxed">
              <strong>Improvements:</strong> We analyse usage data in aggregate to understand how our website is used and to improve its functionality, content, and user experience. This analysis does not identify individual users and is used solely for internal business improvement purposes.
            </p>
          </section>

          {/* 4. Sharing Your Information */}
          <section>
            <h2 className="text-text-brand font-extrabold text-xl mt-8 mb-3">4. Sharing Your Information</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              We do not sell, rent, or trade your personal data to third parties for their own marketing purposes. Your information is valuable to us, and we treat it with the highest level of confidentiality.
            </p>
            <p className="text-text-secondary leading-relaxed">
              We may share your data with trusted partners who assist us in operating our website and delivering our services — including banking and finance partners when you request a finance quote, website hosting and technology providers, and analytics platforms. All such partners are contractually obligated to handle your data securely and only for the purposes we specify. We may also disclose information when required by UAE law, court order, or government authority.
            </p>
          </section>

          {/* 5. Cookies Policy */}
          <section>
            <h2 className="text-text-brand font-extrabold text-xl mt-8 mb-3">5. Cookies Policy</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              Cookies are small text files stored on your device when you visit a website. We use the following types of cookies: essential cookies that are necessary for the website to function correctly; performance cookies that help us understand how visitors use our website; and preference cookies that remember your settings and choices.
            </p>
            <p className="text-text-secondary leading-relaxed">
              You can control and manage cookies through your browser settings. Most browsers allow you to refuse new cookies, delete existing cookies, or browse in private mode. Please note that disabling certain cookies may affect the functionality of our website. For more information on managing cookies, refer to your browser's help documentation.
            </p>
          </section>

          {/* 6. Data Retention */}
          <section>
            <h2 className="text-text-brand font-extrabold text-xl mt-8 mb-3">6. Data Retention</h2>
            <p className="text-text-secondary leading-relaxed">
              We retain your personal data only for as long as necessary to fulfil the purposes for which it was collected, including legal, accounting, or reporting requirements. Enquiry and contact data is typically retained for up to 24 months after our last interaction. Data related to completed vehicle transactions may be retained for up to seven years in compliance with UAE commercial and tax regulations. Once data is no longer required, we securely delete or anonymise it.
            </p>
          </section>

          {/* 7. Your Rights */}
          <section>
            <h2 className="text-text-brand font-extrabold text-xl mt-8 mb-3">7. Your Rights</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              Under the UAE Personal Data Protection Law (PDPL), you have the following rights regarding your personal data: the right to access a copy of the personal data we hold about you; the right to request correction of inaccurate or incomplete data; the right to request deletion of your data where we no longer have a legitimate basis to retain it; the right to withdraw consent for marketing communications at any time; and the right to object to or restrict certain processing of your data.
            </p>
            <p className="text-text-secondary leading-relaxed">
              To exercise any of these rights, please contact us using the details provided in Section 9. We will respond to all legitimate requests within 30 days. In some cases, we may need to verify your identity before processing your request to ensure we are protecting your data appropriately.
            </p>
          </section>

          {/* 8. Security */}
          <section>
            <h2 className="text-text-brand font-extrabold text-xl mt-8 mb-3">8. Security</h2>
            <p className="text-text-secondary leading-relaxed">
              We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, disclosure, alteration, or destruction. These measures include encrypted data transmission using SSL/TLS technology, access controls limiting data access to authorised personnel only, and regular reviews of our security practices. While we take every reasonable precaution to safeguard your data, no internet transmission or electronic storage system is completely secure. We encourage you to take care when sharing personal information online.
            </p>
          </section>

          {/* 9. Contact */}
          <section>
            <h2 className="text-text-brand font-extrabold text-xl mt-8 mb-3">9. Contact</h2>
            <p className="text-text-secondary leading-relaxed">
              If you have any questions, concerns, or requests regarding this Privacy Policy or the way we handle your personal data, please contact us at{" "}
              <a href="mailto:hello@agcars.ae" className="text-text-brand hover:underline">
                hello@agcars.ae
              </a>
              . For data protection matters specifically, you may address your correspondence to the Data Protection Officer, AG Cars Showroom, Dubai Motor City, Dubai, UAE. We take all privacy enquiries seriously and will respond promptly and thoroughly.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
