"use client";

import { FormEvent, useState } from "react";
import Button from "@/components/Button";
import Card from "@/components/Card";
import FormInput from "@/components/FormInput";
import TransactionTable from "@/components/TransactionTable";
import ProtectedRoute from "@/components/ProtectedRoute";

type Transaction = {
  id: number;
  customer: string;
  type: "Sale" | "Purchase" | "Expense";
  date: string;
  amount: number;
  status: "Completed" | "Pending";
};

const initialTransactions: Transaction[] = [
  {
    id: 1,
    customer: "Ahmed Traders",
    type: "Sale",
    date: "09 Aug 2026",
    amount: 25000,
    status: "Completed",
  },
  {
    id: 2,
    customer: "Ali & Sons",
    type: "Purchase",
    date: "08 Aug 2026",
    amount: 12500,
    status: "Completed",
  },
  {
    id: 3,
    customer: "Sana Enterprises",
    type: "Sale",
    date: "08 Aug 2026",
    amount: 18750,
    status: "Pending",
  },
  {
    id: 4,
    customer: "Karim Store",
    type: "Expense",
    date: "07 Aug 2026",
    amount: 7500,
    status: "Completed",
  },
  {
    id: 5,
    customer: "Hassan Electronics",
    type: "Sale",
    date: "06 Aug 2026",
    amount: 31200,
    status: "Completed",
  },
];

export default function Transactions() {
  const [transactions, setTransactions] =
    useState<Transaction[]>(initialTransactions);

  const [showForm, setShowForm] = useState(false);

  const [customer, setCustomer] = useState("");
  const [type, setType] =
    useState<Transaction["type"]>("Sale");
  const [amount, setAmount] = useState("");
  const [status, setStatus] =
    useState<Transaction["status"]>("Completed");

  const [errors, setErrors] = useState<{
    customer?: string;
    amount?: string;
  }>({});

  const validateForm = () => {
    const newErrors: {
      customer?: string;
      amount?: string;
    } = {};

    if (!customer.trim()) {
      newErrors.customer = "Customer name is required.";
    }

    if (!amount) {
      newErrors.amount = "Amount is required.";
    } else if (Number(amount) <= 0) {
      newErrors.amount = "Amount must be greater than 0.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    const newTransaction: Transaction = {
      id: Date.now(),
      customer: customer.trim(),
      type,
      date: new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
      amount: Number(amount),
      status,
    };

    setTransactions((current) => [
      newTransaction,
      ...current,
    ]);

    setCustomer("");
    setType("Sale");
    setAmount("");
    setStatus("Completed");
    setErrors({});
    setShowForm(false);
  };

  const handleDelete = (id: number) => {
    setTransactions((current) =>
      current.filter(
        (transaction) => transaction.id !== id
      )
    );
  };

  const totalSales = transactions
    .filter((transaction) => transaction.type === "Sale")
    .reduce(
      (total, transaction) => total + transaction.amount,
      0
    );

  const totalExpenses = transactions
    .filter(
      (transaction) =>
        transaction.type === "Expense" ||
        transaction.type === "Purchase"
    )
    .reduce(
      (total, transaction) => total + transaction.amount,
      0
    );

  const formatAmount = (amount: number) =>
    `Rs. ${amount.toLocaleString("en-PK")}`;

  return (
    <ProtectedRoute>
      <section className="flex-1 p-4 sm:p-6 lg:p-8">
        <div className="mx-auto max-w-7xl">

          {/* Header */}
          <div className="mb-8">
            <p className="text-sm font-medium text-blue-600">
              Financial Management
            </p>

            <h1 className="mt-1 text-3xl font-bold text-gray-900">
              Transactions
            </h1>

            <p className="mt-2 text-gray-500">
              Track and manage your business transactions.
            </p>
          </div>

          {/* Summary Cards */}
          <div className="mb-6 grid gap-4 sm:grid-cols-3">
            <Card
              title="Total Transactions"
              value={transactions.length}
            />

            <Card
              title="Total Sales"
              value={formatAmount(totalSales)}
            />

            <Card
              title="Total Expenses"
              value={formatAmount(totalExpenses)}
            />
          </div>

          {/* Main Card */}
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">

            {/* Card Header */}
            <div className="flex flex-col gap-4 border-b border-gray-200 p-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  All Transactions
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  View your recent sales, purchases and expenses.
                </p>
              </div>

              <Button
                type="button"
                onClick={() =>
                  setShowForm((current) => !current)
                }
              >
                {showForm
                  ? "Close Form"
                  : "+ Add Transaction"}
              </Button>
            </div>

            {/* Add Transaction Form */}
            {showForm && (
              <div className="border-b border-gray-200 bg-gray-50 p-6">
                <h3 className="mb-5 text-lg font-bold text-gray-900">
                  Add New Transaction
                </h3>

                <form
                  onSubmit={handleSubmit}
                  className="grid gap-5 sm:grid-cols-2"
                >
                  <FormInput
                    label="Customer Name"
                    id="customer"
                    value={customer}
                    placeholder="Enter customer name"
                    error={errors.customer}
                    onChange={(event) =>
                      setCustomer(event.target.value)
                    }
                  />

                  <div>
                    <label
                      htmlFor="type"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      Transaction Type
                    </label>

                    <select
                      id="type"
                      value={type}
                      onChange={(event) =>
                        setType(
                          event.target.value as Transaction["type"]
                        )
                      }
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    >
                      <option value="Sale">Sale</option>
                      <option value="Purchase">Purchase</option>
                      <option value="Expense">Expense</option>
                    </select>
                  </div>

                  <FormInput
                    label="Amount (Rs.)"
                    id="amount"
                    type="number"
                    value={amount}
                    placeholder="Enter amount"
                    error={errors.amount}
                    onChange={(event) =>
                      setAmount(event.target.value)
                    }
                  />

                  <div>
                    <label
                      htmlFor="status"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      Status
                    </label>

                    <select
                      id="status"
                      value={status}
                      onChange={(event) =>
                        setStatus(
                          event.target.value as Transaction["status"]
                        )
                      }
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    >
                      <option value="Completed">
                        Completed
                      </option>
                      <option value="Pending">
                        Pending
                      </option>
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <Button type="submit">
                      Save Transaction
                    </Button>
                  </div>
                </form>
              </div>
            )}

            {/* Transaction Table */}
            <TransactionTable
              transactions={transactions}
              formatAmount={formatAmount}
              onDelete={handleDelete}
            />
          </div>
        </div>
      </section>
    </ProtectedRoute>
  );
}