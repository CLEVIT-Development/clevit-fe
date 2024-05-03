import classNames from "classnames";

import { getFullYear } from "@/utils/date.utils";

interface Props {
  className?: string;
}

const Copyright = ({ className }: Props) => {
  return (
    <p className="flex items-center space-x-0.5 text-xs text-gray-100">
      <span className="text-gray-400 text-base font-semibold leading-[12px] opacity-60">
        &copy;
      </span>
      <span className={classNames("text-xs text-gray-100 opacity-60", className)}>
        {getFullYear()} Clevit
      </span>
    </p>
  );
};

export default Copyright;
