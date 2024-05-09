import type { ForwardedRef } from "react";
import { type ComponentPropsWithoutRef, forwardRef } from "react";

import classNames from "classnames";
import { twMerge } from "tailwind-merge";

interface Props extends ComponentPropsWithoutRef<"textarea"> {
  label?: string;
  disabled?: boolean;
  error?: string;
  hint?: string;
}

const TextArea = forwardRef(
  (
    {
      className,
      label,
      error,
      hint,
      disabled,
      required,
      placeholder = "Text Area Input",
      ...props
    }: Props,
    ref: ForwardedRef<HTMLTextAreaElement>
  ) => {
    return (
      <label className={twMerge(classNames("w-full flex flex-col space-y-[6px]", className))}>
        {label && (
          <span
            className={twMerge(
              classNames("transition-all duration-700 text-gray-200 font-medium text-sm", {
                ["opacity-60"]: disabled,
                ["text-error-100"]: error,
                ["text-warning-100"]: hint,
                ["after:content-['*'] after:text-purple-100"]: required,
              })
            )}
          >
            {label}
          </span>
        )}
        <textarea
          className={twMerge(
            classNames(
              "transition-all duration-700 resize-none border border-purple-100 rounded outline-none p-3 text-gray-100 caret-purple-100 min-h-[120px] focus:shadow-base-200 disabled:cursor-not-allowed",
              {
                ["opacity-60 cursor-not-allowed"]: disabled,
                ["placeholder-warning-100 text-warning-100 border-warning-100"]: hint,
                ["placeholder-error-100 text-error-100 border-error-100 after:text-error-100"]:
                  error,
              }
            )
          )}
          ref={ref}
          placeholder={placeholder}
          {...props}
        />
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
      </label>
    );
  }
);

export default TextArea;
