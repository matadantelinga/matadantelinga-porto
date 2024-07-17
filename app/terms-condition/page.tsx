import { SectionTitle } from "@/components/Shared/SectionTitle";


export default function TermsConditionPage() {
  return (
    <>
      <section className="wrapper py-10">
        <SectionTitle className="mb-4">Syarat dan Ketentuan</SectionTitle>
        <div className="terms-content">
          <p className="mb-4">
            Welcome to PlanetDekor.id! These terms and conditions outline the
            rules and regulations for the use of our website and services.
          </p>

          <h3 className="mb-2 font-bold">1. Services</h3>
          <p className="mb-4">
            PlanetDekor.id provides interior and architecture services,
            including design consultations, project management, and product
            sourcing. Our services are aimed at enhancing your living and
            working spaces with creativity and functionality.
          </p>

          <h3 className="mb-2 font-bold">2. User Responsibilities</h3>
          <ul>
            <li>
              You must provide accurate and complete information when using our
              services.
            </li>
            <li>
              You agree to comply with all applicable laws and regulations in
              Indonesia when accessing our website and using our services.
            </li>
            <li>
              You are responsible for maintaining the confidentiality of your
              account and password.
            </li>
          </ul>

          <h3 className="mb-2 font-bold">3. Intellectual Property</h3>
          <p className="mb-4">
            All content on PlanetDekor.id, including text, graphics, logos,
            images, and software, is the property of PlanetDekor.id or its
            content suppliers and is protected by international copyright laws.
            You may not use, reproduce, or distribute any content from our
            website without prior written permission from PlanetDekor.id.
          </p>

          <h3 className="mb-2 font-bold">4. Privacy</h3>
          <p className="mb-4">
            Your privacy is important to us. Please refer to our Privacy Policy
            for information on how we collect, use, and protect your personal
            information.
          </p>

          <h3 className="mb-2 font-bold">5. Pricing and Payment</h3>
          <ul>
            <li>
              Pricing for our services is outlined on our website and may be
              subject to change without notice.
            </li>
            <li>
              Payment terms and methods are specified during the service
              agreement process.
            </li>
          </ul>

          <h3 className="mb-2 font-bold">6. Limitation of Liability</h3>
          <p className="mb-4">
            PlanetDekor.id and its affiliates shall not be liable for any
            direct, indirect, incidental, special, or consequential damages
            arising out of the use or inability to use our services.
          </p>

          <h3 className="mb-2 font-bold">7. Governing Law</h3>
          <p className="mb-4">
            These terms and conditions are governed by and construed in
            accordance with the laws of Indonesia. Any disputes relating to
            these terms and conditions shall be subject to the exclusive
            jurisdiction of the courts in Indonesia.
          </p>

          <h3 className="mb-2 font-bold">8. Changes to Terms and Conditions</h3>
          <p className="mb-4">
            PlanetDekor.id reserves the right to update or modify these terms
            and conditions at any time without prior notice. By continuing to
            use our website and services after changes are posted, you agree to
            be bound by the revised terms and conditions.
          </p>

          <h3 className="mb-2 font-bold">Contact Us</h3>
          <p className="mb-4">
            If you have any questions about these terms and conditions, please
            contact us at{" "}
            <a href="mailto:contact@planetdekor.id">contact@planetdekor.id</a>.
          </p>
        </div>
      </section>
    </>
  );
}
