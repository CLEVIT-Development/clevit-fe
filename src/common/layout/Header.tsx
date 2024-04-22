import { NavLink } from "react-router-dom";

import { headerMenuLinks } from "@/app/routing/routing.constants.ts";
import Logo from "@/assets/vectors/Logo.svg?react";
import Messages from "@/assets/vectors/Messages.svg?react";
import Button from "@/shared/ui/Button.tsx";

const Header = () => {
  return (
    <header className="flex justify-between items-center">
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
    </header>
  );
};

export default Header;
