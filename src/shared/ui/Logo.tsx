import classNames from "classnames";

import { LogoVariant } from "@/types/variant.types.ts";

interface Props {
  variant?: LogoVariant;
  className?: string;
  onLogoClick?: () => void;
}

const Logo = ({ variant = LogoVariant.Primary, className, onLogoClick, ...props }: Props) => {
  const configVariant = {
    [LogoVariant.Primary]: "fill-gray-400",
    [LogoVariant.Secondary]: "fill-gray-200",
  };

  return (
    <>
      <img
        alt="CLEVIT Logo"
        src="https://res.cloudinary.com/dchnaa2wb/image/upload/v1723305640/splbcetu7trgqfdeuau9.svg"
        className={classNames(
          "md:w-auto md:h-auto xs:w-20 xs:h-[38px] cursor-pointer",
          configVariant[variant],
          className
        )}
        onClick={onLogoClick}
        {...props}
      />
    </>
  );
};

export default Logo;
