import { useCallback, useState } from "react";

import useWindowSize from "@/common/hooks/useWindowSize.ts";

export interface INavigationData {
  id: number;
  title: string;
  href?: string;
}

interface Props {
  items: INavigationData[];
  onItemClick?: (tabId: number, direction: string) => void;
}

const getDirectionFromTab = (currTabId: number, clickTabId: number, width: number) => {
  if (currTabId === clickTabId) {
    return "";
  } else if (currTabId > clickTabId) {
    if (width <= 1024) {
      return "top";
    } else {
      return "right";
    }
  } else {
    if (width <= 1024) {
      return "bottom";
    } else {
      return "left";
    }
  }
};

const Navigation = ({ items, onItemClick }: Props) => {
  const { width } = useWindowSize();

  const [activeTab, setActiveTab] = useState(1);

  const onNavItemClickHandler = useCallback(
    (currTabId: number) => {
      const direction = getDirectionFromTab(activeTab, currTabId, width);

      setActiveTab(currTabId);

      onItemClick?.(currTabId, direction);
    },
    [activeTab, width, onItemClick]
  );

  return (
    <nav className="flex lg:space-x-12 desktop:space-x-3.5 xs:space-x-0 desktop:flex-row xs:w-full xs:px-1.5 xs:flex-col xs:justify-center desktop:space-y-0 xs:space-y-8">
      {items.map(({ id, title }) => (
        <button
          key={id}
          onClick={() => onNavItemClickHandler(id)}
          className={`
                    relative text-md duration-500 whitespace-nowrap
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
