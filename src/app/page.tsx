import Image from "next/image";
import features from "../data/features.json";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          {/* Get started by editing&nbsp; */}
          <code className="font-mono font-bold">Digital Meta zone</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn more...
          </a>
        </div>
      </div>

      <div className="relative flex flex-col items-center justify-center p-10 before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r before:from-blue-500 before:via-purple-500 before:to-pink-500 before:blur-lg before:opacity-50 before:z-[-2] after:absolute after:inset-0 after:rounded-lg after:bg-gradient-to-l after:from-blue-700 after:via-purple-700 after:to-pink-700 after:blur-2xl after:opacity-40 after:z-[-1] dark:before:from-sky-700 dark:before:via-indigo-700 dark:before:to-purple-700 dark:after:from-sky-900 dark:after:via-indigo-900 dark:after:to-purple-900">
        <p className="relative text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 dark:from-blue-200 dark:via-purple-200 dark:to-pink-200">
          Digital Meta Zone
        </p>
        <p className="relative mt-2 text-lg font-light text-white dark:text-gray-300">
          Your gateway to the latest in AI news and innovations
        </p>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        {features.map((feature, index) => (
          <a
            key={index}
            href={feature.href}
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              {feature.title}{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                {feature.icon}
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              {feature.description}
            </p>
          </a>
        ))}
      </div>
    </main>
  );
}
