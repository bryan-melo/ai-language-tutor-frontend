async function getData() {
  const res = await fetch("https://ai-language-tutor-backend.onrender.com/");
  return res.json();
}

export default async function Page() {
  const data = await getData();
  return (
    <main className="min-h-screen p-5 md:p-10 m-5">
      <div className="mb-10">
        <h4 className="text-lg md:text-2xl mb-2">Welcome to</h4>
        <h1 className="text-xl md:text-4xl font-bold">Language Courses</h1>
      </div>

      <div className="mb-10 md:mb-20">
        <h1 className="text-base md:text-lg">Continue Previous Course:</h1>
      </div>

      <div className="mb-10 md:mb-20">
        <h1 className="text-xl md:text-3xl font-bold">
          Pronunciation & Phonetics
        </h1>
        <div className="flex flex-col md:flex-row justify-start mt-5 space-y-5 md:space-y-0 md:space-x-5">
          {/* First Card */}
          <div className="border rounded-2xl w-full md:w-72 hover:border-teal-500 hover:shadow-xl hover:scale-105 transition-all duration-300">
            <div className="p-5 pb-32">
              <p className="font-semibold">Title</p>
            </div>
            <div className="flex justify-center p-5 border-t bg-gray-100 gap-x-5 rounded-b-2xl">
              <div className="flex flex-col justify-center items-center">
                <p className="font-bold text-2xl dark:text-black">1</p>
                <p className="text-gray-600 text-sm">Sections</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className="font-bold text-2xl dark:text-black">1</p>
                <p className="text-gray-600 text-sm">Languages</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className="font-bold text-2xl dark:text-black">0%</p>
                <p className="text-gray-600 text-sm">Progress</p>
              </div>
            </div>
          </div>
          {/* Second Card */}
          <div className="border rounded-2xl w-full md:w-72 hover:border-teal-500 hover:shadow-xl hover:scale-105 transition-all duration-300">
            <div className="p-5 pb-32">
              <p className="font-semibold">Title</p>
            </div>
            <div className="flex justify-center p-5 border-t bg-gray-100 gap-x-5 rounded-b-2xl">
              <div className="flex flex-col justify-center items-center">
                <p className="font-bold text-2xl dark:text-black">1</p>
                <p className="text-gray-600 text-sm">Sections</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className="font-bold text-2xl dark:text-black">1</p>
                <p className="text-gray-600 text-sm">Languages</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className="font-bold text-2xl dark:text-black">0%</p>
                <p className="text-gray-600 text-sm">Progress</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-10 md:mb-20">
        <h1 className="text-xl md:text-3xl font-bold">
          Basic Vocabulary & Phrases
        </h1>
        <div className="flex flex-col md:flex-row justify-start mt-5 space-y-5 md:space-y-0 md:space-x-5">
          {/* First Card */}
          <div className="border rounded-2xl w-full md:w-72 hover:border-teal-500 hover:shadow-xl hover:scale-105 transition-all duration-300">
            <div className="p-5 pb-32">
              <p className="font-semibold">Title</p>
            </div>
            <div className="flex justify-center p-5 border-t bg-gray-100 gap-x-5 rounded-b-2xl">
              <div className="flex flex-col justify-center items-center">
                <p className="font-bold text-2xl dark:text-black">1</p>
                <p className="text-gray-600 text-sm">Sections</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className="font-bold text-2xl dark:text-black">1</p>
                <p className="text-gray-600 text-sm">Languages</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className="font-bold text-2xl dark:text-black">0%</p>
                <p className="text-gray-600 text-sm">Progress</p>
              </div>
            </div>
          </div>
          {/* Second Card */}
          <div className="border rounded-2xl w-full md:w-72 hover:border-teal-500 hover:shadow-xl hover:scale-105 transition-all duration-300">
            <div className="p-5 pb-32">
              <p className="font-semibold">Title</p>
            </div>
            <div className="flex justify-center p-5 border-t bg-gray-100 gap-x-5 rounded-b-2xl">
              <div className="flex flex-col justify-center items-center">
                <p className="font-bold text-2xl dark:text-black">1</p>
                <p className="text-gray-600 text-sm">Sections</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className="font-bold text-2xl dark:text-black">1</p>
                <p className="text-gray-600 text-sm">Languages</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className="font-bold text-2xl dark:text-black">0%</p>
                <p className="text-gray-600 text-sm">Progress</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-start mt-5 space-y-5 md:space-y-0 md:space-x-5">
          {/* First Card */}
          <div className="border rounded-2xl w-full md:w-72 hover:border-teal-500 hover:shadow-xl hover:scale-105 transition-all duration-300">
            <div className="p-5 pb-32">
              <p className="font-semibold">Title</p>
            </div>
            <div className="flex justify-center p-5 border-t bg-gray-100 gap-x-5 rounded-b-2xl">
              <div className="flex flex-col justify-center items-center">
                <p className="font-bold text-2xl dark:text-black">1</p>
                <p className="text-gray-600 text-sm">Sections</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className="font-bold text-2xl dark:text-black">1</p>
                <p className="text-gray-600 text-sm">Languages</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className="font-bold text-2xl dark:text-black">0%</p>
                <p className="text-gray-600 text-sm">Progress</p>
              </div>
            </div>
          </div>
          {/* Second Card */}
          <div className="border rounded-2xl w-full md:w-72 hover:border-teal-500 hover:shadow-xl hover:scale-105 transition-all duration-300">
            <div className="p-5 pb-32">
              <p className="font-semibold">Title</p>
            </div>
            <div className="flex justify-center p-5 border-t bg-gray-100 gap-x-5 rounded-b-2xl">
              <div className="flex flex-col justify-center items-center">
                <p className="font-bold text-2xl dark:text-black">1</p>
                <p className="text-gray-600 text-sm">Sections</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className="font-bold text-2xl dark:text-black">1</p>
                <p className="text-gray-600 text-sm">Languages</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className="font-bold text-2xl dark:text-black">0%</p>
                <p className="text-gray-600 text-sm">Progress</p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>

      <div className="mb-10 md:mb-20">
        <h1 className="text-xl md:text-3xl font-bold">
          Grammar & Sentence Structure
        </h1>
        <div className="flex flex-col md:flex-row justify-start mt-5 space-y-5 md:space-y-0 md:space-x-5">
          {/* First Card */}
          <div className="border rounded-2xl w-full md:w-72 hover:border-teal-500 hover:shadow-xl hover:scale-105 transition-all duration-300">
            <div className="p-5 pb-32">
              <p className="font-semibold">Title</p>
            </div>
            <div className="flex justify-center p-5 border-t bg-gray-100 gap-x-5 rounded-b-2xl">
              <div className="flex flex-col justify-center items-center">
                <p className="font-bold text-2xl dark:text-black">1</p>
                <p className="text-gray-600 text-sm">Sections</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className="font-bold text-2xl dark:text-black">1</p>
                <p className="text-gray-600 text-sm">Languages</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className="font-bold text-2xl dark:text-black">0%</p>
                <p className="text-gray-600 text-sm">Progress</p>
              </div>
            </div>
          </div>
          {/* Second Card */}
          <div className="border rounded-2xl w-full md:w-72 hover:border-teal-500 hover:shadow-xl hover:scale-105 transition-all duration-300">
            <div className="p-5 pb-32">
              <p className="font-semibold">Title</p>
            </div>
            <div className="flex justify-center p-5 border-t bg-gray-100 gap-x-5 rounded-b-2xl">
              <div className="flex flex-col justify-center items-center">
                <p className="font-bold text-2xl dark:text-black">1</p>
                <p className="text-gray-600 text-sm">Sections</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className="font-bold text-2xl dark:text-black">1</p>
                <p className="text-gray-600 text-sm">Languages</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className="font-bold text-2xl dark:text-black">0%</p>
                <p className="text-gray-600 text-sm">Progress</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-5 md:mb-10">
        <h1 className="text-xl md:text-3xl font-bold">
          Speaking & Conversation Practice
        </h1>
        <div className="flex flex-col md:flex-row justify-start mt-5 space-y-5 md:space-y-0 md:space-x-5">
          {/* First Card */}
          <div className="border rounded-2xl w-full md:w-72 hover:border-teal-500 hover:shadow-xl hover:scale-105 transition-all duration-300">
            <div className="p-5 pb-32">
              <p className="font-semibold">Title</p>
            </div>
            <div className="flex justify-center p-5 border-t bg-gray-100 gap-x-5 rounded-b-2xl">
              <div className="flex flex-col justify-center items-center">
                <p className="font-bold text-2xl dark:text-black">1</p>
                <p className="text-gray-600 text-sm">Sections</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className="font-bold text-2xl dark:text-black">1</p>
                <p className="text-gray-600 text-sm">Languages</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className="font-bold text-2xl dark:text-black">0%</p>
                <p className="text-gray-600 text-sm">Progress</p>
              </div>
            </div>
          </div>
          {/* Second Card */}
          <div className="border rounded-2xl w-full md:w-72 hover:border-teal-500 hover:shadow-xl hover:scale-105 transition-all duration-300">
            <div className="p-5 pb-32">
              <p className="font-semibold">Title</p>
            </div>
            <div className="flex justify-center p-5 border-t bg-gray-100 gap-x-5 rounded-b-2xl">
              <div className="flex flex-col justify-center items-center">
                <p className="font-bold text-2xl dark:text-black">1</p>
                <p className="text-gray-600 text-sm">Sections</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className="font-bold text-2xl dark:text-black">1</p>
                <p className="text-gray-600 text-sm">Languages</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className="font-bold text-2xl dark:text-black">0%</p>
                <p className="text-gray-600 text-sm">Progress</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
