import { Component } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";

import BlogHeader from "../../components/blog/BlogHeader";
import GeneralFooter from "../../components/general/GeneralFooter";
const BlogContent = dynamic(() => import("../../components/blog/BlogContent"), {
  ssr: false,
});

const BlogDetail = ({ content, meta }) => {
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="author" content={meta.author} />
        <meta name="description" content={meta.desc} />
        <meta
          property="og:url"
          content={`https://munirapp.github.io/blog/${meta.date}-${meta.slug}`}
        />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.desc} />
        <meta property="og:image" content={meta.image} />
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
          <BlogContent content={content} />
        </div>
      </div>

      <GeneralFooter />
    </div>
  );
};

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
