import type { ForwardedRef } from "react";
import { forwardRef, useMemo, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import classNames from "classnames";
import { twMerge } from "tailwind-merge";

import { RoutePaths, headerMenuLinks } from "@/app/routing/routing.constants.ts";
import Messages from "@/assets/vectors/Messages.svg?react";
import useResponsive from "@/common/hooks/useResponsive";
import Button from "@/shared/ui/Button.tsx";
import Copyright from "@/shared/ui/Copyright";
import Logo from "@/shared/ui/Logo.tsx";
import { LogoVariant } from "@/types/variant.types.ts";

import BurgerMenu from "./BurgerMenu";

interface Props {
  isReached: boolean;
}

const Header = forwardRef(({ isReached }: Props, ref: ForwardedRef<HTMLDivElement>) => {
  const navigate = useNavigate();
  const { isTablet } = useResponsive();
  const [isOpen, setIsOpen] = useState(false);
  const [isTransitionEndClose, setIsTransitionEndClose] = useState(false);

  const renderNavList = useMemo(() => {
    return headerMenuLinks.map((headerMenuLink) => (
      <NavLink
        onClick={() => {
          setIsOpen(false);
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
        key={headerMenuLink.id}
        to={headerMenuLink.link}
        className={({ isActive }) =>
          twMerge(
            classNames("text-white desktop:text-md text-lg font-medium", {
              ["text-purple-100"]: isReached,
              ["text-gray-200"]: isActive && isReached,
              ["text-gray-100 opacity-90"]: isActive && !isReached,
            })
          )
        }
      >
        {headerMenuLink.label}
      </NavLink>
    ));
  }, [isReached]);

  return (
    <header
      className={twMerge(
        classNames(
          "transition-all duration-500 w-full fixed top-0 z-[20] backdrop-blur-[5px] desktop:px-10 desktop:py-6 xs:px-5 xs:py-4",
          {
            ["shadow-base-200 bg-white"]: isReached,
            ["bg-headingGradient"]: !isReached && isTablet && (isOpen || isTransitionEndClose),
          }
        )
      )}
    >
      <div className="flex justify-between items-center">
        <Logo
          onLogoClick={() => {
            navigate(RoutePaths.Home);
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
          variant={isReached ? LogoVariant.Secondary : LogoVariant.Primary}
        />
        <BurgerMenu
          isOpen={isOpen}
          isReached={isReached}
          onMenuClick={() => setIsOpen((prev) => !prev)}
        />
        <div ref={ref} className="flex space-x-[28px] xs:hidden desktop:flex">
          <nav className="flex items-center space-x-5">{renderNavList}</nav>
          <Button prefix={<Messages />}>Let's Talk</Button>
        </div>
      </div>
      <div
        className={classNames(
          "transition-all duration-700 overflow-hidden desktop:hidden flex flex-col justify-between items-center h-0",
          {
            ["h-[60vh]"]: isOpen,
          }
        )}
        onTransitionEnd={() => {
          setIsTransitionEndClose(isOpen);
        }}
      >
        <nav className={"flex flex-col items-center space-y-6"}>{renderNavList}</nav>
        <Copyright
          className={classNames({
            ["text-gray-400"]: !isReached && isTablet,
          })}
        />
      </div>
    </header>
  );
});

export default Header;
