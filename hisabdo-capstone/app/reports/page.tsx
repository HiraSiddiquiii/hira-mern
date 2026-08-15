"use client";

import { FormEvent, useEffect, useState } from "react";
import ProtectedRoute from "@/components/ProtectedRoute";

type Report = {
  id: number;
  name: string;
  type: "Sales" | "Expenses" | "Profit & Loss";
  period: "Weekly" | "Monthly" | "Yearly";
  amount: number;
  status: "Generated" | "Pending";
};

const initialReports: Report[] = [
  {
    id: 1,
    name: "August Sales Report",
    type: "Sales",
    period: "Monthly",
    amount: 125000,
    status: "Generated",
  },
  {
    id: 2,
    name: "August Expense Report",
    type: "Expenses",
    period: "Monthly",
    amount: 47500,
    status: "Generated",
  },
  {
    id: 3,
    name: "Weekly Profit Report",
    type: "Profit & Loss",
    period: "Weekly",
    amount: 32500,
    status: "Pending",
  },
];

export default function ReportsPage() {
  const [reports, setReports] = useState<Report[]>(initialReports);

  const [name, setName] = useState("");
  const [type, setType] = useState<Report["type"]>("Sales");
  const [period, setPeriod] = useState<Report["period"]>("Monthly");
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState<Report["status"]>("Generated");

  const [editingId, setEditingId] = useState<number | null>(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [validationError, setValidationError] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  const resetForm = () => {
    setName("");
    setType("Sales");
    setPeriod("Monthly");
    setAmount("");
    setStatus("Generated");
    setEditingId(null);
    setValidationError("");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setValidationError("");
    setError("");

    const trimmedName = name.trim();

    if (!trimmedName) {
      setValidationError("Report name is required.");
      return;
    }

    if (trimmedName.length < 3) {
      setValidationError("Report name must be at least 3 characters.");
      return;
    }

    if (!amount) {
      setValidationError("Report amount is required.");
      return;
    }

    if (Number(amount) <= 0) {
      setValidationError("Report amount must be greater than 0.");
      return;
    }

    const duplicate = reports.some(
      (report) =>
        report.name.toLowerCase() === trimmedName.toLowerCase() &&
        report.id !== editingId
    );

    if (duplicate) {
      setValidationError("A report with this name already exists.");
      return;
    }

    if (editingId !== null) {
      setReports((current) =>
        current.map((report) =>
          report.id === editingId
            ? {
                ...report,
                name: trimmedName,
                type,
                period,
                amount: Number(amount),
                status,
              }
            : report
        )
      );
    } else {
      const newReport: Report = {
        id: Date.now(),
        name: trimmedName,
        type,
        period,
        amount: Number(amount),
        status,
      };

      setReports((current) => [newReport, ...current]);
    }

    resetForm();
  };

  const handleEdit = (report: Report) => {
    setName(report.name);
    setType(report.type);
    setPeriod(report.period);
    setAmount(String(report.amount));
    setStatus(report.status);
    setEditingId(report.id);
    setValidationError("");
    setError("");
  };

  const handleDelete = (id: number) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this report?"
    );

    if (!confirmed) return;

    setReports((current) =>
      current.filter((report) => report.id !== id)
    );
  };

  const formatAmount = (amount: number) =>
    `Rs. ${amount.toLocaleString("en-PK")}`;

  if (loading) {
    return (
      <ProtectedRoute>
        <section className="flex-1 p-4 sm:p-6 lg:p-8">
          <div className="mx-auto flex min-h-[400px] max-w-7xl items-center justify-center">
            <div className="rounded-2xl border border-gray-200 bg-white px-8 py-10 text-center shadow-sm">
              <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-blue-600" />

              <p className="text-sm font-medium text-gray-600">
                Loading reports...
              </p>
            </div>
          </div>
        </section>
      </ProtectedRoute>
    );
  }

  if (error) {
    return (
      <ProtectedRoute>
        <section className="flex-1 p-4 sm:p-6 lg:p-8">
          <div className="mx-auto max-w-7xl">
            <div className="rounded-2xl border border-red-200 bg-red-50 p-8 text-center">
              <h2 className="text-xl font-bold text-red-700">
                Something went wrong
              </h2>

              <p className="mt-2 text-sm text-red-600">
                {error}
              </p>

              <button
                onClick={() => setError("")}
                className="mt-5 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Try Again
              </button>
            </div>
          </div>
        </section>
      </ProtectedRoute>
    );
  }

  return (
    <ProtectedRoute>
      <section className="flex-1 p-4 sm:p-6 lg:p-8">
        <div className="mx-auto max-w-7xl">

          {/* Header */}
          <div className="mb-8">
            <p className="text-sm font-medium text-blue-600">
              Business Analytics
            </p>

            <h1 className="mt-1 text-3xl font-bold text-gray-900">
              Reports
            </h1>

            <p className="mt-2 text-gray-500">
              Create and manage financial reports for your business.
            </p>
          </div>

          {/* Summary Cards */}
          <div className="mb-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <p className="text-sm text-gray-500">
                Total Reports
              </p>

              <p className="mt-2 text-2xl font-bold text-gray-900">
                {reports.length}
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <p className="text-sm text-gray-500">
                Generated Reports
              </p>

              <p className="mt-2 text-2xl font-bold text-green-600">
                {
                  reports.filter(
                    (report) => report.status === "Generated"
                  ).length
                }
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <p className="text-sm text-gray-500">
                Total Amount
              </p>

              <p className="mt-2 text-2xl font-bold text-blue-600">
                {formatAmount(
                  reports.reduce(
                    (total, report) => total + report.amount,
                    0
                  )
                )}
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid gap-6 lg:grid-cols-[340px_1fr]">

            {/* Form */}
            <div className="h-fit rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-6">
                <h2 className="text-xl font-bold text-gray-900">
                  {editingId !== null
                    ? "Edit Report"
                    : "Add Report"}
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  {editingId !== null
                    ? "Update the selected report."
                    : "Create a new financial report."}
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >

                {/* Report Name */}
                <div>
                  <label
                    htmlFor="reportName"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Report Name
                  </label>

                  <input
                    id="reportName"
                    type="text"
                    value={name}
                    onChange={(event) =>
                      setName(event.target.value)
                    }
                    placeholder="e.g. September Sales Report"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                {/* Report Type */}
                <div>
                  <label
                    htmlFor="reportType"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Report Type
                  </label>

                  <select
                    id="reportType"
                    value={type}
                    onChange={(event) =>
                      setType(
                        event.target.value as Report["type"]
                      )
                    }
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  >
                    <option value="Sales">Sales</option>
                    <option value="Expenses">Expenses</option>
                    <option value="Profit & Loss">
                      Profit & Loss
                    </option>
                  </select>
                </div>

                {/* Period */}
                <div>
                  <label
                    htmlFor="reportPeriod"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Report Period
                  </label>

                  <select
                    id="reportPeriod"
                    value={period}
                    onChange={(event) =>
                      setPeriod(
                        event.target.value as Report["period"]
                      )
                    }
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  >
                    <option value="Weekly">Weekly</option>
                    <option value="Monthly">Monthly</option>
                    <option value="Yearly">Yearly</option>
                  </select>
                </div>

                {/* Amount */}
                <div>
                  <label
                    htmlFor="reportAmount"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Amount (Rs.)
                  </label>

                  <input
                    id="reportAmount"
                    type="number"
                    value={amount}
                    onChange={(event) =>
                      setAmount(event.target.value)
                    }
                    placeholder="Enter amount"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                {/* Status */}
                <div>
                  <label
                    htmlFor="reportStatus"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Status
                  </label>

                  <select
                    id="reportStatus"
                    value={status}
                    onChange={(event) =>
                      setStatus(
                        event.target.value as Report["status"]
                      )
                    }
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  >
                    <option value="Generated">
                      Generated
                    </option>

                    <option value="Pending">
                      Pending
                    </option>
                  </select>
                </div>

                {/* Validation */}
                {validationError && (
                  <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3">
                    <p className="text-sm font-medium text-red-600">
                      {validationError}
                    </p>
                  </div>
                )}

                {/* Buttons */}
                <div className="flex flex-col gap-3">
                  <button
                    type="submit"
                    className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                  >
                    {editingId !== null
                      ? "Update Report"
                      : "Add Report"}
                  </button>

                  {editingId !== null && (
                    <button
                      type="button"
                      onClick={resetForm}
                      className="rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </form>
            </div>

            {/* Reports Table */}
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">

              <div className="border-b border-gray-200 p-6">
                <h2 className="text-xl font-bold text-gray-900">
                  Reports List
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  {reports.length}{" "}
                  {reports.length === 1
                    ? "report"
                    : "reports"}{" "}
                  available
                </p>
              </div>

              {reports.length === 0 ? (
                <div className="px-6 py-16 text-center">
                  <h3 className="text-lg font-bold text-gray-900">
                    No reports found
                  </h3>

                  <p className="mt-2 text-sm text-gray-500">
                    Start by creating your first financial report.
                  </p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[850px] text-left">

                    <thead className="bg-gray-50 text-sm text-gray-500">
                      <tr>
                        <th className="px-6 py-4 font-medium">
                          Report
                        </th>

                        <th className="px-6 py-4 font-medium">
                          Type
                        </th>

                        <th className="px-6 py-4 font-medium">
                          Period
                        </th>

                        <th className="px-6 py-4 font-medium">
                          Amount
                        </th>

                        <th className="px-6 py-4 font-medium">
                          Status
                        </th>

                        <th className="px-6 py-4 font-medium">
                          Actions
                        </th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-100">
                      {reports.map((report) => (
                        <tr
                          key={report.id}
                          className="transition hover:bg-gray-50"
                        >
                          <td className="px-6 py-4 font-medium text-gray-900">
                            {report.name}
                          </td>

                          <td className="px-6 py-4 text-sm text-gray-600">
                            {report.type}
                          </td>

                          <td className="px-6 py-4 text-sm text-gray-600">
                            {report.period}
                          </td>

                          <td className="px-6 py-4 text-sm font-medium text-gray-900">
                            {formatAmount(report.amount)}
                          </td>

                          <td className="px-6 py-4">
                            <span
                              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                                report.status === "Generated"
                                  ? "bg-green-50 text-green-700"
                                  : "bg-yellow-50 text-yellow-700"
                              }`}
                            >
                              {report.status}
                            </span>
                          </td>

                          <td className="px-6 py-4">
                            <div className="flex flex-wrap gap-2">
                              <button
                                type="button"
                                onClick={() =>
                                  handleEdit(report)
                                }
                                className="rounded-lg border border-blue-200 bg-blue-50 px-3 py-2 text-xs font-semibold text-blue-600 transition hover:bg-blue-100"
                              >
                                Edit
                              </button>

                              <button
                                type="button"
                                onClick={() =>
                                  handleDelete(report.id)
                                }
                                className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs font-semibold text-red-600 transition hover:bg-red-100"
                              >
                                Delete
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>

                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </ProtectedRoute>
  );
}