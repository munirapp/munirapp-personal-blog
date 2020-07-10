import BlogHeader from "../../components/blog/BlogHeader";
import LazyArtikel from "../../components/general/LazyArtikel";
import GeneralFooter from "../../components/general/GeneralFooter";

const Blog = ({ listArtikel }) => {
  return (
    <div>
      <BlogHeader linkBack="/" textBack="Back to Home" />
      <div className="container">
        <div className="blog-wrapper">
          <div className="blog-header">
            <div className="title">Blog</div>
            <div className="desc">Read All Blog Posts</div>
          </div>
          <div className="blog-body">
            {listArtikel.map((item) => {
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
          </div>
        </div>
      </div>
      <GeneralFooter />
    </div>
  );
};

export const getStaticProps = async () => {
  const getArtikel = await fetch(`${process.env.API_URL}/artikel`);

  const listArtikel = await getArtikel.json();

  return { props: { listArtikel } };
};

export default Blog;
