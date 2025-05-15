"use client";

export default function AboutPage() {
  return (
    <main className="min-h-screen p-5 md:p-10 m-5 text-gray-800 dark:text-gray-200">
      <div className="max-w-6xl mx-auto space-y-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-12 text-center">
          About This Project
          <hr className="m-10 border border-black dark:border-gray-300" />
        </h1>

        <div className="w-full">
          <img
            src="/a1.jpg"
            alt="Language learning challenges illustration"
            className="rounded-lg shadow-lg w-full"
          />
        </div>

        {/* Purpose of the Project - image on right */}
        <section>
          <h2 className="text-4xl font-bold mb-8 border-b-4 border-indigo-500 dark:border-indigo-400 pb-2 text-indigo-700 dark:text-indigo-300">
            Purpose of the Project
          </h2>

          {/* Problem Statement */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <div className="md:w-1/2 text-lg space-y-4 order-1 md:order-1">
              <p className="text-xl font-semibold text-indigo-600 dark:text-indigo-400">
                Problem Statement
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Language learning can be frustrating—especially when there's no
                real-time feedback. A lot of platforms rely on typed responses,
                but without immediate guidance, it’s hard to know if you’re
                actually understanding the material or just memorizing it. This
                kind of setup makes it easy to form bad habits and leaves
                learners unsure if they’re really making progress.
              </p>
            </div>
            <div className="md:w-1/2 order-2 md:order-2">
              <img
                src="/a2.png"
                alt="Language learning challenges illustration"
                className="rounded-lg shadow-lg max-w-full"
              />
            </div>
          </div>

          {/* Goal of the Project */}
          <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 md:p-10 rounded-xl shadow-inner text-lg space-y-4">
            <p className="text-xl font-semibold text-indigo-700 dark:text-indigo-300">
              Project Goals
            </p>
            <p className="text-gray-800 dark:text-gray-200">
              My goal is to create a language learning platform that uses
              generative AI to provide real-time feedback and support. By
              integrating an intelligent assistant, the goal is to make the
              learning process more interactive and engaging. This way, learners
              can actively participate in their education, receive timely
              feedback, and track their progress more effectively.
            </p>

            {/* Two-column bullet list */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-200">
                <li>Integrate generative AI to provide helpful replies</li>
                <li>
                  Support text-based learning with an intelligent assistant
                </li>
                <li>
                  Give users timely feedback as they progress through lessons
                </li>
              </ul>
              <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-200">
                <li>
                  Reduce passive memorization by enabling active participation
                </li>
                <li>
                  Encourage learners by making their progress visible and clear
                </li>
                <li>
                  Make the learning interface clean, modern, and easy to use
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Achievements & Limitations - image on left */}
        <section>
          <h2 className="text-4xl font-bold mb-8 border-b-4 border-emerald-500 dark:border-emerald-400 pb-2 text-emerald-700 dark:text-emerald-300">
            Achievements & Limitations
          </h2>

          {/* Achievements and Limitations flex row */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            {/* Image on left */}
            <div className="md:w-1/2 order-2 md:order-1">
              <img
                src="/a3.png"
                alt="Generative AI integration illustration"
                className="rounded-lg shadow-lg max-w-full"
              />
            </div>
            {/* Text on right */}
            <div className="md:w-1/2 text-lg space-y-4 order-1 md:order-2 text-gray-700 dark:text-gray-300">
              <p className="text-xl font-semibold text-emerald-600 dark:text-emerald-400">
                Achievements
              </p>
              <p>
                I implemented a fully functional frontend and backend that
                allows users to create accounts, log in, browse available
                courses, and complete lessons with real-time AI feedback. The
                platform integrates the OpenAI ChatGPT model to provide
                contextual support, making the learning experience more
                interactive and engaging. It features a clean, modern interface
                designed for ease of use and minimal distractions. The backend
                handles user authentication and data management securely, while
                the frontend is hosted on Vercel and the backend along with the
                database is deployed on Render. This infrastructure ensures
                reliability, scalability, and a strong foundation for future
                expansion.
              </p>
            </div>
          </div>

          {/* Colored container with bullet points */}
          <div className="bg-red-50 dark:bg-red-900/30 p-6 md:p-10 rounded-xl shadow-inner text-lg space-y-4">
            <p className="text-xl font-semibold text-red-700 dark:text-red-400">
              Current Limitations
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-200">
                <li>No speech-to-text or voice interaction support yet</li>
                <li>Unable to personalized AI to fit different users</li>
                <li>Text-only interaction mode currently available</li>
              </ul>
              <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-200">
                <li>
                  Unable to adjust account settings (name, language, etc.)
                </li>
                <li>Some UI imperfections</li>
                <li>Lack of multilingual support</li>
              </ul>
            </div>
          </div>
        </section>

        {/* What We Have - image on right */}
        <section>
          <h2 className="text-3xl font-semibold mb-6 border-b border-gray-300 dark:border-gray-600 pb-2">
            Key Features
          </h2>

          {/* FRONTEND */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4">Frontend</h3>
            <div className="space-y-6">
              {[
                { text: "Login Page", img: "/a4.png" },
                { text: "Create Account Page", img: "/a5.png" },
                { text: "Course Selection Page", img: "/a6.png" },
                { text: "Lesson Page", img: "/a7.png" },
                { text: "Chat Box", img: "/a8.png" },
              ].map(({ text, img }, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col md:flex-row items-center gap-6 ${
                    idx % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                  style={{ minHeight: "300px" }} // adjust height to your liking
                >
                  <div className="md:w-1/2 w-full h-full">
                    <img
                      src={img}
                      alt={text}
                      className="rounded-lg shadow-lg w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 w-full flex items-center justify-center text-lg font-medium p-4 text-center">
                    {text}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* BACKEND */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4">Backend</h3>
            <div className="space-y-6">
              {[
                { text: "API Docs using FastAPI", img: "/a9.png" },
                { text: "Route testing", img: "/a10.png" },
                { text: "API response", img: "/a11.png" },
              ].map(({ text, img }, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col md:flex-row items-center gap-6 ${
                    idx % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                  style={{ minHeight: "300px" }} // keep consistent height
                >
                  <div className="md:w-1/2 w-full h-full">
                    <img
                      src={img}
                      alt={text}
                      className="rounded-lg shadow-lg w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 w-full flex items-center justify-center text-lg font-medium p-4 text-center">
                    {text}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DATABASE */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4">Database</h3>
            <div className="space-y-6">
              {[
                { text: "Database schema example", img: "/a12.png" },
                { text: "Response models example", img: "/a13.png" },
                {
                  text: "Database management SQLTools (VSCode extension)",
                  img: "/a14.png",
                },
              ].map(({ text, img }, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col md:flex-row items-center gap-6 ${
                    idx % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                  style={{ minHeight: "300px" }}
                >
                  <div className="md:w-1/2 w-full h-full">
                    <img
                      src={img}
                      alt={text}
                      className="rounded-lg shadow-lg w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 w-full flex items-center justify-center text-lg font-medium p-4 text-center">
                    {text}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* HOSTING */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Hosting</h3>
            <div className="space-y-6">
              {[
                { text: "Frontend hosted on Vercel", img: "/a15.png" },
                {
                  text: "Backend and database hosted on Render",
                  img: "/a16.png",
                },
              ].map(({ text, img }, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col md:flex-row items-center gap-6 ${
                    idx % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                  style={{ minHeight: "300px" }}
                >
                  <div className="md:w-1/2 w-full h-full">
                    <img
                      src={img}
                      alt={text}
                      className="rounded-lg shadow-lg w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 w-full flex items-center justify-center text-lg font-medium p-4 text-center">
                    {text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
