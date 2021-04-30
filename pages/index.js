// @todo: add darkmode, add :), add music tab, moodboard
// update card with product icon
export default function Home() {
  return (
    <>
      <section className="max-w-screen-md px-6 mx-auto py-36 mb-14">
        <p className="mb-8 text-gray-600 dark:text-gray-400">
          julien.thibeaut[at]gmail.com
        </p>
        <p>
          Hello! 👋 I’m Julien, a passionate JavaScript developer with a focus
          on front-end development.
        </p>{" "}
        <p className="mt-4">
          <span className="underline">Specialities:</span> JavaScript, React,
          React Native, Next.js, TypeScript
        </p>
      </section>
      <section className="max-w-screen-md px-6 mx-auto mb-20" id="work">
        <h3 className="mb-4 font-semibold text-gradient bg-gradient-to-r from-green-400 to-red-500">
          Last works →
        </h3>
        <div className="flex flex-col">
          <a
            href="https://lafourche.fr"
            className="shadow-sm hover:shadow transition rounded-2xl mb-10 border border-transparent dark:border-gray-800 dark:hover:border-gray-400 overflow-hidden"
          >
            <div className="flex flex-col">
              <img
                className="max-h-64 object-cover"
                src="https://assets.lafourche.fr/s/files/1/0009/9565/5740/files/FOURCHE_DIGI_GREEN_72DPI_4d10b7f8-4b8a-43aa-a38e-d3a110819f3d_1200x1200.png?v=1577697633"
                alt="test"
              />
              <div className="p-4 bg-white dark:bg-black">
                <div className="flex mb-3">
                  <h3 className="font-medium">La Fourche</h3>
                  <span className="mx-1">⎯⎯⎯</span>
                  <p className="text-gray-900 dark:text-gray-100">
                    Online organic store up to 50% cheaper
                  </p>
                </div>
                <p className="text-gray-800 dark:text-gray-200">
                  I helped them with the exit of shopify by migrating the
                  frontend to Next.js. I worked on the front end architecture,
                  design tokens and system.
                </p>
              </div>
            </div>
          </a>
          <a
            href="https://uxcademy.com"
            className="shadow-sm hover:shadow transition rounded-2xl mb-10 border border-transparent dark:border-gray-800 dark:hover:border-gray-400 overflow-hidden"
          >
            <div className="flex flex-col">
              <img
                className="max-h-64 object-cover"
                src="https://images.prismic.io/uxcademy/6f997629-04da-494c-ab7c-0b04f2bc5d78_salepageInter.jpg?auto=compress,format"
                alt="La Fourche"
              />
              <div className="p-4 bg-white dark:bg-black">
                <div className="flex mb-3">
                  <h3 className="font-medium">uxcademy</h3>
                  <span className="mx-1">⎯⎯⎯</span>
                  <p className="text-gray-900 dark:text-gray-100">
                    Learn UI/UX design with interactive courses
                  </p>
                </div>
                <p className="text-gray-800 dark:text-gray-200">
                  I developed the platform with Next.js and firebase. I'm
                  working with @maximebeneteau on the product. New course soon.
                </p>
              </div>
            </div>
          </a>
        </div>
      </section>
      <section
        className="max-w-screen-md px-6 mx-auto w-full pb-12 text-left"
        id="me"
      >
        <h3 className="mb-4 font-semibold text-gradient bg-gradient-to-r from-yellow-500 to-yellow-800">
          About me →
        </h3>
        <p className="mb-2">
          I'm Julien, I'm a freelance front-end developer and I love to build
          websites/apps with React, React Native and Next.js.
        </p>
        <p className="mb-2">
          I love constructing beautiful, interactive user interfaces and
          designing scalable, performant products.
        </p>
        <p className="mb-2">
          In addition to the frontend, I like to be part of the design process.
          I love design in the broad sense, for my job I'm interested in user
          interfaces, experiences and design systems.
        </p>
        <p className="mb-2">
          I like the{" "}
          <a href="https://en.wikipedia.org/wiki/Maker_culture">
            <i>maker</i>
          </a>{" "}
          movement, that's what brought me to code. I always love to build
          products to take a step back from my “daily” work and to learn new
          things.
        </p>
        <p>
          Last words, I currently live in Paris and I'm willing to work with
          socially and environmentally responsible organisations. 🌎
        </p>
      </section>
    </>
  );
}
