import Date from "@/assets/vectors/Date.svg?react";

interface Props {
  handleClickOnBlog: (titlePath: string) => void;
  titlePath: string;
  image: string;
  imageAlt: string;
  title: string;
  date: string;
}

const BlogItem = ({ handleClickOnBlog, image, imageAlt, title, date, titlePath }: Props) => {
  return (
    <div
      role="button"
      onClick={() => handleClickOnBlog(titlePath)}
      className="flex gap-2 cursor-pointer"
    >
      <div className="w-[52px] h-[52px]">
        <img src={image} alt={imageAlt} className="w-full h-full rounded object-cover" />
      </div>
      <div className="w-[calc(100%-60px)]">
        <div className="flex gap-2 items-center">
          <Date /> <span className="text-white">{date}</span>
        </div>
        <div className="line-clamp-1 w-full text-white">{title}</div>
      </div>
    </div>
  );
};

export default BlogItem;
