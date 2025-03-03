import {
  MicrophoneIcon,
  LightBulbIcon,
  TrendingUpIcon,
} from "@heroicons/react/outline";

export const metadata = {
  title: "AI Language Tutor",
  description: "An AI-powered language tutor for learners.",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-5 md:p-10">
      <h1 className="text-5xl md:text-6xl font-bold text-center p-5">
        Speak, learn, improve.
        <br />
        With AI guiding you.
      </h1>

      <h2 className="text-2xl md:text-3xl font-bold text-center">
        Real-Time Feedback for Smarter Learning
      </h2>

      <div className="p-5">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Learn More
        </button>
      </div>

      <div className="p-5">
        <img
          className="w-full md:w-90 object-fill"
          src="/img-1.jpg"
          alt="Image used for home page"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5">
        <div className="rounded-l sm:rounded-l-lg border border-gray-300 shadow-md p-6 md:p-8 bg-gray-100 dark:bg-gray-200 duration-200 hover:scale-110">
          <h3 className="text-xl md:text-2xl font-bold text-center p-2 text-black dark:text-black flex items-center">
            <MicrophoneIcon className="h-6 md:h-7 w-6 md:w-7 mr-2 md:mr-4 text-blue-500 drop-shadow-md" />
            <span>Speak</span>
          </h3>
          <p className="text-black dark:text-black-800 text-sm md:text-base">
            Speak with confidence using real-time feedback from the AI-powered
            language tutor. Improve your pronunciation and clarity through
            interactive practice.
          </p>
        </div>

        <div className="border border-gray-300 shadow-md p-6 md:p-8 bg-gray-100 dark:bg-gray-200 duration-200 hover:scale-110">
          <h3 className="text-xl md:text-2xl font-bold text-center p-2 text-black dark:text-black flex items-center">
            <LightBulbIcon className="h-6 md:h-7 w-6 md:w-7 mr-2 md:mr-4 text-yellow-500 drop-shadow-md" />
            <span>Learn</span>
          </h3>
          <p className="text-black dark:text-black-800 text-sm md:text-base">
            Learn a new language faster with AI guiding you. Receive instant
            feedback to help you identify and correct errors as you practice.
          </p>
        </div>

        <div className="rounded-rg sm:rounded-r-lg border border-gray-300 shadow-md p-6 md:p-8 bg-gray-100 dark:bg-gray-200 duration-200 hover:scale-110">
          <h3 className="text-xl md:text-2xl font-bold text-center p-2 text-black dark:text-black flex items-center">
            <TrendingUpIcon className="h-6 md:h-7 w-6 md:w-7 mr-2 md:mr-4 text-green-500 drop-shadow-md" />
            <span>Improve</span>
          </h3>
          <p className="text-black dark:text-black-800 text-sm md:text-base">
            Improve your skills with every conversation. The real-time feedback
            ensures you refine your speaking abilities, helping you communicate
            more effectively.
          </p>
        </div>
      </div>
    </main>
  );
}
