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
        <div className="article-image">
          <img src={fallbackImg} alt="Image Post" data-src={imageSrc} />
        </div>
        <div className="article-body">
          <span className="article-title">{title}</span>
          <span className="article-caption">{caption}</span>
          <div className=" article-detail">
            <span>
              <i>Author: </i>
              {author}
            </span>
            <span>
              <i>Date: </i>
              {date}
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}

export default LazyArtikel;
