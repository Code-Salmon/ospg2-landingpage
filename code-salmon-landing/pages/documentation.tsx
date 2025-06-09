export default function Documentation() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-12">
      <h1 className="text-4xl font-bold text-salmon mb-4">Code Salmon Documentation</h1>
      <p className="text-lg mb-6">
        Welcome to the Code Salmon CLI documentation. Learn how to set up, run scans, and interpret results.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2 text-salmon">Link</h2>
      <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-auto">
        <code>npm link</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-8 mb-2 text-salmon">Basic Usage</h2>
      <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-auto">
        <code>scanSalmon</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-8 mb-2 text-salmon">How It Works</h2>
      <p>
        Code Salmon parses your monorepo, identifies REST API calls, sends live test requests,
        and compares the responses to detect contract drift.
      </p>
    </div>
  );
}