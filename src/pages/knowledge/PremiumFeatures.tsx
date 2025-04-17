import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTAButton from "@/components/CTAButton";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const PremiumFeatures = () => {
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

            <h1 className="heading-1 mb-4">Premium Features Guide</h1>
            <p className="text-gray-500 mb-6">Last updated: April 9, 2025</p>

            <div className="prose max-w-none">
              <h2>Advanced Tab Groups</h2>
              <p>
                Take your tab organization to the next level with premium group
                features:
              </p>

              <ul className="list-disc pl-5 space-y-4 my-6">
                <li>
                  <strong>Nested Groups:</strong>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Create subgroups within groups</li>
                    <li>Unlimited nesting levels</li>
                    <li>Collapsible hierarchy</li>
                    <li>Drag-and-drop organization</li>
                  </ul>
                </li>
                <li>
                  <strong>Group Templates:</strong>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Save frequently used tab sets</li>
                    <li>Share templates with team</li>
                    <li>Quick-load workspaces</li>
                    <li>Custom template categories</li>
                  </ul>
                </li>
              </ul>

              <h2>Smart Automation</h2>
              <p>
                Automate your tab management with powerful rules and triggers:
              </p>

              <ul className="list-disc pl-5 space-y-4 my-6">
                <li>
                  <strong>Auto-grouping Rules:</strong>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Domain-based grouping</li>
                    <li>Keyword matching</li>
                    <li>Regular expressions</li>
                    <li>Custom conditions</li>
                  </ul>
                </li>
                <li>
                  <strong>Scheduled Actions:</strong>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Auto-close inactive tabs</li>
                    <li>Load specific groups</li>
                    <li>Backup workspaces</li>
                    <li>Time-based triggers</li>
                  </ul>
                </li>
              </ul>

              <h2>Cross-device Sync</h2>
              <p>Keep your tabs synchronized across all your devices:</p>

              <ul className="list-disc pl-5 space-y-4 my-6">
                <li>
                  <strong>Real-time Sync:</strong>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Instant tab updates</li>
                    <li>Group synchronization</li>
                    <li>Settings sync</li>
                    <li>History sync</li>
                  </ul>
                </li>
                <li>
                  <strong>Device Management:</strong>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Multiple device support</li>
                    <li>Device-specific settings</li>
                    <li>Sync preferences</li>
                    <li>Conflict resolution</li>
                  </ul>
                </li>
              </ul>

              <h2>Collaboration Tools</h2>
              <p>Share and collaborate on tab groups with your team:</p>

              <ul className="list-disc pl-5 space-y-4 my-6">
                <li>
                  <strong>Group Sharing:</strong>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Share with specific users</li>
                    <li>Set permissions</li>
                    <li>Track changes</li>
                    <li>Comment on tabs</li>
                  </ul>
                </li>
                <li>
                  <strong>Team Features:</strong>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Team workspaces</li>
                    <li>Role management</li>
                    <li>Activity logs</li>
                    <li>Team templates</li>
                  </ul>
                </li>
              </ul>

              <h2>Advanced Search</h2>
              <p>Find any tab instantly with powerful search capabilities:</p>

              <ul className="list-disc pl-5 space-y-4 my-6">
                <li>
                  <strong>Global Search:</strong>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Full-text search</li>
                    <li>Search across groups</li>
                    <li>Search history</li>
                    <li>Advanced filters</li>
                  </ul>
                </li>
                <li>
                  <strong>Smart Suggestions:</strong>
                  <ul className="list-disc pl-5 mt-2">
                    <li>AI-powered results</li>
                    <li>Recent searches</li>
                    <li>Context awareness</li>
                    <li>Quick actions</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="mt-10 bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-4">Ready to upgrade?</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton href="/premium" variant="primary" size="lg">
                  Upgrade to Premium
                </CTAButton>
                <CTAButton href="/support" variant="secondary" size="lg">
                  Learn More
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

export default PremiumFeatures;
