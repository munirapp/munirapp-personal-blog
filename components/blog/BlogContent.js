import { Component, useEffect } from "react";
import { highlightBlock } from "highlight.js";
import iobs from "../../lib/iobs";

const BlogContent = ({ content }) => {
  const [observer, setElements, entries] = iobs({
    threshold: 0.25,
    root: null,
  });

  useEffect(() => {
    document.querySelectorAll("pre").forEach((code) => {
      code.classList.add("lazy-code");
    });
    let blockCode = Array.from(document.querySelectorAll(".lazy-code"));
    setElements(blockCode);
  }, [setElements]);

  useEffect(() => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        let lazyBlockCode = entry.target;
        highlightBlock(lazyBlockCode);
        lazyBlockCode.classList.remove("lazy-code");
        observer.unobserve(lazyBlockCode);
      }
    });
  }, [entries, observer]);

  return (
    <div className="blog-body">
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </div>
  );
};

export default BlogContent;
