import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTAButton from "@/components/CTAButton";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const TabGroups = () => {
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

            <h1 className="heading-1 mb-4">Creating and Managing Tab Groups</h1>
            <p className="text-gray-500 mb-6">Last updated: April 9, 2025</p>

            <div className="prose max-w-none">
              <h2>Understanding Tab Groups</h2>
              <p>
                Tab groups are the core feature of Schedise Tab Manager, helping
                you organize related tabs together for better productivity and
                workspace management. Here's everything you need to know about
                creating and managing tab groups effectively.
              </p>

              <h2>Creating Tab Groups</h2>
              <p>There are several ways to create new tab groups:</p>

              <ul className="list-disc pl-5 space-y-4 my-6">
                <li>
                  <strong>Quick Create:</strong> Click the "+" button in the tab
                  manager interface to create a new empty group.
                </li>
                <li>
                  <strong>From Selection:</strong> Select multiple tabs by
                  holding Ctrl/Cmd while clicking, then right-click and choose
                  "Create New Group".
                </li>
                <li>
                  <strong>Smart Groups:</strong> Use the auto-group feature to
                  automatically create groups based on domains or URL patterns.
                </li>
                <li>
                  <strong>From Templates:</strong> (Premium) Create groups from
                  saved templates of frequently used tab combinations.
                </li>
              </ul>

              <h2>Organizing Tabs</h2>
              <p>
                Once you've created groups, there are multiple ways to organize
                your tabs:
              </p>

              <h3>Manual Organization</h3>
              <ul className="list-disc pl-5 space-y-2 my-4">
                <li>
                  <strong>Drag and Drop:</strong> Simply drag tabs between
                  groups or reorder them within a group.
                </li>
                <li>
                  <strong>Context Menu:</strong> Right-click on any tab to move
                  it to an existing group or create a new one.
                </li>
                <li>
                  <strong>Keyboard Shortcuts:</strong>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Ctrl/Cmd + Shift + G: Open group selector</li>
                    <li>Ctrl/Cmd + Shift + N: Create new group</li>
                    <li>Ctrl/Cmd + Shift + Arrow: Move tab between groups</li>
                  </ul>
                </li>
              </ul>

              <h3>Smart Organization (Premium)</h3>
              <ul className="list-disc pl-5 space-y-2 my-4">
                <li>
                  <strong>Auto-grouping Rules:</strong> Create rules to
                  automatically organize tabs based on:
                  <ul className="list-disc pl-5 mt-2">
                    <li>Domain patterns (e.g., all GitHub tabs)</li>
                    <li>URL keywords</li>
                    <li>Tab titles</li>
                    <li>Custom patterns</li>
                  </ul>
                </li>
                <li>
                  <strong>Scheduled Actions:</strong> Automatically organize
                  tabs at specific times or intervals.
                </li>
              </ul>

              <h2>Group Management</h2>
              <p>
                Keep your groups organized and efficient with these features:
              </p>

              <h3>Basic Management</h3>
              <ul className="list-disc pl-5 space-y-2 my-4">
                <li>
                  <strong>Rename Groups:</strong> Double-click the group name or
                  use the edit button to rename.
                </li>
                <li>
                  <strong>Color Coding:</strong> Assign colors to groups for
                  visual organization.
                </li>
                <li>
                  <strong>Collapse/Expand:</strong> Click the group header to
                  toggle visibility of tabs.
                </li>
                <li>
                  <strong>Quick Actions:</strong> Use the group menu for common
                  actions like:
                  <ul className="list-disc pl-5 mt-2">
                    <li>Close all tabs</li>
                    <li>Duplicate group</li>
                    <li>Save as template (Premium)</li>
                    <li>Share group (Premium)</li>
                  </ul>
                </li>
              </ul>

              <h3>Advanced Features (Premium)</h3>
              <ul className="list-disc pl-5 space-y-2 my-4">
                <li>
                  <strong>Nested Groups:</strong> Create hierarchical
                  organization with groups inside groups.
                </li>
                <li>
                  <strong>Group Templates:</strong> Save and load frequently
                  used tab combinations.
                </li>
                <li>
                  <strong>Cross-device Sync:</strong> Keep your groups
                  synchronized across all your devices.
                </li>
                <li>
                  <strong>Collaboration:</strong> Share groups with team members
                  and collaborate on shared workspaces.
                </li>
              </ul>

              <h2>Best Practices</h2>
              <p>Tips for effective tab group management:</p>

              <ul className="list-disc pl-5 space-y-2 my-4">
                <li>
                  <strong>Use meaningful names:</strong> Choose descriptive
                  group names that clearly indicate the content or purpose.
                </li>
                <li>
                  <strong>Keep groups focused:</strong> Create separate groups
                  for different projects or topics rather than mixing them.
                </li>
                <li>
                  <strong>Regular cleanup:</strong> Periodically review and
                  close unnecessary tabs to maintain organization.
                </li>
                <li>
                  <strong>Utilize templates:</strong> Save common tab
                  combinations as templates to quickly recreate frequently used
                  workspaces.
                </li>
              </ul>
            </div>

            <div className="mt-10 bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-4">
                Ready to master tab management?
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

export default TabGroups;
