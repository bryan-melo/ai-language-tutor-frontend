export default function Page() {
  async function submitForm(formData) {
    "use server";
    const formFields = {
      f_name: formData.get("first_name"),
      l_name: formData.get("last_name"),
      email: formData.get("email_address"),
      username: formData.get("username"),
      password: formData.get("password"),
      primary_lang: formData.get("primary_language"),
    };

    try {
      const response = await fetch(
        "https://ai-language-tutor-backend.onrender.com/account/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json", 
          },
          body: JSON.stringify(formFields),
        }
      );

      const responseData = await response.json(); 

      if (!response.ok) {
        throw new Error(responseData.detail || "Failed to send data");
      }

      console.log("Response from API:", responseData);
      return responseData;
    } catch (error) {
      console.error("Error:", error);
      return { error: error.message };
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center p-5 md:p-10 bg-gradient-to-br from-teal-500 to-teal-700 dark:from-teal-700 dark:to-teal-900">
      <div className="border border-gray-300 p-10 text-center bg-white dark:bg-black">
        <h1 className="text-2xl md:text-3xl font-bold text-center p-10">
          Create Account
        </h1>
        <form className="text-left" action={submitForm}>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                First name
              </label>
              <input
                type="text"
                id="first_name"
                name="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John"
                required
              />
            </div>
            <div>
              <label
                htmlFor="last_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Last name
              </label>
              <input
                type="text"
                id="last_name"
                name="last_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Doe"
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="email_address"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email address
            </label>
            <input
              type="email"
              id="email_address"
              name="email_address"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="john.doe@email.com"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="john1234"
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
              id="password"
              name="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="•••••••••"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="confirm_password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Confirm password
            </label>
            <input
              type="password"
              id="confirm_password"
              name="confirm_password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="•••••••••"
              required
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="primary_language"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Primary Language
            </label>
            <select
              id="primary_language"
              name="primary_language"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            >
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="French">French</option>
              <option value="German">German</option>
              <option value="Chinese">Chinese</option>
            </select>
          </div>
          <div className="flex items-center justify-between mb-2">
            <a
              href="/login"
              className="text-blue-600 text-sm hover:underline dark:text-blue-400 max-w-[10rem] break-words pt-5"
              tabIndex="0"
            >
              Have an account? Login
            </a>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-1/2 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-5"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
