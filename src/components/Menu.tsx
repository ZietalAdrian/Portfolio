import { FC, useEffect, useState } from "react";

type MenuProps = {
  scrollToSection: any;
  about: any;
  projects: any;
  stack: any;
  contact: any;
};

const Menu: FC<MenuProps> = ({
  scrollToSection,
  about,
  projects,
  stack,
  contact,
}) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={` w-full border-solid border-b-[1px] border-white fixed transition-all z-50 bg-[rgb(15,20,27,0.8)] ${
        offset <= 690 ? "h-[80px] pt-8" : "h-[50px] pt-4"
      }`}
    >
      <div className="flex justify-center gap-8 sm:justify-end sm:mr-10 xl:mr-[220px] sm:gap-6 font-medium">
        <button
          onClick={() => scrollToSection(about)}
          className="h-[23px] uppercase hover:border-solid hover:border-b-2 hover:border-[#a11b8a]"
        >
          About
        </button>
        <button
          onClick={() => scrollToSection(projects)}
          className="h-[23px] uppercase hover:border-solid hover:border-b-2 hover:border-[#a11b8a]"
        >
          Projects
        </button>
        <button
          onClick={() => scrollToSection(stack)}
          className="h-[23px] uppercase hover:border-solid hover:border-b-2 hover:border-[#a11b8a]"
        >
          Stack
        </button>
        <button
          onClick={() => scrollToSection(contact)}
          className="h-[23px] uppercase hover:border-solid hover:border-b-2 hover:border-[#a11b8a]"
        >
          Contact
        </button>
      </div>
    </header>
  );
};

export default Menu;
