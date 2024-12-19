const Membership = () => {
  const options = [
    {
      id: 1,
      title: "Starter",
      price: "$19",
      offer: { name: "1 book/month", place: "Online forums" },
      subscribe: "subscribe now",
    },
    {
      id: 2,
      title: "Pro",
      price: "$29",
      offer: { name: "2 books/month", place: "Virtual meetups" },
      subscribe: "subscribe now",
    },
    {
      id: 3,
      title: "Enterprise",
      price: "Custom",
      offer: { name: "Team access", place: "Private sessions" },
      subscribe: "talk to us",
    },
  ];
  return (
    <section className="w-full max-w-4xl pb-5 px-5 md:px-10 mx-auto text-cyan-950 mb-16">
      <h1 className="text-start md:text-center text-3xl md:text-5xl font-bold font-roboto mb-8">
        Membership Options
      </h1>
      <section className="flex flex-col md:flex-row items-start md:items-center gap-5 justify-center mb-14">
        {options.map((option) => (
          <div
            key={option.id}
            className={
              option.id === 2
                ? "ring-1 ring-inset ring-stone-300 px-4 py-6 rounded-xl w-full md:w-64 h-72 bg-gradient-to-br from-white via-orange-50 to-cyan-100"
                : "ring-1 ring-inset ring-stone-300 p-4 rounded-xl w-full md:w-60 h-[266px]"
            }
          >
            <h1 className="font-bold font-roboto mb-3 text-xl">
              {option.title}
            </h1>
            <p className="font-bold font-roboto mb-4 text-2xl">
              {option.id === 3 ? (
                <span>{option.price}</span>
              ) : (
                <span>
                  {option.price}{" "}
                  <span className="font-normal text-base">/month</span>
                </span>
              )}
            </p>
            <ul className="border-t border-stone-300 pt-4 flex flex-col gap-3">
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                  />
                </svg>
                <span>{option.offer.name}</span>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                  />
                </svg>
                <span>{option.offer.place}</span>
              </li>
            </ul>
            <button className="w-full font-roboto bg-orange-50 ring-1 ring-inset ring-cyan-800 uppercase mt-6 rounded-lg font-semibold p-2">
              {option.subscribe}
            </button>
          </div>
        ))}
      </section>

      <section>
        <div className="flex items-center gap-3 justify-start md:justify-center mb-8">
          <img src="/star.svg" className="size-6" />
          <img src="/star.svg" className="size-6" />
          <img src="/star.svg" className="size-6" />
          <img src="/star.svg" className="size-6" />
          <img src="/star.svg" className="size-6" />
        </div>
        <p className="font-bold font-roboto text-lg md:text-2xl w-full md:w-3/4 mx-auto text-start md:text-center mb-4">
          This book club transformed my technical reading from a solitary
          activity into an enriching community experience. The discussions are
          gold!
        </p>
        <p className="text-start md:text-center">
          Sarah Chen, Software Architect
        </p>
      </section>
    </section>
  );
};

export default Membership;
