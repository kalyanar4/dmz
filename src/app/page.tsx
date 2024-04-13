import Header from "../app/components/Header";
import Navbar from "../app/components/Navbar";
import MainContent from "../app/components/MainContent";
import Features from "../app/components/Features";
import Footer from "../app/components/Footer";

export default function Home() {
  return (
    <>
      {/* Full-Width Header */}
      <Header />
      {/* Full-Width Navigation */}
      <Navbar />
      {/* Main Content */}
      <div className="flex-grow w-full bg-gradient-to-b from-cyan-500 to-blue-800 dark:from-gray-700 dark:to-black">
        <MainContent />
        <Features />
      </div>
      {/* Full-Width Footer */}
      <Footer />
    </>
  );
}
