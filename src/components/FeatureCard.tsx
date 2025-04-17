
import { ReactNode } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type FeatureCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
  iconClassName?: string;
  variant?: "default" | "premium";
};

const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  className,
  iconClassName = "",
  variant = "default" 
}: FeatureCardProps) => {
  const iconBgClass = variant === "premium" 
    ? "bg-schedise-indigo/10 text-schedise-indigo" 
    : "bg-gray-100 text-schedise-indigo";
  
  const cardClass = variant === "premium"
    ? "border-schedise-indigo/20 hover:border-schedise-indigo/50"
    : "border-gray-200 hover:border-gray-300";

  return (
    <Card className={cn(`border ${cardClass} shadow-sm h-full transition-all hover:shadow-md`, className)}>
      <CardHeader>
        <div className={cn(`p-2 rounded-full w-fit mb-4 ${iconBgClass}`, iconClassName)}>
          {icon}
        </div>
        <CardTitle className="text-xl">
          {title}
          {variant === "premium" && (
            <span className="ml-2 text-xs bg-schedise-indigo text-white px-2 py-1 rounded-full uppercase">Premium</span>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base text-gray-700">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
