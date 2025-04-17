import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Folders, Sparkles, TrendingUp, Users } from "lucide-react";
import { GridPattern } from "@/components/ui/grid-pattern";

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

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="section-spacing bg-gradient-to-b from-white to-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="heading-1 mb-6">About Schedise</h1>
              <p className="text-xl text-black">
                We're building tools to help professionals manage their digital
                workspace more efficiently, starting with the chaos of browser
                tabs.
              </p>
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="section-spacing bg-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="heading-2 mb-6">Our Mission</h2>
                <p className="text-lg text-black mb-4">
                  At Schedise, we're a team of developers, designers, and
                  digital professionals who understand the challenges of modern
                  work. We use countless tools, platforms, and resources daily -
                  and like many professionals, we found ourselves drowning in
                  browser tabs.
                </p>
                <p className="text-lg text-black mb-4">
                  What started as an internal tool to solve our own tab
                  management challenges has grown into something we're excited
                  to share with the world. We believe in creating tools that
                  make digital work more organized, efficient, and enjoyable.
                </p>
                <p className="text-lg text-black">
                  Our tab manager is built by professionals for professionals,
                  incorporating real-world usage patterns and needs we've
                  discovered through our own experience. We're committed to
                  continually improving and evolving our tools based on user
                  feedback and real-world needs.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="relative max-w-md">
                  {/* Circular background elements */}
                  <div className="absolute w-48 h-48 bg-white rounded-full -top-6 -right-6 z-0"></div>
                  <div className="absolute w-32 h-32 bg-schedise-red/10 rounded-full bottom-4 -left-6 z-0"></div>

                  {/* Main content */}
                  <div className="bg-white shadow-lg rounded-xl p-8 border border-gray-200 relative z-10">
                    {/* Logo */}
                    <div className="flex justify-center mb-8">
                      <div className="relative">
                        <img
                          src="/favicon.png"
                          alt="Schedise Logo"
                          className="h-24 w-24"
                        />
                      </div>
                    </div>

                    {/* Browser mockup */}
                    <div className="border border-gray-200 rounded-md bg-white mb-8">
                      <div className="px-4 py-2 border-b border-gray-200 flex items-center">
                        <div className="flex space-x-1.5">
                          <div className="h-2 w-2 rounded-full bg-schedise-red"></div>
                          <div className="h-2 w-2 rounded-full bg-schedise-red/50"></div>
                          <div className="h-2 w-2 rounded-full bg-schedise-red/30"></div>
                        </div>
                        <div className="h-4 bg-white rounded mx-auto w-1/2"></div>
                      </div>
                      <div className="p-4 flex justify-center">
                        <div className="flex flex-col items-center">
                          <div className="w-full h-2 bg-white rounded mb-1"></div>
                          <div className="w-3/4 h-2 bg-white rounded mb-1"></div>
                          <div className="w-1/2 h-2 bg-white rounded"></div>
                        </div>
                      </div>
                    </div>

                    {/* Stats indicators */}
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      <div className="bg-schedise-red/10 p-2 rounded text-center">
                        <div className="text-xs font-medium text-schedise-red">
                          Organized
                        </div>
                        <div className="text-schedise-red font-bold">100%</div>
                      </div>
                      <div className="bg-schedise-red/10 p-2 rounded text-center">
                        <div className="text-xs font-medium text-schedise-red">
                          Efficient
                        </div>
                        <div className="text-schedise-red font-bold">+90%</div>
                      </div>
                      <div className="bg-schedise-red/10 p-2 rounded text-center">
                        <div className="text-xs font-medium text-schedise-red">
                          Focused
                        </div>
                        <div className="text-schedise-red font-bold">+85%</div>
                      </div>
                    </div>

                    <div className="text-center text-sm text-black">
                      Transform your browser tabs into an organized workspace
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section - UPDATED WITH TIMELINE */}
        <section className="section-spacing bg-white">
          <div className="container-custom">
            <div className="mb-12">
              <h2 className="heading-2 mb-6">The Tab Manager Story</h2>
              <p className="text-lg text-black">
                Our journey began with a common problem: as digital
                professionals, we found ourselves constantly juggling dozens of
                browser tabs across multiple projects and platforms.
              </p>
            </div>

            <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-1/2 before:bg-gradient-to-b before:from-transparent before:via-schedise-red before:to-transparent md:before:mx-auto md:before:translate-x-0">
              <div className="md:flex md:items-center md:justify-between">
                <div className="md:w-1/2 md:pr-8 md:text-right">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold text-schedise-red mb-2">
                      Early 2025
                    </h3>
                    <h4 className="text-lg font-bold mb-2">The Problem</h4>
                    <p className="text-black">
                      As our team grew and projects became more complex, we
                      found ourselves drowning in browser tabs. Managing
                      multiple clients, projects, and resources became
                      increasingly challenging.
                    </p>
                  </div>
                </div>
                <div className="ml-5 flex h-10 w-10 flex-none items-center justify-center rounded-full bg-schedise-red text-white shadow md:ml-0 md:mr-0">
                  <Users size={20} />
                </div>
                <div className="md:w-1/2 md:pl-8 md:text-left"></div>
              </div>

              <div className="md:flex md:items-center md:justify-between">
                <div className="md:w-1/2 md:pr-8 md:text-right"></div>
                <div className="ml-5 flex h-10 w-10 flex-none items-center justify-center rounded-full bg-schedise-red text-white shadow md:ml-0 md:mr-0">
                  <Sparkles size={20} />
                </div>
                <div className="md:w-1/2 md:pl-8 md:text-left">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold text-schedise-red mb-2">
                      Q1 2025
                    </h3>
                    <h4 className="text-lg font-bold mb-2">The Solution</h4>
                    <p className="text-black">
                      We started developing an internal tool to help our team
                      organize and manage browser tabs more effectively. The
                      results were immediate - better organization, improved
                      productivity, and less digital clutter.
                    </p>
                  </div>
                </div>
              </div>

              <div className="md:flex md:items-center md:justify-between">
                <div className="md:w-1/2 md:pr-8 md:text-right">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold text-schedise-red mb-2">
                      Q2 2025
                    </h3>
                    <h4 className="text-lg font-bold mb-2">Version 1.0</h4>
                    <p className="text-black">
                      After seeing how much our internal tool helped our team,
                      we decided to refine it and share it with other
                      professionals. Today, we're excited to launch Version 1.0
                      of our tab manager to help others organize their digital
                      workspace.
                    </p>
                  </div>
                </div>
                <div className="ml-5 flex h-10 w-10 flex-none items-center justify-center rounded-full bg-schedise-red text-white shadow md:ml-0 md:mr-0">
                  <TrendingUp size={20} />
                </div>
                <div className="md:w-1/2 md:pl-8 md:text-left"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <Banner
          title="Ready to organize your tabs?"
          description="Join us in transforming browser chaos into organized productivity."
          primaryAction={{
            text: "Get Started",
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

export default About;
