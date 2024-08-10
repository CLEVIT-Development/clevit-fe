import Section from "@/common/templates/Section.tsx";
import IndustryServeCard from "@/pages/services/sections/IndustryServe/IndustryServeCard.tsx";
import type { IProcess } from "@/types/constant.types.ts";

interface Props {
  title: string;
  description: string;
  industries: IProcess[];
}

const IndustryServeSection = ({ title, description, industries }: Props) => (
  <Section>
    <h4 className="text-gray-200 text-lg font-semibold lg:text-2xl">{title}</h4>
    <p className="text-gray-200 text-base lg:text-md md:text-center">{description}</p>
    <div className="flex space-x-4 lg:space-x-6 py-5 px-5 desktop:px-8 overflow-x-auto no-scrollbar max-w-[100vw]">
      {industries.map(({ id, title, Icon }) => (
        <IndustryServeCard key={id} title={title} icon={<Icon className="size-14" />} />
      ))}
    </div>
  </Section>
);

export default IndustryServeSection;
