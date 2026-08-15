"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getStoredUser, clearUser } from "@/lib/auth";
import ProtectedRoute from "@/components/ProtectedRoute";

type SettingsData = {
  businessName: string;
  businessEmail: string;
  phone: string;
  currency: string;
  address: string;
};

type PreferencesData = {
  emailNotifications: boolean;
  monthlyReports: boolean;
};

const defaultSettings: SettingsData = {
  businessName: "My Business",
  businessEmail: "business@example.com",
  phone: "+92 300 1234567",
  currency: "PKR",
  address: "Karachi, Pakistan",
};

const defaultPreferences: PreferencesData = {
  emailNotifications: true,
  monthlyReports: true,
};

export default function SettingsPage() {
  return (
    <ProtectedRoute>
      <SettingsContent />
    </ProtectedRoute>
  );
}

function SettingsContent() {
  const router = useRouter();

  const [settings, setSettings] =
    useState<SettingsData>(defaultSettings);

  const [preferences, setPreferences] =
    useState<PreferencesData>(defaultPreferences);

  const [businessMessage, setBusinessMessage] =
    useState("");

  const [businessError, setBusinessError] =
    useState("");

  const [preferenceMessage, setPreferenceMessage] =
    useState("");

  const [deleteMessage, setDeleteMessage] =
    useState("");

  useEffect(() => {
    // Load saved business settings
    const storedSettings =
      localStorage.getItem("hisabdo_settings");

    if (storedSettings) {
      try {
        const parsedSettings =
          JSON.parse(storedSettings) as SettingsData;

        setSettings({
          ...defaultSettings,
          ...parsedSettings,
        });
      } catch {
        localStorage.removeItem("hisabdo_settings");
      }
    } else {
      // Use logged-in user's information
      const storedUser = getStoredUser();

      if (storedUser) {
        setSettings((current) => ({
          ...current,
          businessName: storedUser.name
            ? `${storedUser.name}'s Business`
            : current.businessName,
          businessEmail: storedUser.email,
        }));
      }
    }

    // Load saved preferences
    const storedPreferences =
      localStorage.getItem("hisabdo_preferences");

    if (storedPreferences) {
      try {
        const parsedPreferences =
          JSON.parse(storedPreferences) as PreferencesData;

        setPreferences({
          ...defaultPreferences,
          ...parsedPreferences,
        });
      } catch {
        localStorage.removeItem(
          "hisabdo_preferences"
        );
      }
    }
  }, []);

  const handleSettingChange = (
    field: keyof SettingsData,
    value: string
  ) => {
    setSettings((current) => ({
      ...current,
      [field]: value,
    }));

    setBusinessMessage("");
    setBusinessError("");
  };

  const handlePreferenceChange = (
    field: keyof PreferencesData,
    value: boolean
  ) => {
    setPreferences((current) => ({
      ...current,
      [field]: value,
    }));

    setPreferenceMessage("");
  };

  const handleSaveChanges = () => {
    setBusinessError("");
    setBusinessMessage("");

    const businessName =
      settings.businessName.trim();

    const businessEmail =
      settings.businessEmail.trim();

    const phone = settings.phone.trim();

    if (!businessName) {
      setBusinessError(
        "Business name is required."
      );
      return;
    }

    if (!businessEmail) {
      setBusinessError(
        "Business email is required."
      );
      return;
    }

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(businessEmail)) {
      setBusinessError(
        "Please enter a valid business email."
      );
      return;
    }

    if (!phone) {
      setBusinessError(
        "Phone number is required."
      );
      return;
    }

    const updatedSettings: SettingsData = {
      ...settings,
      businessName,
      businessEmail,
      phone,
      address: settings.address.trim(),
    };

    localStorage.setItem(
      "hisabdo_settings",
      JSON.stringify(updatedSettings)
    );

    setSettings(updatedSettings);

    setBusinessMessage(
      "Business information saved successfully."
    );

    setTimeout(() => {
      setBusinessMessage("");
    }, 3000);
  };

  const handleSavePreferences = () => {
    localStorage.setItem(
      "hisabdo_preferences",
      JSON.stringify(preferences)
    );

    setPreferenceMessage(
      "Preferences saved successfully."
    );

    setTimeout(() => {
      setPreferenceMessage("");
    }, 3000);
  };

  const handleDeleteAccount = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete your account? This action cannot be undone."
    );

    if (!confirmed) {
      return;
    }

    // Remove authentication
    clearUser();

    // Remove account data
    localStorage.removeItem(
      "hisabdo_settings"
    );

    localStorage.removeItem(
      "hisabdo_preferences"
    );

    localStorage.removeItem(
      "hisabdo_users"
    );

    setDeleteMessage(
      "Account deleted successfully."
    );

    // Redirect to login
    setTimeout(() => {
      router.replace("/login");
    }, 500);
  };

  return (
    <section className="min-h-[calc(100vh-128px)] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">

        {/* Header */}
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

        {/* Business Information */}
        <div className="mb-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">

          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900">
              Business Information
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Update your basic business details.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">

            {/* Business Name */}
            <div>
              <label
                htmlFor="businessName"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Business Name
              </label>

              <input
                id="businessName"
                type="text"
                value={settings.businessName}
                onChange={(event) =>
                  handleSettingChange(
                    "businessName",
                    event.target.value
                  )
                }
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* Business Email */}
            <div>
              <label
                htmlFor="businessEmail"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Business Email
              </label>

              <input
                id="businessEmail"
                type="email"
                value={settings.businessEmail}
                onChange={(event) =>
                  handleSettingChange(
                    "businessEmail",
                    event.target.value
                  )
                }
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>

              <input
                id="phone"
                type="tel"
                value={settings.phone}
                onChange={(event) =>
                  handleSettingChange(
                    "phone",
                    event.target.value
                  )
                }
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* Currency */}
            <div>
              <label
                htmlFor="currency"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Currency
              </label>

              <select
                id="currency"
                value={settings.currency}
                onChange={(event) =>
                  handleSettingChange(
                    "currency",
                    event.target.value
                  )
                }
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              >
                <option value="PKR">
                  PKR - Pakistani Rupee
                </option>

                <option value="USD">
                  USD - US Dollar
                </option>

                <option value="AED">
                  AED - UAE Dirham
                </option>
              </select>
            </div>
          </div>

          {/* Address */}
          <div className="mt-5">
            <label
              htmlFor="address"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Business Address
            </label>

            <textarea
              id="address"
              rows={4}
              value={settings.address}
              onChange={(event) =>
                handleSettingChange(
                  "address",
                  event.target.value
                )
              }
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* Error */}
          {businessError && (
            <div className="mt-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3">
              <p className="text-sm font-medium text-red-600">
                {businessError}
              </p>
            </div>
          )}

          {/* Success */}
          {businessMessage && (
            <div className="mt-5 rounded-lg border border-green-200 bg-green-50 px-4 py-3">
              <p className="text-sm font-medium text-green-700">
                {businessMessage}
              </p>
            </div>
          )}

          {/* Save */}
          <div className="mt-6 flex justify-end">
            <button
              type="button"
              onClick={handleSaveChanges}
              className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Save Changes
            </button>
          </div>
        </div>

        {/* Account Preferences */}
        <div className="mb-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">

          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900">
              Account Preferences
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Control how your account behaves.
            </p>
          </div>

          <div className="space-y-5">

            {/* Email Notifications */}
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
                checked={
                  preferences.emailNotifications
                }
                onChange={(event) =>
                  handlePreferenceChange(
                    "emailNotifications",
                    event.target.checked
                  )
                }
                className="h-5 w-5 cursor-pointer accent-blue-600"
              />
            </div>

            {/* Monthly Reports */}
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
                  checked={
                    preferences.monthlyReports
                  }
                  onChange={(event) =>
                    handlePreferenceChange(
                      "monthlyReports",
                      event.target.checked
                    )
                  }
                  className="h-5 w-5 cursor-pointer accent-blue-600"
                />

              </div>
            </div>
          </div>

          {/* Preference Success */}
          {preferenceMessage && (
            <div className="mt-5 rounded-lg border border-green-200 bg-green-50 px-4 py-3">
              <p className="text-sm font-medium text-green-700">
                {preferenceMessage}
              </p>
            </div>
          )}

          {/* Save Preferences */}
          <div className="mt-6 flex justify-end">
            <button
              type="button"
              onClick={handleSavePreferences}
              className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Save Preferences
            </button>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="rounded-2xl border border-red-200 bg-white p-6 shadow-sm sm:p-8">

          <h2 className="text-xl font-bold text-red-600">
            Danger Zone
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Permanently delete your account and all associated local data.
          </p>

          {deleteMessage && (
            <div className="mt-5 rounded-lg border border-green-200 bg-green-50 px-4 py-3">
              <p className="text-sm font-medium text-green-700">
                {deleteMessage}
              </p>
            </div>
          )}

          <button
            type="button"
            onClick={handleDeleteAccount}
            className="mt-5 rounded-lg border border-red-300 px-5 py-2.5 text-sm font-semibold text-red-600 transition hover:bg-red-50"
          >
            Delete Account
          </button>
        </div>

      </div>
    </section>
  );
}