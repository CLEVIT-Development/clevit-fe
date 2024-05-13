import { Link } from "react-router-dom";

import EnvelopeIcon from "@/assets/vectors/Envelope.svg?react";
import LocationIcon from "@/assets/vectors/Location.svg?react";
import TelephoneIcon from "@/assets/vectors/Telephone.svg?react";
import { socialLinksConstants } from "@/common/constants/socials.constants";

import ContactItem from "./ContactItem";

const ContactInfo = () => {
  return (
    <div className="flex flex-col desktop:items-start items-center desktop:space-y-8 space-y-6">
      <p className="desktop:text-2xl text-lg font-semibold text-white">Contact Details</p>
      <div className="flex flex-col desktop:space-y-[30px] space-y-[20px]">
        <ContactItem icon={<EnvelopeIcon className="fill-white" />} content="info@clevit.com" />
        <ContactItem icon={<TelephoneIcon className="stroke-white" />} content="+374 96 555 555" />
        <ContactItem
          icon={<LocationIcon className="fill-white" />}
          content="Komitas 14/3, Yerevan, Armenia"
        />
        <div className="flex space-x-[30px] desktop:self-start self-center">
          {socialLinksConstants.map(({ id, link, Icon }) => (
            <Link key={id} to={link} target="_blank">
              <Icon className="fill-purple-700 desktop:h-[36px] desktop:w-[36px] h-[27px] w-[27px]" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
