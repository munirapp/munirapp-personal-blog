import LazyArtikel from "../general/LazyArtikel";

export default function IndexBlogContent({ classExtend, listFeaturedArtikel }) {
  return (
    <div className={`content-wrapper pb-20 ${classExtend}`} id="blog">
      <div className="content-bg icon-blog"></div>
      <div className="container pt-5 ">
        <div className="content-body">
          <div className="title">Blog</div>
          <div className="mt-5 flex flex-wrapper items-center flex-col">
            {listFeaturedArtikel.map((item) => {
              return (
                <LazyArtikel
                  key={item.id}
                  id={item.id}
                  link={item.link}
                  imageSrc={item.image}
                  title={item.title}
                  caption={item.desc}
                  author={item.author}
                  date={item.date}
                ></LazyArtikel>
              );
            })}
            <a href="/blog" target="__blank">
              <button className="btn btn-model2 mt-12">
                See All Post &#10141;
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
