import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-800 to-blue-900 text-white w-full py-4">
      {/* <footer className="bg-gray-800 text-white w-full py-4"> */}
      <div className="max-w-5xl mx-auto flex justify-between items-center px-4">
        <p>
          &copy; {new Date().getFullYear()} Digital Meta Zone. All rights
          reserved.
        </p>
        <div>
          <a
            href="https://twitter.com/yourprofile"
            className="inline-block ml-4"
          >
            <i className="bi bi-twitter" style={{ fontSize: "24px" }}></i>
          </a>
          <a
            href="https://github.com/yourprofile"
            className="inline-block ml-4"
          >
            <i className="bi bi-github" style={{ fontSize: "24px" }}></i>
          </a>
          <a
            href="https://www.facebook.com/yourprofile"
            className="inline-block ml-4"
          >
            <i className="bi bi-facebook" style={{ fontSize: "24px" }}></i>
          </a>
          <a
            href="https://www.linkedin.com/in/yourprofile"
            className="inline-block ml-4"
          >
            <i className="bi bi-linkedin" style={{ fontSize: "24px" }}></i>
          </a>
          {/* Add more social media links as needed */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
