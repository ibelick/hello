import Head from "next/head";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

// @todo: add darkmode, add :), add music tab, moodboard
// update card with product icon
export default function Home() {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === "light" ? "dark" : "light");
    }
  };

  return (
    <div className="flex justify-center items-center flex-col dark:bg-black">
      <Head>
        <title>⛵️ Julien Thibeaut - Developer front-end</title>
      </Head>

      <header className="w-full flex justify-center py-8 absolute top-0">
        <nav className="flex justify-between max-w-screen-sm w-full px-8 dark:text-white">
          <ul className="animate-spin">☻</ul>
          <ul className="flex justify-end">
            <li className="mr-8">
              <a href="#work">work</a>
            </li>
            <li className="mr-8">
              <a href="#me">me</a>
            </li>
            <li>
              <a onClick={switchTheme} className="cursor-pointer ">
                <span className="flex transition-transform duration-500 ease-in-out transform hover:scale-125 dark:text-white">
                  ●
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="flex justify-center items-center flex-col dark:text-white">
        <section className="min-h-screen flex flex-col justify-center max-w-screen-sm px-8">
          <p className="mb-8 text-gray-600 dark:text-gray-400">
            julien.thibeaut[at]gmail.com
          </p>
          <p>
            Hello! 👋 I’m Julien, a passionate JavaScript developer with a focus
            on front-end development.
          </p>{" "}
          {/* <p>
            I love creating beautiful, interactive user interfaces and designing
            scalable, performant and accessible products.
          </p>{" "} */}
          <p className="mt-4">
            Specialities: JavaScript, React, React Native, Next.js, TypeScript
          </p>
        </section>
        <section className="max-w-screen-sm px-8" id="work">
          <p className="mb-2 font-semibold text-gradient bg-gradient-to-r from-green-400 to-red-500">
            Last work →
          </p>
          <div className="flex flex-col">
            <a
              href="https://nextjs.org/docs"
              className="shadow-md hover:shadow-lg transition rounded mb-4 p-4 bg-gray-50 dark:bg-gray-900"
            >
              <div className="flex mb-2">
                <h3 className="font-medium">La Fourche</h3>
                <span className="mx-1">-</span>
                <p className="text-gray-900 dark:text-gray-100">
                  Online organic store up to 50% cheaper
                </p>
              </div>
              <p className="text-gray-800 dark:text-gray-200">
                I helped them with the exit of shopify by migrating the frontend
                to Next.js. I worked on the front end architecture, design
                tokens and system. I participated in the product redesign and I
                led the frontend on it.
              </p>
            </a>
            <a
              href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className="shadow-md hover:shadow-lg transition rounded mb-4 p-4 bg-gray-50 dark:bg-gray-900"
            >
              <div className="flex mb-2">
                <h3 className="font-medium">uxcademy</h3>
                <span className="mx-1">-</span>
                <p className="text-gray-900 dark:text-gray-100">
                  Learn UI/UX design with interactive courses
                </p>
              </div>
              <p className="text-gray-800 dark:text-gray-200">
                I developed the platform with Next.js and firebase. I'm working
                with @maximebeneteau on the product and we're trying to grow the
                community. For the moment +1000 users, regular design
                challenges, new courses soon.
              </p>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
