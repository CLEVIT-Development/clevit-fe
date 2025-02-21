import root from "react-shadow";

import { twMerge } from "tailwind-merge";

interface Props extends React.ComponentProps<"div"> {
  content: string;
}

const DraftPreview: React.FC<Props> = ({ content, className, ...props }) => {
  return (
    <root.div {...props} className={twMerge("max-w-full no-scrollbar", className)}>
      <div className="w-full" dangerouslySetInnerHTML={{ __html: content }} />
    </root.div>
  );
};

export default DraftPreview;
