import type { ForwardedRef } from "react";
import { forwardRef } from "react";
import { NavLink } from "react-router-dom";

import classNames from "classnames";
import { twMerge } from "tailwind-merge";

import { headerMenuLinks } from "@/app/routing/routing.constants.ts";
import Logo from "@/assets/vectors/Logo.svg?react";
import Messages from "@/assets/vectors/Messages.svg?react";
import Button from "@/shared/ui/Button.tsx";

interface Props {
  isReached: boolean;
}

const Header = forwardRef(({ isReached }: Props, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <header className="w-full flex justify-between items-center fixed top-0 z-[20] backdrop-blur-[4px] desktop:px-20 desktop:py-11 xs:px-5 xs:py-4">
      <Logo className="md:w-auto md:h-auto xs:w-16 xs:h-[30px]" />
      <div className="flex flex-col space-y-[5px] xs:flex desktop:hidden">
        <div className="w-8 h-1 bg-gray-400 rounded-lg" />
        <div className="w-8 h-1 bg-gray-400 rounded-lg" />
        <div className="w-8 h-1 bg-gray-400 rounded-lg" />
      </div>
      <div ref={ref} className="flex space-x-[28px] xs:hidden desktop:flex">
        <nav className="flex items-center space-x-5">
          {headerMenuLinks.map((headerMenuLink) => (
            <NavLink
              key={headerMenuLink.id}
              to={headerMenuLink.link}
              className={twMerge(
                classNames("text-white text-md", {
                  ["text-gray-800"]: isReached,
                })
              )}
            >
              {headerMenuLink.label}
            </NavLink>
          ))}
        </nav>
        <Button prefix={<Messages />}>Let's Talk</Button>
      </div>
    </header>
  );
});

export default Header;
