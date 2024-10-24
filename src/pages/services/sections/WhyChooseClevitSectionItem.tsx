interface WhyChooseClevitSectionProps {
  title: string;
  description: string;
}

const WhyChooseClevitSectionItem = ({ title, description }: WhyChooseClevitSectionProps) => {
  return (
    <div className="flex flex-col w-fit desktop:max-w-60  items-start justify-start gap-2 border-l-4 border-[#703391] px-2 text-start">
      <h3 className="text-md font-bold">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default WhyChooseClevitSectionItem;
