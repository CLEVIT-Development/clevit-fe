import { twMerge } from "tailwind-merge";

import { PositionVariant } from "../../../types/position.types";

interface Props {
  position?: PositionVariant;
  className?: string;
}

const positionStyles = {
  [PositionVariant.Horizontal]: "h-0.5 w-[100px] border-b-2",
  [PositionVariant.Vertical]: "h-[100px] w-0.5 border-r-2",
};

const Connector = ({ position = PositionVariant.Horizontal, className }: Props) => {
  return (
    <div
      className={twMerge(`border-dotted border-purple-100 ${positionStyles[position]}`, className)}
    />
  );
};

export default Connector;
