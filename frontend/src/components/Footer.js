function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white p-5 text-center  border-t border-gray-700">
      <p className="text-gray-300 text-xs sm:text-sm md:text-base">
        © 2025 AI Powered Language Tutor | Created by Bryan Melo
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 mt-2">
        <a
          href="https://github.com/bryan-melo"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition duration-200"
        >
          GitHub
        </a>
        <span className="hidden sm:inline text-gray-500">|</span>
        <a
          href="https://linkedin.com/in/bryan-melo"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition duration-200"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}

export default Footer;
