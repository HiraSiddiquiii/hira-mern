const transactions = [
  {
    id: 1,
    customer: "Ahmed Traders",
    type: "Sale",
    date: "09 Aug 2026",
    amount: "Rs. 25,000",
    status: "Completed",
  },
  {
    id: 2,
    customer: "Ali & Sons",
    type: "Purchase",
    date: "08 Aug 2026",
    amount: "Rs. 12,500",
    status: "Completed",
  },
  {
    id: 3,
    customer: "Sana Enterprises",
    type: "Sale",
    date: "08 Aug 2026",
    amount: "Rs. 18,750",
    status: "Pending",
  },
  {
    id: 4,
    customer: "Karim Store",
    type: "Expense",
    date: "07 Aug 2026",
    amount: "Rs. 7,500",
    status: "Completed",
  },
  {
    id: 5,
    customer: "Hassan Electronics",
    type: "Sale",
    date: "06 Aug 2026",
    amount: "Rs. 31,200",
    status: "Completed",
  },
];

export default function Transactions() {
  return (
    <section className="min-h-[calc(100vh-128px)] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <p className="text-sm font-semibold text-blue-600">
            Financial Management
          </p>

          <h1 className="mt-1 text-3xl font-bold text-gray-900">
            Transactions
          </h1>

          <p className="mt-2 text-gray-500">
            Track and manage your business transactions.
          </p>
        </div>

        <div className="mb-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">Total Transactions</p>
            <p className="mt-2 text-2xl font-bold text-gray-900">248</p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">Total Sales</p>
            <p className="mt-2 text-2xl font-bold text-gray-900">
              Rs. 125,000
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">Total Expenses</p>
            <p className="mt-2 text-2xl font-bold text-gray-900">
              Rs. 42,000
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          <div className="flex flex-col gap-4 border-b border-gray-200 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                All Transactions
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                View your recent sales, purchases and expenses.
              </p>
            </div>

            <button className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700">
              + Add Transaction
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[750px] text-left">
              <thead className="bg-gray-50">
                <tr className="text-sm text-gray-500">
                  <th className="px-6 py-4 font-medium">Customer</th>
                  <th className="px-6 py-4 font-medium">Type</th>
                  <th className="px-6 py-4 font-medium">Date</th>
                  <th className="px-6 py-4 font-medium">Amount</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {transactions.map((transaction) => (
                  <tr
                    key={transaction.id}
                    className="transition hover:bg-gray-50"
                  >
                    <td className="px-6 py-4 font-medium text-gray-900">
                      {transaction.customer}
                    </td>

                    <td className="px-6 py-4 text-gray-600">
                      {transaction.type}
                    </td>

                    <td className="px-6 py-4 text-gray-600">
                      {transaction.date}
                    </td>

                    <td className="px-6 py-4 font-semibold text-gray-900">
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
      </div>
    </section>
  );
}