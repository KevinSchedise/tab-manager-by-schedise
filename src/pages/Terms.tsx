import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <section className="section-spacing bg-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h1 className="heading-1 mb-6">Terms of Service</h1>
              <p className="text-gray-600 mb-8">Last updated: April 9, 2025</p>

              <div className="prose prose-lg max-w-none">
                <p>
                  Please read these Terms of Service ("Terms") carefully before
                  using the Schedise Tab Manager browser extension and website
                  (the "Service") operated by Schedise ("us", "we", or "our").
                </p>

                <p className="mt-4">
                  By accessing or using the Service, you agree to be bound by
                  these Terms. If you disagree with any part of the terms, you
                  may not access the Service.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">
                  1. Use of the Service
                </h2>
                <p>
                  Schedise Tab Manager is designed to help you organize, manage,
                  and optimize your browser tabs. By using our Service, you
                  acknowledge that:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>
                    You will use the extension for its intended purpose of tab
                    management
                  </li>
                  <li>
                    You will not attempt to reverse engineer or modify the
                    extension
                  </li>
                  <li>
                    You are responsible for any data you share through
                    collaboration features
                  </li>
                  <li>
                    You will not use the service to store or share inappropriate
                    or illegal content
                  </li>
                  <li>
                    You understand that the service may have limitations based
                    on browser capabilities
                  </li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">
                  2. Account Terms
                </h2>
                <p>
                  Some features of the Service require a premium account. By
                  subscribing to premium features:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>
                    You agree to provide accurate billing and account
                    information
                  </li>
                  <li>
                    You are responsible for maintaining the security of your
                    account
                  </li>
                  <li>
                    You will not share your premium account credentials with
                    others
                  </li>
                  <li>
                    You understand that premium features are subject to fair
                    usage policies
                  </li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">
                  3. Data Usage and Storage
                </h2>
                <p>Regarding your data and usage of the Service:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>
                    You retain ownership of any data you create or store using
                    the Service
                  </li>
                  <li>
                    You grant us necessary permissions to provide and improve
                    the Service
                  </li>
                  <li>
                    You are responsible for backing up your important tab groups
                    and settings
                  </li>
                  <li>We may impose storage limits on free accounts</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">
                  4. Premium Subscription
                </h2>
                <p>For premium subscriptions:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>
                    Payments are processed securely through our payment
                    providers
                  </li>
                  <li>
                    Subscriptions auto-renew unless cancelled before the renewal
                    date
                  </li>
                  <li>Refunds are provided according to our refund policy</li>
                  <li>
                    Premium features may be modified with reasonable notice
                  </li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">
                  5. Intellectual Property
                </h2>
                <p>
                  The Service and its original content, features, and
                  functionality are and will remain the exclusive property of
                  Schedise. The Service is protected by copyright, trademark,
                  and other laws of both the United States and foreign
                  countries.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">
                  6. Limitations of Liability
                </h2>
                <p>
                  In no event shall Schedise be liable for any damages resulting
                  from:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>
                    Loss of data due to browser crashes or extension errors
                  </li>
                  <li>Interruption of service or sync failures</li>
                  <li>Unauthorized access to your account or data</li>
                  <li>Issues arising from third-party integrations</li>
                  <li>Browser compatibility issues or limitations</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">7. Fair Usage</h2>
                <p>To ensure service quality for all users:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>
                    We may impose reasonable limits on API calls and sync
                    frequency
                  </li>
                  <li>
                    Automated or systematic data extraction is not permitted
                  </li>
                  <li>
                    Excessive usage affecting other users may be restricted
                  </li>
                  <li>
                    Shared workspaces are subject to storage and user limits
                  </li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">8. Termination</h2>
                <p>
                  We may terminate or suspend your account and access to the
                  Service immediately, without prior notice or liability, for
                  any reason including:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Violation of these Terms</li>
                  <li>Abuse of the Service or other users</li>
                  <li>Fraudulent or illegal activities</li>
                  <li>Non-payment of premium fees</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">
                  9. Changes to Terms
                </h2>
                <p>
                  We reserve the right to modify these Terms at any time. We
                  will notify you of any material changes through the extension
                  or email. Your continued use of the Service after such
                  modifications constitutes acceptance of the updated Terms.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">10. Contact Us</h2>
                <p>
                  If you have questions about these Terms, please contact us at:
                </p>
                <p className="font-medium">legal@schedise.com</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
