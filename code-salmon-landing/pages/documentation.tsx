export default function Documentation() {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center px-4 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/docs-bbg.jpg')" }}
    >
      {/* 🔲 Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-25 z-0" />

      {/* 🟨 Legal Pad */}
      <div
        className="relative z-10 pl-20 bg-[#fef3c7] text-gray-900 p-10 shadow-4xl rounded-md border border-gray-300 w-full max-w-7xl h-auto overflow-hidden font-body"
        style={{
          backgroundImage: `repeating-linear-gradient(
            to bottom,
            transparent 0px,
            transparent 23px,
            rgba(0, 0, 255, 0.15) 24px
          )`,
          boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.5)',
        }}
      >
        {/* Red margin line */}
        <div className="absolute top-0 bottom-0 left-14 w-[2px] bg-red-400 opacity-60 z-0" />

        {/* Content */}
        <div className="relative z-10">
          <h1
            className="text-4xl font-title mb-4 text-salmon"
            style={{ textShadow: '6px 6px 8px rgb(255, 255, 255)' }}
          >
            Code Salmon Documentation
          </h1>
          <div className="mt-12">
        </div>
          <p className="text-lg mb-6">
            A TypeScript backend dev’s most trusted gadget against the dastardly silent assassins known only as REST API Contract Drift.
          </p>
          <iframe
            className="w-full max-w-5xl mx-auto rounded-md shadow-lg"
            width="700"
            height="450"
            src="https://www.youtube.com/embed/ErDjcF6EH84"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <h2 className="text-2xl font-semibold mt-8 mb-2 text-salmon">What is Code Salmon?</h2>
          <p className="mb-4">
            Code Salmon is a CLI tool that scans TypeScript projects for REST API calls. Once identified, it fires those calls to create a baseline JSON snapshot for future comparisons—your bulletproof vest against silent API drift.
          </p>
          <ul className="list-disc ml-6 mb-6">
            <li>Scan your project's REST API calls</li>
            <li>Compare results to your original baseline</li>
            <li>Adjust code to reflect any API changes</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-2 text-salmon">Problem Solved</h2>
          <p className="mb-4">
            External APIs evolve. When they do, your application might silently break. Code Salmon stops that by:
          </p>
          <ul className="list-disc ml-6 mb-6">
            <li>Detecting contract drift early</li>
            <li>Tracking every endpoint you depend on</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-2 text-salmon">Features</h2>
          <ul className="list-disc ml-6 mb-6">
            <li>Scans <code>.ts</code> files for <code>fetch()</code> calls</li>
            <li>Extracts API URLs and environment keys</li>
            <li>Fetches and saves baseline responses in JSON</li>
            <li>Compares future responses to detect structural drift</li>
            <li>Reports drift directly in the terminal</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-2 text-salmon">Configuration Tips</h2>
          <ul className="list-disc ml-6 mb-6">
            <li>Ensure a valid <code>.env</code> file exists with relevant API keys</li>
            <li>Customize scan targets via <code>tsconfig.json</code></li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-2 text-salmon">Installation & Usage</h2>
          <pre className="bg-white/60 p-4 rounded-lg text-sm overflow-auto mb-2">
            <code>npm install codesalmon</code>
          </pre>
          <p className="mb-2">To generate your initial baseline:</p>
          <pre className="bg-white/60 p-4 rounded-lg text-sm overflow-auto mb-2">
            <code>scanSalmon</code>
          </pre>
          <p className="mb-2">To check for contract drift later:</p>
          <pre className="bg-white/60 p-4 rounded-lg text-sm overflow-auto mb-6">
            <code>swimSalmon</code>
          </pre>
          <p className="italic mb-6">
            *Pro Tip: For meaningful contract drift, wait days or weeks between scans to observe real API changes.*
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-2 text-salmon">Contract Drift Report</h2>
          <p className="mb-4">
            When you run <code>swimSalmon</code>, the CLI outputs a detailed report highlighting any changes to API responses.
          </p>
          <h3 className="text-xl font-semibold mt-4 mb-2">Possible Report Outputs</h3>
          <ul className="list-disc ml-6 mb-2">
            <li><strong>Changed at</strong>: Indicates fields with value/type changes</li>
            <li><strong>Addition at</strong>: Shows where new key/value pairs were added</li>
            <li><strong>Removed at</strong>: Flags missing fields from the original baseline</li>
            <li><strong>Unhandled Change Type</strong>: Catches unknown or deeply restructured responses</li>
          </ul>
        </div>
      </div>
    </div>
  );
}