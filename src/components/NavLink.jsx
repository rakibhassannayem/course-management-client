"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={
        isActive
          ? "bg-primary text-white font-bold px-3 py-2 rounded"
          : "font-medium hover:bg-primary hover:text-white hover:font-bold mx-1 py-2 rounded"
      }
    >
      {children}
    </Link>
  );
}
