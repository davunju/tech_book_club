const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-cyan-950 bg-hero bg-cover bg-no-repeat bg-blend-darken text-orange-50 rounded-t-2xl pt-14 px-5 text-center">
      <section>
        <h1 className="text-3xl md:text-5xl font-semibold font-roboto">
          Ready to debug your
        </h1>
        <h2 className="text-3xl md:text-5xl font-semibold font-roboto mb-10">
          reading list?
        </h2>
        <a href="#membership">
        <button className="mb-8 flex items-center gap-3 uppercase ring-1 ring-inset ring-orange-50 rounded-lg p-4 mx-auto hover:text-cyan-950 hover:bg-orange-50">
          <p className="font-bold font-roboto">review membership options</p>
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
              d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
            />
          </svg>
        </button>
        </a>
        <section className="flex flex-col md:flex-row items-start md:items-center gap-4 text-start justify-center mb-10">
          <div className="flex items-center">
            <img
              src="/person1.jpg"
              className="size-10 rounded-full ring-1 ring-orange-50"
            />
            <img
              src="/person2.jpg"
              className="size-10 rounded-full ring-1 ring-orange-50"
            />
            <img
              src="/person3.jpg"
              className="size-10 rounded-full ring-1 ring-orange-50"
            />
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

        <section className="w-11/12 max-w-5xl mx-auto border-t border-gray-400 py-4 flex flex-col md:flex-row gap-2 items-center justify-between">
          <div className="font-roboto">© {year} - Tech Book Club</div>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="size-5 fill-orange-50"
            >
              <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="size-5 fill-orange-50"
            >
              <path d="M111.8 62.2C170.2 105.9 233 194.7 256 242.4c23-47.6 85.8-136.4 144.2-180.2c42.1-31.6 110.3-56 110.3 21.8c0 15.5-8.9 130.5-14.1 149.2C478.2 298 412 314.6 353.1 304.5c102.9 17.5 129.1 75.5 72.5 133.5c-107.4 110.2-154.3-27.6-166.3-62.9l0 0c-1.7-4.9-2.6-7.8-3.3-7.8s-1.6 3-3.3 7.8l0 0c-12 35.3-59 173.1-166.3 62.9c-56.5-58-30.4-116 72.5-133.5C100 314.6 33.8 298 15.7 233.1C10.4 214.4 1.5 99.4 1.5 83.9c0-77.8 68.2-53.4 110.3-21.8z" />
            </svg>
          </div>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
