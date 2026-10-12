"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navItems } from "../constants/navigation";

export default function Navbar() {
  const pathname = usePathname();

  console.log(pathname);

  return (
    <nav className="flex gap-8 my-4 p-4 bg-gray-300 rounded-full">
      {navItems.map(item => (
        <Link key={item.href} href={item.href} className={pathname === item.href ? "text-black" : "text-blue-600"}>
          {item.label}
        </Link>
      ))}
    </nav>
  );
};
