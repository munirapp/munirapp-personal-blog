import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Carousel from "@brainhubeu/react-carousel";
import iobs from "../../lib/iobs";

const {} = dynamic(() => require("@brainhubeu/react-carousel"), { ssr: false });

function IndexPortofolioContent({ classExtend }) {
  const fallbackImg = "/image/blur.jpg";

  const bgStyles = {
    "background-size": "cover",
    "background-position": "center",
    "background-repeat": "no-repeat",
  };

  const styleBackground = [
    {
      id: 0,
      image: "/image/mobilaku.png",
      title: "Mobilaku.com",
      year: "2019",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Dolorem cupiditate illo quia recusandae quasi aliquam ipsa
      molestiae explicabo ullam eius sequi laudantium fugit
      sapiente quisquam nesciunt doloribus, repellendus est
      officia?.`,
      role: ["Frontend"],
      stack: ["Vue JS", "Nuxt JS"],
      website: "http://mobilaku.co.id",
    },
  ];

  const [observer, setElements, entries] = iobs({
    threshold: 0.25,
    root: null,
  });

  useEffect(() => {
    let portofolio = Array.from(document.querySelectorAll(".portofolio-lazy"));
    setElements(portofolio);
  }, [setElements]);

  useEffect(() => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        let lazyPortofolio = entry.target;

        // Lazyload Background image
        let id = lazyPortofolio.dataset.id;
        let bgPortofolio = lazyPortofolio.querySelector(".bg");
        bgPortofolio.style.background = `url(${styleBackground[id].image})`;

        // Lazyload Image Portofolio
        let image = lazyPortofolio.querySelector("img");
        image.src = image.dataset.src;

        lazyPortofolio.classList.remove("portofolio-lazy");
        observer.unobserve(lazyPortofolio);
      }
    });
  }, [entries, observer]);

  return (
    <div className={`content-wrapper pb-20 ${classExtend}`} id="portofolio">
      <div className="content-bg icon-portofolio"></div>
      <div className="container pt-5">
        <div className="content-body">
          <div className="title">Portofolio</div>
          <div className="desc">
            Since 2016 until now, I have helped several Government Agencies,
            Private Parties and Small Startups. My specialty is working on
            web-based software projects such as web design, company information
            systems, REST API Management and so on.
          </div>
          <Carousel autoPlay={4000} infinite stopAutoPlayOnHover arrows>
            {styleBackground.map((item) => {
              return (
                <div
                  className="portofolio-section portofolio-lazy"
                  key={item.id}
                  data-id={item.id}
                >
                  <div className="portofolio-image">
                    <div
                      className="bg"
                      style={{ ...bgStyles, background: `url(${fallbackImg})` }}
                    ></div>
                    <img
                      src={fallbackImg}
                      data-src={item.image}
                      alt={item.title}
                    />
                  </div>
                  <div className="portofolio-content">
                    <h2>{item.title}</h2>
                    <h3>{item.year}</h3>
                    <div className="portofolio-desc">{item.desc}</div>
                    <h4>Role</h4>
                    {item.role.map((role, index) => {
                      return (
                        <span
                          className="chip-sm bg-blue-500 text-white"
                          key={index}
                        >
                          {role}
                        </span>
                      );
                    })}
                    <h4>Stack</h4>
                    {item.stack.map((stack, index) => {
                      return (
                        <span
                          className="chip-sm bg-green-500 text-white"
                          key={index}
                        >
                          {stack}
                        </span>
                      );
                    })}
                    <h4>Website</h4>
                    <a href={item.website} className="web" target="__blank">
                      {item.website}
                    </a>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost");
}

export default IndexPortofolioContent;
