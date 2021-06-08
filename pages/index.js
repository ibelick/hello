// import Image from "next/image";

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
      {/* WIP */}
      {/* <section className="max-w-screen-md px-6 mx-auto mb-20">
        <h3 className="mb-4 font-semibold text-gradient bg-gradient-to-r from-green-400 to-red-500">
          Last works →
        </h3>
        <div className="flex flex-col">
          <a href="https://lafourche.fr" className="flex items-center mb-2">
            <div className="w-20 mr-4">
              <Image
                src="/lafourchelogo.png"
                width={16}
                height={9}
                layout="responsive"
              />
            </div>
            <p className="text-lg">
              Shopify to Next.js, Front-end architecture, lots of features 🌿
            </p>
          </a>
          <div className="flex flex-col mb-24">
            <a href="https://lafourche.fr">
              <img
                className="max-h-96 object-cover border rounded-2xl border-transparent"
                src="/lafourchedesktopscreen.png"
                alt="lafourche desktop"
              />
            </a>
          </div>
          <a href="https://uxcademy.com" className="flex items-center mb-2">
            <div className="w-6 mr-4">
              <Image
                src="/uxcademylogo.svg"
                width={9}
                height={9}
                layout="responsive"
              />
            </div>
            <p className="text-lg">
              Learn UI/UX design with interactive courses 👩‍🏫
            </p>
          </a>
          <div className="flex flex-col mb-24">
            <a href="https://uxcademy.com">
              <img
                className="max-h-96 object-cover border rounded-2xl border-transparent"
                src="/uxcademydesktopscreen.png"
                alt="lafourche desktop"
              />
            </a>
          </div>
        </div>
      </section>
      <section className="max-w-screen-md px-6 mx-auto w-full pb-12 text-left">
        <h3 className="mb-4 font-semibold text-gradient bg-gradient-to-r from-yellow-500 to-yellow-800">
          About me →
        </h3>
        <p className="mb-2">
          I'm Julien, I'm a freelance front-end developer and I love to build
          websites/apps with React, React Native and Next.js.
        </p>
        <p className="mb-2">
          In addition to the frontend, I like to be part of the design process.
          I love design in the broad sense, for my job I'm interested in user
          interfaces, experiences and design systems.
        </p>
        <p className="mb-2">
          I was brought to the code by the{" "}
          <a href="https://en.wikipedia.org/wiki/Maker_culture">
            <i>maker</i>
          </a>{" "}
          movement, so I like to invest time in sides projects.
        </p>
        <p className="mb-2">
          When I am not coding, I can spend time on: cooking, listening to Frank
          Ocean, reading a book, running, learning music production or eating
          Margherita 🍕.
        </p>
        <p>
          Last words, I currently live in Belleville, Paris and I'm willing to
          work with socially and environmentally responsible organisations. 🌎
        </p>
      </section> */}
    </>
  );
}
