"use client";

import PracticeItem from "./PracticeItem"; // Add this at the top
import { useEffect, useState } from "react";

export default function LessonsClient({ courseId }) {
  const [lessons, setLessons] = useState([]);
  const [error, setError] = useState(null);
  const [expandedLessons, setExpandedLessons] = useState({});

  useEffect(() => {
    async function fetchLessons() {
      try {
        const res = await fetch(
          `https://ai-language-tutor-backend.onrender.com/courses/lessons/get-lessons-by-course/${courseId}`
        );
        if (!res.ok) {
          throw new Error(`Error ${res.status}: Could not fetch lessons`);
        }
        const data = await res.json();
        setLessons(data);
      } catch (err) {
        console.error("Error fetching lessons:", err);
        setError(err.message);
      }
    }

    fetchLessons();
  }, [courseId]);

  const toggleLesson = (id) => {
    setExpandedLessons((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  if (error) return <div className="text-red-500">Error: {error}</div>;
  if (!lessons.length) return <div>Loading lessons...</div>;

  return (
    <div className="space-y-4">
      {lessons.map((lesson) => (
        <div
          key={lesson.id}
          className="border p-4 rounded shadow bg-white dark:bg-gray-800"
        >
          <button
            onClick={() => toggleLesson(lesson.id)}
            className="w-full text-left text-xl font-semibold text-gray-800 dark:text-white focus:outline-none"
          >
            Lesson {lesson.lesson_num}: {lesson.title}
          </button>

          {/* Display the rest of the material with Practice button */}
          {expandedLessons[lesson.id] && (
            <div className="mt-4 space-y-2">
              <hr className="mt-5 border border-black dark:border-gray-300" />

              {/* Display description (first element in material) */}
              <p className="pt-5 pb-5 text-gray-700 dark:text-gray-300">
                {lesson.material[0]} {/* Description goes here */}
              </p>
              {lesson.material.slice(1).map((item, idx) => (
                <PracticeItem key={idx} text={item} />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
