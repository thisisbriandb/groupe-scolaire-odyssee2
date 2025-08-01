"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute("id") || "";

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "shadow-md" : ""
        }`}
      >
        <div className="bg-white/90 backdrop-blur-md">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex items-center justify-between">
              {/* Logo */}
              <Link href="/" className="flex items-center space-x-3">
                <Image
                  src="/logo.png"
                  alt="L'Odyssée"
                  width={45}
                  height={45}
                  className="h-10 w-auto object-contain"
                />
                <span className="font-oswald text-xl font-bold text-[#D93030]">
                  L’Odyssée
                </span>
              </Link>

              {/* Menu Desktop */}
              <div className="hidden md:flex items-center space-x-10">
                {[
                  { name: "Accueil", path: "/" },
                  { name: "À propos", path: "/propos" },
                  { name: "Contact", path: "/contact" },
                ].map((item) => (
                  <NavLink
                    key={item.name}
                    href={item.path}
                    isActive={activeSection === item.name.toLowerCase()}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>

              {/* Burger Mobile */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-md text-gray-800 hover:bg-gray-100 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </motion.button>
            </nav>
          </div>
        </div>
      </motion.header>

      {/* Menu Mobile Slide */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed inset-y-0 right-0 w-64 bg-[#D93030] text-white z-50 md:hidden shadow-2xl"
            >
              <div className="p-6">
                {/* Close button */}
                <div className="flex justify-end mb-8">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-lg hover:bg-white/10"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </motion.button>
                </div>

                {/* Menu links */}
                <div className="flex flex-col space-y-5">
                  {[
                    { name: "Accueil", path: "/" },
                    { name: "À propos", path: "/propos" },
                    { name: "Contact", path: "/contact" },
                  ].map((item) => (
                    <Link
                      key={item.name}
                      href={item.path}
                      className="font-oswald text-lg uppercase tracking-wide hover:text-white/80 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

const NavLink = ({
  href,
  children,
  isActive,
}: {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
}) => (
  <Link href={href}>
    <motion.span
      className={`font-oswald text-base uppercase tracking-wide transition-colors relative ${
        isActive ? "text-[#D93030]" : "text-gray-700 hover:text-[#D93030]"
      }`}
    >
      {children}
      {isActive && (
        <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#D93030]" />
      )}
    </motion.span>
  </Link>
);

export default Header;
