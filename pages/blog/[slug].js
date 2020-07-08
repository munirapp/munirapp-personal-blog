import { Component } from "react";
import Head from "next/head";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";
import hljs from "highlight.js";

import BlogHeader from "../../components/general/BlogHeader";
import GeneralFooter from "../../components/general/GeneralFooter";

class BlogDetail extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.querySelectorAll("pre code").forEach((block) => {
      hljs.highlightBlock(block);
    });
  }

  render() {
    const { content, meta } = this.props;

    return (
      <div>
        <Head>
          <title>{meta.title}</title>
          <meta name="description" content={meta.desc} />
        </Head>

        <BlogHeader linkBack="/blog" textBack="Back to Blog" />

        <div className="blog-wrapper">
          <div className="blog-header">
            <div className="title">{meta.title}</div>
            <div className="desc">
              Author: {meta.author} | Date: {meta.date}
            </div>
            <img
              src={meta.image}
              alt={meta.title}
              className="animate__animated animate__zoomIn"
            />
          </div>
          <div className="container">
            <div className="blog-body">
              <div dangerouslySetInnerHTML={{ __html: content }}></div>
            </div>
          </div>
        </div>

        <GeneralFooter />
      </div>
    );
  }
}

// const BlogSlug = ({ slug, content, meta }) => {
//   document.querySelectorAll("pre code").forEach((block) => {
//     hljs.highlightBlock(block);
//   });

//   return (

//   );
// };

export const getStaticPaths = async () => {
  const files = fs.readdirSync("data/artikel");
  const paths = files.map((item) => ({
    params: {
      slug: item.replace(".md", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const rawMarkDown = fs
    .readFileSync(path.join("data/artikel", `${slug}.md`))
    .toString();
  const parseMarkDown = matter(rawMarkDown);
  const htmlString = marked(parseMarkDown.content);

  return {
    props: { slug, content: htmlString, meta: parseMarkDown.data },
  };
};

export default BlogDetail;
