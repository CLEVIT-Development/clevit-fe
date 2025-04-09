import type { ReactNode } from "react";

import { SectionVariant } from "../../types/variant.types";
import Section from "./Section";

interface Props {
  title?: string;
  listItems?: ReactNode[];
  description?: ReactNode;
  description2?: ReactNode;
  headline?: string;
}

const DocumentSection = ({ headline, title, listItems, description, description2 }: Props) => {
  return (
    <Section title={headline} variant={SectionVariant.Secondary}>
      <div className="flex flex-col items-start space-y-2">
        {title && <h3 className="text-md text-gray-200">{title}</h3>}
        {listItems && (
          <ul>
            {listItems.map((listItem, index) => (
              <li key={index} className="flex space-x-2 items-start">
                <span className="text-gray-200">-</span>
                <p className="text-base font-normal text-gray-200">{listItem}</p>
              </li>
            ))}
          </ul>
        )}
        {description && <p className="text-md font-normal text-gray-200">{description}</p>}
        {description && !description2 && <br />}
        {description2 && <p className="text-md font-normal text-gray-200">{description2}</p>}
      </div>
    </Section>
  );
};

export default DocumentSection;
