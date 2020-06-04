export default function IndexBlogContent() {
  return (
    <div className="content-wrapper" id="blog">
      <div className="content-bg icon-blog"></div>
      <div className="container pt-5 lg:pt-16">
        <div className="content-body">
          <div className="title">Blog</div>
          <div className="desc mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            doloribus aspernatur quos at tenetur mollitia fugiat asperiores!
            Molestiae, quas hic ut ratione error distinctio eum non,
            voluptatibus, facilis voluptatum soluta.
          </div>
          <div className="mt-5 flex flex-wrapper items-center flex-col">
            {Array.from(Array(3)).map((item) => {
              return (
                <div className="article flex flex-wrapper mb-2">
                  <div className="w-full lg:w-1/2">
                    <img
                      src="http://picsum.photos/200/100"
                      alt="article photo"
                    />
                  </div>
                  <div className="w-full lg:w-1/2 flex flex-wrapper flex-col justify-center p-5">
                    <span className="article-title">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit
                    </span>
                    <span className="italic">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Quam excepturi itaque fugit impedit saepe eius commodi...
                    </span>
                    <div className="article-detail">
                      <span className="mr-5 font-bold">
                        Author: <i>John Doe</i>
                      </span>
                      <span className="mr-5 font-bold">
                        Date: <i>2020-06-02</i>
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
