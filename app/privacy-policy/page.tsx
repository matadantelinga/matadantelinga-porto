import { SectionTitle } from "@/components/ui/section-title";

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="wrapper py-10">
        <SectionTitle className="mb-4">Syarat dan Ketentuan</SectionTitle>
        <p className="mb-4">
          At PlanetDekor.id, we prioritize the privacy and security of our
          users. This Privacy Policy outlines how we collect, use, and safeguard
          your personal information when you visit our website or use our
          services.
        </p>

        <h2 className="text-xl font-semibold mb-2">Information We Collect</h2>
        <p className="mb-4">
          - Personal Information: When you engage with our services, we may
          collect personal details such as your name, email address, phone
          number, and billing information.
          <br />- Usage Data: We gather information about how you interact with
          our website, including IP addresses, browser type, pages visited, and
          referring pages.
        </p>

        <h2 className="text-xl font-semibold mb-2">
          How We Use Your Information
        </h2>
        <p className="mb-4">
          - Service Delivery: We use your personal information to provide and
          improve our interior and architectural services, fulfill your
          requests, and communicate with you.
          <br />- Analytics: We analyze usage data to understand trends, enhance
          user experience, and optimize our website's performance.
        </p>

        <h2 className="text-xl font-semibold mb-2">Data Security</h2>
        <p className="mb-4">
          We implement robust security measures to protect your personal
          information from unauthorized access, alteration, or disclosure. Your
          data is stored securely and only accessed by authorized personnel.
        </p>

        <h2 className="text-xl font-semibold mb-2">Third-Party Services</h2>
        <p className="mb-4">
          We may utilize third-party services to facilitate our operations and
          improve our services. These third parties have their own privacy
          policies governing how they collect and use your information.
        </p>

        <h2 className="text-xl font-semibold mb-2">Your Choices</h2>
        <p className="mb-4">
          You have the right to review, update, or delete your personal
          information. Please contact us if you wish to exercise these rights or
          have any questions about our privacy practices.
        </p>

        <h2 className="text-xl font-semibold mb-2">Changes to This Policy</h2>
        <p className="mb-4">
          PlanetDekor.id reserves the right to update this Privacy Policy
          periodically. We will notify you of any significant changes via email
          or through a notice on our website.
        </p>

        <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
        <p className="mb-4">
          If you have any concerns or inquiries regarding our privacy practices,
          please contact us at{" "}
          <a href="mailto:contact@planetdekor.id">contact@planetdekor.id</a>.
        </p>
      </section>
    </>
  );
}
