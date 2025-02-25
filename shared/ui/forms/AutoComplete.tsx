import { forwardRef, useCallback, useRef, useState } from "react";
import type { ChangeEvent, ComponentPropsWithoutRef, ForwardedRef, KeyboardEvent } from "react";
import { useFormContext } from "react-hook-form";

import classNames from "classnames";
import { twMerge } from "tailwind-merge";

import ArrowIcon from "@/assets/vectors/Arrow.svg";
import useOutsideClick from "@/common/hooks/useOutsideClick";

export type TSelectItem = {
  id: string;
  title: string;
};

interface Props extends ComponentPropsWithoutRef<"input"> {
  label?: string;
  disabled?: boolean;
  error?: string;
  hint?: string;
  items: TSelectItem[];
  name: string;
}

const AutoComplete = forwardRef(
  (
    {
      required = false,
      disabled = false,
      label,
      error,
      hint,
      items,
      className,
      autoComplete = "new-password",
      name,
      ...props
    }: Props,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const { setValue, trigger } = useFormContext();

    const containerRef = useRef<HTMLLabelElement>(null);
    const listItemRef = useRef<HTMLLIElement>(null);
    const listContainerRef = useRef<HTMLUListElement>(null);

    const [selectedItem, setSelectedItem] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [list, setList] = useState(items);

    const onKeyDown = useCallback(
      (event: KeyboardEvent<HTMLInputElement>) => {
        if (["Tab", "ArrowDown", "ArrowUp", "Enter"].includes(event.code)) {
          let newSelectedItem = 0;

          switch (event.code) {
            case "Tab":
              setIsOpen(false);

              break;

            case "ArrowDown":
              if (!isOpen) setIsOpen(true);

              newSelectedItem = Math.min(selectedItem + 1, list.length);
              break;
            case "ArrowUp":
              if (!isOpen) setIsOpen(true);

              newSelectedItem = Math.max(selectedItem - 1, 1);
              break;

            case "Enter":
              event.preventDefault();

              listItemRef.current?.click();
              if (error) trigger(name);

              break;

            default:
              break;
          }

          // scroll into the next element in the list on key down
          if (listContainerRef.current) {
            const itemHeight = listItemRef.current?.offsetHeight ?? 0;
            const containerHeight = listContainerRef.current.offsetHeight;
            const scrollTop = listContainerRef.current.scrollTop;
            const selectedOffsetTop = (newSelectedItem - 1) * itemHeight;
            const selectedBottom = selectedOffsetTop + itemHeight;

            if (selectedOffsetTop < scrollTop) {
              listContainerRef.current.scrollTop = selectedOffsetTop;
            }

            if (selectedBottom >= scrollTop + containerHeight) {
              listContainerRef.current.scrollTop = selectedBottom - containerHeight + itemHeight;
            }
          }

          setSelectedItem(newSelectedItem);
        }
      },
      [error, isOpen, list.length, name, selectedItem, trigger]
    );

    const onInputChange = useCallback(
      (event: ChangeEvent<HTMLInputElement>) => {
        if (!isOpen) setIsOpen(true);

        const value = event.target.value;

        const filteredList = items.filter((item) =>
          item.title.toLowerCase().includes(value.toLowerCase())
        );

        setList(filteredList);
      },
      [isOpen, items]
    );

    useOutsideClick(containerRef, () => setIsOpen(false));

    return (
      <div className={twMerge(classNames("w-full relative", className))}>
        <label className="w-full flex flex-col space-y-[6px]" ref={containerRef}>
          {label && (
            <span
              className={twMerge(
                classNames("transition-all duration-700 text-gray-200 font-medium text-sm", {
                  ["text-warning-100"]: hint,
                  ["opacity-60"]: disabled,
                  ["after:content-['*'] after:text-purple-100"]: required,
                  ["text-error-100 after:text-error-100"]: error,
                })
              )}
            >
              {label}
            </span>
          )}
          <div className="relative">
            <input
              ref={ref}
              type="text"
              autoComplete={autoComplete}
              className={twMerge(
                classNames(
                  "transition-all duration-700 w-full border border-purple-100 rounded outline-none p-3 text-gray-100 caret-purple-100 focus:shadow-base-200",
                  {
                    ["opacity-60 cursor-not-allowed"]: disabled,
                    ["placeholder-warning-100 text-warning-100 border-warning-100"]: hint,
                    ["placeholder-error-100 text-error-100 border-error-100"]: error,
                  }
                )
              )}
              onKeyDown={onKeyDown}
              onInput={onInputChange}
              {...props}
            />
            <ArrowIcon
              className={twMerge(
                classNames(
                  "transition-all duration-700 absolute cursor-pointer top-[50%] -translate-y-[50%] right-[15px] size-4 fill-purple-100 -rotate-90 stroke-purple-100",
                  {
                    ["cursor-not-allowed"]: disabled,
                    ["rotate-90"]: isOpen,
                  }
                )
              )}
              onClick={() => {
                if (!disabled) {
                  setIsOpen((prev) => !prev);
                }
              }}
            />
          </div>
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
        <ul
          role="tree"
          ref={listContainerRef}
          className="transition-all duration-500 absolute w-full top-[85px] flex flex-col bg-white border border-purple-100 rounded-[8px] p-1 z-[20] "
          style={{
            // if the list is empty save the area for at least one item to show `no match found` message
            height: isOpen ? `${(list.length || 1) * 31 + 10}px` : "0",
            opacity: isOpen ? 100 : 0,
            maxHeight: isOpen ? 250 : 0,
            overflow: isOpen ? "auto" : "hidden",
          }}
        >
          {list.length !== 0 ? (
            list.map(({ id, title }, index) => (
              <li
                role="treeitem"
                key={id}
                // the ref will be refered to the active item to click and set the value
                ref={selectedItem === index + 1 ? listItemRef : null}
                onClick={() => {
                  if (!disabled) {
                    setValue(name, title);
                    setIsOpen(false);
                  }

                  if (error) trigger(name);
                }}
                className={classNames(
                  "transition-all duration-500 rounded-[8px] cursor-pointer hover:bg-gray-400 hover:bg-opacity-40",
                  {
                    ["bg-gray-400 bg-opacity-40"]: selectedItem === index + 1,
                  }
                )}
              >
                <p className="text-gray-200 text-sm py-[5px] pl-[12px] opacity-100">{title}</p>
              </li>
            ))
          ) : (
            <p className="text-gray-200 text-sm py-[5px] pl-[12px] opacity-100">No Match Found</p>
          )}
        </ul>
      </div>
    );
  }
);

AutoComplete.displayName = "AutoComplete";

export default AutoComplete;
