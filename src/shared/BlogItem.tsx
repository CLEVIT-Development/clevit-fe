import Date from "@/assets/vectors/Date.svg?react";
import { truncate } from "@/utils/textTruncate.utils";

interface Props {
  image: string;
  imageAlt: string;
  title: string;
  date: string;
}

const BlogItem = ({ image, imageAlt, title, date }: Props) => {
  return (
    <div className="flex gap-2">
      <div className="min-w-[54px] h-[52px]">
        <img src={image} alt={imageAlt} className="w-full h-full rounded" />
      </div>
      <div className="w-[calc(100%-60px)]">
        <div className="flex gap-2 items-center">
          {" "}
          <Date /> <span className="text-white">{date}</span>{" "}
        </div>
        <div className="line-clamp-1 desktop:w-[200px] w-[120px]  text-white">{title}</div>
      </div>
    </div>
  );
};

export default BlogItem;
