import Banner from "@/components/Banner";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SupportKnowledgeBase from "@/components/SupportKnowledgeBase";
import { GridPattern } from "@/components/ui/grid-pattern";
import {
  FileQuestion,
  HelpCircle,
  Mail,
  MessageSquare,
  Send,
} from "lucide-react";
import { useEffect } from "react";

const BackgroundGrid = ({
  pattern,
  size,
}: {
  pattern?: [number, number][];
  size?: number;
}) => {
  const p =
    pattern ??
    ([
      [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
      [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
      [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
      [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
      [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    ] as [number, number][]);
  return (
    <div className="pointer-events-none absolute left-1/2 top-0 -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] from-zinc-100/30 to-zinc-300/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full mix-blend-overlay stroke-black/10 fill-black/10"
        />
      </div>
    </div>
  );
};

const Support = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      question: "How do I install the Schedise Tab Manager?",
      answer:
        "Click the 'Add to Chrome' button on our website. Chrome will ask you to confirm the installation. Once you confirm, the extension will be installed automatically and you can start organizing your tabs right away.",
    },
    {
      question: "Is the Tab Manager free to use?",
      answer:
        "Yes, our core tab management features are completely free. This includes smart tab groups, quick tab search, tab history, and custom labels. We also offer a Premium version with additional features like tab sharing, group templates, advanced rules, and scheduled actions.",
    },
    {
      question: "Will it affect my browser's performance?",
      answer:
        "No, our tab manager is designed to be lightweight and efficient. In fact, by helping you organize and manage your tabs better, it can actually improve your browser's performance by reducing memory usage from too many open tabs.",
    },
    {
      question: "How do I create and manage tab groups?",
      answer:
        "Click on the Schedise icon in your browser toolbar to open the tab manager. You can create new groups, drag tabs between groups, and customize group settings. Premium users can also create nested groups and save group templates.",
    },
    {
      question: "Can I sync my tab groups across devices?",
      answer:
        "Yes, with a Premium account, you can sync your tab groups, templates, and settings across all your devices. Simply sign in to your account on each device to access your synchronized tab organization.",
    },
    {
      question: "What data do you collect?",
      answer:
        "We collect minimal data required for the extension to function. We do NOT track your browsing history or the content of your tabs. For full details, please see our Privacy Policy.",
    },
    {
      question: "How do I uninstall the extension?",
      answer:
        "Right-click on the Schedise icon in your browser toolbar and select 'Remove from Chrome', or go to Chrome Menu > More Tools > Extensions, find Schedise Tab Manager and click 'Remove'.",
    },
    {
      question: "Can I recover closed tabs or groups?",
      answer:
        "Yes, the Tab Manager keeps a history of your recently closed tabs and groups. You can access this history through the extension interface and restore any closed tabs or entire groups with one click.",
    },
  ];

  const knowledgeBaseArticles = [
    {
      title: "Getting Started with Schedise Tab Manager",
      description:
        "Learn how to install, set up, and start organizing your tabs effectively with our tab management tools.",
      url: "/knowledge/getting-started",
    },
    {
      title: "Guide: Creating and Managing Tab Groups",
      description:
        "Master the art of organizing your tabs into groups for better productivity and workspace management.",
      url: "/knowledge/tab-groups",
    },
    {
      title: "Advanced Tab Management Features",
      description:
        "Discover powerful features like quick search, tab history, and custom labels to enhance your browsing experience.",
      url: "/knowledge/advanced-features",
    },
    {
      title: "Tab Sharing and Collaboration",
      description:
        "Learn how to share tab groups with team members and collaborate effectively (Premium feature).",
      url: "/knowledge/tab-sharing",
    },
    {
      title: "Troubleshooting Common Issues",
      description:
        "Solutions to the most frequent questions and challenges users encounter with tab management.",
      url: "/knowledge/troubleshooting",
    },
    {
      title: "Premium Features Guide",
      description:
        "Detailed overview of advanced features available in Tab Manager Premium, including templates and automation.",
      url: "/knowledge/premium-features",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="section-spacing bg-white">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row md:items-center gap-8">
              <div className="md:w-1/2">
                <h1 className="heading-1 mb-6">Support Center</h1>
                <p className="text-xl text-black">
                  Find answers to common questions and get help with the
                  Schedise Tab Manager.
                </p>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="relative w-full max-w-sm">
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-schedise-red/10 rounded-full"></div>
                  <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-schedise-red/10 rounded-full"></div>

                  <div className="bg-white rounded-xl shadow-lg p-6 relative z-10 border border-gray-200">
                    <div className="flex justify-center mb-6">
                      <div className="h-16 w-16 bg-schedise-red/10 rounded-full flex items-center justify-center">
                        <HelpCircle size={32} className="text-schedise-red" />
                      </div>
                    </div>

                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-3 bg-white p-3 rounded-lg border border-gray-200">
                        <div className="h-8 w-8 bg-schedise-red/10 rounded-full flex items-center justify-center">
                          <FileQuestion
                            size={16}
                            className="text-schedise-red"
                          />
                        </div>
                        <div className="text-sm text-black">
                          Browse knowledge base
                        </div>
                      </div>

                      <div className="flex items-center gap-3 bg-white p-3 rounded-lg border border-gray-200">
                        <div className="h-8 w-8 bg-schedise-red/10 rounded-full flex items-center justify-center">
                          <MessageSquare
                            size={16}
                            className="text-schedise-red"
                          />
                        </div>
                        <div className="text-sm text-black">
                          Ask questions in FAQ
                        </div>
                      </div>

                      <div className="flex items-center gap-3 bg-white p-3 rounded-lg border border-gray-200">
                        <div className="h-8 w-8 bg-schedise-red/10 rounded-full flex items-center justify-center">
                          <Mail size={16} className="text-schedise-red" />
                        </div>
                        <div className="text-sm text-black">
                          Contact support team
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Knowledge Base Section */}
        <section className="section-spacing bg-white">
          <div className="container-custom">
            <SupportKnowledgeBase articles={knowledgeBaseArticles} />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-spacing bg-white">
          <div className="container-custom">
            <FAQ faqs={faqs} title="Frequently Asked Questions" />
          </div>
        </section>

        {/* Final CTA */}
        <Banner
          title="Need More Help?"
          description="Our support team is here to assist you with any questions about tab management. Get in touch or explore our knowledge base for instant answers."
          primaryAction={{
            text: "Contact Support",
            href: "#contact-form",
          }}
          secondaryAction={{
            text: "Browse FAQs",
            href: "#faq-section",
          }}
        />

        {/* Contact Section */}
        <section className="section-spacing bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="heading-2 mb-4">Still Need Help?</h2>
                <p className="text-xl text-black">
                  If you couldn't find an answer to your question, our support
                  team is here to help you manage your tabs more effectively.
                </p>
              </div>

              <div className="relative bg-gradient-to-b from-neutral-100 to-white p-8 md:p-12 rounded-3xl border border-neutral-200/50 shadow-sm overflow-hidden">
                <BackgroundGrid size={20} />

                {/* Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-schedise-red/10 rounded-full"></div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-schedise-red/10 rounded-full"></div>

                <div className="relative z-10">
                  <div className="flex justify-center mb-8">
                    <div className="h-16 w-16 bg-schedise-red/10 rounded-full flex items-center justify-center">
                      <Mail size={28} className="text-schedise-red" />
                    </div>
                  </div>

                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-black mb-2">
                          Name
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-schedise-red focus:border-transparent"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-black mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-schedise-red focus:border-transparent"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-black mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-schedise-red focus:border-transparent"
                        placeholder="What's your question about?"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-black mb-2">
                        Message
                      </label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-schedise-red focus:border-transparent"
                        placeholder="Describe your issue or question in detail"
                      ></textarea>
                    </div>

                    <div className="flex justify-center">
                      <button
                        type="submit"
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-schedise-red hover:bg-schedise-red/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-schedise-red shadow-sm transition-colors duration-200"
                      >
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Support;
