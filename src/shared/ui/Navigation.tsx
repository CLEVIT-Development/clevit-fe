import { useCallback, useState } from "react";

import useResponsive from "@/common/hooks/useResponsive.ts";

export interface INavigationData {
  id: number;
  title: string;
  href?: string;
}

interface Props {
  items: INavigationData[];
  onItemClick?: (tabId: number, direction: string) => void;
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

const Navigation = ({ items, onItemClick }: Props) => {
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
    <nav className="flex lg:space-x-12 desktop:space-x-6 xs:space-x-0 desktop:flex-row xs:w-full xs:px-1.5 xs:flex-col xs:justify-center desktop:space-y-0 xs:space-y-8">
      {items.map(({ id, title }) => (
        <button
          key={id}
          onClick={() => onNavItemClickHandler(id)}
          className={`
                    relative font-bold text-md duration-500 whitespace-nowrap
                    after:transition-all after:absolute after:left-0 after:right-0 after:-bottom-2 after:h-0.5 
                    after:border-purple-100 after:content-['.'] after:text-transparent after:bg-purple-100 
                    ${activeTab === id ? "after:w-full text-purple-100" : "desktop:after:w-0 xs:after:bg-gray-200 xs:after:bg-opacity-40 text-gray-200"}
          `}
        >
          {title}
        </button>
      ))}
    </nav>
  );
};

export default Navigation;
