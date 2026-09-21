import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-white pt-[156px] pb-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="ty-title normal-case! ty-title-gradient font-extrabold text-4xl mb-2">Terms &amp; Conditions</h1>
          <p className="text-text-secondary mb-10">Last updated: January 2026</p>

          {/* 1. Introduction */}
          <section>
            <h2 className="text-text-brand font-extrabold text-xl mt-8 mb-3">1. Introduction</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              Welcome to AG Cars ("we", "us", or "our"). These Terms and Conditions govern your use of our website located at www.agcars.ae and all associated services, including vehicle listings, finance enquiries, and contact forms. By accessing or using our website, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our website.
            </p>
            <p className="text-text-secondary leading-relaxed">
              We reserve the right to update these Terms at any time. Continued use of the website after any changes constitutes your acceptance of the revised Terms. We encourage you to review this page periodically to stay informed of any updates.
            </p>
          </section>

          {/* 2. Use of Website */}
          <section>
            <h2 className="text-text-brand font-extrabold text-xl mt-8 mb-3">2. Use of Website</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              You may use our website for lawful purposes only and in accordance with these Terms. Permitted uses include browsing vehicle listings, submitting enquiry forms, reading editorial content, and accessing finance information. You agree not to use the website in any way that violates applicable UAE laws or regulations.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Prohibited activities include, but are not limited to: scraping or harvesting data from the website without our written permission; attempting to gain unauthorised access to any part of the website or its underlying systems; submitting false or misleading information through our forms; using the website to transmit spam or unsolicited communications; and engaging in any conduct that restricts or inhibits others from using the website.
            </p>
          </section>

          {/* 3. Vehicle Listings */}
          <section>
            <h2 className="text-text-brand font-extrabold text-xl mt-8 mb-3">3. Vehicle Listings</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              We make every effort to ensure that vehicle listings on our website are accurate and up to date. However, we do not warrant that all information — including vehicle specifications, mileage, condition descriptions, and photographs — is entirely free from error. Vehicle details are provided in good faith and are subject to change without notice.
            </p>
            <p className="text-text-secondary leading-relaxed">
              All prices displayed on the website are indicative and subject to change. Prices do not include registration fees, insurance, or any other charges unless explicitly stated. The availability of any listed vehicle cannot be guaranteed until a formal agreement has been reached. We recommend contacting us directly to confirm availability and current pricing before visiting our showroom.
            </p>
          </section>

          {/* 4. Finance and Payments */}
          <section>
            <h2 className="text-text-brand font-extrabold text-xl mt-8 mb-3">4. Finance and Payments</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              Any finance options or payment plans displayed on our website are indicative only and subject to approval by third-party lenders. AG Cars acts as an introducer and does not provide regulated financial advice. Finance products are offered through partnerships with UAE-licensed banking and finance institutions.
            </p>
            <p className="text-text-secondary leading-relaxed">
              We do not guarantee that any individual will be approved for finance, and approval is subject to the lender's own eligibility criteria, credit assessment, and terms and conditions. Monthly payment estimates shown on the website are for illustrative purposes only. Actual repayment amounts may differ based on the lender's terms, your credit profile, and applicable interest rates at the time of application.
            </p>
          </section>

          {/* 5. Intellectual Property */}
          <section>
            <h2 className="text-text-brand font-extrabold text-xl mt-8 mb-3">5. Intellectual Property</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              All content on this website, including but not limited to text, images, graphics, logos, icons, and software, is the property of AG Cars or its content suppliers and is protected by applicable UAE and international intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content on this website without our prior written consent.
            </p>
            <p className="text-text-secondary leading-relaxed">
              The AG Cars name, logo, and all related marks are trademarks of AG Cars. Other product and company names mentioned on this website may be the trademarks of their respective owners. Nothing in these Terms grants you any licence to use our trademarks or intellectual property.
            </p>
          </section>

          {/* 6. Privacy Policy */}
          <section>
            <h2 className="text-text-brand font-extrabold text-xl mt-8 mb-3">6. Privacy Policy</h2>
            <p className="text-text-secondary leading-relaxed">
              Your use of our website is also governed by our Privacy Policy, which is incorporated into these Terms by reference. Our Privacy Policy explains how we collect, use, and protect your personal information in compliance with the UAE Personal Data Protection Law (PDPL). Please review our Privacy Policy at <Link to="/privacy" className="text-text-brand hover:underline">/privacy</Link> to understand our practices. By using this website, you consent to the collection and use of your information as described in our Privacy Policy.
            </p>
          </section>

          {/* 7. Limitation of Liability */}
          <section>
            <h2 className="text-text-brand font-extrabold text-xl mt-8 mb-3">7. Limitation of Liability</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              To the fullest extent permitted by UAE law, AG Cars shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of, or inability to use, this website or its content. This includes damages for loss of profits, goodwill, data, or other intangible losses.
            </p>
            <p className="text-text-secondary leading-relaxed">
              We do not warrant that the website will be available at all times, free from errors, or free from viruses or other harmful components. We reserve the right to suspend or discontinue the website or any part of it at any time without notice. In jurisdictions that do not allow the exclusion of certain warranties or the limitation of liability, our liability shall be limited to the maximum extent permitted by applicable law.
            </p>
          </section>

          {/* 8. Governing Law */}
          <section>
            <h2 className="text-text-brand font-extrabold text-xl mt-8 mb-3">8. Governing Law</h2>
            <p className="text-text-secondary leading-relaxed">
              These Terms and Conditions are governed by and construed in accordance with the laws of the United Arab Emirates and, where applicable, the laws of the Emirate of Dubai. Any disputes arising out of or relating to these Terms or your use of our website shall be subject to the exclusive jurisdiction of the courts of Dubai, UAE. If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.
            </p>
          </section>

          {/* 9. Contact */}
          <section>
            <h2 className="text-text-brand font-extrabold text-xl mt-8 mb-3">9. Contact</h2>
            <p className="text-text-secondary leading-relaxed">
              If you have any questions about these Terms and Conditions, please contact us at{" "}
              <a href="mailto:hello@agcars.ae" className="text-text-brand hover:underline">
                hello@agcars.ae
              </a>
              . You may also write to us at AG Cars Showroom, Dubai Motor City, Dubai, UAE. We aim to respond to all enquiries within two business days.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
