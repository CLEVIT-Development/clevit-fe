import CalendarBlank from "@/assets/vectors/CalendarBlank.svg?react";
import { formatDate } from "@/utils/date.utils.ts";

interface Props {
  image: string;
  date: Date;
  description: string;
}

const RecentPost = ({ image, date, description }: Props) => {
  return (
    <div className="flex space-x-2">
      <img src={image} alt="Recent Post Image" className="w-[54px] h-[52px] rounded" />
      <div className="flex flex-col space-y-1">
        <p className="flex items-center space-x-1">
          <CalendarBlank />
          <span className="text-white text-sm font-medium">{formatDate(date)}</span>
        </p>
        <p className="max-w-[142px] truncate text-sm text-white whitespace-nowrap">{description}</p>
      </div>
    </div>
  );
};

export default RecentPost;
