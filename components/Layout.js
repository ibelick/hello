import Link from "next/link";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const Layout = ({ children }) => {
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
    <div className="flex flex-col min-h-screen dark:bg-black">
      <header className="w-full flex justify-center py-8 relative top-0">
        <nav className="flex justify-between max-w-screen-md px-6 w-full dark:text-white">
          <ul className="animate-spin">
            <li>
              <Link href="/">
                <a>☻</a>
              </Link>
            </li>
          </ul>
          <ul className="flex justify-end">
            <li className="mr-8">
              <Link href="/blog">
                <a>blog</a>
              </Link>
            </li>
            <li>
              <a onClick={switchTheme} className="cursor-pointer ">
                <span className="flex transition-transform duration-500 ease-in-out transform hover:scale-50 dark:text-white">
                  ●
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="flex-1 dark:text-white">{children}</main>
      <footer className="w-full flex justify-center py-8 relative top-0">
        <nav className="flex justify-between max-w-screen-md px-6 w-full text-gray-600 dark:text-gray-400">
          <ul className="flex">
            <li>© {new Date().getFullYear()}</li>
            <li className="mx-2">⎯⎯⎯⎯</li>
            <li>
              <a href="https://twitter.com/Ibelick">twitter</a>
            </li>
          </ul>
          <ul className="flex justify-end">
            <li className="flex">
              <span className="flex text-green-600 mr-2">●</span>
              Available for freelancing
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
};

export default Layout;
