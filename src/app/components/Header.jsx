// components/Header.jsx
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-cyan-500 to-blue-800 text-black w-full py-4">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row justify-between items-center px-4">
        {/* left components --> logo and sitename */}
        <div>
          <a
            href="https://kalyanar4.github.io/dmz/"
            className="flex items-center font-bold text-3xl hover:text-gray-400 dark:hover:text-gray-300 transition duration-150 ease-in-out"
          >
            <img
              src="./logo-hd.png"
              alt="Logo"
              style={{ height: "84px", width: "auto" }}
            />
            Digital Meta Zone
          </a>
        </div>

        {/* right components --> login and sign-up */}
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
