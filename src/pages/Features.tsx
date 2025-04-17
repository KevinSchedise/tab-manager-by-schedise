import Banner from "@/components/Banner";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import {
  ChevronRight,
  Clock,
  Download,
  Group,
  History,
  Layout,
  Maximize2,
  Search,
  Sparkles,
  Tag,
} from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Features = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const freeFeaturesFaqs = [
    {
      question: "How do Smart Tab Groups work?",
      answer:
        "Smart Tab Groups automatically organize your tabs based on their content, domain, or your custom rules. The extension analyzes tab URLs and content to group related tabs together, making it easier to find and manage related content.",
    },
    {
      question: "Can I customize tab groups?",
      answer:
        "Yes! You can create custom groups, assign colors, add labels, and set your own organization rules. You can also manually move tabs between groups and rename groups to match your workflow.",
    },
    {
      question: "How does the tab search feature work?",
      answer:
        "Our powerful search feature lets you find any tab instantly by searching through tab titles, URLs, and even page content. You can use keywords, domain filters, or group names to quickly locate the tab you need.",
    },
    {
      question: "Can I recover closed tabs?",
      answer:
        "Yes! The Tab History feature maintains a list of recently closed tabs, allowing you to restore them with a single click. You can also search through your tab history to find and recover specific tabs.",
    },
    {
      question: "How do I share tab groups with others?",
      answer:
        "You can easily share entire tab groups with colleagues by exporting them as a shareable link. Recipients can open all tabs in the group with one click, maintaining your organization structure.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-8 bg-gradient-to-b from-white via-gray-50 to-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-block px-4 py-1.5 bg-schedise-indigo/10 rounded-full text-schedise-indigo font-medium text-sm mb-6">
                Feature Overview
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Features & Benefits
              </h1>
              <p className="text-xl text-gray-700">
                Tab Manager by Schedise helps you organize and manage your
                browser tabs efficiently. Discover how our features can
                transform your browsing experience.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center pt-5 gap-4">
            <Link
              to="https://chrome.google.com/webstore"
              className="group flex items-center justify-center gap-2 py-3 text-gray-900 transition-all duration-300 hover:text-schedise-red"
            >
              <Download className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              <span className="font-medium">Add to Chrome - It's Free</span>
              <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/features"
              className="group flex items-center justify-center gap-2 px-6 py-3 text-gray-900 transition-all duration-300 hover:text-schedise-red"
            >
              <Sparkles className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              <span className="font-medium">Upgrade to Premium</span>
              <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </section>

        {/* Free Features Section */}
        <section className="pb-20 bg-white">
          <div className="container-custom">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-center">
                Free Features
              </h2>
              <p className="text-xl text-gray-700 mb-8 text-center max-w-3xl mx-auto">
                Our free tab manager includes powerful features to help you stay
                organized and boost your productivity.
              </p>
            </div>

            <BentoGrid className="lg:grid-rows-3">
              <BentoCard
                icon={Group}
                name="Smart Tab Groups"
                description="Automatically organize your tabs into intuitive groups based on content, domain, or custom rules."
                className="lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-4 relative bg-gradient-to-b from-neutral-100 to-white overflow-hidden"
              />
              <BentoCard
                icon={Search}
                name="Quick Tab Search"
                description="Find any tab instantly with powerful search across titles, URLs, and content."
                className="lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3 relative bg-gradient-to-b from-neutral-100 to-white overflow-hidden"
              />
              <BentoCard
                icon={History}
                name="Tab History"
                description="Keep track of recently closed tabs and restore them with one click."
                className="lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4 relative bg-gradient-to-b from-neutral-100 to-white overflow-hidden"
              />
              <BentoCard
                icon={Tag}
                name="Custom Labels"
                description="Add custom tags and colors to your tab groups for better organization."
                className="lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2 relative bg-gradient-to-b from-neutral-100 to-white overflow-hidden"
              />
              <BentoCard
                icon={Maximize2}
                name="Easy Management"
                description="Merge windows, split groups, and manage tabs with intuitive controls."
                className="lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4 relative bg-gradient-to-b from-neutral-100 to-white overflow-hidden"
              />
            </BentoGrid>
          </div>
        </section>

        {/* Before & After Section */}
        <section className="py-20 bg-white-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">See the Difference</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Experience the power of organized tabs with our tab manager.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Without Tab Manager */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 transform transition-all duration-300 hover:shadow-xl">
                <div className="p-4 bg-gray-100 flex justify-between items-center border-b border-gray-200">
                  <div className="flex items-center">
                    <div className="mr-2">
                      <Layout className="text-amber-500" size={20} />
                    </div>
                    <span className="font-medium">Without Tab Manager</span>
                  </div>
                  <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded">
                    Chaotic Tabs
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2">
                    {Array(12)
                      .fill(0)
                      .map((_, i) => (
                        <div
                          key={i}
                          className="h-8 bg-gray-100 rounded flex-1 min-w-[100px]"
                        ></div>
                      ))}
                  </div>
                </div>
                <div className="p-4 bg-gray-100 flex items-center justify-between border-t border-gray-200">
                  <div className="flex items-center">
                    <Clock className="text-gray-700 mr-2" size={16} />
                    <span className="text-sm">Time to find: 45 seconds</span>
                  </div>
                  <span className="text-xs text-gray-500">20+ open tabs</span>
                </div>
              </div>

              {/* With Tab Manager */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 transform transition-all duration-300 hover:shadow-xl">
                <div className="p-4 bg-gray-100 flex justify-between items-center border-b border-gray-200">
                  <div className="flex items-center">
                    <div className="mr-2">
                      <Group className="text-green-500" size={20} />
                    </div>
                    <span className="font-medium">With Tab Manager</span>
                  </div>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                    Organized Groups
                  </span>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <div className="text-sm font-medium mb-2 text-blue-700">
                        Work (5 tabs)
                      </div>
                      <div className="space-y-2">
                        <div className="h-6 bg-blue-100 rounded-md w-full"></div>
                        <div className="h-6 bg-blue-100 rounded-md w-3/4"></div>
                      </div>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <div className="text-sm font-medium mb-2 text-green-700">
                        Research (8 tabs)
                      </div>
                      <div className="space-y-2">
                        <div className="h-6 bg-green-100 rounded-md w-full"></div>
                        <div className="h-6 bg-green-100 rounded-md w-4/5"></div>
                      </div>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <div className="text-sm font-medium mb-2 text-purple-700">
                        Personal (7 tabs)
                      </div>
                      <div className="space-y-2">
                        <div className="h-6 bg-purple-100 rounded-md w-full"></div>
                        <div className="h-6 bg-purple-100 rounded-md w-2/3"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-gray-100 flex items-center justify-between border-t border-gray-200">
                  <div className="flex items-center">
                    <Clock className="text-gray-700 mr-2" size={16} />
                    <span className="text-sm">Time to find: 5 seconds</span>
                  </div>
                  <span className="text-xs text-gray-500">
                    3 organized groups
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ready to Organize Banner */}
        <Banner
          title="Ready to organize your tabs?"
          description="Join thousands of users who have transformed their browsing experience with Tab Manager."
          primaryAction={{
            text: "Add to Chrome - It's Free",
            href: "https://chrome.google.com/webstore",
          }}
          secondaryAction={{
            text: "Learn More",
            href: "/features",
          }}
        />

        {/* FAQ Section */}
        <div className="my-16 max-w-3xl mx-auto">
          <FAQ
            faqs={freeFeaturesFaqs}
            title="Frequently Asked Questions: Free Features"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Features;
