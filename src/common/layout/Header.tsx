import { NavLink } from "react-router-dom";

import classNames from "classnames";

import { headerMenuLinks } from "@/app/routing/routing.constants.ts";
import Logo from "@/assets/vectors/Logo.svg?react";
import Messages from "@/assets/vectors/Messages.svg?react";
import Button from "@/shared/ui/Button.tsx";

import useScroll from "../hooks/useScroll";

const Header = () => {
  const { scrollY } = useScroll();

  const headerContent = (
    <>
      <Logo className="md:w-auto md:h-auto xs:w-16 xs:h-[30px]" />
      <div className="flex flex-col space-y-[5px] xs:flex desktop:hidden">
        <div className="w-8 h-1 bg-gray-400 rounded-lg" />
        <div className="w-8 h-1 bg-gray-400 rounded-lg" />
        <div className="w-8 h-1 bg-gray-400 rounded-lg" />
      </div>
      <div className="flex space-x-4 xs:hidden desktop:flex">
        <nav className="flex items-center space-x-5">
          {headerMenuLinks.map((headerMenuLink) => (
            <NavLink
              key={headerMenuLink.id}
              to={headerMenuLink.link}
              className="text-white text-md"
            >
              {headerMenuLink.label}
            </NavLink>
          ))}
        </nav>
        <Button prefix={<Messages />}>Let's Talk</Button>
      </div>
    </>
  );

  const headerBaseStyle = "flex justify-between items-center";

  return (
    <header className={headerBaseStyle}>
      {headerContent}
      <div
        className={classNames(
          "transition-all duration-500 p-5 fixed left-0 right-0 top-0 bg-headingGradient z-20 opacity-0 min-h-[70px] h-0",
          headerBaseStyle,
          {
            ["opacity-100 h-auto"]: scrollY > 450,
          }
        )}
      >
        {headerContent}
      </div>
    </header>
  );
};

export default Header;
