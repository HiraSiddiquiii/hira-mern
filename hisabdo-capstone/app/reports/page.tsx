const monthlyData = [
  { month: "January", sales: "Rs. 82,000", expenses: "Rs. 31,000" },
  { month: "February", sales: "Rs. 95,000", expenses: "Rs. 35,000" },
  { month: "March", sales: "Rs. 108,000", expenses: "Rs. 39,000" },
  { month: "April", sales: "Rs. 115,000", expenses: "Rs. 41,000" },
  { month: "May", sales: "Rs. 120,000", expenses: "Rs. 43,000" },
  { month: "June", sales: "Rs. 125,000", expenses: "Rs. 42,000" },
];

export default function ReportsPage() {
  return (
    <section className="min-h-[calc(100vh-128px)] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <p className="text-sm font-semibold text-blue-600">
            Business Analytics
          </p>

          <h1 className="mt-1 text-3xl font-bold text-gray-900">
            Reports
          </h1>

          <p className="mt-2 text-gray-500">
            Review your business performance and financial activity.
          </p>
        </div>

        <div className="mb-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">Total Revenue</p>

            <h2 className="mt-2 text-2xl font-bold text-gray-900">
              Rs. 645,000
            </h2>

            <p className="mt-2 text-sm font-medium text-green-600">
              +12.5% this month
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">Total Expenses</p>

            <h2 className="mt-2 text-2xl font-bold text-gray-900">
              Rs. 231,000
            </h2>

            <p className="mt-2 text-sm font-medium text-red-500">
              +4.2% this month
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">Net Profit</p>

            <h2 className="mt-2 text-2xl font-bold text-gray-900">
              Rs. 414,000
            </h2>

            <p className="mt-2 text-sm font-medium text-green-600">
              +18.7% this month
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">Profit Margin</p>

            <h2 className="mt-2 text-2xl font-bold text-gray-900">
              64.2%
            </h2>

            <p className="mt-2 text-sm font-medium text-green-600">
              Healthy performance
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white shadow-sm">
          <div className="flex flex-col gap-4 border-b border-gray-200 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Monthly Performance
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Sales and expenses overview.
              </p>
            </div>

            <select className="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 outline-none focus:border-blue-500">
              <option>Last 6 months</option>
              <option>This year</option>
              <option>Last year</option>
            </select>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[650px] text-left">
              <thead className="bg-gray-50">
                <tr className="text-sm text-gray-500">
                  <th className="px-6 py-4 font-medium">Month</th>
                  <th className="px-6 py-4 font-medium">Sales</th>
                  <th className="px-6 py-4 font-medium">Expenses</th>
                  <th className="px-6 py-4 font-medium">Net Result</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {monthlyData.map((item) => (
                  <tr key={item.month} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">
                      {item.month}
                    </td>

                    <td className="px-6 py-4 text-gray-700">
                      {item.sales}
                    </td>

                    <td className="px-6 py-4 text-gray-700">
                      {item.expenses}
                    </td>

                    <td className="px-6 py-4 font-semibold text-green-600">
                      {item.sales}
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