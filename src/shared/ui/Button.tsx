import { forwardRef } from "react";
import type { ComponentPropsWithoutRef, LegacyRef, ReactNode } from "react";

import { twMerge } from "tailwind-merge";

import { ButtonVariant } from "@/types/variant.types.ts";

interface Props extends Omit<ComponentPropsWithoutRef<"button">, "prefix"> {
  prefix?: ReactNode;
  suffix?: ReactNode;
  variant?: ButtonVariant;
}

const Button = forwardRef(
  (
    { children, className, prefix, suffix, variant = ButtonVariant.Primary, ...props }: Props,
    ref: LegacyRef<HTMLButtonElement>
  ) => {
    const buttonVariantStyle = {
      [ButtonVariant.Primary]: "bg-blue-200 bg-purple-300",
      [ButtonVariant.Outlined]: "bg-transparent border border-white",
    };

    return (
      <button
        ref={ref}
        className={twMerge(
          `flex space-x-2 items-center rounded-lg px-6 py-3 outline-none ${buttonVariantStyle[variant]}`,
          className
        )}
        {...props}
      >
        {prefix ? <div className="w-6 h-6 button-prefix-suffix">{prefix}</div> : null}
        <span className="text-white font-medium text-md-l">{children}</span>
        {suffix ? <div className="w-6 h-6 button-prefix-suffix">{suffix}</div> : null}
      </button>
    );
  }
);

export default Button;
