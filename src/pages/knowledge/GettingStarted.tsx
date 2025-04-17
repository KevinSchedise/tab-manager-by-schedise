import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTAButton from "@/components/CTAButton";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const GettingStarted = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <section className="section-spacing bg-gradient-to-b from-white to-gray-50">
          <div className="container-custom">
            <Link
              to="/support"
              className="flex items-center text-schedise-red mb-6 hover:underline"
            >
              <ArrowLeft className="h-4 w-4 mr-2" /> Back to Support
            </Link>

            <h1 className="heading-1 mb-4">
              Getting Started with Schedise Tab Manager
            </h1>
            <p className="text-gray-500 mb-6">Last updated: April 9, 2025</p>

            <div className="prose max-w-none">
              <h2>Installation</h2>
              <p>
                Follow these simple steps to start organizing your browser tabs
                effectively:
              </p>

              <ol className="list-decimal pl-5 space-y-4 my-6">
                <li>
                  <strong>Add the extension to Chrome:</strong> Click the "Add
                  to Chrome" button on our website or visit the Chrome Web Store
                  and search for "Schedise Tab Manager".
                </li>
                <li>
                  <strong>Confirm installation:</strong> Click "Add Extension"
                  in the dialog box that appears.
                </li>
                <li>
                  <strong>Pin for easy access (recommended):</strong> Click the
                  puzzle piece icon in Chrome's toolbar, find Schedise Tab
                  Manager, and click the pin icon for quick access to your tab
                  groups.
                </li>
              </ol>

              <h2>Initial Setup</h2>
              <p>
                Schedise Tab Manager comes with intuitive default settings, but
                here's how you can customize it to match your workflow:
              </p>

              <ul className="list-disc pl-5 space-y-4 my-6">
                <li>
                  <strong>Access settings:</strong> Click the Schedise icon in
                  your toolbar to open the tab manager interface, then click the
                  settings icon to customize your experience.
                </li>
                <li>
                  <strong>Create your first group:</strong> Click the "+" button
                  to create a new tab group and give it a meaningful name (e.g.,
                  "Work", "Research", "Personal").
                </li>
                <li>
                  <strong>Customize appearance:</strong> Choose color themes and
                  layout options that match your preferences.
                </li>
                <li>
                  <strong>Set up keyboard shortcuts:</strong> Configure custom
                  shortcuts for quick tab management actions.
                </li>
              </ul>

              <h2>Core Features</h2>

              <h3>Tab Groups</h3>
              <p>
                The heart of Schedise Tab Manager is its powerful grouping
                system. Here's how to use it effectively:
              </p>

              <ul className="list-disc pl-5 space-y-2 my-4">
                <li>
                  <strong>Create groups:</strong> Use the "+" button or
                  right-click on a tab to start a new group.
                </li>
                <li>
                  <strong>Organize tabs:</strong> Drag and drop tabs between
                  groups or use keyboard shortcuts.
                </li>
                <li>
                  <strong>Quick switch:</strong> Use the group selector to
                  instantly switch between different tab sets.
                </li>
                <li>
                  <strong>Save groups:</strong> Save frequently used tab
                  combinations as templates (Premium feature).
                </li>
              </ul>

              <h3>Smart Features</h3>
              <p>Take advantage of these productivity-enhancing features:</p>

              <ul className="list-disc pl-5 space-y-2 my-4">
                <li>
                  <strong>Quick Search:</strong> Use Ctrl/Cmd + Shift + F to
                  instantly find any open tab.
                </li>
                <li>
                  <strong>Tab History:</strong> Access recently closed tabs and
                  groups from the history panel.
                </li>
                <li>
                  <strong>Custom Labels:</strong> Add color-coded labels to tabs
                  for better organization.
                </li>
                <li>
                  <strong>Auto-group:</strong> Let the manager automatically
                  organize tabs based on domains or patterns.
                </li>
              </ul>

              <h2>Troubleshooting</h2>
              <p>If you encounter any issues with Schedise Tab Manager:</p>

              <ul className="list-disc pl-5 space-y-2 my-4">
                <li>
                  <strong>Refresh the extension:</strong> Click the Schedise
                  icon, go to Settings {">"} Refresh Extension.
                </li>
                <li>
                  <strong>Check group sync:</strong> Ensure your groups are
                  properly synced if using multiple devices.
                </li>
                <li>
                  <strong>Clear cache:</strong> Try clearing the extension's
                  cache in Settings {">"} Advanced {">"} Clear Cache.
                </li>
                <li>
                  <strong>Contact support:</strong> If problems persist, visit
                  our Support page for assistance.
                </li>
              </ul>
            </div>

            <div className="mt-10 bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-4">
                Ready to organize your tabs?
              </h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton
                  href="https://chrome.google.com/webstore"
                  variant="primary"
                  size="lg"
                >
                  Add to Chrome - It's Free
                </CTAButton>
                <CTAButton href="/support" variant="secondary" size="lg">
                  Explore Support Center
                </CTAButton>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default GettingStarted;
