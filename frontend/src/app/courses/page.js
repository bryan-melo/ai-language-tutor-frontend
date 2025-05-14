"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function Page() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  // Map each difficulty to a distinct background color
  const difficultyColors = {
    Beginner: "bg-green-200",
    Intermediate: "bg-yellow-200",
    Advanced: "bg-red-200",
  };

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(
          "https://ai-language-tutor-backend.onrender.com/courses/get-all-courses"
        );
        setCourses(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching courses:", error);
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <div>Loading courses...</div>;
  }

  // Group courses by category
  const groupedCourses = courses.reduce((groups, course) => {
    if (!groups[course.category]) {
      groups[course.category] = [];
    }
    groups[course.category].push(course);
    return groups;
  }, {});

  return (
    <main className="min-h-screen p-5 md:p-10 m-5">
      <div className="mb-10">
        <h4 className="text-lg md:text-2xl mb-2">Welcome to</h4>
        <h1 className="text-xl md:text-4xl font-bold">Language Courses</h1>
      </div>

      <hr className="mb-10 border border-black dark:border-gray-300" />

      <div className="mb-12 max-w-4xl text-gray-700 dark:text-gray-300">
        <p className="text-md md:text-lg mb-6">
          This page displays a variety of language courses grouped by
          category—such as grammar, conversation, and vocabulary. Each course
          card includes the title, description, number of lessons, and
          difficulty level.
          <br />
          <br />
          <b>Difficulty levels</b> are visually represented using background
          colors, which help you identify the right courses at a glance. Here's
          what each color means:
        </p>

        <ul className="list-disc list-inside text-md md:text-lg space-y-2">
          <li>
            <span className="inline-block px-2 py-0.5 rounded-full bg-green-200 text-green-900 dark:bg-green-800 dark:text-green-100 font-semibold">
              Beginner
            </span>{" "}
            – Great for those just getting started.
          </li>
          <li>
            <span className="inline-block px-2 py-0.5 rounded-full bg-yellow-200 text-yellow-900 dark:bg-yellow-700 dark:text-yellow-100 font-semibold">
              Intermediate
            </span>{" "}
            – Designed for learners with some experience.
          </li>
          <li>
            <span className="inline-block px-2 py-0.5 rounded-full bg-red-200 text-red-900 dark:bg-red-700 dark:text-red-100 font-semibold">
              Advanced
            </span>{" "}
            – Suited for learners with strong proficiency.
          </li>
        </ul>
      </div>

      <hr className="mb-10 border border-black dark:border-gray-300" />

      {/* Loop through grouped categories */}
      {Object.entries(groupedCourses).map(([category, categoryCourses]) => (
        <div className="mb-20" key={category}>
          <h1 className="text-xl md:text-3xl font-bold">{category}</h1>
          <div className="flex flex-wrap gap-5 mt-5">
            {categoryCourses.map((course) => {
              // Assign consistent background color based on difficulty
              const bgClass =
                difficultyColors[course.difficulty] || "bg-gray-200";

              return (
                <Link href={`/courses/${course.id}/lessons`} key={course.id}>
                  <div className="border rounded-2xl w-full sm:w-72 md:w-80 hover:border-teal-500 hover:shadow-xl hover:scale-105 transition-all duration-300 flex flex-col">
                    {/* TITLE + DESCRIPTION SECTION */}
                    <div
                      className={`p-5 ${bgClass} rounded-t-2xl flex-1 flex flex-col text-black`}
                    >
                      <div className="min-h-[3.5rem] flex items-center justify-center text-center font-semibold">
                        {course.title}
                      </div>
                      <hr className="mb-10 border-black" />
                      <p className="text-center">{course.description}</p>
                    </div>

                    {/* FOOTER SECTION */}
                    <div className="flex justify-center p-5 border-t bg-gray-100 gap-x-20 rounded-b-2xl">
                      <div className="flex flex-col justify-center items-center">
                        <p className="font-bold text-2xl text-black">
                          {course.num_of_lessons}
                        </p>
                        <p className="text-gray-600 text-sm">Lessons</p>
                      </div>
                      <div className="flex flex-col justify-center items-center">
                        <p className="font-bold text-2xl text-black">
                          {course.difficulty}
                        </p>
                        <p className="text-gray-600 text-sm">Difficulty</p>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      ))}
    </main>
  );
}
