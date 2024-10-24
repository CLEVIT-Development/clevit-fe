import { twMerge } from "tailwind-merge";

import PlusIcon from "@/assets/vectors/PlusIcon.svg?react";

interface IProps {
  handleBlogCreate: () => void;
}

const CreateBlog: React.FC<IProps> = ({ handleBlogCreate }) => {
  return (
    <div
      role="button"
      onClick={handleBlogCreate}
      className={twMerge(
        "rounded-lg transition-all duration-300 bg-white shadow-md hover:shadow-lg",
        "flex justify-center items-center w-full h-full",
        "group overflow-hidden relative"
      )}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[#9B3B94] via-[#4d1d4a] to-black" />
      <PlusIcon className="w-1/2 aspect-square transition-colors duration-300 z-10 [&>g>path]:fill-[#000] group-hover:[&>g>path]:fill-white" />
    </div>
  );
};

export default CreateBlog;
