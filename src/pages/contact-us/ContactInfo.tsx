import { Link } from "react-router-dom";

import { socialLinksConstants } from "@/assets/constants/socials.constants";
import EnvelopeIcon from "@/assets/vectors/Envelope.svg?react";
import LocationIcon from "@/assets/vectors/Location.svg?react";
import TelegramIcon from "@/assets/vectors/Telegram.svg?react";
import TelephoneIcon from "@/assets/vectors/Telephone.svg?react";
import ViberIcon from "@/assets/vectors/Viber.svg?react";
import WatsappIcon from "@/assets/vectors/Watsapp.svg?react";

import ContactItem from "./ContactItem";
import ContactWrapper from "./ContactWrapper";

const ContactInfo = () => {
  return (
    <div className="flex flex-col desktop:items-start items-center desktop:space-y-8 space-y-6">
      <p className="desktop:text-2xl text-lg font-semibold text-white">Contact Details</p>
      <div className="flex flex-col desktop:space-y-[30px] space-y-[20px]">
        <ContactWrapper>
          <ContactItem icon={<EnvelopeIcon className="fill-white" />} content="info@clevit.io" />
        </ContactWrapper>
        <ContactWrapper>
          <ContactItem
            icon={<TelephoneIcon className="stroke-white" />}
            content="+374 96 555 555"
          />
          <ContactItem icon={<WatsappIcon className="stroke-white" />} content="+374 96 555 555" />
          <ContactItem icon={<TelegramIcon className="stroke-white" />} content="+374 96 555 555" />
          <ContactItem icon={<ViberIcon className="stroke-white" />} content="+374 96 555 555" />
        </ContactWrapper>
        <ContactWrapper>
          <ContactItem
            icon={<LocationIcon className="fill-white" />}
            content="Komitas 14/3, Yerevan, Armenia"
          />
        </ContactWrapper>

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
