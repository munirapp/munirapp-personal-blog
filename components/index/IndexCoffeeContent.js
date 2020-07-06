import { useState, useEffect, lazy } from "react";
import iobs from "../../lib/iobs";

export default function IndexCoffeeContent({ classExtend }) {
  const fallbackImg = "/image/blur.jpg";

  const listChannel = [
    {
      link: "https://www.patreon.com/munirapp",
      name: "patreon",
      image:
        "https://res.cloudinary.com/softwaremakassar/image/upload/v1594008989/munirapp.github.io/channel/patreon_njelf2.webp",
    },
    {
      link: "https://karyakarsa.com/munirapp",
      name: "karyakarsa",
      image:
        "https://res.cloudinary.com/softwaremakassar/image/upload/v1594008989/munirapp.github.io/channel/karyakarsa_eakslf.webp",
    },
    {
      link: "https://www.buymeacoffee.com/munirapp",
      name: "buymeacoffee",
      image:
        "https://res.cloudinary.com/softwaremakassar/image/upload/v1594008987/munirapp.github.io/channel/buymeacoffee_p1iqks.webp",
    },
  ];

  const [observer, setElements, entries] = iobs({
    threshold: 0.25,
    root: null,
  });

  useEffect(() => {
    let channel = Array.from(document.querySelectorAll(".channel-lazy"));
    setElements(channel);
  }, [setElements]);

  useEffect(() => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        let lazyChannel = entry.target;

        // Lazyload Image Portofolio
        let image = lazyChannel.querySelector("img");
        image.src = image.dataset.src;

        lazyChannel.classList.remove("channel-lazy");
        observer.unobserve(lazyChannel);
      }
    });
  }, [entries, observer]);

  return (
    <div className={`content-wrapper pb-5 ${classExtend}`} id="coffee">
      <div className="content-bg icon-contact"></div>
      <div className="container pt-5">
        <div className="content-body">
          <div className="title">Coffee Shop</div>
          <div className="desc mt-3">
            Sometimes Programming, developing, and debugging is a tiring
            process. Like coffee for programmers, a cup of appreciation can make
            me even more excited to write code better. If you are helped by what
            I have done, you can give me a cup of appreciation on the following
            channel
          </div>
          <div className="div-flex mt-5 lg:mt-12">
            {listChannel.map((item, index) => {
              return (
                <a href={item.link} target="__blank" key={index}>
                  <div className="card channel-lazy">
                    <div className="card-content-flex">
                      <img
                        className="img-btn"
                        src={fallbackImg}
                        data-src={item.image}
                        alt={item.name}
                      />
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="div-flex mt-5">
            <span className="text-2xl">Need Contact me?</span>
          </div>

          <div className="div-flex mt-5">
            <div className="card">
              <div className="card-content-flex">
                <a href="mailto:softwaremakassar@gmail.com" target="__blank">
                  <span>📥 softwaremakassar@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
