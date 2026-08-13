"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AuthUser, getStoredUser } from "@/lib/auth";
import StatCard from "@/components/StatCard";

const transactions = [
  {
    customer: "Ahmed Traders",
    type: "Sale",
    amount: "Rs. 25,000",
    status: "Completed",
  },
  {
    customer: "Ali & Sons",
    type: "Purchase",
    amount: "Rs. 12,500",
    status: "Completed",
  },
  {
    customer: "Sana Enterprises",
    type: "Sale",
    amount: "Rs. 18,750",
    status: "Pending",
  },
  {
    customer: "Karim Store",
    type: "Expense",
    amount: "Rs. 7,500",
    status: "Completed",
  },
];

export default function Dashboard() {
  const router = useRouter();

  const [user, setUser] = useState<AuthUser | null>(null);
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    const storedUser = getStoredUser();

    if (!storedUser) {
      router.replace("/login");
      return;
    }

    setUser(storedUser);
    setCheckingAuth(false);
  }, [router]);

  if (checkingAuth) {
    return (
      <section className="flex min-h-[60vh] items-center justify-center">
        <p className="text-sm text-gray-500">
          Checking authentication...
        </p>
      </section>
    );
  }

  return (
    <section className="flex-1 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        {/* Page Header */}
        <div className="mb-8">
          <p className="text-sm font-medium text-blue-600">
            Business Overview
          </p>

          <h1 className="mt-1 text-3xl font-bold text-gray-900">
            Dashboard
          </h1>

          <p className="mt-2 text-gray-500">
            Monitor your business performance from one place.
          </p>

          {user && (
            <p className="mt-3 text-sm font-medium text-gray-600">
              Welcome, {user.name}
            </p>
          )}
        </div>

        {/* Statistics */}
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard
            title="Total Sales"
            value="Rs. 125,000"
            description="+12.5% from last month"
          />

          <StatCard
            title="Total Expenses"
            value="Rs. 42,000"
            description="-4.2% from last month"
          />

          <StatCard
            title="Customers"
            value="248"
            description="+18 new customers"
          />

          <StatCard
            title="Products"
            value="1,240"
            description="32 low-stock items"
          />
        </div>

        {/* Recent Transactions */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          <div className="flex flex-col gap-3 border-b border-gray-200 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Recent Transactions
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Your latest business activities
              </p>
            </div>

            <Link
              href="/transactions"
              className="w-fit rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Manage Transactions
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[650px] text-left">
              <thead className="bg-gray-50 text-sm text-gray-500">
                <tr>
                  <th className="px-6 py-4 font-medium">Customer</th>
                  <th className="px-6 py-4 font-medium">Type</th>
                  <th className="px-6 py-4 font-medium">Amount</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {transactions.map((transaction) => (
                  <tr
                    key={`${transaction.customer}-${transaction.type}`}
                    className="transition hover:bg-gray-50"
                  >
                    <td className="px-6 py-4 font-medium text-gray-900">
                      {transaction.customer}
                    </td>

                    <td className="px-6 py-4 text-gray-600">
                      {transaction.type}
                    </td>

                    <td className="px-6 py-4 font-medium text-gray-900">
                      {transaction.amount}
                    </td>

                    <td className="px-6 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          transaction.status === "Completed"
                            ? "bg-green-50 text-green-700"
                            : "bg-yellow-50 text-yellow-700"
                        }`}
                      >
                        {transaction.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <Link
            href="/transactions"
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <h3 className="font-bold text-gray-900">
              Add Transaction
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Record a new sale, purchase, or expense.
            </p>
          </Link>

          <Link
            href="/reports"
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <h3 className="font-bold text-gray-900">
              View Reports
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Review your business performance and reports.
            </p>
          </Link>

          <Link
            href="/settings"
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <h3 className="font-bold text-gray-900">
              Account Settings
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Manage your application settings.
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}