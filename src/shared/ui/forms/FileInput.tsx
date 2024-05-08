import type { ForwardedRef } from "react";
import { type ComponentPropsWithoutRef, forwardRef, useState } from "react";

import classNames from "classnames";
import { twMerge } from "tailwind-merge";

import PaperClip from "@/assets/vectors/Paperclip.svg?react";
import PdfFileIcon from "@/assets/vectors/PdfFile.svg?react";

import FilePreview from "./FilePreview";

interface Props extends ComponentPropsWithoutRef<"input"> {
  error?: string;
  label?: string;
  icon?: React.ReactNode;
}

const FileInput = forwardRef(
  (
    { error, label = "Attach File", icon = <PaperClip />, ...props }: Props,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const [selectedFile, setSelectedFile] = useState<File | null>();

    return (
      <div className="flex flex-col space-y-2">
        <label htmlFor="upload" className="flex items-center space-x-2 cursor-pointer">
          {icon}
          <span className="text-purple-100 font-medium text-base">{label}</span>
          <input
            ref={ref}
            id="upload"
            type="file"
            className="hidden"
            onInput={(event) => {
              setSelectedFile(event.currentTarget.files?.[0]);
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
              onCancelClick={() => setSelectedFile(null)}
            />
          </div>
        )}
      </div>
    );
  }
);

export default FileInput;
