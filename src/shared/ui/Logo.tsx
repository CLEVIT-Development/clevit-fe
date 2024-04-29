import classNames from "classnames";

import LogoIcon from "@/assets/vectors/Logo.svg?react";
import { LogoVariant } from "@/types/variant.types.ts";

interface Props {
  variant?: LogoVariant;
  className?: string;
}

const Logo = ({ variant = LogoVariant.Primary, className }: Props) => {
  const configVariant = {
    [LogoVariant.Primary]: "fill-gray-400",
    [LogoVariant.Secondary]: "fill-gray-200",
  };

  return (
    <LogoIcon
      className={classNames(
        "md:w-auto md:h-auto xs:w-16 xs:h-[30px]",
        configVariant[variant],
        className
      )}
    />
  );
};

export default Logo;
