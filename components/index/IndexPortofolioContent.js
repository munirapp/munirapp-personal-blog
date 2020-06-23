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
          <div className="desc mt-3">
            Since 2016 until now, I have helped several Government Agencies,
            Private Parties and Small Startups. My specialty is working on
            web-based software projects such as web design, company information
            systems, REST API Management and so on.
          </div>
          <div className="flex flex-wrap justify-center mt-5 portofolio">
            <div className="w-full lg:w-3/5 image-portofolio">
              <div className="bg" style={styleBackground[0]}></div>
              <img src="/image/mobilaku.png" alt="mobilaku" />
            </div>
            <div className="w-full lg:w-2/5">
              <h2>Mobilaku.com</h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              cupiditate illo quia recusandae quasi aliquam ipsa molestiae
              explicabo ullam eius sequi laudantium fugit sapiente quisquam
              nesciunt doloribus, repellendus est officia?
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
