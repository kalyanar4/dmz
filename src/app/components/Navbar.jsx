import Link from "next/link";

const Navbar = () => {
  return (
    // bg-gradient-to-br - [bottom to right] - from-cyan-400 --> to-blue-700
    <nav className="bg-gradient-to-br from-cyan-400 to-blue-700 text-white w-full py-2">
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
  );
};

export default Navbar;
