"use client";
import Link from "next/link";
import EmblaCarousel from "./EmblaCarousel";

const OPTIONS = { align: "start" };
const SLIDES = [
  {
    id: 1,
    imageUrl: "./howcasin.webp",
    content: "Futuristic Structure",
  },
  {
    id: 2,
    imageUrl: "./slide2.webp",
    content: "AI Ethics and Governance",
  },
  { id: 3, imageUrl: "./slide3.webp", content: "AI in Healthcare" },
  { id: 4, imageUrl: "./slide4.webp", content: "Machine Learning Tools" },
  { id: 5, imageUrl: "./slide5.webp", content: "Data Privacy in AI" },
  {
    id: 6,
    imageUrl: "./slide6.webp",
    content: "Future of Artificial Intelligence",
  },
];

const MainContent = () => {
  return (
    <main>
      {/* main site Title and text */}
      <div className="relative flex flex-col items-center justify-center p-10">
        <p className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-900 to-yellow-500 rounded-lg shadow-transparent">
          Digital Meta Zone
        </p>

        <p className="mt-2 text-xl font-light text-gray-900 dark:text-gray-300 hover:text-gray-600 transition duration-300 ease-in-out cursor-pointer">
          Your gateway to the latest in AI news and innovations
        </p>
      </div>

      <div>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
    </main>
  );
};

export default MainContent;
