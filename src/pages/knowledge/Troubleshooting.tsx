import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTAButton from "@/components/CTAButton";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Troubleshooting = () => {
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

            <h1 className="heading-1 mb-4">Troubleshooting Common Issues</h1>
            <p className="text-gray-500 mb-6">Last updated: April 9, 2025</p>

            <div className="prose max-w-none">
              <h2>Extension Not Working</h2>
              <p>
                If you're experiencing issues with the Schedise Tab Manager, try
                these steps:
              </p>

              <ul className="list-disc pl-5 space-y-4 my-6">
                <li>
                  <strong>Refresh the Extension:</strong>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Click the Schedise icon in your toolbar</li>
                    <li>Go to Settings {">"} Refresh Extension</li>
                    <li>Wait for the extension to reload</li>
                    <li>Try your action again</li>
                  </ul>
                </li>
                <li>
                  <strong>Clear Extension Cache:</strong>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Open extension settings</li>
                    <li>Navigate to Advanced {">"} Clear Cache</li>
                    <li>Confirm the action</li>
                    <li>Restart your browser</li>
                  </ul>
                </li>
                <li>
                  <strong>Reinstall the Extension:</strong>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Right-click the Schedise icon</li>
                    <li>Select "Remove from Chrome"</li>
                    <li>Visit our website to reinstall</li>
                    <li>Sign in to restore your data</li>
                  </ul>
                </li>
              </ul>

              <h2>Sync Issues</h2>
              <p>If you're having trouble with tab group synchronization:</p>

              <ul className="list-disc pl-5 space-y-4 my-6">
                <li>
                  <strong>Check Connection:</strong>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Verify internet connectivity</li>
                    <li>Check sync status indicator</li>
                    <li>Try manual sync refresh</li>
                    <li>Confirm account status</li>
                  </ul>
                </li>
                <li>
                  <strong>Resolve Conflicts:</strong>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Review sync conflicts</li>
                    <li>Choose correct version</li>
                    <li>Merge changes if needed</li>
                    <li>Update all devices</li>
                  </ul>
                </li>
              </ul>

              <h2>Performance Issues</h2>
              <p>
                If the extension is running slowly or affecting browser
                performance:
              </p>

              <ul className="list-disc pl-5 space-y-4 my-6">
                <li>
                  <strong>Optimize Groups:</strong>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Close unused tabs</li>
                    <li>Limit group sizes</li>
                    <li>Use tab suspension</li>
                    <li>Regular cleanup</li>
                  </ul>
                </li>
                <li>
                  <strong>Check Resources:</strong>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Monitor memory usage</li>
                    <li>Review active processes</li>
                    <li>Update Chrome</li>
                    <li>Check system resources</li>
                  </ul>
                </li>
              </ul>

              <h2>Common Error Messages</h2>
              <p>Solutions for frequently encountered error messages:</p>

              <ul className="list-disc pl-5 space-y-4 my-6">
                <li>
                  <strong>"Unable to Create Group":</strong>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Check permissions</li>
                    <li>Verify tab compatibility</li>
                    <li>Try different group name</li>
                    <li>Refresh and retry</li>
                  </ul>
                </li>
                <li>
                  <strong>"Sync Failed":</strong>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Check internet connection</li>
                    <li>Verify account status</li>
                    <li>Clear sync data</li>
                    <li>Contact support if persistent</li>
                  </ul>
                </li>
              </ul>

              <h2>Still Need Help?</h2>
              <p>If you're still experiencing issues:</p>

              <ul className="list-disc pl-5 space-y-4 my-6">
                <li>
                  <strong>Contact Support:</strong> Our team is ready to help
                  resolve any issues
                </li>
                <li>
                  <strong>Check Updates:</strong> Ensure you have the latest
                  version
                </li>
                <li>
                  <strong>Community Forum:</strong> Search for similar issues
                  and solutions
                </li>
                <li>
                  <strong>Debug Mode:</strong> Enable for detailed error
                  reporting
                </li>
              </ul>
            </div>

            <div className="mt-10 bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-4">Need more help?</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton href="/support" variant="primary" size="lg">
                  Contact Support
                </CTAButton>
                <CTAButton
                  href="/knowledge/getting-started"
                  variant="secondary"
                  size="lg"
                >
                  View Getting Started Guide
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

export default Troubleshooting;
