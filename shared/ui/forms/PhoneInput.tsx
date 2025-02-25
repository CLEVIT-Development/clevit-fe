"use client";

import type { ForwardedRef } from "react";
import { type ComponentPropsWithoutRef, forwardRef } from "react";
import type { RegisterOptions } from "react-hook-form";
import PhoneInput2 from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import classNames from "classnames";
import { twMerge } from "tailwind-merge";

import { preferredCountries } from "@/shared/constants/phoneInput.constants";

interface Props extends Omit<ComponentPropsWithoutRef<"input">, "onChange"> {
  label?: string;
  disabled?: boolean;
  error?: string;
  defaultCountry?: string;
  rules?: RegisterOptions;
  onChange?: (value: string, country: string) => void;
  extraProps?: object;
}

const PhoneInput = forwardRef(
  (
    {
      required = false,
      disabled = false,
      defaultCountry = "us",
      placeholder = "Input Placeholder",
      label,
      error,
      className,
      extraProps,
      ...props
    }: Props,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <label className={twMerge(classNames("flex flex-col space-y-[6px]", className))}>
        {label && (
          <span
            className={twMerge(
              classNames("transition-all duration-700 text-gray-200 font-medium text-sm", {
                ["opacity-60"]: disabled,
                ["after:content-['*'] after:text-purple-100"]: required,
                ["text-error-100 after:text-error-100"]: error,
              })
            )}
          >
            {label}
          </span>
        )}
        <PhoneInput2
          inputProps={{
            ref,
            ...props,
          }}
          disabled={disabled}
          country={defaultCountry}
          placeholder={placeholder}
          preferredCountries={preferredCountries}
          buttonStyle={{
            borderColor: error ? "#C0241A" : "#703391",
            width: 45,
            paddingLeft: 3,
          }}
          inputStyle={{
            width: "100%",
            paddingTop: 25,
            paddingBottom: 23,
            paddingLeft: 50,
            color: error ? "#C0241A" : "#55606A",
            borderColor: error ? "#C0241A" : "#703391",
          }}
          {...extraProps}
        />
        <span
          className={twMerge(
            classNames(
              "transition-all duration-700 text-gray-100 text-xs font-normal h-[5px] opacity-0",
              {
                ["text-error-100 opacity-100"]: error,
                ["opacity-60"]: disabled,
              }
            )
          )}
        >
          {error}
        </span>
      </label>
    );
  }
);

PhoneInput.displayName = "PhoneInput";

export default PhoneInput;
