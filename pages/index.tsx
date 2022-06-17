import Link from "next/link";
import React, { useState } from "react";
import NewWindowIcon from "../components/NewWindowIcon";

export default function Home() {
  return (
    <>
      <section className="max-w-screen mx-auto mb-14 px-6 py-12">
        <p className="mb-8 text-gray-600 dark:text-gray-400">
          julien.thibeaut[at]gmail.com
        </p>
        <p>
          Hello! 👋 I’m Julien, a passionate software developer with a focus on
          front-end development.
        </p>{" "}
        <p className="mt-4">
          <span className="underline">Specialties:</span> JavaScript, React,
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
          {/* @TODO: global text for my area of focus */}
          {/* <p>
            Since 2022, I'm focusing on web3. I write smart contracts, learn
            about the future of the internet and the future of work. I build and
            help build products with sustainability and equal rights in mind.
          </p> */}
          <p>
            Based in Paris, I'm open to remote collaboration. Some random
            interests: plants, climate change, cooking, digital art, exploring
            technologies, documentaries, and rap music.{" "}
          </p>
        </details>
        <details className="prose -mx-0 mt-12 dark:prose-dark" open>
          <summary className="cursor-pointer font-semibold">
            Select Projects
          </summary>
          <ul className="items flex max-w-xs list-none flex-col justify-between divide-y pl-0">
            <li className="m-0 mt-5 py-2 pl-0">
              <AccordionProject
                title="newfrenz"
                date={2022}
                description="Onboarding app for web3 concepts. Won the 1st prize of OpenSea
                x Replit Hackathon with it."
                textLink="Website"
                link="https://www.newfrenz.xyz/"
              />
            </li>
            <li className="m-0 py-2 pl-0">
              <AccordionProject
                title="hellocurator"
                date={2022}
                description="Concept app to explore digital art curation."
                textLink="Website"
                link="https://hellocurator.xyz/"
              />
            </li>
            <li className="m-0 py-2 pl-0">
              <AccordionProject
                title="playgrounds"
                date={2022}
                description="Community of builders, who experiment building decentralized
                applications."
                textLink="Website"
                link="https://playgrounds.wtf/"
              />
            </li>
            <li className="m-0 py-2 pl-0">
              <AccordionProject
                title="swile"
                date={2021}
                description="Help building components for the new Swile website."
                textLink="Website"
                link="https://swile.co/"
              />
            </li>
            <li className="m-0 py-2 pl-0">
              <AccordionProject
                title="uxcademy"
                date={2021}
                description="A website to learn UI/UX design through interactive quizzes. +1500 actives learners."
                textLink="Website"
                link="https://uxcademy.com/"
              />
            </li>
            <li className="m-0 py-2 pl-0">
              <AccordionProject
                title="lafourche"
                date={2021}
                description="Front-end architecture & implement new branding."
                textLink="Website"
                link="https://lafourche.fr/"
              />
            </li>
            <li className="m-0 py-2 pl-0">
              <AccordionProject
                title="lafourche"
                date={2020}
                description="Lead the front-end development, from Shopify to Next.js."
                textLink="Website"
                link="https://lafourche.fr/"
              />
            </li>
            <li className="m-0 py-2 pl-0">
              <AccordionProject
                title="madely"
                date={2019}
                description="TikTok for event discovery in Paris. Abandoned during lockdown. 🦠 "
                textLink="Dribbble"
                link="https://dribbble.com/shots/9683319-Madely-Event-Discovery-App"
              />
            </li>
            <li className="m-0 py-2 pl-0">
              <AccordionProject
                title="Foncia R&D"
                date={2018}
                description="Front-end development."
                textLink="Website"
                link="https://fr.foncia.com/"
              />
            </li>
            <li className="m-0 py-2 pl-0">
              <AccordionProject
                title="bitcallz"
                date={2017}
                description="Crypto-prediction platform."
                textLink="Dribbble"
                link="https://dribbble.com/shots/9390744-Bitcallz-crypto-prediction-platform"
              />
            </li>
          </ul>
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

const AccordionProject: React.FC<{
  title: string;
  date: number | string;
  description: string;
  textLink: string;
  link: string;
}> = ({ title, date, description, textLink, link }) => {
  return (
    <AccordionMenu
      title={
        <div className="flex w-full cursor-pointer justify-between">
          <div>{title}</div>
          <span>{date}</span>
        </div>
      }
    >
      <div className="mt-2 mb-1 text-sm font-light text-neutral-500">
        {description}
      </div>
      <a
        className="inline-flex text-sm font-light text-neutral-900 no-underline hover:underline"
        href={link}
        target="_blank"
      >
        {textLink}
        <span className="ml-0.5">
          <NewWindowIcon />
        </span>
      </a>
    </AccordionMenu>
  );
};

const AccordionMenu: React.FC<{ title: React.ReactNode }> = ({
  title,
  children,
}) => {
  const [isToggle, setIsToggle] = useState(false);

  return (
    <div>
      <div onClick={() => setIsToggle(!isToggle)}>{title}</div>
      {isToggle ? children : null}
    </div>
  );
};
