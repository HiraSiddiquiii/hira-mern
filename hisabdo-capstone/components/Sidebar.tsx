"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    {
      name: "Overview",
      href: "/dashboard",
    },
    {
      name: "Transactions",
      href: "/transactions",
    },
    {
      name: "Categories",
      href: "/categories",
    },
    {
      name: "Reports",
      href: "/reports",
    },
    {
      name: "Settings",
      href: "/settings",
    },
  ];

  return (
    <aside className="hidden w-64 shrink-0 border-r border-gray-200 bg-white lg:block">
      <div className="sticky top-16 p-6">
        <h2 className="mb-6 text-lg font-bold text-gray-900">
          Dashboard
        </h2>

        <nav className="space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`block rounded-lg px-4 py-3 text-sm font-medium transition ${
                  isActive
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}