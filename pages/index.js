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
          Last work →
        </h3>
        <div className="flex flex-col">
          <a
            href="https://lafourche.fr/"
            className="shadow-md hover:shadow-lg transition rounded mb-4 p-4 border border-gray-50 dark:border-gray-800 dark:hover:border-gray-400"
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
              to Next.js. I worked on the front end architecture, design tokens
              and system. I led the work on frontend during the product
              redesign.
            </p>
          </a>
          <a
            href="https://uxcademy.com/"
            className="shadow-md hover:shadow-lg transition rounded mb-4 p-4 border border-gray-50 dark:border-gray-800 dark:hover:border-gray-400"
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
              community. For the moment +1000 users, regular design challenges,
              new courses soon.
            </p>
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
          My name is Julien Thibeaut and I currently live in Paris. I code for a
          living, I'm a freelance front-end developer and I love build
          websites/apps with React, React Native and Next.js.
        </p>
        <p className="mb-2">
          I love creating beautiful, interactive user interfaces and designing
          scalable, performant and accessible products.
        </p>
        <p>
          In addition to the frontend, I like to be part of the design process.
          I love design in the broad sense, for my job I'm interested in user
          interfaces, experiences and design systems.
        </p>
        {/* ethical tech */}
        {/* Willing to work with socially and environmentally responsible organisations 🌎 */}
        {/* Becoming a developer started out of a need to create - I didn't realize
        it would turn into my career. I love constructing beautiful interfaces
        and architecting applications from the ground-up. I'm primarily focused
        on web development and enjoy working with JavaScript, React, Next.js,
        and Node.js. Outside of development, I'm also interested in design,
        UI/UX, and creating an accessible web for all. I enjoy public speaking
        and mentoring others. On the side, I do freelance
        videography/photography and I'm a wanna-be musician. I'm passionate
        about technology and enjoy staying up to date on all things tech,
        engineering, and business. Feel free to reach out to me any time for
        coffee or just to chat at me@leerob.io. */}
      </section>
    </>
  );
}
