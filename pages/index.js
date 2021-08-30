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
        <details className="prose dark:prose-dark mt-12">
          <summary className="cursor-pointer font-semibold">Last works</summary>
          <p className="mt-2">
            In 2020-2021 I was on a long contract with{" "}
            <a href="https://lafourche.fr/">La Fourche</a>, the best way to shop
            organic food in France. I help them quit Shopify and migrate to
            Next.js. I did front-end architecture, design system and a lot of
            features to support the development of the company.
          </p>
          <p>
            I also helped with the development of{" "}
            <a href="https://uxcademy.com/">uxcademy</a>, a way to practice
            ux/ui design.
          </p>
        </details>
      </section>
    </>
  );
}
