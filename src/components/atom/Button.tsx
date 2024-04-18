import { EButtonVariant } from "@/types/variant.types.ts";

import { forwardRef } from "react";
import type { ComponentPropsWithoutRef, LegacyRef, ReactNode } from "react";

import { twMerge } from "tailwind-merge";

interface Props extends Omit<ComponentPropsWithoutRef<"button">, "prefix"> {
  prefix?: ReactNode;
  suffix?: ReactNode;
  variant?: EButtonVariant;
}

const Button = forwardRef(
  (
    { children, className, prefix, suffix, variant = EButtonVariant.Primary, ...props }: Props,
    ref: LegacyRef<HTMLButtonElement>
  ) => {
    const buttonVariantStyle = {
      [EButtonVariant.Primary]: "bg-blue200 bg-purple300",
      [EButtonVariant.Outlined]: "bg-transparent border border-white",
    };

    return (
      <button
        ref={ref}
        className={twMerge(
          `flex space-x-2 items-center rounded-lg px-6 py-3 ${buttonVariantStyle[variant]}`,
          className
        )}
        {...props}
      >
        {prefix ? <div className="w-6 h-6 button-prefix-suffix">{prefix}</div> : null}
        <span className="text-white font-medium text-xl">{children}</span>
        {suffix ? <div className="w-6 h-6 button-prefix-suffix">{suffix}</div> : null}
      </button>
    );
  }
);

export default Button;
