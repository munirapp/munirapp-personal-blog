export default function IndexContactContent({ classExtend }) {
  return (
    <div className={`content-wrapper pb-5 ${classExtend}`} id="coffee">
      <div className="content-bg icon-contact"></div>
      <div className="container pt-5">
        <div className="content-body">
          <div className="title">Coffee Shop</div>
          <div className="desc mt-3">
            Programming, developing, and debugging is sometimes a tiring
            process. Like coffee for programmers, a cup of appreciation can make
            me even more excited to write code better. If you are helped by what
            I have done, you can give me a cup of appreciation on the following
            channel
          </div>
          <div className="div-flex mt-12">
            <div className="card">
              <div className="card-content-flex">
                <img
                  className="img-btn"
                  src="/image/patreon.png"
                  alt="patreon"
                />
              </div>
            </div>
            <div className="card">
              <div className="card-content-flex">
                <img
                  className="img-btn"
                  src="/image/karyakarsa.png"
                  alt="karyakarsa"
                />
              </div>
            </div>
            <div className="card">
              <div className="card-content-flex">
                <img
                  className="img-btn"
                  src="/image/buymeacoffee.svg"
                  alt="karyakarsa"
                />
              </div>
            </div>
          </div>
          {/* <div className="maintenance"></div> */}
        </div>
      </div>
    </div>
  );
}
