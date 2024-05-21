import type { ForwardedRef } from "react";
import { forwardRef, useMemo, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

import classNames from "classnames";
import { twMerge } from "tailwind-merge";

import { RoutePaths, headerMenuLinks } from "@/app/routing/routing.constants.ts";
import Messages from "@/assets/vectors/Messages.svg?react";
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

    // TODO review later
    const location = useLocation();
    const navigate = useNavigate();
    const { isTablet } = useResponsive();
    const [isOpen, setIsOpen] = useState(false);
    const [isTransitionEndClose, setIsTransitionEndClose] = useState(false);
    const navListRef = useRef<HTMLDivElement>(null);

    useLockBodyScroll(isOpen);

    const renderNavList = useMemo(() => {
      return headerMenuLinks.map((headerMenuLink) => {
        const isActive = `${location.pathname}${location.hash}` === headerMenuLink.link;

        return (
          <NavHashLink
            smooth
            onClick={() => {
              setIsOpen(false);
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            key={headerMenuLink.id}
            to={headerMenuLink.link}
            className={twMerge(
              classNames(
                "relative text-white desktop:text-md text-lg font-medium " +
                  "desktop:after:transition-all desktop:after:duration-300 desktop:after:absolute desktop:after:w-0 desktop:after:h-0.5 desktop:after:left-0 desktop:after:right-0 desktop:after:-bottom-2 desktop:after:content-['.'] desktop:after:text-transparent " +
                  "desktop:hover:after:w-full desktop:hover:after:bg-purple-100",
                {
                  ["text-purple-1300"]: isWhiteBackground,
                  ["text-purple-300 desktop:after:w-full desktop:after:bg-purple-100"]:
                    isActive && isWhiteBackground,
                  ["desktop:text-gray-100 desktop:opacity-70 desktop:after:w-full desktop:after:bg-purple-100"]:
                    isActive && !isWhiteBackground,
                }
              )
            )}
          >
            {headerMenuLink.label}
          </NavHashLink>
        );
      });
    }, [isWhiteBackground]);

    return (
      <header
        className={twMerge(
          classNames(
            "transition-all duration-300 w-full fixed top-0 z-[30] desktop:px-10 desktop:py-6 px-5 py-4",
            {
              ["bg-white"]: isWhiteBackground,
              ["bg-headingGradient"]:
                headerVariant === HeaderVariant.Primary &&
                isTablet &&
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
                behavior: "smooth",
              });
            }}
            variant={isWhiteBackground ? LogoVariant.Secondary : LogoVariant.Primary}
          />
          <BurgerMenu
            isOpen={isOpen}
            isReached={isWhiteBackground}
            onMenuClick={() => setIsOpen((prev) => !prev)}
          />
          <div ref={ref} className="space-x-[28px] desktop:flex hidden">
            <nav className="flex items-center space-x-5">{renderNavList}</nav>
            <Button prefix={<Messages />} onClick={() => navigate(RoutePaths.Calendly)}>
              Let's Talk
            </Button>
          </div>
        </div>
        <div
          className={classNames(
            "transition-all duration-700 overflow-hidden desktop:hidden flex flex-col justify-between items-center h-0",
            {
              ["h-[50vh]"]: isOpen,
            }
          )}
          onTransitionEnd={() => {
            setIsTransitionEndClose(isOpen);
          }}
        >
          <nav ref={navListRef} className="flex flex-col items-center space-y-6">
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
