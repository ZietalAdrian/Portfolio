const Stack = () => {
  return (
    <section className="mt-[80px]">
      <div className="h-[300px] flex justify-center lg:h-[400px]">
        <div className="w-0 md:w-[300px] h-[250px]">
          <img
            src={require("../img/coding.png")}
            alt=""
            className="w-0 md:w-[230px]"
          />
        </div>
        <div className="w-[400px] h-[250px] mt-3 relative flex overflow-x-hidden uppercase opacity-50">
          <div className="py-5 animate-marquee whitespace-nowrap">
            <span className="mx-3 text-xl">HTML</span>
            <span className="mx-3 text-xl">CSS</span>
            <span className="mx-3 text-xl">Responsive</span>
            <span className="mx-3 text-xl">API</span>
            <span className="mx-3 text-xl">React</span>
          </div>
          <div className="absolute top-0 py-5 animate-marquee2 whitespace-nowrap">
            <span className="mx-3 text-xl">HTML</span>
            <span className="mx-3 text-xl">CSS</span>
            <span className="mx-3 text-xl">Responsive</span>
            <span className="mx-3 text-xl">API</span>
            <span className="mx-3 text-xl">React</span>
          </div>
          <div className="absolute top-12 py-5 animate-[marquee-right_10s_linear_infinite_2000ms] whitespace-nowrap">
            <span className="mx-3 text-xl">TypeScript</span>
            <span className="mx-3 text-xl">GIT</span>
            <span className="mx-3 text-xl">JavaScript</span>
            <span className="mx-3 text-xl">OOP</span>
            <span className="mx-3 text-xl">C++</span>
          </div>
          <div className="absolute top-12 py-5 animate-[marquee2-right_10s_linear_infinite_2000ms] whitespace-nowrap">
            <span className="mx-3 text-xl">TypeScript</span>
            <span className="mx-3 text-xl">GIT</span>
            <span className="mx-3 text-xl">JavaScript</span>
            <span className="mx-3 text-xl">OOP</span>
            <span className="mx-3 text-xl">C++</span>
          </div>
          <div className="absolute top-24 py-5 animate-[marquee_10s_linear_infinite_2000ms] whitespace-nowrap">
            <span className="mx-3 text-xl">HTML</span>
            <span className="mx-3 text-xl">CSS</span>
            <span className="mx-3 text-xl">Responsive</span>
            <span className="mx-3 text-xl">API</span>
            <span className="mx-3 text-xl">React</span>
          </div>
          <div className="absolute top-24 py-5 animate-[marquee2_10s_linear_infinite_2000ms] whitespace-nowrap">
            <span className="mx-3 text-xl">HTML</span>
            <span className="mx-3 text-xl">CSS</span>
            <span className="mx-3 text-xl">Responsive</span>
            <span className="mx-3 text-xl">API</span>
            <span className="mx-3 text-xl">React</span>
          </div>
          <div className="absolute top-36 py-5 animate-marquee-right whitespace-nowrap">
            <span className="mx-3 text-xl">TypeScript</span>
            <span className="mx-3 text-xl">GIT</span>
            <span className="mx-3 text-xl">JavaScript</span>
            <span className="mx-3 text-xl">OOP</span>
            <span className="mx-3 text-xl">C++</span>
          </div>
          <div className="absolute top-36 py-5 animate-marquee2-right whitespace-nowrap">
            <span className="mx-3 text-xl">TypeScript</span>
            <span className="mx-3 text-xl">GIT</span>
            <span className="mx-3 text-xl">JavaScript</span>
            <span className="mx-3 text-xl">OOP</span>
            <span className="mx-3 text-xl">C++</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stack;
