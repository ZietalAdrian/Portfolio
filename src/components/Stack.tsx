const Stack = () => {
  return (
    <section className="flex justify-center h-[300px] lg:h-[400px]">
      <div className="w-0 md:w-[300px]">
        <img
          src={require("../img/coding.png")}
          alt=""
          className="w-0 md:w-[230px] mt-[15px] lg:mt-[72px]"
        />
      </div>
      <div className="overflow-hidden">
        <div className="h-[50px] w-[450px] relative block top-[15%] lg:top-[25%] overflow-hidden">
          <div className="absolute block m-auto whitespace-nowrap overflow-hidden min-w-full h-full">
            <span className="inline-block text-center pl-[100%] whitespace-nowrap min-w-full opacity-50 text-xl uppercase animate-marquee">
              <span className="px-3">HTML</span>
              <span className="px-3">CSS</span>
              <span className="px-3">Responsive</span>
              <span className="px-3">API</span>
              <span className="px-3">React</span>
            </span>
          </div>
          <div className="absolute block m-auto whitespace-nowrap overflow-hidden min-w-full h-full">
            <span className="inline-block text-center pl-[100%] whitespace-nowrap min-w-full font-[85px] opacity-50 text-xl uppercase animate-[marquee_20s_linear_infinite_10000ms]">
              <span className="px-3">HTML</span>
              <span className="px-3">CSS</span>
              <span className="px-3">Responsive</span>
              <span className="px-3">API</span>
              <span className="px-3">React</span>
            </span>
          </div>
        </div>
        <div className="h-[50px] w-[450px] relative block top-[15%] lg:top-[25%] overflow-hidden">
          <div className="absolute block m-auto whitespace-nowrap overflow-hidden min-w-full h-full">
            <span className="inline-block text-center pl-[100%] whitespace-nowrap min-w-full font-[85px] opacity-50 text-xl uppercase animate-[marquee-right_20s_linear_infinite_2000ms]">
              <span className="px-3">TypeScript</span>
              <span className="px-3">GIT</span>
              <span className="px-3">JavaScript</span>
              <span className="px-3">OOP</span>
              <span className="px-3">C++</span>
            </span>
          </div>
          <div className="absolute block m-auto whitespace-nowrap overflow-hidden min-w-full h-full">
            <span className="inline-block text-center pl-[100%] whitespace-nowrap min-w-full font-[85px] opacity-50 text-xl uppercase animate-[marquee-right_20s_linear_infinite_12000ms]">
              <span className="px-3">TypeScript</span>
              <span className="px-3">GIT</span>
              <span className="px-3">JavaScript</span>
              <span className="px-3">OOP</span>
              <span className="px-3">C++</span>
            </span>
          </div>
        </div>
        <div className="h-[50px] w-[450px] relative block top-[15%] lg:top-[25%] overflow-hidden">
          <div className="absolute block m-auto whitespace-nowrap overflow-hidden min-w-full h-full">
            <span className="inline-block text-center pl-[100%] whitespace-nowrap min-w-full font-[85px] opacity-50 text-xl uppercase animate-[marquee_20s_linear_infinite_2000ms]">
              <span className="px-3">HTML</span>
              <span className="px-3">CSS</span>
              <span className="px-3">Responsive</span>
              <span className="px-3">API</span>
              <span className="px-3">React</span>
            </span>
          </div>
          <div className="absolute block m-auto whitespace-nowrap overflow-hidden min-w-full h-full">
            <span className="inline-block text-center pl-[100%] whitespace-nowrap min-w-full font-[85px] opacity-50 text-xl uppercase animate-[marquee_20s_linear_infinite_12000ms]">
              <span className="px-3">HTML</span>
              <span className="px-3">CSS</span>
              <span className="px-3">Responsive</span>
              <span className="px-3">API</span>
              <span className="px-3">React</span>
            </span>
          </div>
        </div>
        <div className="h-[50px] w-[450px] relative block top-[15%] lg:top-[25%] overflow-hidden">
          <div className="absolute block m-auto whitespace-nowrap overflow-hidden min-w-full h-full">
            <span className="inline-block text-center pl-[100%] whitespace-nowrap min-w-full font-[85px] opacity-50 text-xl uppercase animate-marquee-right">
              <span className="px-3">TypeScript</span>
              <span className="px-3">GIT</span>
              <span className="px-3">JavaScript</span>
              <span className="px-3">OOP</span>
              <span className="px-3">C++</span>
            </span>
          </div>
          <div className="absolute block m-auto whitespace-nowrap overflow-hidden min-w-full h-full">
            <span className="inline-block text-center pl-[100%] whitespace-nowrap min-w-full font-[85px] opacity-50 text-xl uppercase animate-[marquee-right_20s_linear_infinite_10000ms]">
              <span className="px-3">TypeScript</span>
              <span className="px-3">GIT</span>
              <span className="px-3">JavaScript</span>
              <span className="px-3">OOP</span>
              <span className="px-3">C++</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stack;
