export default function Documentation() {
  return (
    <div
      className='relative min-h-screen flex items-center justify-center px-4 bg-cover bg-center bg-no-repeat'
      style={{ backgroundImage: "url('/images/docs-bbg.jpg')" }}
    >
      {/* 🔲 Dark Overlay */}
      <div className='absolute inset-0 bg-black opacity-25 z-0' />

      {/* 🟨 Legal Pad */}
      <div
        className='relative z-10 pl-20 bg-[#fef3c7] text-gray-900 p-10 shadow-4xl rounded-md border border-gray-300 w-full max-w-7xl h-auto overflow-hidden font-body'
        style={{
          backgroundImage: `repeating-linear-gradient(
            to bottom,
            transparent 0px,
            transparent 23px,
            rgba(0, 0, 255, 0.15) 24px
          )`,
          boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.5)', // Custom shadow
        }}
      >
        {/* Red margin line */}
        <div className='absolute top-0 bottom-0 left-14 w-[2px] bg-red-400 opacity-60 z-0' />

        {/* Content */}
        <div className='relative z-10'>
          <h1
            className='text-4xl font-title mb-4 text-salmon'
            style={{
              textShadow: '6px 6px 8px rgb(255, 255, 255)',
            }}
          >
            Code Salmon Documentation
          </h1>
          <p className='text-lg mb-6'>
            Welcome to the Code Salmon CLI documentation. Learn how to set up,
            run scans, and interpret results.
          </p>

          <h2 className='text-2xl font-semibold mt-8 mb-2 text-salmon'>Link</h2>
          <pre
            className='bg-white/60 p-4 rounded-lg text-sm overflow-auto'
            style={{
              boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.5)', // Custom shadow
            }}
          >
            <code>npm link</code>
          </pre>

          <h2 className='text-2xl font-semibold mt-8 mb-2 text-salmon'>
            Basic Usage
          </h2>
          <pre
            className='bg-white/60 p-4 rounded-lg text-sm overflow-auto'
            style={{
              boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.5)', // Custom shadow
            }}
          >
            <code>scanSalmon</code>
          </pre>

          <h2 className='text-2xl font-semibold mt-8 mb-2 text-salmon'>
            How It Works
          </h2>
          <p>
            Code Salmon parses your monorepo, identifies REST API calls, sends
            live test requests, and compares the responses to detect contract
            drift. Here we are thinking about fishes. We like to watch them swim
            upstream. What is Lorem Ipsum? Lorem Ipsum is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum. Why do we use it? It is a long established fact that a reader
            will be distracted by the readable content of a page when looking at
            its layout. The point of using Lorem Ipsum is that it has a
            more-or-less normal distribution of letters, as opposed to using
            'Content here, content here', making it look like readable English.
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and a search for 'lorem ipsum'
            will uncover many web sites still in their infancy. Various versions
            have evolved over the years, sometimes by accident, sometimes on
            purpose (injected humour and the like). Where does it come from?
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32. The standard chunk of
            Lorem Ipsum used since the 1500s is reproduced below for those
            interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
            Malorum" by Cicero are also reproduced in their exact original form,
            accompanied by English versions from the 1914 translation by H.
            Rackham.
          </p>
        </div>
      </div>
    </div>
  );
}
