import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-schedise-indigo/5 border-t border-gray-200 py-4">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-3 md:mb-0">
            <Link
              to="/"
              className="flex items-center space-x-2"
              onClick={scrollToTop}
            >
              <img
                src="/favicon.png"
                alt="Schedise Logo"
                className="h-14 w-14 object-contain"
              />
              <div className="flex flex-col items-start">
                <span className="font-bold text-base leading-none">
                  TAB MANAGER
                </span>
                <span className="text-xs text-schedise-indigo">
                  by Schedise
                </span>
              </div>
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 mb-3 md:mb-0">
            <Link
              to="/privacy"
              className="text-sm text-gray-600 hover:text-schedise-indigo"
              onClick={scrollToTop}
            >
              Privacy
            </Link>
            <Link
              to="/terms"
              className="text-sm text-gray-600 hover:text-schedise-indigo"
              onClick={scrollToTop}
            >
              Terms
            </Link>
            <a
              href="https://schedise.com"
              className="text-sm text-schedise-indigo hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Schedise
            </a>
          </div>

          <div className="text-center md:text-right text-xs text-gray-500">
            © {currentYear} Schedise. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
