import Link from "next/link";
import features from "../../data/features.json";

const Features = () => {
  return (
    <div className="max-w-5xl mx-auto flex flex-col items-center p-10">
      {/* feature grid */}

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
  );
};

export default Features;
