const Explore = () => {
  const reads = [
    "Monthly curated tech reads selected by industry experts",
    "Virtual and in-person meetups for deep-dive discussions",
    "Early access to new tech book releases",
    "Author Q&A sessions with tech thought leaders",
  ];

  const lists = [
    {
      id: 1,
      description: "Choose your membership tier",
      svg: "/arrow.svg",
    },
    {
      id: 2,
      description: "Get your monthly book selection",
      svg: "/arrow.svg",
    },
    {
      id: 3,
      description: "Join our discussion forums",
      svg: "/arrow.svg",
    },
    {
      id: 4,
      description: "Attend exclusive meetups",
    },
  ];
  return (
    <section className="my-14 w-full mx-auto py-5 px-10 max-w-[1440px] text-cyan-950 font-medium mb-16">
      <div className="flex items-center justify-center gap-14 mb-24">
        <div className="w-1/2">
          <img src="/hero3.jpg" alt="read together" className="rounded-2xl" />
        </div>
        <div className="w-1/2">
          <h1 className="text-5xl font-bold font-roboto">Read together,</h1>
          <h2 className="text-5xl font-bold font-roboto mb-5">grow together</h2>
          <ul>
            {reads.map((read) => (
              <li key={read} className="flex items-center gap-2 mt-2">
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
                    d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                  />
                </svg>
                <span className="text-xl font-normal">{read}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative mb-28">
        <div className="flex items-center justify-center gap-10">
          <div className="w-1/2">
            <h1 className="text-6xl font-bold font-roboto mb-8">
              Not your average book{" "}
              <span className="ring ring-orange-200 ring-inset">club</span>
            </h1>
            <p className="text-xl font-normal">
              Connect with a community that speaks your language - from{" "}
              <span className="font-medium">Python</span> to{" "}
              <span className="font-medium">TypeScript</span> and everything in
              between. Our discussions blend technical depth with practical
              applications.
            </p>
          </div>
          <div className="w-1/2">
            <img src="/hero4.jpg" alt="" className="rounded-2xl" />
          </div>
        </div>

        <div className="absolute top-3/4 right-1/2 flex flex-col gap-3">
          <img src="/typescript.svg" alt="typescript" className="" />
          <div className="flex items-start gap-3">
            <img src="/github.svg" alt="github" />
            <img
              src="/react.png"
              alt="react"
              className="size-10 bg-cyan-300 rounded-full p-1"
            />
          </div>
        </div>
      </div>

      <div className="relative z-10 bg-hero bg-no-repeat bg-cover max-w-4xl mx-auto bg-orange-50 bg-blend-overlay rounded-xl p-8">
        <h1 className="text-5xl text-center font-bold font-roboto">
          Your tech
        </h1>
        <h2 className="text-5xl text-center font-bold font-roboto mb-12">
          reading journey
        </h2>
        <ul className="flex items-center gap-10">
          {lists.map((list) => (
            <li key={list.id}>
              <div className="flex items-center justify-between mb-5">
                <p className="ring ring-inset ring-cyan-900 rounded-lg px-4 py-2">
                  {list.id}
                </p>
                {list.svg ? <img src={list.svg} className="size-8" /> : ""}
              </div>
              <p className="font-semibold">{list.description}</p>
            </li>
          ))}
        </ul>
        <div className="w-52 h-48 blur-xl opacity-50 absolute bg-gradient-to-br from-orange-50 to-cyan-800 bottom-0 right-0 z-0"></div>
      </div>
    </section>
  );
};

export default Explore;
