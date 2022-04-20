import { NextSeo, ArticleJsonLd } from "next-seo";
import React from "react";

interface LayoutBlogProps {
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  path: string;
}

const LayoutBlog: React.FC<LayoutBlogProps> = ({
  children,
  title,
  description,
  datePublished,
  dateModified,
  path,
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
        canonical={`https://julienthibeaut.xyz/blog/${path}`}
      />
      <ArticleJsonLd
        url={`https://julienthibeaut.xyz/blog/${path}`}
        title={title}
        datePublished={datePublished}
        dateModified={dateModified}
        authorName="Julien Thibeaut"
        publisherName="Julien Thibeaut"
        description={description}
        images={["https://www.julienthibeaut.xyz/meta.jpg"]}
      />
      <article className="prose mx-auto max-w-screen-md py-12 px-6 dark:prose-dark">
        {children}
        <p className="text-right text-sm text-gray-600 dark:text-gray-400">
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
