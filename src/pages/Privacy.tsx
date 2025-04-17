import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Privacy = () => {
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
              <h1 className="heading-1 mb-6">Privacy Policy</h1>
              <p className="text-gray-600 mb-8">Last updated: April 9, 2025</p>

              <div className="prose prose-lg max-w-none">
                <p>
                  At Schedise, we take your privacy and data security seriously.
                  This Privacy Policy outlines how our Tab Manager extension
                  handles your data and the measures we take to protect your
                  privacy while providing powerful tab management features.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">
                  Data Collection and Usage
                </h2>
                <p>
                  To provide tab management functionality, we collect and
                  process only the necessary data:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>
                    Tab titles and URLs for organization and search features
                  </li>
                  <li>Group names and structures you create</li>
                  <li>Your extension preferences and settings</li>
                  <li>
                    Usage statistics (number of tabs managed, groups created)
                  </li>
                </ul>
                <p>
                  This data is primarily stored and processed locally on your
                  device. For Premium users, some data may be synchronized
                  across devices through your account.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">
                  Required Permissions
                </h2>
                <p>
                  Our extension requires certain permissions to provide its
                  functionality:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>
                    <strong>Tabs:</strong> Required to manage, organize, and
                    monitor your browser tabs
                  </li>
                  <li>
                    <strong>Storage:</strong> Needed to save your tab groups and
                    preferences locally
                  </li>
                  <li>
                    <strong>Bookmarks:</strong> Used for saving and organizing
                    tab groups as bookmarks
                  </li>
                  <li>
                    <strong>History:</strong> Required for tab history and
                    restoration features
                  </li>
                </ul>
                <p>
                  These permissions are used solely for tab management features
                  and are not used for tracking or data collection beyond what's
                  necessary for the extension to function.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">
                  Data Storage and Sync
                </h2>
                <p>The following data may be stored and synchronized:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Tab group configurations and layouts</li>
                  <li>Custom rules and automation settings</li>
                  <li>Extension preferences and customizations</li>
                  <li>Usage statistics for performance optimization</li>
                </ul>
                <p>
                  For free users, data is stored locally on your device. Premium
                  users' data is synchronized across devices using secure
                  encryption, ensuring your data remains private and accessible
                  only to you.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">
                  Premium Features and Data Handling
                </h2>
                <p>
                  Premium users have access to additional features that may
                  involve cloud storage:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Cross-device synchronization of tab groups</li>
                  <li>Shared workspaces for team collaboration</li>
                  <li>Cloud backup of tab configurations</li>
                  <li>Usage analytics for workspace optimization</li>
                </ul>
                <p>
                  All cloud-stored data is encrypted end-to-end and accessible
                  only to you and users you explicitly share with. We never
                  access your data without your permission.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">Data Security</h2>
                <p>
                  We implement strong security measures to protect your data:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>End-to-end encryption for all synchronized data</li>
                  <li>Secure HTTPS connections for all data transfers</li>
                  <li>Regular security audits and updates</li>
                  <li>Strict access controls for cloud-stored data</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">
                  Your Privacy Rights
                </h2>
                <p>You have control over your data:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Access and export your stored data</li>
                  <li>Delete your account and associated data</li>
                  <li>Control sharing and collaboration settings</li>
                  <li>Opt-out of non-essential data collection</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">
                  Changes to This Policy
                </h2>
                <p>
                  We may update this Privacy Policy to reflect changes in our
                  practices or for legal, operational, or regulatory reasons. We
                  will notify you of any material changes through the extension
                  and by updating the "Last updated" date.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
                <p>
                  If you have questions about this Privacy Policy or our privacy
                  practices, please contact us at:
                </p>
                <p className="font-medium">privacy@schedise.com</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
