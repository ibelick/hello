import fs from "fs";
import path from "path";
import Link from "next/link";

const Blog = ({ posts }) => {
  return (
    <section className="max-w-screen-sm py-36 min-h-screen">
      <ul>
        {posts.map((post, index) => {
          return (
            <li key={index} className="mb-6">
              <Link href={`/blog/${post.slug}`}>
                <a>
                  <div>
                    <span>{post.date}</span>
                    <span className="mx-1">✦</span>
                    <a className="font-semibold text-gradient bg-gradient-to-r from-blue-500 to-purple-600">
                      {post.title}
                    </a>
                  </div>
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export const getStaticProps = async () => {
  const postDirectory = path.join(process.cwd(), "pages/blog");
  const postFilenames = fs
    .readdirSync(postDirectory)
    .filter((path) => /\.mdx?$/.test(path));

  const posts = postFilenames.map((slug) => {
    return {
      ...require(`./${slug}`).metadata,
      slug: slug.replace(".mdx", ""),
    };
  });

  return {
    props: {
      posts,
    },
  };
};

export default Blog;
