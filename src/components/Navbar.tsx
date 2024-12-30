"use client";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NAV_LINKS } from "@/constants";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="fixed top-0 z-50 w-screen px-6 lg:px-8">
      <div className="container flex items-center justify-between rounded-lg bg-black py-4 lg:py-5">
        <div className="flex flex-shrink-0 items-center justify-between">
          <span className="text-sm tracking-tight text-white">Anand Traders</span>
        </div>
        {/* Desktop Menu */}
        <div className="hidden lg:flex">
          <ul className="flex items-center gap-6 lg:gap-8">
            {NAV_LINKS.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.url}
                  className="text-sm text-white hover:text-neutral-500"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Mobile Menu Toggle */}
        <div className="flex-col justify-end text-white md:flex lg:hidden">
          <button onClick={toggleNavbar}>
            {mobileDrawerOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {/* Mobile Drawer */}
      {mobileDrawerOpen && (
        <div className="mt-2 rounded-md bg-black px-6 lg:hidden">
          <ul className="flex flex-col items-center">
            {NAV_LINKS.map((item, index) => (
              <li key={index} className="py-4">
                <Link
                  href={item.url}
                  className="text-sm text-white hover:text-neutral-500"
                  onClick={() => setMobileDrawerOpen(false)} // Close drawer on link click
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
