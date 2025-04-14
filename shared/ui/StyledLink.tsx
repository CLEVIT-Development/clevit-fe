import { forwardRef } from "react";
import type { ComponentPropsWithoutRef, ForwardedRef, ReactNode } from "react";

import Link from "next/link";
import { twMerge } from "tailwind-merge";

import { ButtonVariant } from "../../types/variant.types";

interface LinkButtonProps extends Omit<ComponentPropsWithoutRef<"a">, "prefix"> {
  prefix?: ReactNode;
  suffix?: ReactNode;
  variant?: ButtonVariant;
  href: string;
}

const StyledLink = forwardRef(
  (
    {
      children,
      className,
      prefix,
      suffix,
      variant = ButtonVariant.Primary,
      ...props
    }: LinkButtonProps,
    ref: ForwardedRef<HTMLAnchorElement>
  ) => {
    const buttonVariantStyle = {
      [ButtonVariant.Primary]:
        "bg-blue-200 bg-purple-300 disabled:opacity-20 text-white hover:bg-purple-500 focus:outline-white focus:outline-offset-[-5px]",
      [ButtonVariant.Outlined]:
        "bg-transparent border border-white text-white disabled:opacity-40 hover:border-purple-300 hover:bg-purple-300 focus:outline-purple-500 focus:outline-offset-[-5px]",
    };

    return (
      <Link
        ref={ref}
        {...props}
        className={twMerge(
          `transition-all duration-300 flex space-x-2 items-center rounded-lg px-6 py-3 outline-none relative group disabled:cursor-not-allowed ${buttonVariantStyle[variant]}`,
          className
        )}
      >
        {prefix ? <div className="w-6 h-6 svg-wrapper">{prefix}</div> : null}
        <span className="font-medium text-center">{children}</span>
        {suffix ? <div className="w-6 h-6 svg-wrapper">{suffix}</div> : null}
      </Link>
    );
  }
);

StyledLink.displayName = "StyledLink";

export default StyledLink;
