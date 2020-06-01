export default function IndexHeroBackground() {
  const goto = (url) => {
    location.href = url;
  };

  return (
    <div className="hero-bg">
      <div className="hero-pattern"></div>
      <div className="container">
        <div className="pt-5 pb-5 flex flex-wrap justify-center h-screen">
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <img
              className="hero-image animate__animated animate__zoomIn"
              src="/image/profile.webp"
              alt="profile photo"
              loading="lazy"
            />
          </div>
          <div className="w-full lg:w-1/2 flex items-center lg:items-start lg:justify-center flex-col text-white">
            <span className="hero-title mb-4 animate__animated animate__fadeIn animate__delay-1s">
              Munir AP
            </span>
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
            <span className="mt-5 font-bold mb-2 animate__animated animate__fadeIn animate__delay-2s">
              Find me at:
            </span>
            <div className="flex flex-wrap items-center lg:items-center justify-center">
              <div className="w-full">
                <a href="https://github.com/munirapp" target="__blank">
                  <button className="mr-2 text-xs lg:text-base bg-white text-gray-800 font-semibold py-2 px-4 rounded-full animate__animated animate__zoomIn animate__delay-2s">
                    Github
                  </button>
                </a>
                <a href="https://facebook.com/m.munir.ap" target="__blank">
                  <button className="mr-2 text-xs lg:text-base bg-white text-gray-800 font-semibold py-2 px-4 rounded-full animate__animated animate__zoomIn animate__delay-2s">
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
