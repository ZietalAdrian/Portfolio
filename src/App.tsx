import { BsLinkedin, BsGithub } from "react-icons/bs";
import { HiEnvelope } from "react-icons/hi2";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";
import { Analytics } from "@vercel/analytics/react";

import About from "./components/About";
import Contact from "./components/Contact";
import Menu from "./components/Menu";
import Projects from "./components/Projects";
import Stack from "./components/Stack";

function App() {
  const { ref: socialMediaRef, inView } = useInView({
    threshold: 1.0,
    triggerOnce: true,
  });

  const about = useRef(null);
  const projects = useRef(null);
  const stack = useRef(null);
  const contact = useRef(null);

  const scrollToSection = (elementRef: any) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="font-bodoni text-gray-100 relative overflow-hidden">
        <div
          ref={about}
          className="w-screen h-screen bg-hero-pattern bg-fixed bg-center bg-no-repeat bg-cover relative"
        >
          <Menu
            about={about}
            projects={projects}
            stack={stack}
            contact={contact}
            scrollToSection={scrollToSection}
          />
          <About />
        </div>
        <main ref={projects} className="bg-[#0f141b]">
          <h2
            ref={socialMediaRef}
            className="w-full text-center text-3xl pt-[70px] lg:pt-[100px]"
          >
            PROJECTS
          </h2>
          <Projects />
          <h2
            ref={stack}
            className="w-full text-center text-3xl pt-[70px] lg:pt-[100px]"
          >
            STACK
          </h2>
          <Stack />
        </main>
        <h2
          ref={contact}
          className="w-full text-center bg-[#0f141b] text-3xl pt-7 lg:pt-10"
        >
          CONTACT
        </h2>
        <Contact />
        <div
          className={`absolute bottom-[40px] right-[200px] md:h-[200px] md:w-[120px] md:bottom-[80px] md:left-1 md:fixed bg-transparent md:opacity-0 ${
            inView &&
            "md:opacity-90 md:transition-all md:duration-1000 md:delay-[5000ms]"
          }`}
        >
          <div className="relative -rotate-90 md:rotate-0">
            <div className="rotate-90 h-[55px] w-[300px] absolute -bottom-[100px] -left-[110px] md:overflow-visible">
              <div className="w-[300px] h-[300px] border-solid border-2 border-blue-900 rounded-[50%]"></div>
            </div>
            <a
              target="_blank"
              href="https://github.com/ZietalAdrian"
              className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] absolute -top-[20px] left-[25px] lg:left-[20px] rotate-90 md:rotate-0 bg-gray-200 rounded-[50%] hover:scale-110"
            >
              <BsGithub className="mt-[8px] ml-[8px] lg:mt-[10px] lg:ml-[10px] text-black bg-gray-200 text-2xl lg:text-3xl" />
            </a>
            <a
              target="_blank"
              href="https://linkedin.com/in/adrian-ziętal"
              className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] absolute top-[50px] left-[45px] rotate-90 md:rotate-0 bg-gray-200 rounded-[50%] hover:scale-110"
            >
              <BsLinkedin className="mt-[8px] ml-[8px] lg:mt-[10px] lg:ml-[10px] text-[#0e76a8] bg-white rounded-sm text-2xl lg:text-3xl" />
            </a>
            <a
              href="mailto:zietal.adrian@gmail.com"
              className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] absolute top-[120px] left-[25px] lg:left-[20px] rotate-90 md:rotate-0 bg-gray-200 rounded-[50%] hover:scale-110"
            >
              <HiEnvelope className="mt-[8px] ml-[8px] lg:mt-[10px] lg:ml-[10px] text-black bg-gray-200 text-2xl lg:text-3xl" />
            </a>
          </div>
        </div>
        <footer className="absolute bottom-0 left-0 right-0 h-[50px] flex items-center justify-end pr-5 text-xs bg-[#0f141b] border-t-[0.1px] border-solid border-gray-100 z-50">
          ⓒ 2022 Adrian Ziętal | All Rights Reserved
        </footer>
      </div>
      <Analytics />
    </>
  );
}

export default App;
