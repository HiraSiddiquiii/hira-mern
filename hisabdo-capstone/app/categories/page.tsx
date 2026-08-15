"use client";

import { FormEvent, useEffect, useState } from "react";
import ProtectedRoute from "@/components/ProtectedRoute";

type Category = {
  id: number;
  name: string;
  type: "Income" | "Expense";
};

const initialCategories: Category[] = [
  { id: 1, name: "Food", type: "Expense" },
  { id: 2, name: "Transport", type: "Expense" },
  { id: 3, name: "Salary", type: "Income" },
];

export default function CategoriesPage() {
  const [categories, setCategories] =
    useState<Category[]>(initialCategories);

  const [name, setName] = useState("");
  const [type, setType] =
    useState<"Income" | "Expense">("Expense");
  const [editingId, setEditingId] =
    useState<number | null>(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [validationError, setValidationError] =
    useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  const resetForm = () => {
    setName("");
    setType("Expense");
    setEditingId(null);
    setValidationError("");
  };

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setValidationError("");
    setError("");

    const trimmedName = name.trim();

    if (!trimmedName) {
      setValidationError(
        "Category name is required."
      );
      return;
    }

    if (trimmedName.length < 2) {
      setValidationError(
        "Category name must be at least 2 characters."
      );
      return;
    }

    const duplicate = categories.some(
      (category) =>
        category.name.toLowerCase() ===
          trimmedName.toLowerCase() &&
        category.id !== editingId
    );

    if (duplicate) {
      setValidationError(
        "This category already exists."
      );
      return;
    }

    if (editingId !== null) {
      setCategories((current) =>
        current.map((category) =>
          category.id === editingId
            ? {
                ...category,
                name: trimmedName,
                type,
              }
            : category
        )
      );
    } else {
      const newCategory: Category = {
        id: Date.now(),
        name: trimmedName,
        type,
      };

      setCategories((current) => [
        ...current,
        newCategory,
      ]);
    }

    resetForm();
  };

  const handleEdit = (category: Category) => {
    setName(category.name);
    setType(category.type);
    setEditingId(category.id);
    setValidationError("");
    setError("");
  };

  const handleDelete = (id: number) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this category?"
    );

    if (!confirmed) {
      return;
    }

    setCategories((current) =>
      current.filter(
        (category) => category.id !== id
      )
    );
  };

  if (loading) {
    return (
      <ProtectedRoute>
        <section className="flex-1 p-4 sm:p-6 lg:p-8">
          <div className="mx-auto flex min-h-[400px] max-w-7xl items-center justify-center">
            <div className="rounded-2xl border border-gray-200 bg-white px-8 py-10 text-center shadow-sm">
              <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-blue-600"></div>

              <p className="text-sm font-medium text-gray-600">
                Loading categories...
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

          {/* Page Header */}
          <div className="mb-8">
            <p className="text-sm font-medium text-blue-600">
              Business Management
            </p>

            <h1 className="mt-1 text-3xl font-bold text-gray-900">
              Categories
            </h1>

            <p className="mt-2 text-gray-500">
              Organize your income and expense categories.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid gap-6 lg:grid-cols-[340px_1fr]">

            {/* Form */}
            <div className="h-fit rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-6">
                <h2 className="text-xl font-bold text-gray-900">
                  {editingId !== null
                    ? "Edit Category"
                    : "Add Category"}
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  {editingId !== null
                    ? "Update the selected category."
                    : "Create a new income or expense category."}
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                {/* Category Name */}
                <div>
                  <label
                    htmlFor="categoryName"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Category Name
                  </label>

                  <input
                    id="categoryName"
                    type="text"
                    value={name}
                    onChange={(event) =>
                      setName(event.target.value)
                    }
                    placeholder="e.g. Groceries"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                {/* Category Type */}
                <div>
                  <label
                    htmlFor="categoryType"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Category Type
                  </label>

                  <select
                    id="categoryType"
                    value={type}
                    onChange={(event) =>
                      setType(
                        event.target.value as
                          | "Income"
                          | "Expense"
                      )
                    }
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  >
                    <option value="Expense">
                      Expense
                    </option>

                    <option value="Income">
                      Income
                    </option>
                  </select>
                </div>

                {/* Validation Error */}
                {validationError && (
                  <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3">
                    <p className="text-sm font-medium text-red-600">
                      {validationError}
                    </p>
                  </div>
                )}

                {/* Buttons */}
                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                  <button
                    type="submit"
                    className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                  >
                    {editingId !== null
                      ? "Update Category"
                      : "Add Category"}
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

            {/* Category Table */}
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">

              {/* Table Header */}
              <div className="flex flex-col gap-2 border-b border-gray-200 p-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    Category List
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    {categories.length}{" "}
                    {categories.length === 1
                      ? "category"
                      : "categories"}{" "}
                    available
                  </p>
                </div>
              </div>

              {/* Empty State */}
              {categories.length === 0 ? (
                <div className="px-6 py-16 text-center">
                  <div className="mx-auto max-w-sm">
                    <h3 className="text-lg font-bold text-gray-900">
                      No categories found
                    </h3>

                    <p className="mt-2 text-sm text-gray-500">
                      Start by adding your first income or
                      expense category.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[600px] text-left">

                    {/* Table Head */}
                    <thead className="bg-gray-50 text-sm text-gray-500">
                      <tr>
                        <th className="px-6 py-4 font-medium">
                          Category Name
                        </th>

                        <th className="px-6 py-4 font-medium">
                          Type
                        </th>

                        <th className="px-6 py-4 font-medium">
                          Actions
                        </th>
                      </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody className="divide-y divide-gray-100">
                      {categories.map((category) => (
                        <tr
                          key={category.id}
                          className="transition hover:bg-gray-50"
                        >
                          <td className="px-6 py-4 font-medium text-gray-900">
                            {category.name}
                          </td>

                          <td className="px-6 py-4">
                            <span
                              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                                category.type === "Income"
                                  ? "bg-green-50 text-green-700"
                                  : "bg-red-50 text-red-700"
                              }`}
                            >
                              {category.type}
                            </span>
                          </td>

                          <td className="px-6 py-4">
                            <div className="flex flex-wrap gap-2">

                              {/* Edit */}
                              <button
                                type="button"
                                onClick={() =>
                                  handleEdit(category)
                                }
                                className="rounded-lg border border-blue-200 bg-blue-50 px-3 py-2 text-xs font-semibold text-blue-600 transition hover:bg-blue-100"
                              >
                                Edit
                              </button>

                              {/* Delete */}
                              <button
                                type="button"
                                onClick={() =>
                                  handleDelete(category.id)
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