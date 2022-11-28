import { useInView } from "react-intersection-observer";
import { AiFillIeCircle } from "react-icons/ai";
import { BsFileEarmarkCode,BsFillArrowUpCircleFill } from "react-icons/bs";

const Projects = () => {
  const { ref: firstRef, inView: firstVisible } = useInView({
    threshold: 0.7,
  });
  const { ref: secondRef, inView: secondVisible } = useInView({
    threshold: 0.7,
  });
  const { ref: thirdRef, inView: thirdVisible } = useInView({
    threshold: 0.7,
  });

  return (
    <section className="w-screen">
      <div
        ref={firstRef}
        className="w-[375px] sm:w-[640px] md:w-[768px] lg:h-[500px] lg:w-[1024px] mx-auto mt-[50px] lg:mt-[100px] relative"
      >
        <img
          src={require("../img/exchange.jpg")}
          alt=""
          className="w-full h-full rounded"
        />
        <div
          className={`w-[375px] h-[180px] sm:w-[326px] sm:h-full md:w-[395px] overflow-scroll sm:overflow-hidden lg:h-[500px] lg:w-[530px] absolute top-0 left-0 text-gray-100 rounded-l `}
        >
          <div className="h-[165px] sm:h-0 w-full bg-transparent"></div>
          <div className="h-[260px] sm:h-full bg-[rgb(15,20,27,0.8)]">
            <div className=" lg:p-3 text-xs md:text-sm lg:text-base">
              <h2
                className={`text-center text-xs sm:text-sm md:text-base sm:py-1 lg:text-xl font-bold md:mb-2 lg:mb-6 relative ${
                  firstVisible
                    ? "opacity-100 blur-none translate-x-0"
                    : "opacity-0 blur translate-y-full"
                } transition ease-linear duration-300`}
              >
                Exchange Rates API
                <div className="absolute top-[1.5px] left-[100px] sm:hidden">
                  <BsFillArrowUpCircleFill/>
                </div>
                <div className="absolute top-[1.5px] right-[100px] sm:hidden">
                  <BsFillArrowUpCircleFill/>
                </div>
              </h2>
              <div
                className={`${
                  firstVisible
                    ? "opacity-100 blur-none translate-x-0"
                    : "opacity-0 blur translate-y-full"
                } transition ease-linear duration-300 delay-150`}
              >
                <h3 className="text-center underline">Description</h3>
                <p className="text-center my-2 mx-1 md:mx-2">
                  {`The website enables checking the currency rate in a
                  particular day of the week, on the chart it can be seen what has
                  changed throughout the whole month. You can save some currency to "Favorites", 
                  and using Drag&drop delete chosen currency rate in a
                  convenient way. Thanks to these functions you will
                  be keep up with both the percentage increase and price.`}
                </p>
              </div>
              <div
                className={`${
                  firstVisible
                    ? "opacity-100 blur-none translate-x-0"
                    : "opacity-0 blur translate-y-full"
                } transition ease-linear duration-300 delay-300`}
              >
                <h3 className="text-center underline md:mt-2 lg:mt-6">Stack</h3>
                <div className="flex flex-wrap md:my-3 gap-1 md:px-2 lg:ml-2 text-xs lg:text-sm justify-center">
                  <div className="rounded-2xl bg-slate-700 py-1 px-2">
                    Tailwind
                  </div>
                  <div className="rounded-2xl bg-slate-700 py-1 px-2">
                    React
                  </div>
                  <div className="rounded-2xl bg-slate-700 py-1 px-2">
                    Typescript
                  </div>
                  <div className="rounded-2xl bg-slate-700 py-1 px-2">RWD</div>
                  <div className="rounded-2xl bg-slate-700 py-1 px-2">
                    exchangerate.host API
                  </div>
                  <div className="rounded-2xl bg-slate-700 py-1 px-2">CSS</div>
                  <div className="rounded-2xl bg-slate-700 py-1 px-2">HTML</div>
                  <div className="rounded-2xl bg-slate-700 py-1 px-2">
                    Javascript
                  </div>
                  <div className="rounded-2xl bg-slate-700 py-1 px-2">
                    Chart.js
                  </div>
                  <div className="rounded-2xl bg-slate-700 py-1 px-2">Git</div>
                  <div className="rounded-2xl bg-slate-700 py-1 px-2">{`Drag&Drop`}</div>
                </div>
              </div>
              <div
                className={`relative mt-10 md:mt-16 lg:mt-20 text-xs md:text-sm lg:text-lg ${
                  firstVisible
                    ? "opacity-100 blur-none translate-x-0"
                    : "opacity-0 blur translate-y-full"
                } transition ease-linear duration-300 delay-500`}
              >
                <a
                  target="_blank"
                  href="https://exchange-rates-api-zietaladrian.vercel.app"
                  className="rounded-3xl text-[#A11B8A] hover:scale-y-[103%] hover:scale-x-[105%] bg-gray-200 py-1 px-3 absolute bottom-0 left-[50px] z-10 flex border-solid border-[#A11B8A] border-[1px]"
                >
                  <AiFillIeCircle className="mt-[2px] lg:mt-[4px] mr-1 text-xs md:text-sm lg:text-lg" />
                  visit website
                </a>
                <a
                  target="_blank"
                  href="https://github.com/ZietalAdrian/Exchange-Rates-Api"
                  className="rounded-3xl text-[#A11B8A] hover:scale-y-[103%] hover:scale-x-[105%] bg-gray-200 py-1 px-3 absolute bottom-0 right-[50px] z-10 flex border-solid border-[#A11B8A] border-[1px]"
                >
                  <BsFileEarmarkCode className="mt-[2px] lg:mt-[4px] mr-1 text-xs md:text-sm lg:text-lg" />
                  see code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={secondRef}
        className="w-[375px] sm:w-[640px] md:w-[768px] lg:h-[500px] lg:w-[1024px] mx-auto mt-[100px] relative"
      >
        <img
          src={require("../img/pinterest.png")}
          alt=""
          className="w-full h-full rounded"
        />
        <div className="w-[375px] h-[205px] sm:w-[326px] sm:h-full md:w-[395px] overflow-scroll sm:overflow-hidden lg:h-[500px] lg:w-[512px] absolute top-0 left-0 sm:left-1/2 text-gray-100 rounded-r">
          <div className="h-[190px] sm:h-0 w-full bg-transparent"></div>
          <div className="h-[265px] sm:h-full bg-[rgb(15,20,27,0.8)]">
            <div className=" lg:p-3 text-xs md:text-sm lg:text-base">
              <h2
                className={`text-center text-xs sm:text-sm md:text-base sm:py-1 lg:text-xl font-bold md:mb-2 lg:mb-6 relative ${
                  secondVisible
                    ? "opacity-100 blur-none translate-y-0"
                    : "opacity-0 blur translate-y-full"
                } transition ease-linear duration-300`}
              >
                Pinterest Clone
                <div className="absolute top-[1.5px] left-[100px] sm:hidden">
                  <BsFillArrowUpCircleFill/>
                </div>
                <div className="absolute top-[1.5px] right-[100px] sm:hidden">
                  <BsFillArrowUpCircleFill/>
                </div>
              </h2>
              <div
                className={`${
                  secondVisible
                    ? "opacity-100 blur-none translate-y-0"
                    : "opacity-0 blur translate-y-full"
                } transition ease-linear duration-300 delay-150`}
              >
                <h3 className="text-center underline">Description</h3>
                <p className="text-center my-2 mx-1 md:mx-2">
                  The website created on the basis of Pinterest, enables
                  searching for information as well us photos in support of
                  Unsplash API. I added to this application the manual language
                  switch. The website has modal with logging and registration
                  and also appropriate alidation.
                </p>
              </div>
              <div
                className={`${
                  secondVisible
                    ? "opacity-100 blur-none translate-y-0"
                    : "opacity-0 blur translate-y-full"
                } transition ease-linear duration-300 delay-300`}
              >
                <h3 className="text-center underline md:mt-2 lg:mt-6">Stack</h3>
                <div className="flex flex-wrap md:my-3 gap-1 lg:px-2 lg:ml-2 text-xs lg:text-sm justify-center">
                  <div className="rounded-2xl bg-slate-700 py-1 px-2">
                    Tailwind
                  </div>
                  <div className="rounded-2xl bg-slate-700 py-1 px-2">
                    React
                  </div>
                  <div className="rounded-2xl bg-slate-700 py-1 px-2">CSS</div>
                  <div className="rounded-2xl bg-slate-700 py-1 px-2">HTML</div>
                  <div className="rounded-2xl bg-slate-700 py-1 px-2">
                    Portal
                  </div>
                  <div className="rounded-2xl bg-slate-700 py-1 px-2">
                    Javascript
                  </div>
                  <div className="rounded-2xl bg-slate-700 py-1 px-2">
                    Unsplash API
                  </div>
                  <div className="rounded-2xl bg-slate-700 py-1 px-2">
                    i18next
                  </div>
                  <div className="rounded-2xl bg-slate-700 py-1 px-2">
                    Formik
                  </div>
                  <div className="rounded-2xl bg-slate-700 py-1 px-2">Yup</div>
                </div>
              </div>
              <div
                className={`relative mt-10 md:mt-16 lg:mt-20 text-xs md:text-sm lg:text-lg ${
                  secondVisible
                    ? "opacity-100 blur-none translate-y-0"
                    : "opacity-0 blur translate-y-full"
                } transition ease-linear duration-300 delay-500`}
              >
                <a
                  target="_blank"
                  href="https://pinterest-zietaladrian.vercel.app"
                  className="rounded-3xl bg-gray-200 text-[#A11B8A] hover:scale-y-[103%] hover:scale-x-[105%] py-1 px-3 absolute bottom-0 left-[50px] z-10 flex border-solid border-[#A11B8A] border-[1px]"
                >
                  <AiFillIeCircle className="mt-[2px] lg:mt-[4px] mr-1 text-xs md:text-sm lg:text-lg" />
                  visit website
                </a>
                <a
                  target="_blank"
                  href="https://github.com/ZietalAdrian/Pinterest-Clone"
                  className="rounded-3xl bg-gray-200 text-[#A11B8A] hover:scale-y-[103%] hover:scale-x-[105%] py-1 px-3 absolute bottom-0 right-[50px] z-10 flex border-solid border-[#A11B8A] border-[1px]"
                >
                  <BsFileEarmarkCode className="mt-[2px] lg:mt-[4px] mr-1 text-xs md:text-sm lg:text-lg" />
                  see code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={thirdRef}
        className="w-[375px] sm:w-[640px] md:w-[768px] lg:h-[500px] lg:w-[1024px] mx-auto mt-[100px] relative"
      >
        <img
          src={require("../img/shop.png")}
          alt=""
          className="w-full h-full rounded"
        />
        <div className="w-[375px] h-[205px] sm:w-[326px] sm:h-full md:w-[395px] overflow-scroll sm:overflow-hidden lg:h-[500px] lg:w-[530px] absolute top-0 left-0 text-gray-100 rounded-l">
          <div className="h-[190px] sm:h-0 w-full bg-transparent"></div>
          <div className="h-[205px] sm:h-full bg-[rgb(15,20,27,0.8)]">
            <div className=" lg:p-3 text-xs md:text-sm lg:text-base">
              <h2
                className={`text-center text-xs sm:text-sm md:text-base sm:py-1 lg:text-xl font-bold md:mb-2 lg:mb-6 relative ${
                  thirdVisible
                    ? "opacity-100 blur-none translate-y-0"
                    : "opacity-0 blur translate-y-full"
                } transition ease-linear duration-300`}
              >
                BuyUs
                <div className="absolute top-[1.5px] left-[100px] sm:hidden">
                  <BsFillArrowUpCircleFill/>
                </div>
                <div className="absolute top-[1.5px] right-[100px] sm:hidden">
                  <BsFillArrowUpCircleFill/>
                </div>
              </h2>
              <div
                className={`${
                  thirdVisible
                    ? "opacity-100 blur-none translate-y-0"
                    : "opacity-0 blur translate-y-full"
                } transition ease-linear duration-300 delay-150`}
              >
                <h3 className="text-center underline">Description</h3>
                <p className="text-center my-2 mx-1 md:mx-2">
                  The shop offers wide variety of games. They are divided in to
                  categories, what helps founding favourite type with ease. One
                  may use this intelligence search engine, which filters data
                  based after each character. The website gives the opportunity
                  to add chosen products to the basket, where they stay after
                  leaving or refreshing the site.
                </p>
              </div>
              <div
                className={`${
                  thirdVisible
                    ? "opacity-100 blur-none translate-y-0"
                    : "opacity-0 blur translate-y-full"
                } transition ease-linear duration-300 delay-300`}
              >
                <h3 className="text-center underline md:mt-2 lg:mt-6">Stack</h3>
                <div className="flex flex-wrap md:my-3 gap-1 md:px-2 lg:ml-2 text-xs lg:text-sm justify-center">
                  <div className="rounded-2xl bg-slate-700 py-1 px-2">
                    JavaScript
                  </div>
                  <div className="rounded-2xl bg-slate-700 py-1 px-2">JSON</div>
                  <div className="rounded-2xl bg-slate-700 py-1 px-2">
                    TypeScript
                  </div>
                </div>
              </div>
              <div
                className={`relative mt-10 md:mt-16 lg:mt-20 text-xs md:text-sm lg:text-lg ${
                  thirdVisible
                    ? "opacity-100 blur-none translate-y-0"
                    : "opacity-0 blur translate-y-full"
                } transition ease-linear duration-300 delay-700`}
              >
                <button className="rounded-3xl bg-gray-400/80 text-gray-700 py-1 px-3 absolute bottom-0 left-[50px] z-10 cursor-not-allowed">
                  not available
                </button>
                <a
                  target="_blank"
                  href="https://github.com/ZietalAdrian/BuyUs"
                  className="rounded-3xl bg-gray-200 text-[#A11B8A] hover:scale-y-[103%] hover:scale-x-[105%] py-1 px-3 absolute bottom-0 right-[50px] z-10 flex border-solid border-[#A11B8A] border-[1px]"
                >
                  <BsFileEarmarkCode className="mt-[2px] lg:mt-[4px] mr-1 text-xs md:text-sm lg:text-lg" />
                  see code
                </a>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;