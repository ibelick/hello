import { NextSeo, ArticleJsonLd } from "next-seo";
import React from "react";

interface LayoutBlogProps {
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
}

export const metadata = {
  title: "How to compress images on client-side",
  description:
    "How to compress images on client-side with JavaScript, TypeScript, React",
  datePublished: "2022-04-07T00:00",
  dateModified: null,
};

const LayoutBlog: React.FC<LayoutBlogProps> = ({
  children,
  title,
  description,
  datePublished,
  dateModified,
}) => {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          url: "https://www.url.ie/a",
          title: title,
          description: description,
        }}
        canonical="https://julienthibeaut.xyz/client-side-images-compression"
      />
      <ArticleJsonLd
        url="https://julienthibeaut.xyz/client-side-images-compression"
        title={title}
        datePublished={datePublished}
        dateModified={dateModified}
        authorName="Julien Thibeaut"
        publisherName="Julien Thibeaut"
        description={description}
        images={["https://www.julienthibeaut.xyz/meta.jpg"]}
      />
      <article className="prose py-12 max-w-screen-md px-6 mx-auto dark:prose-dark">
        {children}
        <p className="text-sm text-right text-gray-600 dark:text-gray-400">
          Published: {new Date(datePublished).toLocaleDateString()}{" "}
          {dateModified
            ? `❍ Last
  update: ${new Date(dateModified).toLocaleDateString()}`
            : null}
        </p>
      </article>
    </>
  );
};

export default LayoutBlog;
