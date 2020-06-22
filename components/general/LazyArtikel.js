import { useEffect, useState } from "react";

import iobs from "../../lib/iobs";
const fallbackImg = "/image/blur.jpg";

function LazyArtikel({ id, link, imageSrc, title, caption, author, date }) {
  const [observer, setElements, entries] = iobs({
    threshold: 0.25,
    root: null,
  });

  const [classArticle, setClassArticle] = useState(
    `article lazy-article-${id} flex flex-wrap mb-5`
  );

  useEffect(() => {
    let article = [document.querySelector(".lazy-article-" + id)];
    setElements(article);
  }, [setElements]);

  useEffect(() => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        let lazyArticle = entry.target;
        let image = lazyArticle.querySelector("img");
        image.src = image.dataset.src;
        setClassArticle(`${classArticle} animate__animated animate__zoomIn`);
        lazyArticle.classList.remove("lazy-article" + id);
        observer.unobserve(lazyArticle);
      }
    });
  }, [entries, observer]);

  return (
    <a href={link} className="w-full">
      <div className={classArticle}>
        <div className="w-full lg:w-1/4">
          <img src={fallbackImg} alt="Image Post" data-src={imageSrc} />
        </div>
        <div className="w-full lg:w-3/4 flex flex-wrapper flex-col p-6">
          <span className="article-title text-xl lg:text-4xl">{title}</span>
          <span className="italic text-sm">{caption}</span>
          <div className="flex flex-wrap article-detail mt-5 text-sm">
            <span className="mr-5 font-bold">
              Author: <i>{author}</i>
            </span>
            <span className="mr-5 font-bold">
              Date: <i>{date}</i>
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}

export default LazyArtikel;
