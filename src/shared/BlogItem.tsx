import Date from "@/assets/vectors/Date.svg?react";
import { truncate } from "@/utils/textTruncate.utils";

interface Props {
  image: string;
  imageAlt: string;
  description: string;
  date: string;
}

const BlogItem = ({ image, imageAlt, description, date }: Props) => {
  return (
    <div className="flex gap-2">
      <div className="w-[54px] h-[52px]">
        <img src={image} alt={imageAlt} className="w-full h-full rounded" />
      </div>
      <div className="w-[calc(100%-60px)]">
        <div className="flex gap-2 items-center">
          {" "}
          <Date /> <span className="text-white">{date}</span>{" "}
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: truncate(description, 80) }}
          className=" overflow-hidden text-ellipsis  text-white"
        />
      </div>
    </div>
  );
};

export default BlogItem;
