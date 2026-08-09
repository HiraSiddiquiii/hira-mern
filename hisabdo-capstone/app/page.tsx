import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="bg-white">
        <div className="mx-auto grid min-h-[calc(100vh-128px)] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
          
          <div>
            <span className="inline-block rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
              Smart Business Management
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Manage your business
              <span className="block text-blue-600">
                smarter with HisabDo
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Manage sales, purchases, expenses, customers, products and
              business records from one simple and organized platform.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/dashboard"
                className="rounded-xl bg-blue-600 px-6 py-3 text-center font-semibold text-white shadow-sm transition hover:bg-blue-700"
              >
                Open Dashboard
              </Link>

              <Link
                href="/transactions"
                className="rounded-xl border border-gray-300 px-6 py-3 text-center font-semibold text-gray-700 transition hover:bg-gray-50"
              >
                View Transactions
              </Link>
            </div>
          </div>

          <div className="rounded-3xl bg-blue-600 p-6 shadow-xl sm:p-8">
            <div className="rounded-2xl bg-white p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Business Overview</p>
                  <h2 className="mt-1 text-2xl font-bold text-gray-900">
                    Today
                  </h2>
                </div>

                <div className="rounded-xl bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-600">
                  +12.5%
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-gray-50 p-4">
                  <p className="text-sm text-gray-500">Sales</p>
                  <p className="mt-2 text-xl font-bold text-gray-900">
                    Rs. 125K
                  </p>
                </div>

                <div className="rounded-xl bg-gray-50 p-4">
                  <p className="text-sm text-gray-500">Expenses</p>
                  <p className="mt-2 text-xl font-bold text-gray-900">
                    Rs. 42K
                  </p>
                </div>

                <div className="rounded-xl bg-gray-50 p-4">
                  <p className="text-sm text-gray-500">Customers</p>
                  <p className="mt-2 text-xl font-bold text-gray-900">
                    248
                  </p>
                </div>

                <div className="rounded-xl bg-gray-50 p-4">
                  <p className="text-sm text-gray-500">Products</p>
                  <p className="mt-2 text-xl font-bold text-gray-900">
                    1,240
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}