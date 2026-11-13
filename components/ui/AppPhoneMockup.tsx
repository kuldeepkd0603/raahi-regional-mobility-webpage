"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface AppPhoneMockupProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export default function AppPhoneMockup({
  src,
  alt,
  className,
  priority = false,
}: AppPhoneMockupProps) {
  return (
    <div
      className={cn(
        "relative mx-auto w-full max-w-[270px] sm:max-w-[290px] select-none",
        className
      )}
    >
      {/* Outer Phone Hardware Frame */}
      <div className="relative rounded-[40px] p-2.5 bg-gradient-to-b from-gray-700 via-gray-900 to-black shadow-2xl border-2 border-white/20 phone-shadow">
        
        {/* Dynamic Island / Speaker Top Notch */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-full z-20 flex items-center justify-center">
          <div className="w-2.5 h-2.5 rounded-full bg-gray-900 border border-gray-800 mr-2" />
          <div className="w-1.5 h-1.5 rounded-full bg-blue-950/70" />
        </div>

        {/* Screen Display Area */}
        <div className="relative rounded-[32px] overflow-hidden bg-white aspect-[916/1717] w-full">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover object-top"
            sizes="(max-width: 640px) 260px, (max-width: 1024px) 280px, 300px"
            priority={priority}
          />
        </div>

        {/* Home Indicator Bar at Bottom */}
        <div className="absolute bottom-3.5 left-1/2 -translate-x-1/2 w-24 h-1 bg-white/40 rounded-full z-20" />
      </div>
    </div>
  );
}
