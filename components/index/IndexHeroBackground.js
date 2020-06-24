export default function IndexHeroBackground() {
  const goto = (url) => {
    location.href = url;
  };

  return (
    <div className="hero-section" id="home">
      <div className="hero-pattern"></div>
      <div className="container">
        <div className="div-flex-h-full">
          <div className="hero-image">
            <img src="/image/profile.webp" alt="profile photo" loading="lazy" />
          </div>
          <div className="hero-desc">
            <span className="title chip yellow text-blue">Munir AP</span>
            <span className="hero-name animate__animated animate__fadeIn animate__delay-1s">
              Fullstack
            </span>
            <span className="hero-name font-bold animate__animated animate__fadeIn animate__delay-1s">
              Web Developer
            </span>
            <span className="text-center lg:text-left text-xs lg:text-base animate__animated animate__fadeIn animate__delay-1s">
              I'm a person who very enthusiastic about agile software
              development methods that involve processes such as analyzing User
              Experience, Quality Assurance and CI / CD (Continuous Integration
              / Continuous Delivery). I also really like challenges and
              experimenting on new things.
            </span>
            <span className="mt-5 font-bold mb-2 animate__animated animate__fadeIn animate__delay-1s">
              Find me at:
            </span>
            <div className="flex flex-wrap items-center lg:items-center justify-center">
              <div className="w-full">
                <a href="https://github.com/munirapp" target="__blank">
                  <button className="mr-2 text-xs lg:text-base bg-white text-gray-800 font-semibold py-2 px-4 rounded-full animate__animated animate__zoomIn animate__delay-1s">
                    Github
                  </button>
                </a>
                <a href="https://facebook.com/m.munir.ap" target="__blank">
                  <button className="mr-2 text-xs lg:text-base bg-white text-gray-800 font-semibold py-2 px-4 rounded-full animate__animated animate__zoomIn animate__delay-1s">
                    Facebook
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
