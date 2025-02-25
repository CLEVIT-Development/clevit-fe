import classNames from "classnames";
import Image from "next/image";

import { PrimaryLogoURL, SecondaryLogoURL } from "@/shared/constants/seo.constants";
import { LogoVariant } from "@/types/variant.types";

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
    <Image
      priority
      width={140}
      height={64}
      alt="CLEVIT Logo"
      src={configVariant[variant]}
      className={classNames("w-[140px] h-[64px] cursor-pointer", className)}
      onClick={onLogoClick}
      {...props}
    />
  );
};

export default Logo;
