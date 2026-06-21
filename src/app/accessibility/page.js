export const metadata = {
  title: "Accessibility Statement | Apertolux",
  description:
    "Apertolux is committed to ensuring digital accessibility for all users and continuously improving the usability of our website.",
};

export default function AccessibilityStatement() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="border-b border-gray-200 py-24 lg:py-32">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gray-500">
            Legal Information
          </p>

          <h1 className="text-4xl font-light text-[#0A192F] md:text-5xl lg:text-6xl">
            Accessibility Statement
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-gray-600">
            Apertolux is committed to providing an accessible and inclusive
            digital experience for all visitors, including individuals with
            disabilities.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6">

          <div className="mb-16">
            <p className="text-sm text-gray-500">
              Last Updated: June 2026
            </p>
          </div>

          <div className="space-y-16">

            <section>
              <h2 className="mb-6 text-3xl font-light text-[#0A192F]">
                Commitment to Accessibility
              </h2>

              <p className="leading-8 text-gray-600">
                Apertolux is committed to ensuring that our website is accessible
                to the widest possible audience, regardless of technology or
                ability. We believe every visitor should be able to access
                information, navigate our website, and interact with our digital
                services with dignity and independence.
              </p>
            </section>

            <section>
              <h2 className="mb-6 text-3xl font-light text-[#0A192F]">
                Accessibility Standards
              </h2>

              <p className="leading-8 text-gray-600">
                We strive to design and maintain our website in accordance with
                recognized accessibility best practices and standards, including
                the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA.
                These guidelines explain how digital content can be made more
                accessible and user-friendly for people with a wide range of
                abilities.
              </p>
            </section>

            <section>
              <h2 className="mb-6 text-3xl font-light text-[#0A192F]">
                Accessibility Features
              </h2>

              <ul className="space-y-4 text-gray-600">
                <li>• Clear and consistent navigation structure</li>
                <li>• Responsive design across desktop, tablet, and mobile devices</li>
                <li>• Keyboard-accessible navigation where applicable</li>
                <li>• Semantic HTML markup for improved screen-reader support</li>
                <li>• Appropriate color contrast considerations</li>
                <li>• Alternative text for relevant images and media</li>
                <li>• Readable typography and scalable content layouts</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-6 text-3xl font-light text-[#0A192F]">
                Ongoing Improvements
              </h2>

              <p className="leading-8 text-gray-600">
                Accessibility is an ongoing process. We regularly review,
                evaluate, and improve our website to identify and remove
                potential barriers to access. As technology evolves, we remain
                committed to improving usability and accessibility for all users.
              </p>
            </section>

            <section>
              <h2 className="mb-6 text-3xl font-light text-[#0A192F]">
                Third-Party Content
              </h2>

              <p className="leading-8 text-gray-600">
                Certain third-party services, external websites, or embedded
                content that may be linked from our website are not under our
                direct control. While we encourage our partners to follow
                accessibility best practices, we cannot guarantee the
                accessibility of third-party content.
              </p>
            </section>

            <section>
              <h2 className="mb-6 text-3xl font-light text-[#0A192F]">
                Feedback and Assistance
              </h2>

              <p className="mb-6 leading-8 text-gray-600">
                If you encounter any accessibility barriers while using our
                website, or if you require information in an alternative format,
                we encourage you to contact us.
              </p>

              <div className="rounded-3xl bg-[#F8F8F8] p-8">
                <h3 className="mb-4 text-xl font-medium text-[#0A192F]">
                  Accessibility Contact
                </h3>

                <div className="space-y-2 text-gray-600">
                  <p>Apertolux</p>
                  <p>Email: info@apertolux.com</p>
                  <p>Phone: +972 52-839-9655</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="mb-6 text-3xl font-light text-[#0A192F]">
                Browser Compatibility
              </h2>

              <p className="leading-8 text-gray-600">
                Our website is designed to function with current versions of
                major web browsers, including Google Chrome, Safari, Mozilla
                Firefox, and Microsoft Edge.
              </p>
            </section>

            <section>
              <h2 className="mb-6 text-3xl font-light text-[#0A192F]">
                Updates to This Statement
              </h2>

              <p className="leading-8 text-gray-600">
                We may update this Accessibility Statement from time to time to
                reflect improvements to our website, changes in technology, or
                updates to accessibility requirements and best practices.
              </p>
            </section>

          </div>
        </div>
      </section>
    </main>
  );
}