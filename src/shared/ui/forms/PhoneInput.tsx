import { type ComponentPropsWithoutRef, useCallback, useState } from "react";
import type { Control, FieldValues, Path, RegisterOptions } from "react-hook-form";
import { Controller } from "react-hook-form";
import type { CountryData } from "react-phone-input-2";
import PhoneInput2 from "react-phone-input-2";

import classNames from "classnames";
import { twMerge } from "tailwind-merge";

import type { TCountryCode } from "@/common/constants/phoneInput.constants";
import {
  phoneValidationConstants,
  preferredCountries,
} from "@/common/constants/phoneInput.constants";

interface Props<T extends FieldValues> extends Omit<ComponentPropsWithoutRef<"input">, "onChange"> {
  label?: string;
  disabled?: boolean;
  error?: string;
  name: Path<T>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register?: any;
  defaultCountry?: TCountryCode;
  rules?: RegisterOptions;
  control: Control<T>;
  onChange?: (value: string, country: TCountryCode) => void;
}

const PhoneInput = <T extends FieldValues>({
  required = false,
  disabled = false,
  placeholder = "Input Placeholder",
  label,
  error,
  name,
  rules,
  className,
  defaultCountry = "am",
  control,
  onChange,
  ...props
}: Props<T>) => {
  const [countryCode, setCountryCode] = useState<TCountryCode>(defaultCountry);

  const onPhoneInputChange = useCallback(
    (phoneNumber: string, countryData: CountryData) => {
      const pickedCountryCode = countryData.countryCode as TCountryCode;

      setCountryCode(pickedCountryCode);

      onChange?.(phoneNumber, pickedCountryCode);

      return true;
    },
    [onChange]
  );

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
      <Controller
        name={name}
        control={control}
        rules={{
          ...rules,
          pattern: {
            value: phoneValidationConstants[countryCode],
            message: "Invalid phone number format",
          },
        }}
        render={({ field: { ref, onChange, ...field } }) => (
          <PhoneInput2
            onChange={(phoneNumber, countryData) => {
              onChange(phoneNumber);
              onPhoneInputChange(phoneNumber, countryData as CountryData);
            }}
            {...field}
            inputProps={{
              ref,
              autoFocus: true,
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
          />
        )}
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
};

export default PhoneInput;
