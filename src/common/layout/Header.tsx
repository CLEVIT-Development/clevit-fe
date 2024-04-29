import type { ForwardedRef } from "react";
import { forwardRef } from "react";
import { NavLink } from "react-router-dom";

import classNames from "classnames";
import { twMerge } from "tailwind-merge";

import { headerMenuLinks } from "@/app/routing/routing.constants.ts";
import Messages from "@/assets/vectors/Messages.svg?react";
import Button from "@/shared/ui/Button.tsx";
import Logo from "@/shared/ui/Logo.tsx";
import { LogoVariant } from "@/types/variant.types.ts";

interface Props {
  isReached: boolean;
}

const Header = forwardRef(({ isReached }: Props, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <header
      className={classNames(
        "transition-all duration-500 w-full flex justify-between items-center fixed top-0 z-[20] backdrop-blur-[5px] desktop:px-10 desktop:py-6 xs:px-5 xs:py-4",
        {
          ["bg-white shadow-base-200"]: isReached,
        }
      )}
    >
      <Logo variant={isReached ? LogoVariant.Secondary : LogoVariant.Primary} />
      <div className="flex flex-col space-y-[5px] xs:flex desktop:hidden">
        <div
          className={classNames("w-8 h-1 bg-gray-400 rounded-lg", {
            ["bg-gray-600"]: isReached,
          })}
        />
        <div
          className={classNames("w-8 h-1 bg-gray-400 rounded-lg", {
            ["bg-gray-600"]: isReached,
          })}
        />
        <div
          className={classNames("w-8 h-1 bg-gray-400 rounded-lg", {
            ["bg-gray-600"]: isReached,
          })}
        />
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
