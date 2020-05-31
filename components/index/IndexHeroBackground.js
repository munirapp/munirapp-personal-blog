import typed from "typed.js";

export default function IndexHeroBackground() {
  return (
    <div className="hero-bg">
      <div className="container">
        <div className="pt-5 pb-5 flex flex-wrap lg:justify-center lg:h-screen">
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <img
              className="hero-image"
              src="/image/profile.png"
              alt="profile photo"
            />
          </div>
          <div className="w-full lg:w-1/2 flex items-center lg:items-start justify-center flex-col text-white">
            <span className="hero-title mb-4">Munir AP</span>
            <span className="hero-name">Fullstack</span>
            <span className="hero-name">
              <b>Web Developer</b>
            </span>
            <span className="hero-desc text-center lg:text-left">
              I'm a person who very enthusiastic about agile software
              development methods that involve processes such as analyzing User
              Experience, Quality Assurance and CI / CD (Continuous Integration
              / Continuous Delivery). I also really like challenges and
              experimenting on new things.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
