export default function SettingsPage() {
  return (
    <section className="min-h-[calc(100vh-128px)] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8">
          <p className="text-sm font-semibold text-blue-600">
            Account Management
          </p>

          <h1 className="mt-1 text-3xl font-bold text-gray-900">
            Settings
          </h1>

          <p className="mt-2 text-gray-500">
            Manage your business and account preferences.
          </p>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-900">
                Business Information
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Update your basic business details.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Business Name
                </label>

                <input
                  type="text"
                  defaultValue="My Business"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Business Email
                </label>

                <input
                  type="email"
                  defaultValue="business@example.com"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Phone Number
                </label>

                <input
                  type="tel"
                  defaultValue="+92 300 1234567"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Currency
                </label>

                <select
                  defaultValue="PKR"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                >
                  <option value="PKR">PKR - Pakistani Rupee</option>
                  <option value="USD">USD - US Dollar</option>
                  <option value="AED">AED - UAE Dirham</option>
                </select>
              </div>
            </div>

            <div className="mt-6">
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Business Address
              </label>

              <textarea
                rows={4}
                defaultValue="Karachi, Pakistan"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div className="mt-6 flex justify-end">
              <button className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
                Save Changes
              </button>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-900">
                Account Preferences
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Control how your account behaves.
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="font-medium text-gray-900">
                    Email Notifications
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    Receive important business updates by email.
                  </p>
                </div>

                <input
                  type="checkbox"
                  defaultChecked
                  className="h-5 w-5 accent-blue-600"
                />
              </div>

              <div className="border-t border-gray-100 pt-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="font-medium text-gray-900">
                      Monthly Reports
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      Receive monthly business performance reports.
                    </p>
                  </div>

                  <input
                    type="checkbox"
                    defaultChecked
                    className="h-5 w-5 accent-blue-600"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-red-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-xl font-bold text-red-600">
              Danger Zone
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Permanently delete your account and all associated data.
            </p>

            <button className="mt-5 rounded-lg border border-red-300 px-5 py-2.5 text-sm font-semibold text-red-600 transition hover:bg-red-50">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}