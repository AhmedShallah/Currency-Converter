// app/privacy/page.tsx
import React from 'react';

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-3xl w-full bg-white dark:bg-gray-900 rounded-xl shadow-md p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-6">
          Privacy Policy
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-center">
          At Currency Converter, your privacy is our priority. We do not collect personal data or track users.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mt-6 mb-2">
          1. Information Collection
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
          We don’t collect personal information. The app only retrieves public exchange rate data from external APIs.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mt-6 mb-2">
          2. Data Usage
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
          Data is used exclusively for showing real-time currency conversions. We don’t track or store anything about users.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mt-6 mb-2">
          3. Third-Party Services
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
          We use third-party APIs for exchange rates. These services may have their own privacy policies.
        </p>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-center mt-6">
          By using our service, you agree to this privacy policy.
        </p>
      </div>
    </main>
  );
}
