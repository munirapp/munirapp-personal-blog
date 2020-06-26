import { useState } from "react";

export default function IndexPortofolioContent({ classExtend }) {
  const [styleBackground, setStyleBackground] = useState([
    {
      background: "url(/image/mobilaku.png)",
      "background-size": "cover",
      "background-position": "center",
      "background-repeat": "no-repeat",
    },
  ]);

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
          <div className="portofolio-section">
            <div className="portofolio-image">
              <div className="bg" style={styleBackground[0]}></div>
              <img src="/image/mobilaku.png" alt="mobilaku" />
            </div>
            <div className="portofolio-content">
              <h2>Mobilaku.com</h2>
              <h3>2019</h3>
              <div className="portofolio-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                cupiditate illo quia recusandae quasi aliquam ipsa molestiae
                explicabo ullam eius sequi laudantium fugit sapiente quisquam
                nesciunt doloribus, repellendus est officia?.
              </div>
              <h4>Role</h4>
              <span className="chip-sm bg-blue-500 text-white">Frontend</span>
              <h4>Stack</h4>
              <span className="chip-sm bg-green-500 text-white">Vue JS</span>
              <span className="chip-sm bg-green-500 text-white">Nuxt JS</span>
              <h4>Website</h4>
              <a href="http://mobilaku.co.id" className="web" target="__blank">
                http://mobilaku.co.id
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
