"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";

export default function Page() {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  
  async function submitForm(e) {
    
    e.preventDefault();

    // API Call to validate login credentials
    const response = await fetch(
      "https://ai-language-tutor-backend.onrender.com/account/login",
      {
        method: "POST",
        credentials: "include", // Include cookies in the request
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password })
      });

    const responseData = await response.json();

    if (!response.ok) {
      alert(responseData.detail || "Failed to login");
    } else {
      login();
      router.push("/"); 
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center p-5 md:p-10 bg-gradient-to-br from-teal-500 to-teal-700 dark:from-teal-700 dark:to-teal-900">
      <div className="border border-gray-300 p-10 text-center bg-white dark:bg-gray-900 rounded-lg shadow-lg w-[22rem] md:w-[24rem]">
        <h1 className="text-2xl md:text-3xl font-bold text-center p-5">
          Login
        </h1>
        <form className="text-left" onSubmit={submitForm}>
          <div className="mb-6">
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Username
            </label>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div className="flex items-center justify-between mb-6">
            <a
              href="/signup"
              className="text-blue-600 text-sm hover:underline dark:text-blue-400"
              tabIndex="0"
            >
              Create Account
            </a>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-1/2 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
