import Sidebar from "@/components/Sidebar";
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
  return (
    <div className="flex min-h-[calc(100vh-128px)]">
      <Sidebar />

      <section className="flex-1 p-4 sm:p-6 lg:p-8">
        <div className="mx-auto max-w-7xl">
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
          </div>

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

          <div className="mt-8 rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="flex flex-col gap-3 border-b border-gray-200 p-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  Recent Transactions
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Your latest business activities
                </p>
              </div>

              <button className="w-fit rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
                Add Transaction
              </button>
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
                    <tr key={`${transaction.customer}-${transaction.type}`}>
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
                        <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                          {transaction.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}