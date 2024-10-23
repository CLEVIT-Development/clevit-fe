import { useCallback, useState } from "react";

import classNames from "classnames";
import { twMerge } from "tailwind-merge";

import useResponsive from "@/common/hooks/useResponsive.ts";

export interface INavigationData {
  id: number;
  title: string;
  href?: string;
}

interface Props {
  items: INavigationData[];
  onItemClick?: (tabId: number, direction: string) => void;
  className?: string;
}

const getDirectionFromTab = (currTabId: number, clickTabId: number, isDesktopEnd: boolean) => {
  if (currTabId === clickTabId) {
    return "";
  } else if (currTabId > clickTabId) {
    if (isDesktopEnd) {
      return "top";
    } else {
      return "right";
    }
  } else {
    if (isDesktopEnd) {
      return "bottom";
    } else {
      return "left";
    }
  }
};

const Navigation = ({ items, onItemClick, className = "" }: Props) => {
  const { isTablet } = useResponsive();

  const [activeTab, setActiveTab] = useState(1);

  const onNavItemClickHandler = useCallback(
    (currTabId: number) => {
      const direction = getDirectionFromTab(activeTab, currTabId, isTablet);

      setActiveTab(currTabId);

      onItemClick?.(currTabId, direction);
    },
    [activeTab, isTablet, onItemClick]
  );

  return (
    <nav
      className={twMerge(
        classNames(
          "flex flex-col desktop:space-x-4 xs:space-x-0 desktop:flex-row xs:w-full xs:px-1.5 xs:flex-col desktop:justify-between xs:justify-center desktop:space-y-0 xs:space-y-8 overflow-x-scroll scrollbar-hide pb-[10px]",
          className
        )
      )}
    >
      {items.map(({ id, title }) => (
        <button
          key={id}
          onClick={() => onNavItemClickHandler(id)}
          className={`
          relative duration-500 whitespace-nowrap outline-none focus:outline-none
          lg:text-md desktop:text-base !font-bold
          after:transition-all  after:absolute after:left-0 after:h-[2px]
          after:bottom-[-10px]
          
          ${
            activeTab === id
              ? "text-purple-100 after:w-full sm:after:w-full lg:after:w-[100%] after:bg-purple-500"
              : "after:w-full after:bg-[#314252]/50 desktop:bg-transparent text-gray-200 desktop:after:w-0"
          }
        `}
        >
          {title}
        </button>
      ))}
    </nav>
  );
};

export default Navigation;
