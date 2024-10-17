import type { ForwardedRef } from "react";
import { forwardRef, useMemo, useRef, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

import classNames from "classnames";
import { twMerge } from "tailwind-merge";

import { RoutePaths, headerMenuLinks } from "@/app/routing/routing.constants.ts";
import Messages from "@/assets/vectors/Messages.svg?react";
import { useAuthContext } from "@/common/context/AuthContext";
import useLockBodyScroll from "@/common/hooks/useBodyLock";
import useResponsive from "@/common/hooks/useResponsive";
import Button from "@/shared/ui/Button.tsx";
import Copyright from "@/shared/ui/Copyright";
import Logo from "@/shared/ui/Logo.tsx";
import { HeaderVariant, LogoVariant } from "@/types/variant.types.ts";

import BurgerMenu from "./BurgerMenu";

interface Props {
  scrollY: number;
  headerVariant: HeaderVariant;
}

const Header = forwardRef(
  ({ headerVariant, scrollY }: Props, ref: ForwardedRef<HTMLDivElement>) => {
    const isWhiteBackground = headerVariant !== HeaderVariant.Primary;
    const navigate = useNavigate();
    const { pathname, hash } = useLocation();
    const { isTablet, isDesktop } = useResponsive();
    const [isOpen, setIsOpen] = useState(false);
    const [isTransitionEndClose, setIsTransitionEndClose] = useState(false);
    const navListRef = useRef<HTMLDivElement | null>(null);

    const { isAuthenticated } = useAuthContext();

    useLockBodyScroll(isOpen);

    const renderNavList = useMemo(
      () =>
        headerMenuLinks.map((headerMenuLink) => {
          const isActive = `${pathname}${hash}` === headerMenuLink.link;
          const isVisible = headerMenuLink.needAuthentication ? isAuthenticated : true;

          if (!isVisible) {
            return null;
          }

          return (
            <NavLink
              onClick={() => {
                setIsOpen(false);
              }}
              key={headerMenuLink.id}
              to={headerMenuLink.link}
              className={twMerge(
                classNames("text-white lg:text-md text-lg font-medium", {
                  ["text-purple-1300"]: isWhiteBackground,
                  ["text-purple-300 lg:after:w-full lg:after:bg-purple-100"]:
                    isActive && isWhiteBackground,
                  ["lg:text-purple-400 lg:opacity-70 lg:after:w-full lg:after:bg-purple-100"]:
                    isActive && !isWhiteBackground,
                })
              )}
            >
              {headerMenuLink.label}
            </NavLink>
          );
        }),
      [isWhiteBackground, pathname, hash, isAuthenticated]
    );

    return (
      <header
        className={twMerge(
          classNames(
            "transition-all  duration-300 w-full fixed top-0 z-[30] lg:px-10 lg:py-6 px-5 py-4",
            {
              ["bg-white"]: isWhiteBackground,
              ["bg-headingGradient"]:
                headerVariant === HeaderVariant.Primary &&
                isDesktop &&
                (isOpen || isTransitionEndClose),
              ["shadow-base-200 backdrop-blur-[5px]"]:
                headerVariant !== HeaderVariant.Tertiary && scrollY > 20,
              ["border border-b-gray-400"]: headerVariant === HeaderVariant.Tertiary,
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
              });
            }}
            variant={isWhiteBackground ? LogoVariant.Secondary : LogoVariant.Primary}
          />
          <BurgerMenu
            isOpen={isOpen}
            isReached={isWhiteBackground}
            onMenuClick={() => setIsOpen((prev) => !prev)}
          />
          <div ref={ref} className="space-x-[28px] lg:flex hidden">
            <nav className="flex items-center space-x-5">{renderNavList}</nav>
            <Button prefix={<Messages />} onClick={() => navigate(RoutePaths.Calendly)}>
              Let's Talk
            </Button>
          </div>
        </div>
        <div
          className={classNames(
            "transition-all duration-700 overflow-hidden lg:hidden flex flex-col justify-between items-center h-0",
            {
              ["h-[70vh] md:h-[45vh]  sm:h-[40vh] lg:h-[30vh] desktop:h-[40vh]"]: isOpen,
            }
          )}
          onTransitionEnd={() => {
            setIsTransitionEndClose(isOpen);
          }}
        >
          <nav ref={navListRef} className="flex flex-col items-center mt-7 space-y-6">
            {renderNavList}
          </nav>
          <Copyright
            className={classNames({
              ["text-gray-400"]: !isWhiteBackground && isTablet,
            })}
          />
        </div>
      </header>
    );
  }
);

export default Header;
