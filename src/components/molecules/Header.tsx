import Logo from "@/assets/vectors/Logo.svg?react";
import Messages from "@/assets/vectors/Messages.svg?react";
import { headerMenuLinks } from "@/routing/routing.constants.ts";

import { NavLink } from "react-router-dom";

import Button from "../atom/Button.tsx";

const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <Logo />
      <div className="flex space-x-4">
        <nav className="flex items-center space-x-5">
          {headerMenuLinks.map((headerMenuLink) => (
            <NavLink key={headerMenuLink.id} to={headerMenuLink.link} className="text-white">
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
