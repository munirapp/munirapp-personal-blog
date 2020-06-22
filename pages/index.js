import { useEffect } from "react";
import iobs from "../lib/iobs";

import Head from "next/head";
import IndexMenuBar from "../components/index/IndexMenuBar";
import IndexHeroBackground from "../components/index/IndexHeroBackground.js";
import IndexBlogContent from "../components/index/IndexBlogContent";
import IndexPortofolioContent from "../components/index/IndexPortofolioContent";
import IndexLabsContent from "../components/index/IndexLabsContent";
import IndexContactContent from "../components/index/IndexContactContent";
import GeneralFooter from "../components/general/GeneralFooter";

function Home() {
  const [observer, setElements, entries] = iobs({
    threshold: 0.25,
    root: null,
  });

  useEffect(() => {
    let contents = Array.from(document.querySelectorAll(".lazy-content"));
    setElements(contents);
  }, [setElements]);

  useEffect(() => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        let lazyContent = entry.target;
        console.log(lazyContent);
        let descContent = lazyContent.querySelector(".desc");
        let maintenanceContent = lazyContent.querySelector(".maintenance");

        if (descContent) {
          descContent.classList.add("animate__animated");
          descContent.classList.add("animate__zoomIn");
        }

        if (maintenanceContent) {
          maintenanceContent.classList.add("animate__animated");
          maintenanceContent.classList.add("animate__zoomIn");
        }
      }
    });
  }, [entries, observer]);

  return (
    <div>
      <Head>
        <title>Munir AP</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <IndexMenuBar />
      <IndexHeroBackground />
      <IndexBlogContent classExtend="lazy-content" />
      <IndexPortofolioContent classExtend="lazy-content" />
      <IndexLabsContent classExtend="lazy-content" />
      <IndexContactContent classExtend="lazy-content" />
      <GeneralFooter />
    </div>
  );
}

export default Home;
