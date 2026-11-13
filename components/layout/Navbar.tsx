"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/passenger-app", label: "Passenger App" },
  { href: "/driver-app", label: "Driver App" },
  { href: "/services", label: "Our Services" },
  { href: "/cities", label: "Launch Cities" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  // When scrolled OR on sub-pages (which have colored headers), use light/white header styling
  const useWhiteNav = isScrolled;

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          useWhiteNav
            ? "bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100 py-2 sm:py-2.5"
            : "bg-[#071B43]/90 backdrop-blur-md border-b border-white/10 py-2.5 sm:py-3"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between min-h-[64px] sm:min-h-[72px]">
            {/* Logo */}
            <Link href="/" className="flex items-center group py-1">
              <div className="relative h-14 sm:h-16 lg:h-[70px] w-40 sm:w-48 lg:w-56 flex items-center">
                {useWhiteNav ? (
                  <Image
                    src="/assets/brand/raahi_logo.png"
                    alt="Raahi – Regional Mobility"
                    width={220}
                    height={80}
                    className="h-full w-auto object-contain transition-transform group-hover:scale-105"
                    priority
                  />
                ) : (
                  <Image
                    src="/assets/brand/raahi_logo_light.png"
                    alt="Raahi – Regional Mobility"
                    width={220}
                    height={80}
                    className="h-full w-auto object-contain transition-transform group-hover:scale-105"
                    priority
                  />
                )}
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                      useWhiteNav
                        ? isActive
                          ? "text-[#0878E8] bg-blue-50 font-semibold"
                          : "text-[#172B4D] hover:text-[#0878E8] hover:bg-gray-50"
                        : isActive
                        ? "text-[#00C7F7] bg-white/10 font-semibold"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Right CTAs */}
            <div className="hidden md:flex items-center gap-3">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-orange-500/15 border border-orange-500/30">
                <span className="w-2 h-2 rounded-full bg-[#FF9418] animate-pulse" />
                <span className="text-xs font-semibold text-[#FF9418]">Opening Soon</span>
              </div>
              <Link
                href="/#notify"
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#0878E8] hover:bg-blue-600 text-white text-sm font-semibold transition-all duration-200 shadow-sm shadow-blue-500/20 hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Join Updates</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className={cn(
                "lg:hidden p-2 rounded-lg transition-colors",
                useWhiteNav
                  ? "text-[#071B43] hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
              )}
              aria-label="Toggle navigation menu"
            >
              {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsMobileOpen(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
            {/* Drawer Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-[#F3F8FF]">
              <div className="relative h-14 w-44">
                <Image
                  src="/assets/brand/raahi_logo.png"
                  alt="Raahi – Regional Mobility"
                  width={176}
                  height={56}
                  className="h-full w-auto object-contain"
                />
              </div>
              <button
                onClick={() => setIsMobileOpen(false)}
                className="p-2 rounded-lg text-gray-500 hover:bg-white transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Nav Links */}
            <div className="flex-1 overflow-y-auto py-3 px-3 space-y-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className={cn(
                      "flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                      isActive
                        ? "bg-blue-50 text-[#0878E8] font-bold"
                        : "text-[#172B4D] hover:bg-gray-50 hover:text-[#0878E8]"
                    )}
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </Link>
                );
              })}
            </div>

            {/* Mobile Footer CTA */}
            <div className="p-4 border-t border-gray-100 bg-gray-50 space-y-3">
              <div className="flex items-center justify-center gap-2 px-3 py-1.5 rounded-full bg-orange-100 text-orange-700 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#FF9418] animate-pulse" />
                Grand Opening Coming Soon
              </div>
              <Link
                href="/#notify"
                onClick={() => setIsMobileOpen(false)}
                className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-[#0878E8] text-white text-sm font-bold shadow-md hover:bg-[#0B2D66] transition-colors"
              >
                <span>Join Launch Updates</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
