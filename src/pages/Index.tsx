import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import {
  CheckCircle2,
  ChevronRight,
  Clock,
  Download,
  Group,
  Maximize2,
  Search,
  Sparkles,
  Tag,
} from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section with Modern Design */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
          <div className="container-custom">
            <div className="flex flex-col lg:flex-row lg:items-center">
              <div className="lg:w-1/2 mb-10 lg:mb-0">
                <div className="inline-block px-4 py-1.5 bg-schedise-indigo/10 rounded-full text-schedise-indigo font-medium text-sm mb-6">
                  Organize. Find. Focus.
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  <span className="text-schedise-red block">
                    Too Many Tabs?
                  </span>
                  Take Control of Your Browser.
                </h1>

                <div className="flex flex-col sm:flex-row mb-4 gap-4">
                  <Link
                    to="https://chrome.google.com/webstore"
                    className="group flex items-center justify-center gap-2 py-3 text-gray-900 transition-all duration-300 hover:text-schedise-red"
                  >
                    <Download className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                    <span className="font-medium">
                      Add to Chrome - It's Free
                    </span>
                    <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                  <Link
                    to="/features"
                    className="group flex items-center justify-center gap-2 px-6 py-3 text-gray-900 transition-all duration-300 hover:text-schedise-red"
                  >
                    <Sparkles className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                    <span className="font-medium">Learn More</span>
                    <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>

                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  Tab Manager by Schedise helps you organize, find, and manage
                  your browser tabs efficiently. Say goodbye to tab chaos and
                  hello to a more productive browsing experience.
                </p>

                <div className="mt-8 flex items-center flex-wrap gap-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="text-green-500" size={18} />
                    <span className="text-sm font-medium">100% Free</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="text-green-500" size={18} />
                    <span className="text-sm font-medium">No Registration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="text-green-500" size={18} />
                    <span className="text-sm font-medium">Easy to Use</span>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 lg:pl-10">
                <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
                  <div className="p-1 bg-gray-100 flex items-center">
                    <div className="flex space-x-1.5 ml-2">
                      <div className="h-3 w-3 rounded-full bg-red-400"></div>
                      <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                      <div className="h-3 w-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="mx-auto text-xs text-gray-500 font-medium">
                      Organized tabs preview
                    </div>
                  </div>
                  <div className="relative p-4">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="text-sm font-medium mb-2 text-schedise-indigo">
                          Work
                        </div>
                        <div className="space-y-2">
                          <div className="h-6 bg-gray-200 rounded-md w-3/4"></div>
                          <div className="h-6 bg-gray-200 rounded-md w-full"></div>
                          <div className="h-6 bg-gray-200 rounded-md w-2/3"></div>
                        </div>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="text-sm font-medium mb-2 text-schedise-red">
                          Personal
                        </div>
                        <div className="space-y-2">
                          <div className="h-6 bg-gray-200 rounded-md w-full"></div>
                          <div className="h-6 bg-gray-200 rounded-md w-4/5"></div>
                          <div className="h-6 bg-gray-200 rounded-md w-3/4"></div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                      <div className="text-sm text-gray-500">
                        12 tabs in 4 groups
                      </div>
                      <div className="flex space-x-2">
                        <div className="w-8 h-8 bg-schedise-indigo/10 rounded-full flex items-center justify-center">
                          <Search size={16} className="text-schedise-indigo" />
                        </div>
                        <div className="w-8 h-8 bg-schedise-red/10 rounded-full flex items-center justify-center">
                          <Group size={16} className="text-schedise-red" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-6 rounded-xl bg-white/40 backdrop-blur-sm shadow-[inset_0px_0px_20px_rgba(255,255,255,0.5)] hover:shadow-[inset_0px_0px_40px_rgba(255,255,255,0.8),0px_0px_20px_rgba(255,255,255,0.8)] transition-all duration-300 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                <div className="text-3xl md:text-4xl font-bold text-schedise-red mb-2">
                  500k+
                </div>
                <p className="text-sm text-gray-600">Tabs Organized</p>
              </div>
              <div className="text-center p-6 rounded-xl bg-white/40 backdrop-blur-sm shadow-[inset_0px_0px_20px_rgba(255,255,255,0.5)] hover:shadow-[inset_0px_0px_40px_rgba(255,255,255,0.8),0px_0px_20px_rgba(255,255,255,0.8)] transition-all duration-300 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                <div className="text-3xl md:text-4xl font-bold text-schedise-red mb-2">
                  10k+
                </div>
                <p className="text-sm text-gray-600">Happy Users</p>
              </div>
              <div className="text-center p-6 rounded-xl bg-white/40 backdrop-blur-sm shadow-[inset_0px_0px_20px_rgba(255,255,255,0.5)] hover:shadow-[inset_0px_0px_40px_rgba(255,255,255,0.8),0px_0px_20px_rgba(255,255,255,0.8)] transition-all duration-300 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                <div className="text-3xl md:text-4xl font-bold text-schedise-red mb-2">
                  30%
                </div>
                <p className="text-sm text-gray-600">Time Saved</p>
              </div>
              <div className="text-center p-6 rounded-xl bg-white/40 backdrop-blur-sm shadow-[inset_0px_0px_20px_rgba(255,255,255,0.5)] hover:shadow-[inset_0px_0px_40px_rgba(255,255,255,0.8),0px_0px_20px_rgba(255,255,255,0.8)] transition-all duration-300 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                <div className="text-3xl md:text-4xl font-bold text-schedise-red mb-2">
                  4.8
                </div>
                <p className="text-sm text-gray-600">User Rating</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section with Bento Grid */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Key Features
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Our tab manager provides powerful tools to help you stay
                organized and productive while browsing.
              </p>
            </div>

            <BentoGrid className="lg:grid-rows-3">
              <BentoCard
                icon={Group}
                name="Smart Tab Groups"
                description="Automatically organize your tabs into groups based on content, domain, or custom rules."
                className="lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-4"
              />
              <BentoCard
                icon={Search}
                name="Quick Search"
                description="Find any tab instantly with powerful search across titles, URLs, and content."
                className="lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3"
              />
              <BentoCard
                icon={Clock}
                name="Tab History"
                description="Keep track of your recently closed tabs and restore them with one click."
                className="lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4"
              />
              <BentoCard
                icon={Tag}
                name="Custom Labels"
                description="Add custom tags and colors to your tab groups for better organization."
                className="lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2"
              />
              <BentoCard
                icon={Maximize2}
                name="Easy Management"
                description="Merge windows, split groups, and manage tabs with intuitive controls."
                className="lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4"
              />
            </BentoGrid>

            <div className="text-center mt-12">
              <Link
                to="/features"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-flex items-center text-schedise-indigo font-medium hover:underline"
              >
                View all features
                <ChevronRight size={18} className="ml-1" />
              </Link>
            </div>
          </div>
        </section>

        {/* Banner Section */}
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
      </main>

      <Footer />
    </div>
  );
};

export default Index;
