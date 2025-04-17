import { cn } from "@/lib/utils";
import {
  ArrowUpRight,
  Chrome,
  Home,
  Info,
  Layers,
  LifeBuoy,
  Menu,
  ShieldX,
  Sparkles,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBorder, setShowBorder] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateNavbar = () => {
      const currentScrollY = window.scrollY;

      // Show navbar when scrolling up or at top
      if (currentScrollY < lastScrollY) {
        setIsVisible(true);
        setShowBorder(currentScrollY > 0);
      }
      // Hide navbar when scrolling down and not at top
      else if (currentScrollY > lastScrollY && currentScrollY > 0) {
        setIsVisible(false);
        setShowBorder(false);
      }

      lastScrollY = currentScrollY;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateNavbar);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "/", icon: Home },
    { name: "Features", href: "/features", icon: Layers },
    { name: "Premium", href: "/premium", icon: Sparkles },
    { name: "About", href: "/about", icon: Info },
    { name: "Support", href: "/support", icon: LifeBuoy },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm transition-transform duration-300",
        showBorder && "border-b border-gray-100 shadow-sm",
        !isVisible && "transform -translate-y-full"
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
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
              <span className="font-bold text-lg leading-none">
                TAB MANAGER
              </span>
              <span className="text-xs text-schedise-indigo">by Schedise</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <div className="hidden md:flex items-center space-x-4">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={scrollToTop}
                    className={cn(
                      "px-3 py-2 text-sm font-medium transition-colors flex items-center gap-1.5",
                      isActive ? "text-schedise-red" : "text-gray-700"
                    )}
                  >
                    {isActive && <item.icon className="h-4 w-4" />}
                    {item.name}
                  </Link>
                );
              })}
            </div>
            <div className="ml-6">
              <Link
                to="https://chrome.google.com/webstore"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-colors text-schedise-red"
              >
                <Chrome className="h-4 w-4" />
                Add to Chrome
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-schedise-indigo focus:outline-none"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn("md:hidden", isOpen ? "block" : "hidden")}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-b border-gray-100">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "flex items-center gap-1.5 px-3 py-2 text-base font-medium",
                  isActive ? "text-schedise-red" : "text-gray-700"
                )}
                onClick={() => {
                  setIsOpen(false);
                  scrollToTop();
                }}
              >
                {isActive && <item.icon className="h-4 w-4" />}
                {item.name}
              </Link>
            );
          })}
          <Link
            to="https://chrome.google.com/webstore"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-2 text-base font-medium text-schedise-red"
            onClick={() => setIsOpen(false)}
          >
            <Chrome className="h-4 w-4" />
            Add to Chrome
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
