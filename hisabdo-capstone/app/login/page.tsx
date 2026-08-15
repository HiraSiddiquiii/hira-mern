"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { loginUser } from "@/lib/auth";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
    general?: string;
  }>({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: {
      email?: string;
      password?: string;
    } = {};

    if (!email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!password) {
      newErrors.password = "Password is required.";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    return newErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    const result = loginUser(email.trim(), password);

    if (!result.success) {
      setIsSubmitting(false);

      setErrors({
        general: result.message,
      });

      return;
    }

    window.location.href = "/dashboard";
  };

  return (
    <section className="flex min-h-[calc(100vh-128px)] items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          {/* Header */}
          <div className="mb-8 text-center">
            <Link
              href="/"
              className="text-3xl font-bold text-blue-600 transition hover:text-blue-700"
            >
              HisabDo
            </Link>

            <h1 className="mt-6 text-2xl font-bold text-gray-900">
              Welcome Back
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Sign in to manage your business.
            </p>
          </div>

          {/* General Error */}
          {errors.general && (
            <div
              role="alert"
              className="mb-5 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-700"
            >
              {errors.general}
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);

                  setErrors((previous) => ({
                    ...previous,
                    email: undefined,
                    general: undefined,
                  }));
                }}
                placeholder="you@example.com"
                autoComplete="email"
                className={`w-full rounded-lg border px-4 py-3 text-sm outline-none transition focus:ring-2 ${
                  errors.email
                    ? "border-red-400 focus:border-red-500 focus:ring-red-100"
                    : "border-gray-300 focus:border-blue-500 focus:ring-blue-100"
                }`}
              />

              {errors.email && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>

                <Link
                  href="/forgot-password"
                  className="text-sm font-medium text-blue-600 transition hover:text-blue-700"
                >
                  Forgot password?
                </Link>
              </div>

              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);

                  setErrors((previous) => ({
                    ...previous,
                    password: undefined,
                    general: undefined,
                  }));
                }}
                placeholder="Enter your password"
                autoComplete="current-password"
                className={`w-full rounded-lg border px-4 py-3 text-sm outline-none transition focus:ring-2 ${
                  errors.password
                    ? "border-red-400 focus:border-red-500 focus:ring-red-100"
                    : "border-gray-300 focus:border-blue-500 focus:ring-blue-100"
                }`}
              />

              {errors.password && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.password}
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? "Signing In..." : "Sign In"}
            </button>
          </form>

          {/* Register */}
          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-gray-200" />
            <span className="text-xs text-gray-400">OR</span>
            <div className="h-px flex-1 bg-gray-200" />
          </div>

          <p className="text-center text-sm text-gray-500">
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              className="font-semibold text-blue-600 transition hover:text-blue-700"
            >
              Create Account
            </Link>
          </p>
        </div>

        <p className="mt-6 text-center text-xs text-gray-400">
          By continuing, you agree to our Terms and Privacy Policy.
        </p>
      </div>
    </section>
  );
}