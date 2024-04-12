import { NavLink } from "react-router-dom";
import { headerMenuLinks } from "@/routing/routing.constants.ts";
import Messages from "@/assets/vectors/Messages.svg?react";
import Logo from "@/assets/vectors/Logo.svg?react";

const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <Logo />
      <div className="flex items-center gap-5">
        {headerMenuLinks.map(headerMenuLink => (
          <NavLink key={headerMenuLink.id} to={headerMenuLink.link} className="text-white font-sans">
            {headerMenuLink.label}
          </NavLink>
        ))}
        <button
          className="flex items-center gap-2 bg-white text-purple100 font-medium px-6 py-3.5 ml-1 shadow-[4px_5px_0px_0px_rgba(109,40,217)]">
          <Messages />
          Let's Talk
        </button>
      </div>
    </header>
  );
};

export default Header;