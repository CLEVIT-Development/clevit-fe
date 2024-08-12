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
      alt="CLEVIT Logo"
      src={configVariant[variant]}
      className={className}
      onClick={onLogoClick}
      {...props}
    />
  );
};

export default Logo;
