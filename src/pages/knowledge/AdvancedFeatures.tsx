import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTAButton from "@/components/CTAButton";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const AdvancedFeatures = () => {
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

            <h1 className="heading-1 mb-4">Advanced Tab Management Features</h1>
            <p className="text-gray-500 mb-6">Last updated: April 9, 2025</p>

            <div className="prose max-w-none">
              <h2>Quick Search</h2>
              <p>
                Find any open tab instantly with our powerful search feature:
              </p>

              <ul className="list-disc pl-5 space-y-4 my-6">
                <li>
                  <strong>Global Search:</strong> Press Ctrl/Cmd + Shift + F to
                  open the quick search overlay from anywhere.
                </li>
                <li>
                  <strong>Search Options:</strong>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Search by tab title</li>
                    <li>Search by URL</li>
                    <li>Search within specific groups</li>
                    <li>Search through tab history</li>
                  </ul>
                </li>
                <li>
                  <strong>Quick Actions:</strong> From the search results, you
                  can:
                  <ul className="list-disc pl-5 mt-2">
                    <li>Switch to tab</li>
                    <li>Move tab to another group</li>
                    <li>Close tab</li>
                    <li>Copy URL</li>
                  </ul>
                </li>
              </ul>

              <h2>Tab History</h2>
              <p>
                Never lose track of your tabs with our comprehensive history
                feature:
              </p>

              <ul className="list-disc pl-5 space-y-4 my-6">
                <li>
                  <strong>Recently Closed:</strong> Access recently closed tabs
                  and restore them instantly.
                </li>
                <li>
                  <strong>Group History:</strong> Restore entire tab groups that
                  were previously closed.
                </li>
                <li>
                  <strong>Session Recovery:</strong> Automatically save your tab
                  state and recover from browser crashes.
                </li>
                <li>
                  <strong>History Search:</strong> Search through your tab
                  history to find previously visited pages.
                </li>
              </ul>

              <h2>Custom Labels</h2>
              <p>Organize your tabs with visual labels and markers:</p>

              <ul className="list-disc pl-5 space-y-4 my-6">
                <li>
                  <strong>Color Coding:</strong> Assign colors to tabs for quick
                  visual identification.
                </li>
                <li>
                  <strong>Custom Icons:</strong> Add custom icons to tabs or
                  groups for better recognition.
                </li>
                <li>
                  <strong>Tags:</strong> Add searchable tags to tabs for
                  enhanced organization.
                </li>
                <li>
                  <strong>Notes:</strong> Attach notes to tabs or groups for
                  additional context.
                </li>
              </ul>

              <h2>Keyboard Shortcuts</h2>
              <p>
                Power users can navigate and manage tabs efficiently with
                keyboard shortcuts:
              </p>

              <div className="bg-gray-50 p-6 rounded-lg my-6">
                <h4 className="font-bold mb-4">Essential Shortcuts</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <li>
                    <code>Ctrl/Cmd + Shift + F</code> - Quick Search
                  </li>
                  <li>
                    <code>Ctrl/Cmd + Shift + G</code> - Group Selector
                  </li>
                  <li>
                    <code>Ctrl/Cmd + Shift + H</code> - Tab History
                  </li>
                  <li>
                    <code>Ctrl/Cmd + Shift + L</code> - Label Manager
                  </li>
                  <li>
                    <code>Ctrl/Cmd + Shift + N</code> - New Group
                  </li>
                  <li>
                    <code>Ctrl/Cmd + Shift + S</code> - Save Group
                  </li>
                  <li>
                    <code>Alt + ←/→</code> - Navigate Groups
                  </li>
                  <li>
                    <code>Alt + ↑/↓</code> - Navigate Tabs
                  </li>
                </ul>
              </div>

              <h2>Custom Rules (Premium)</h2>
              <p>Automate your tab management with powerful custom rules:</p>

              <ul className="list-disc pl-5 space-y-4 my-6">
                <li>
                  <strong>Auto-grouping:</strong>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Group by domain patterns</li>
                    <li>Group by URL keywords</li>
                    <li>Group by tab titles</li>
                    <li>Custom grouping logic</li>
                  </ul>
                </li>
                <li>
                  <strong>Scheduled Actions:</strong>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Auto-close inactive tabs</li>
                    <li>Move tabs between groups</li>
                    <li>Save groups at intervals</li>
                    <li>Load specific groups</li>
                  </ul>
                </li>
                <li>
                  <strong>Triggers:</strong>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Time-based triggers</li>
                    <li>Tab count triggers</li>
                    <li>Website triggers</li>
                    <li>Custom conditions</li>
                  </ul>
                </li>
              </ul>

              <h2>Performance Optimization</h2>
              <p>Keep your browser running smoothly with these features:</p>

              <ul className="list-disc pl-5 space-y-4 my-6">
                <li>
                  <strong>Memory Management:</strong> Monitor and optimize tab
                  memory usage.
                </li>
                <li>
                  <strong>Tab Suspension:</strong> Automatically suspend
                  inactive tabs to free up resources.
                </li>
                <li>
                  <strong>Load Balancing:</strong> Distribute tabs across
                  windows for better performance.
                </li>
                <li>
                  <strong>Resource Monitor:</strong> Track and manage browser
                  resource usage.
                </li>
              </ul>
            </div>

            <div className="mt-10 bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-4">
                Ready to unlock advanced features?
              </h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton href="/premium" variant="primary" size="lg">
                  Upgrade to Premium
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

export default AdvancedFeatures;
