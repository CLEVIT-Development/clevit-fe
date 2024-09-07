import classNames from "classnames";

import { PrimaryLogoURL, SecondaryLogoURL } from "@/assets/constants/seo.constants.ts";
import { LogoVariant } from "@/types/variant.types.ts";

interface Props {
  variant?: LogoVariant;
  className?: string;
  onLogoClick?: () => void;
}

const Logo = ({ variant = LogoVariant.Primary, className, onLogoClick, ...props }: Props) => {
  const configVariant = {
    [LogoVariant.Primary]: PrimaryLogoURL,
    [LogoVariant.Secondary]: SecondaryLogoURL,
  };

  return (
    <img
      loading="lazy"
      alt="CLEVIT Logo"
      src={configVariant[variant]}
      className={classNames("w-[140px] h-[64px] cursor-pointer", className)}
      onClick={onLogoClick}
      {...props}
    />
  );
};

export default Logo;
