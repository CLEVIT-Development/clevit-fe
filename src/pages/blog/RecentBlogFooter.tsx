import Date from "@/assets/vectors/Date.svg?react";

interface Props {
  image: string;
  imageAlt: string;
  description: string;
  date: string;
}

const RecentBlogFooter = ({ image, imageAlt, description, date }: Props) => {
  return (
    <div className="flex gap-2">
      <div className="w-[54px] h-[52px]">
        <img src={image} alt={imageAlt} className="w-full h-full rounded" />
      </div>
      <div>
        <div className="flex gap-2 items-center">
          {" "}
          <Date /> <span className="text-white">{date}</span>{" "}
        </div>
        <div className="whitespace-nowrap overflow-hidden text-ellipsis desktopw-[200px]  text-white">
          {description}
        </div>
      </div>
    </div>
  );
};

export default RecentBlogFooter;
