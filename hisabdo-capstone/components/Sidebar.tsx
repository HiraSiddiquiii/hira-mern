import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="hidden w-64 shrink-0 border-r border-gray-200 bg-white lg:block">
      <div className="sticky top-16 p-6">
        <h2 className="mb-6 text-lg font-bold text-gray-900">
          Dashboard
        </h2>

        <nav className="space-y-2">
          <Link
            href="/dashboard"
            className="block rounded-lg bg-blue-50 px-4 py-3 text-sm font-medium text-blue-600"
          >
            Overview
          </Link>

          <Link
            href="/transactions"
            className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50"
          >
            Transactions
          </Link>

          <Link
            href="/categories"
            className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50"
          >
            Categories
          </Link>

          <Link
            href="/reports"
            className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50"
          >
            Reports
          </Link>

          <Link
            href="/settings"
            className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50"
          >
            Settings
          </Link>
        </nav>
      </div>
    </aside>
  );
}