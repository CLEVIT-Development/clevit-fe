import { headerMenuLinks } from "@/app/routing/routing.constants.ts";
import Logo from "@/assets/vectors/Logo.svg?react";
import Messages from "@/assets/vectors/Messages.svg?react";
import Button from "@/shared/ui/Button.tsx";

import { NavLink } from "react-router-dom";

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
