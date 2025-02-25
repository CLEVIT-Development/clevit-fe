import { forwardRef } from "react";
import type { ComponentPropsWithoutRef, ForwardedRef } from "react";

import classNames from "classnames";
import { twMerge } from "tailwind-merge";

interface Props extends ComponentPropsWithoutRef<"input"> {
  label?: string;
  disabled?: boolean;
  error?: string;
  hint?: string;
  name: string;
}

const Input = forwardRef(
  (
    {
      label,
      placeholder = "Input Placeholder",
      autoComplete = "new-password",
      required = false,
      disabled = false,
      error,
      hint,
      className,
      ...props
    }: Props,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <div className={twMerge(classNames("flex flex-col space-y-2", className))}>
        <label className="w-full flex flex-col space-y-[6px]">
          {label && (
            <span
              className={twMerge(
                classNames("transition-all duration-700 text-gray-200 font-medium text-sm", {
                  ["after:content-['*'] after:text-purple-100"]: required,
                  ["opacity-60"]: disabled,
                  ["text-warning-100"]: hint,
                  ["text-error-100 after:text-error-100"]: error,
                })
              )}
            >
              {label}
            </span>
          )}
          <input
            className={twMerge(
              classNames(
                "transition-all duration-700 border border-purple-100 rounded outline-none p-3 text-gray-100 caret-purple-100 focus:shadow-base-200 disabled:cursor-not-allowed",
                {
                  ["opacity-60"]: disabled,
                  ["placeholder-warning-100 text-warning-100 border-warning-100"]: hint,
                  ["placeholder-error-100 text-error-100 border-error-100 after:text-error-100"]:
                    error,
                }
              )
            )}
            ref={ref}
            type="text"
            disabled={disabled}
            placeholder={placeholder}
            autoComplete={autoComplete}
            {...props}
          />
        </label>
        <span
          className={twMerge(
            classNames(
              "transition-all duration-700 text-gray-100 text-xs font-normal h-[5px] opacity-0",
              {
                ["text-warning-100 opacity-100"]: hint,
                ["text-error-100 opacity-100"]: error,
                ["opacity-60"]: disabled,
              }
            )
          )}
        >
          {error || hint}
        </span>
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
