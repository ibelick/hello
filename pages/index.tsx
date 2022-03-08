import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="max-w-screen-md px-6 mx-auto py-36 mb-14">
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
        <details className="prose dark:prose-dark mt-12 -mx-0">
          <summary className="cursor-pointer font-semibold">About me</summary>
          <p>
            I have been building UIs with <strong>React since 2016</strong>. My
            main work is focused on building UIs, creating component libraries,
            creating design systems, and front-end architecture. I love being
            part of the design process, working with designers to create
            stunning screens, and optimizing the user experience.
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
      </section>
    </>
  );
}
