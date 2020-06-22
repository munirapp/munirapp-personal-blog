import { useEffect, useState } from "react";

import iobs from "../../lib/iobs";
import ImageLazy from "../general/ImageLazy";
const fallbackImg = "/image/blur.jpg";

export default function IndexBlogContent() {
  const [observer, setElements, entries] = iobs({
    threshold: 0.25,
    root: null,
  });

  const [classArticle, setClassArticle] = useState(
    "article article-lazy flex flex-wrap mb-5"
  );

  useEffect(() => {
    let img = Array.from(document.querySelectorAll(".lazy"));
    let article = Array.from(document.querySelectorAll(".article-lazy"));
    setElements(img.concat(article));
  }, [setElements]);

  useEffect(() => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.classList.value.includes("article-lazy")) {
          let article = entry.target;
          setClassArticle(`${classArticle} animate__animated animate__zoomIn`);
          article.classList.remove("article-lazy");
          observer.unobserve(article);
        } else {
          let lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.classList.remove("lazy");
          observer.unobserve(lazyImage);
        }
      }
    });
  }, [entries, observer]);

  return (
    <div className="content-wrapper pb-20" id="blog">
      <div className="content-bg icon-blog"></div>
      <div className="container pt-5 ">
        <div className="content-body">
          <div className="title">Blog</div>
          <div className="mt-5 flex flex-wrapper items-center flex-col">
            {Array.from(Array(3)).map((item) => {
              return (
                <a href="/blog" className="w-full">
                  <div className={classArticle}>
                    <div className="w-full lg:w-1/4">
                      <ImageLazy
                        src="http://picsum.photos/200/100"
                        fallbackSrc={fallbackImg}
                        isLazy
                        alt="Image Post"
                      ></ImageLazy>
                    </div>
                    <div className="w-full lg:w-3/4 flex flex-wrapper flex-col p-6">
                      <span className="article-title text-xl lg:text-4xl">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit
                      </span>
                      <span className="italic text-sm">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Quam excepturi itaque fugit impedit saepe eius
                        commodi...
                      </span>
                      <div className="flex flex-wrap article-detail mt-5 text-sm">
                        <span className="mr-5 font-bold">
                          Author: <i>John Doe</i>
                        </span>
                        <span className="mr-5 font-bold">
                          Date: <i>2020-06-02</i>
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              );
            })}
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded text-lg">
              See All Post &#10141;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
