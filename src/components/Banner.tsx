import { ChevronRight, Download, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

interface BannerProps {
  title: string;
  description: string;
  primaryAction: {
    text: string;
    href: string;
  };
  secondaryAction?: {
    text: string;
    href: string;
  };
}

const Banner = ({
  title,
  description,
  primaryAction,
  secondaryAction,
}: BannerProps) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-schedise-red to-schedise-red/90">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.08),transparent_50%)]" />
        <div className="absolute h-[500px] w-[500px] -right-32 -top-32 rounded-full bg-schedise-red/30 blur-3xl" />
        <div className="absolute h-[300px] w-[300px] -left-20 -bottom-20 rounded-full bg-schedise-red/20 blur-2xl" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white [text-shadow:0_2px_10px_rgba(0,0,0,0.1)]">
            {title}
          </h2>
          <p className="text-xl mb-12 text-white/90">{description}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              to={primaryAction.href}
              className="group flex items-center justify-center gap-2 px-6 py-3 text-white transition-all duration-300 hover:text-white/80"
            >
              <Download className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              <span className="font-medium">{primaryAction.text}</span>
              <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            {secondaryAction && (
              <Link
                to={secondaryAction.href}
                className="group flex items-center justify-center gap-2 px-6 py-3 text-white/90 transition-all duration-300 hover:text-white"
              >
                <Sparkles className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                <span className="font-medium">{secondaryAction.text}</span>
                <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
