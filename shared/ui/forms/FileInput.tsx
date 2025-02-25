import type { ForwardedRef, ReactNode } from "react";
import { type ComponentPropsWithoutRef, forwardRef, useState } from "react";
import { useFormContext } from "react-hook-form";

import classNames from "classnames";
import { twMerge } from "tailwind-merge";

import PaperClip from "@/assets/vectors/Paperclip.svg";
import PdfFileIcon from "@/assets/vectors/PdfFile.svg";

import FilePreview from "./FilePreview";

interface Props extends ComponentPropsWithoutRef<"input"> {
  error?: string;
  label?: string;
  icon?: ReactNode;
  name: string;
}

const FileInput = forwardRef(
  (
    { error, label = "Attach File", icon = <PaperClip />, name, ...props }: Props,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const { setValue } = useFormContext();
    const [selectedFile, setSelectedFile] = useState<File | null>();

    return (
      <div className="flex flex-col space-y-2">
        <label
          tabIndex={-1}
          htmlFor="upload"
          className="relative flex items-center space-x-2 cursor-pointer"
        >
          {icon}
          <span className="text-purple-100 font-medium text-base">{label}</span>
          <input
            ref={ref}
            id="upload"
            type="file"
            title=""
            className="absolute opacity-0 cursor-pointer w-[100px]"
            onInput={(event) => {
              setSelectedFile(event.currentTarget.files?.[0]);
              setValue(name, event.currentTarget.files?.[0]);
            }}
            onDrop={(event) => {
              setValue(name, event.currentTarget.files?.[0]);
            }}
            {...props}
          />
        </label>
        <span
          className={twMerge(
            classNames(
              "transition-all duration-700 text-gray-100 text-xs font-normal h-[10px] opacity-0",
              {
                ["text-error-100 opacity-100"]: error,
              }
            )
          )}
        >
          {error}
        </span>
        {selectedFile && (
          <div className="flex flex-col space-y-2">
            <FilePreview
              name={selectedFile.name}
              icon={<PdfFileIcon />}
              onCancelClick={() => {
                setSelectedFile(null);
                setValue(name, null);
              }}
            />
          </div>
        )}
      </div>
    );
  }
);

FileInput.displayName = "FileInput";

export default FileInput;
