import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTAButton from "@/components/CTAButton";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const TabSharing = () => {
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

            <h1 className="heading-1 mb-4">Tab Sharing and Collaboration</h1>
            <p className="text-gray-500 mb-6">Last updated: April 9, 2025</p>

            <div className="prose max-w-none">
              <h2>Share Your Workspace</h2>
              <p>
                Premium users can share their tab groups and collaborate with
                team members in real-time. Here's how to make the most of our
                sharing features:
              </p>

              <ul className="list-disc pl-5 space-y-4 my-6">
                <li>
                  <strong>Share Groups:</strong>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Right-click on any group and select "Share"</li>
                    <li>Choose sharing permissions (view or edit)</li>
                    <li>Generate and share the link</li>
                    <li>Manage access through sharing settings</li>
                  </ul>
                </li>
                <li>
                  <strong>Collaborate:</strong>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Real-time tab updates across devices</li>
                    <li>See who's viewing shared groups</li>
                    <li>Chat with collaborators</li>
                    <li>Track group changes</li>
                  </ul>
                </li>
              </ul>

              <h2>Workspace Templates</h2>
              <p>
                Create and share workspace templates to help team members get
                started quickly:
              </p>

              <ul className="list-disc pl-5 space-y-4 my-6">
                <li>
                  <strong>Create Templates:</strong>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Organize tabs into groups</li>
                    <li>Save current workspace as template</li>
                    <li>Add template description</li>
                    <li>Set access permissions</li>
                  </ul>
                </li>
                <li>
                  <strong>Use Templates:</strong>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Browse template library</li>
                    <li>Preview template contents</li>
                    <li>Load template with one click</li>
                    <li>Customize as needed</li>
                  </ul>
                </li>
              </ul>

              <h2>Team Management</h2>
              <p>Efficiently manage team access and permissions:</p>

              <ul className="list-disc pl-5 space-y-4 my-6">
                <li>
                  <strong>Team Setup:</strong>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Create team workspaces</li>
                    <li>Invite team members</li>
                    <li>Set member roles</li>
                    <li>Manage access levels</li>
                  </ul>
                </li>
                <li>
                  <strong>Access Control:</strong>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Group-level permissions</li>
                    <li>Template access rights</li>
                    <li>Activity monitoring</li>
                    <li>Revoke access when needed</li>
                  </ul>
                </li>
              </ul>

              <h2>Best Practices</h2>
              <p>Tips for effective tab sharing and collaboration:</p>

              <ul className="list-disc pl-5 space-y-4 my-6">
                <li>
                  <strong>Organization:</strong> Keep shared groups focused and
                  well-organized
                </li>
                <li>
                  <strong>Documentation:</strong> Add descriptions to shared
                  groups and templates
                </li>
                <li>
                  <strong>Communication:</strong> Use group chat for context and
                  updates
                </li>
                <li>
                  <strong>Regular Review:</strong> Periodically review and
                  update shared workspaces
                </li>
              </ul>
            </div>

            <div className="mt-10 bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-4">Ready to collaborate?</h3>
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

export default TabSharing;
