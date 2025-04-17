
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

type CTAButtonProps = {
  children: ReactNode;
  href: string;
  className?: string;
  variant?: "primary" | "secondary" | "premium";
  size?: "default" | "lg" | "sm";
};

const CTAButton = ({
  children,
  href,
  className = "",
  variant = "primary",
  size = "default",
}: CTAButtonProps) => {
  const baseClasses = "font-medium";
  
  const variantClasses = {
    primary: "bg-schedise-red hover:bg-schedise-red/90 text-white",
    secondary: "bg-gray-100 hover:bg-gray-200 text-schedise-indigo",
    premium: "bg-schedise-indigo hover:bg-schedise-indigo/90 text-white",
  };
  
  const sizeClasses = {
    sm: "text-xs px-3 py-1.5",
    default: "text-sm px-4 py-2",
    lg: "text-base px-6 py-3",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const isExternal = href.startsWith("http");
  
  // Add scroll to top functionality for internal links
  const handleClick = () => {
    if (!isExternal) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  
  if (isExternal) {
    return (
      <Button asChild className={classes}>
        <a href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      </Button>
    );
  }
  
  return (
    <Button asChild className={classes}>
      <Link to={href} onClick={handleClick}>
        {children}
      </Link>
    </Button>
  );
};

export default CTAButton;
