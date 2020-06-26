import LazyArtikel from "../general/LazyArtikel";

const listArtikel = [
  {
    id: 1,
    link: "/blog",
    imageSrc: "http://picsum.photos/200/100",
    title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
    caption:
      "Maxime perferendis consectetur rem vitae veritatis deleniti porro namsunt consequuntur expedita sequi, assumenda excepturi aliquam dolor adipisci, quae illo",
    author: "Munir AP",
    date: "2020-01-01",
  },
  {
    id: 2,
    link: "/blog",
    imageSrc: "http://picsum.photos/200/100",
    title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
    caption:
      "Maxime perferendis consectetur rem vitae veritatis deleniti porro namsunt consequuntur expedita sequi, assumenda excepturi aliquam dolor adipisci, quae illo",
    author: "Munir AP",
    date: "2020-01-01",
  },
  {
    id: 3,
    link: "/blog",
    imageSrc: "http://picsum.photos/200/100",
    title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
    caption:
      "Maxime perferendis consectetur rem vitae veritatis deleniti porro namsunt consequuntur expedita sequi, assumenda excepturi aliquam dolor adipisci, quae illo",
    author: "Munir AP",
    date: "2020-01-01",
  },
];

export default function IndexBlogContent({ classExtend }) {
  return (
    <div className={`content-wrapper pb-20 ${classExtend}`} id="blog">
      <div className="content-bg icon-blog"></div>
      <div className="container pt-5 ">
        <div className="content-body">
          <div className="title">Blog</div>
          <div className="mt-5 flex flex-wrapper items-center flex-col">
            {listArtikel.map((item) => {
              return (
                <LazyArtikel
                  key={item.id}
                  id={item.id}
                  link={item.link}
                  imageSrc={item.imageSrc}
                  title={item.title}
                  caption={item.caption}
                  author={item.author}
                  date={item.date}
                ></LazyArtikel>
              );
            })}
            <button className="btn btn-model2 mt-12">
              See All Post &#10141;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
