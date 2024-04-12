import Image from "next/image";
import features from "../data/features.json";

export default function Home() {
  return (
    <>
      {/* Full-Width Header */}
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

      {/* Full-Width Navigation */}
      <nav className="bg-gradient-to-r from-cyan-500 to-blue-800 text-white w-full py-2">
        <div className="max-w-5xl mx-auto px-4">
          <div style={{ display: "flex", alignItems: "center" }}>
            <ul className="flex justify-between space-x-4">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>{" "}
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow w-full bg-gradient-to-b from-cyan-500 to-blue-800 dark:from-gray-700 dark:to-black">
        <div className="max-w-5xl mx-auto flex flex-col items-center p-10">
          {/* ... Main content and feature grid */}

          <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
            {features.map((feature, index) => (
              <a
                key={index}
                href={feature.href}
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-900 hover:dark:bg-gray-800/80"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className="mb-3 text-2xl font-semibold text-white">
                  {feature.title}{" "}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    {feature.icon}
                  </span>
                </h2>
                <p className="m-0 max-w-[30ch] text-sm text-gray-200 opacity-75">
                  {feature.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </main>
      {/* Full-Width Footer */}
      <footer className="bg-gray-800 text-white w-full py-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center px-4">
          <p>&copy; 2024 Digital Meta Zone. All rights reserved.</p>{" "}
          {/*  Make this from env variables */}
          <div>
            <a href="/privacy" className="ml-4 hover:underline">
              Privacy Policy
            </a>
            <a href="/terms" className="ml-4 hover:underline">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
