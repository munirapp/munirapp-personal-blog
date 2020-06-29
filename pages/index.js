import { useEffect } from "react";
import iobs from "../lib/iobs";
import Head from "next/head";
import dynamic from "next/dynamic";

const IndexMenuBar = dynamic(() => import("../components/index/IndexMenuBar"));
const IndexHeroBackground = dynamic(() =>
  import("../components/index/IndexHeroBackground")
);
const IndexBlogContent = dynamic(() =>
  import("../components/index/IndexBlogContent")
);
const IndexPortofolioContent = dynamic(() =>
  import("../components/index/IndexPortofolioContent")
);
const IndexCoffeeContent = dynamic(() =>
  import("../components/index/IndexCoffeeContent")
);
const GeneralFooter = dynamic(() =>
  import("../components/general/GeneralFooter")
);

function Home({ listPortofolio }) {
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

        let descContent = lazyContent.querySelector(".desc");
        if (descContent) {
          descContent.classList.add("animate__animated");
          descContent.classList.add("animate__zoomIn");
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
      <IndexPortofolioContent
        classExtend="lazy-content"
        listPortofolio={listPortofolio}
      />
      <IndexCoffeeContent classExtend="lazy-content" />
      <GeneralFooter />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.API_URL}/portofolio`);
  const listPortofolio = await res.json();
  return { props: { listPortofolio } };
};

export default Home;
