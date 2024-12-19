const Hero = () => {
  return (
    <section className="bg-hero bg-no-repeat bg-cover bg-orange-50 bg-blend-overlay lg:mb-24 relative">
      <section className="w-full max-w-[1440px] px-5 md:px-10 py-5 mx-auto relative z-10">
        <nav className="flex gap-1 items-center mb-14">
          <img src="/logo.svg" alt="logo" className="size-8" />
          <p className="font-bold text-lg text-stone-800">Tech book club</p>
        </nav>

        <section className="font-medium text-cyan-950 flex lg:flex-row flex-col items-center gap-8">
          <div className="w-full">
            <h1 className="lg:text-6xl md:text-7xl text-4xl font-bold font-space text-transparent bg-gradient-to-r from-orange-300 via-stone-600 to-stone-800 bg-clip-text mb-8 xl:text-7xl">
              Join the ultimate tech book club
            </h1>
            <p className="mb-8 text-xl font-normal md:text-2xl">
              Turn your reading time into learning time with fellow tech
              enthusiasts. Get curated recommendations, join vibrant
              discussions, and level up your skills one chapter at a time.
            </p>
            <button className="flex gap-2 items-center font-roboto p-5 ring-2 ring-cyan-900 rounded-xl ring-inset bg-orange-50 mb-8">
              <p className="uppercase font-bold">review membership options</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                />
              </svg>
            </button>
            <section className="flex md:items-center flex-col md:flex-row gap-4">
              <div className="flex items-center">
                <img src="/person1.jpg" className="size-10 rounded-full" />
                <img src="/person2.jpg" className="size-10 rounded-full" />
                <img src="/person3.jpg" className="size-10 rounded-full" />
              </div>
              <div>
                <img src="/star.svg" className="size-4 inline" />
                <img src="/star.svg" className="size-4 inline" />
                <img src="/star.svg" className="size-4 inline" />
                <img src="/star.svg" className="size-4 inline" />
                <img src="/star.svg" className="size-4 inline" />
                <p className="font-roboto">200+ developers joined already</p>
              </div>
            </section>
          </div>
          <div className="w-full">
            <img
              src="/hero2.jpg"
              alt="hero image"
              className="rounded-2xl h-full"
            />
          </div>
        </section>
      </section>
      <div className="hidden md:block w-1/4 h-64 blur-xl opacity-50 absolute bg-gradient-to-br from-orange-50 to-cyan-900 bottom-0 right-0 z-0"></div>
    </section>
  );
};

export default Hero;
