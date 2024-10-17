import root from "react-shadow";

interface Props {
  content: string;
}

const DraftPreview: React.FC<Props> = ({ content }) => {
  return (
    <root.div className="desktop:max-w-[80%]">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </root.div>
  );
};

export default DraftPreview;
