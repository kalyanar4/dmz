// components/Header.jsx
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-cyan-500 to-blue-800 text-white w-full py-4">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row justify-between items-center px-4">
        <a
          href="https://kalyanar4.github.io/dmz/"
          className="font-bold text-xl hover:text-gray-600 dark:hover:text-gray-300 transition duration-150 ease-in-out"
        >
          Digital Meta Zone {/*  Make this from env variables */}
        </a>
        <div className="flex mt-4 lg:mt-0">
          <a
            className="flex items-center justify-center gap-2 px-4 py-2 mx-2 bg-gradient-to-r from-blue-500 to-green-500 text-white font-bold rounded-lg shadow-md hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition duration-150 ease-in-out"
            href="/login"
          >
            Login
          </a>
          <a
            className="flex items-center justify-center gap-2 px-4 py-2 mx-2 bg-gradient-to-r from-red-500 to-yellow-500 text-white font-bold rounded-lg shadow-md hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50 transition duration-150 ease-in-out"
            href="/register"
          >
            Register
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
