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
          "flex flex-col desktop:space-x-4 xs:space-x-0 desktop:flex-row xs:w-full xs:px-1.5 xs:flex-col desktop:justify-between xs:justify-center desktop:space-y-0 xs:space-y-8 overflow-x-scroll scrollbar-hide",
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
         after:transition-all  after:bg-purple-500
         ${
           activeTab === id
             ? "after:w-full text-purple-100 after:-bottom-5 underline decoration-purple-500"
             : "after:w-0 after:bg-transparent text-gray-200"
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
