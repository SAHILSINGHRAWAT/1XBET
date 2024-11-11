'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; 
type Props = {};
const navLinks = [
  { href: "/pkl11", label: "PKL 11" },
  { href: "/sports", label: "Sports" },
  { href: "/live", label: "Live" },
  { href: "/cricket", label: "Cricket" },
  { href: "/promo", label: "Promo" },
  { href: "/casino", label: "Casino" },
  { href: "/live-casino", label: "Live Casino" },
  { href: "/1xgames", label: "1XGames" },
  { href: "/esports", label: "Esports" },
  { href: "/tv-games", label: "TV Games" },
  { href: "/more", label: "More" },
  { href: "/crash", label: "CRASH", special: true },
];

function Header({}: Props) {
  const pathname = usePathname(); // Using usePathname instead of useRouter
  const [activeLink, setActiveLink] = useState(pathname);

  const handleClick = (href: string) => {
    setActiveLink(href);
  };

  return (
    <header className="bg-sky-800 text-white flex justify-between h-[60px] border-b-[1px] border-b-white items-center py-4 px-6">
      <div className="flex items-center space-x-28">
        <Link href="/" className="text-4xl font-extrabold italic">
          <span className="text-white">1X</span>
          <span className="text-blue-500 ">BET</span>
        </Link>
        <nav className="flex space-x-8">
          {navLinks.map(({ href, label, special }) => (
            <Link key={href} href={href} legacyBehavior>
              <a
                onClick={() => handleClick(href)}
                className={`${
                  activeLink === href ? "text-blue-400" : "text-white"
                } ${special ? "font" : "font-semibold"} 
                   hover:text-blue-300   transition-colors duration-100`}
              >
                {label}
              </a>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
