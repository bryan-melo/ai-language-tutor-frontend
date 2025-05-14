"use client";

export default function AboutPage() {
  return (
    <main className="min-h-screen p-5 md:p-10 m-5 text-gray-800 dark:text-gray-200">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center">
          About Us
        </h1>
        <hr className="mb-10 border border-black dark:border-gray-300" />

        <section className="space-y-6">
          <p>
            Welcome to <strong>Language Courses</strong>, your platform for
            discovering curated language learning opportunities. Whether you're
            a beginner just getting started or an advanced learner refining your
            skills, we offer something for every level.
          </p>

          <p>
            This page provides an overview of all available courses, grouped by
            category (e.g., Spanish, French, Mandarin). Each course card
            includes:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Title & Description</strong> – A brief overview of the
              course content
            </li>
            <li>
              <strong>Number of Lessons</strong> – Gives you an idea of the
              depth
            </li>
            <li>
              <strong>Difficulty Level</strong> – Beginner, Intermediate, or
              Advanced
            </li>
          </ul>

          <p>The card background colors represent difficulty level:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <span className="inline-block w-4 h-4 bg-green-200 dark:bg-green-500 rounded-sm mr-2"></span>
              Beginner
            </li>
            <li>
              <span className="inline-block w-4 h-4 bg-yellow-200 dark:bg-yellow-400 rounded-sm mr-2"></span>
              Intermediate
            </li>
            <li>
              <span className="inline-block w-4 h-4 bg-red-200 dark:bg-red-400 rounded-sm mr-2"></span>
              Advanced
            </li>
          </ul>

          <p>
            Use this page to browse courses by category and difficulty. Hover
            over each card for additional visual feedback and click to learn
            more (coming soon!).
          </p>
        </section>
      </div>
    </main>
  );
}
