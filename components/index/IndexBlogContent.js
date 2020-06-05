export default function IndexBlogContent() {
  return (
    <div className="content-wrapper my-20" id="blog">
      <div className="content-bg icon-blog"></div>
      <div className="container pt-5 lg:pt-16">
        <div className="content-body">
          <div className="title">Blog</div>
          <div className="mt-5 flex flex-wrapper items-center flex-col">
            {Array.from(Array(3)).map((item) => {
              return (
                <a href="/blog" className="w-full">
                  <div className="article flex flex-wrap mb-5">
                    <div className="w-full lg:w-1/4">
                      <img
                        src="http://picsum.photos/200/100"
                        alt="article photo"
                      />
                    </div>
                    <div className="w-full lg:w-3/4 flex flex-wrapper flex-col p-6">
                      <span className="article-title text-lg lg:text-3xl">
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
            <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded text-lg">
              See All Post &#10141;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
