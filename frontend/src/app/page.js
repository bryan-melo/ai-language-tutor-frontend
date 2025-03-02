import {
  MicrophoneIcon,
  LightBulbIcon,
  TrendingUpIcon,
} from "@heroicons/react/outline";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <h1 className="text-5xl font-bold text-center p-5">
        Speak, learn, improve.
        <br />
        With AI guiding you.
      </h1>

      <h2 className="text-3xl font-bold">
        Real-Time Feedback for Smarter Learning
      </h2>

      <div className="p-5">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Learn More
        </button>
      </div>

      <div className="p-5">
        <img
          className="h-100 w-90 object-fill"
          src="/img-1.jpg"
          alt="Image used for home page"
        />
      </div>

      <div className="grid grid-cols-3 gap-4 p-5">
        <div className="rounded-l-lg bg-gray-400 p-8 duration-200 hover:scale-110">
          <div>
            <h3 className="text-2xl font-bold text-center p-2 text-black dark:text-black flex items-center">
              <MicrophoneIcon className="h-7 w-7 mr-4 text-black dark:text-black" />
              <span>Speak</span>
            </h3>
            <p className="text-black dark:text-black-800">
              Speak with confidence using real-time feedback from the AI-powered
              language tutor. Improve your pronunciation and clarity through
              interactive practice.
            </p>
          </div>
        </div>
        <div className="rounded-b-lg bg-gray-300 p-8 duration-200 hover:scale-110">
          <div>
            <h3 className="text-2xl font-bold text-center p-2 text-black dark:text-black flex items-center">
              <LightBulbIcon className="h-7 w-7 mr-4 text-black dark:text-black" />
              <span>Learn</span>
            </h3>
            <p className="text-black dark:text-black-800">
              Learn a new language faster with AI guiding you. Receive instant
              feedback to help you identify and correct errors as you practice.
            </p>
          </div>
        </div>
        <div className="rounded-r-lg bg-gray-400 p-8 duration-200 hover:scale-110">
          <div>
            <h3 className="text-2xl font-bold text-center p-2 text-black dark:text-black flex items-center">
              <TrendingUpIcon className="h-7 w-7 mr-4 text-black dark:text-black" />
              <span>Improve</span>
            </h3>
            <p className="text-black dark:text-black-800">
              Improve your skills with every conversation. The real-time
              feedback ensures you refine your speaking abilities, helping you
              communicate more effectively.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
