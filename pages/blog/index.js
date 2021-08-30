import fs from "fs";
import path from "path";
import Link from "next/link";

const Blog = ({ posts }) => {
  return (
    <section className="max-w-screen-md px-6 mx-auto py-36">
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.slug} className="mb-6">
              <Link href={`/blog/${post.slug}`}>
                <a>
                  <div>
                    <span className="text-gray-600 dark:text-gray-300">
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <span className="mx-1">✦</span>
                    <span className="font-semibold text-gradient bg-gradient-to-r from-blue-500 to-purple-600 hover:bg-gradient-to-r from-blue-500 to-purple-600">
                      {post.title}
                    </span>
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

  const posts = postFilenames
    .map((slug) => {
      return {
        ...require(`./${slug}`).metadata,
        slug: slug.replace(".mdx", ""),
      };
    })
    .sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });

  return {
    props: {
      posts,
    },
  };
};

export default Blog;
