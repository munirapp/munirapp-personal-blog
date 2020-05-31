export default function IndexHeroBackground() {
  return (
    <div className="hero-bg">
      <div className="hero-pattern"></div>
      <div className="container">
        <div className="pt-5 pb-5 flex flex-wrap justify-center h-screen">
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <img
              className="hero-image"
              src="/image/profile.webp"
              alt="profile photo"
            />
          </div>
          <div className="w-full lg:w-1/2 flex items-center lg:items-start lg:justify-center flex-col text-white">
            <span className="hero-title mb-4">Munir AP</span>
            <span className="hero-name">Fullstack</span>
            <span className="hero-name font-bold">Web Developer</span>
            <span className="hero-desc text-center lg:text-left text-xs lg:text-base">
              I'm a person who very enthusiastic about agile software
              development methods that involve processes such as analyzing User
              Experience, Quality Assurance and CI / CD (Continuous Integration
              / Continuous Delivery). I also really like challenges and
              experimenting on new things.
            </span>
            <span className="mt-5 font-bold mb-2">Find me at:</span>
            <div className="flex flex-wrap items-center lg:items-center justify-center">
              <div className="w-full">
                <button className="mr-2 text-xs lg:text-base bg-white text-gray-800 font-semibold py-2 px-4 rounded-full">
                  Github
                </button>
                <button className="mr-2 text-xs lg:text-base bg-white text-gray-800 font-semibold py-2 px-4 rounded-full">
                  Facebook
                </button>
                <button className="mr-2 text-xs lg:text-base bg-white text-gray-800 font-semibold py-2 px-4 rounded-full">
                  LinkedIn
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
