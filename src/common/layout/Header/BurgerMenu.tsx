import classNames from "classnames";

interface Props {
  isReached: boolean;
  isOpen: boolean;
  onMenuClick: () => void;
}

const BurgerMenu = ({ isReached, onMenuClick, isOpen }: Props) => {
  return (
    <div
      role="button"
      onClick={onMenuClick}
      className={classNames("flex flex-col space-y-[5px] cursor-pointer xs:flex lg:hidden")}
    >
      <span
        className={classNames("transition-all duration-700 w-8 h-1 bg-gray-400 rounded-lg", {
          ["bg-gray-600"]: isReached,
          ["rotate-45 translate-y-[9px]"]: isOpen,
        })}
      />
      <span
        className={classNames("transition-all duration-700 w-8 h-1 bg-gray-400 rounded-lg", {
          ["bg-gray-600"]: isReached,
          ["opacity-0"]: isOpen,
        })}
      />
      <span
        className={classNames("transition-all duration-700 w-8 h-1 bg-gray-400 rounded-lg", {
          ["bg-gray-600"]: isReached,
          ["-rotate-45 -translate-y-[9px]"]: isOpen,
        })}
      />
    </div>
  );
};

export default BurgerMenu;
