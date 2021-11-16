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
            focus is to build what we see on screens. I create and architect
            scalable React component libraries. I like to be part of the design
            process, love working with designers to produce design systems, and
            great screens. I collaborate a lot with other developers to build
            and release components across many products, give direction to the
            front end architecture, support juniors, etc.
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
        <details className="prose dark:prose-dark mt-12 -mx-0">
          <summary className="cursor-pointer font-semibold">Last works</summary>
          <p className="mt-2">
            In 2020-2021 I was on a long contract with{" "}
            <a href="https://lafourche.fr/">La Fourche</a>, the best way to shop
            organic food in France. I help them quit Shopify and migrate to
            Next.js. I did front-end architecture, design system, and a lot of
            features to support the development of the company.
          </p>
          <p>
            I also helped with the development of{" "}
            <a href="https://uxcademy.com/">uxcademy</a>, a way to practice
            UX/UI design.
          </p>
          <p>
            Recently, I am focused on short-term freelance gigs, for example, I
            have helped build components for{" "}
            <a href="https://www.swile.co/">swile</a> redesign. Also, I'm
            exploring web3, particularly interested in Solana and Tezos
            blockchain, and contributed to{" "}
            <a href="https://www.readthegeneralist.com/briefing/dao">
              Decentralized autonomous organizations (DAOs)
            </a>
            .
          </p>
        </details>
      </section>
    </>
  );
}
