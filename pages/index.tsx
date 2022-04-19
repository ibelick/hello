import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="max-w-screen mx-auto mb-14 px-6 py-12">
        <p className="mb-8 text-gray-600 dark:text-gray-400">
          julien.thibeaut[at]gmail.com
        </p>
        <p>
          Hello! 👋 I’m Julien, a passionate developer with a focus on front-end
          development.
        </p>{" "}
        <p className="mt-4">
          <span className="underline">Specialities:</span> JavaScript, React,
          React Native, Next.js, TypeScript
        </p>
        <details className="prose -mx-0 mt-12 dark:prose-dark" open>
          <summary className="cursor-pointer font-semibold">About me</summary>
          <p>
            I have been building UIs with <strong>React since 2016</strong>. My
            main work is focused on building UIs, creating component libraries,
            design systems, and front-end architecture. I love being part of the
            design process, working with designers to create stunning screens,
            and optimizing the user experience.
          </p>
          <p>
            Since 2022, I'm focusing on web3. I write smart contracts, learn
            about the future of the internet and the future of work. I build and
            help build products with sustainability and equal rights in mind.
          </p>
          <p>
            Based in Paris, I'm open to remote collaboration. Some random
            interests: plants, climate change, cooking, digital art, exploring
            technologies, documentaries, and rap music.{" "}
          </p>
          <p>
            You can see what I'm doing <Link href="/now">now</Link>.
          </p>
        </details>
        <div className="mt-12">
          <p className="mb-2">Also available on</p>
          <ul className="list-none p-0">
            <li className="mb-2 cursor-pointer underline decoration-gray-500 underline-offset-4">
              <a href="https://twitter.com/Ibelick" target="_blank">
                Twitter ↗
              </a>
            </li>
            <li className="mb-2 cursor-pointer underline decoration-gray-500 underline-offset-4">
              <a href="https://github.com/ibelick" target="_blank">
                GitHub ↗
              </a>
            </li>
            <li className="mb-2 cursor-pointer underline decoration-gray-500 underline-offset-4">
              <a href="https://read.cv/ibelick" target="_blank">
                Read.CV ↗
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
