type Transaction = {
  id: number;
  customer: string;
  type: "Sale" | "Purchase" | "Expense";
  date: string;
  amount: number;
  status: "Completed" | "Pending";
};

type TransactionTableProps = {
  transactions: Transaction[];
  formatAmount: (amount: number) => string;
  onDelete: (id: number) => void;
};

export default function TransactionTable({
  transactions,
  formatAmount,
  onDelete,
}: TransactionTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[850px] text-left">
        <thead className="bg-gray-50">
          <tr className="text-sm text-gray-500">
            <th className="px-6 py-4 font-medium">
              Customer
            </th>

            <th className="px-6 py-4 font-medium">
              Type
            </th>

            <th className="px-6 py-4 font-medium">
              Date
            </th>

            <th className="px-6 py-4 font-medium">
              Amount
            </th>

            <th className="px-6 py-4 font-medium">
              Status
            </th>

            <th className="px-6 py-4 font-medium">
              Action
            </th>
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
                {formatAmount(transaction.amount)}
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

              <td className="px-6 py-4">
                <button
                  type="button"
                  onClick={() => onDelete(transaction.id)}
                  className="rounded-lg bg-red-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-red-700"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}