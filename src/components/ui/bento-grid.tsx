import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
        className
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  icon: Icon,
  description,
}: {
  name: string;
  className?: string;
  icon: any;
  description: string;
}) => (
  <div
    className={cn(
      "group relative col-span-1 flex flex-col items-center justify-center overflow-hidden rounded-xl p-8 text-center",
      "bg-white/50 backdrop-blur-sm [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05)]",
      "dark:bg-neutral-900/50 dark:[border:1px_solid_rgba(255,255,255,.1)]",
      className
    )}
  >
    {/* Subtle gradient background */}
    <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.1]">
      <div className="absolute inset-0 bg-gradient-to-br from-schedise-indigo to-transparent" />
    </div>

    <div className="relative flex flex-col items-center gap-4">
      <Icon className="h-12 w-12 text-schedise-indigo" />
      <div>
        <h3 className="mb-2 text-xl font-semibold text-neutral-800 dark:text-neutral-200">
          {name}
        </h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {description}
        </p>
      </div>
    </div>
  </div>
);

export { BentoCard, BentoGrid };
