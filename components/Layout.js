import Head from "next/head";
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
    <div className="dark:bg-black">
      <Head>
        <title>⛵️ Julien Thibeaut - Developer front-end</title>
      </Head>
      <header className="w-full flex justify-center py-8 relative top-0">
        <nav className="flex justify-between max-w-screen-md px-6 w-full dark:text-white">
          <ul className="animate-spin">
            <Link href="/">
              <a>☻</a>
            </Link>
          </ul>
          <ul className="flex justify-end">
            <li className="mr-8">
              <Link href="/blog">
                <a>blog</a>
              </Link>
            </li>
            <li className="mr-8">
              <Link href="/#work">
                <a>work</a>
              </Link>
            </li>
            <li className="mr-8">
              <Link href="/#me">
                <a>me</a>
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
      <main className="dark:text-white">{children}</main>
    </div>
  );
};

export default Layout;
