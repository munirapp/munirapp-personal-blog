export default function IndexHeroBackground() {
  return (
    <div className="hero-section" id="home">
      <div className="hero-pattern"></div>
      <div className="container flex">
        <div className="div-flex">
          <div className="hero-image">
            <img src="/image/profile.webp" alt="profile photo" loading="lazy" />
          </div>
          <div className="hero-desc">
            <span className="title chip yellow text-blue">Munir AP</span>
            <span className="name">Fullstack</span>
            <span className="name font-bold">Web Developer</span>
            <span className="desc">
              I'm a person who very enthusiastic about agile software
              development methods that involve processes such as analyzing User
              Experience, Quality Assurance and CI / CD (Continuous Integration
              / Continuous Delivery). I also really like challenges and
              experimenting on new things.
            </span>
            <span className="mt-5 mb-5 font-bold desc">Find me at:</span>
            <div>
              <div className="w-full">
                <a href="https://github.com/munirapp" target="__blank">
                  <button className="btn btn-model1 hero-btn">Github</button>
                </a>
                <a href="https://facebook.com/m.munir.ap" target="__blank">
                  <button className="btn btn-model1 hero-btn">Facebook</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
