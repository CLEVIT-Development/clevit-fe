import { Link } from "react-router-dom";

import { appConfig } from "@/assets/constants/config.constants";
import { socialLinksConstants } from "@/assets/constants/socials.constants";
import EnvelopeIcon from "@/assets/vectors/Envelope.svg?react";
import LocationIcon from "@/assets/vectors/Location.svg?react";
import TelegramIcon from "@/assets/vectors/Telegram.svg?react";
import TelephoneIcon from "@/assets/vectors/Telephone.svg?react";
import ViberIcon from "@/assets/vectors/Viber.svg?react";
import WatsappIcon from "@/assets/vectors/Watsapp.svg?react";
import { formatPhoneNumber } from "@/utils/phone.utils";

import ContactItem from "./ContactItem";
import ContactWrapper from "./ContactWrapper";

const ContactInfo = () => {
  const formattedAddressSecond = encodeURIComponent(appConfig.contactAddressSecondary);

  // Create the URL for Google Maps
  const mapUrlSecond = `https://www.google.com/maps/search/?api=1&query=${formattedAddressSecond}`;

  const displayPhoneNumber1 = formatPhoneNumber(appConfig.contactPhone, "Armenia");
  // const displayPhoneNumber2 = formatPhoneNumber(appConfig.contactPhoneSecondary, "USA");

  return (
    <div className="lg:w-auto  w-full flex flex-col desktop:items-start items-center desktop:space-y-8 space-y-6">
      <p className="desktop:text-2xl text-lg font-semibold text-white">Contact Details</p>
      <div className="lg:w-auto w-full flex flex-col desktop:space-y-[30px] space-y-[20px]">
        <ContactWrapper>
          <ContactItem
            icon={<EnvelopeIcon className="fill-white" />}
            content={
              <a href={`mailto:${appConfig.contactMail}}`} className="hover:opacity-75">
                {appConfig.contactMail}
              </a>
            }
          />
        </ContactWrapper>
        <ContactWrapper>
          <ContactItem
            icon={<TelephoneIcon className="stroke-white" />}
            content={
              <a href={`tel:${appConfig.contactPhone}}`} className="hover:opacity-75">
                {displayPhoneNumber1}
              </a>
            }
          />
          <ContactItem
            icon={<WatsappIcon className="stroke-white" />}
            content={
              <div className="flex space-x-2">
                <a href={`https://wa.me/${appConfig.contactPhone}`} className="hover:opacity-75">
                  {displayPhoneNumber1}
                </a>
              </div>
            }
          />
          <ContactItem
            icon={<TelegramIcon className="stroke-white" />}
            content={
              <div className="flex space-x-2">
                <a href={`https://t.me/${appConfig.contactPhone}`} className="hover:opacity-75">
                  {displayPhoneNumber1}
                </a>
              </div>
            }
          />
          <ContactItem
            icon={<ViberIcon className="stroke-white" />}
            content={
              <div className="flex space-x-2">
                <a
                  href={`viber://chat?number=${appConfig.contactPhone}`}
                  className="hover:opacity-75"
                >
                  {displayPhoneNumber1}
                </a>
              </div>
            }
          />
        </ContactWrapper>
        <ContactWrapper>
          {/*/>*/}
          <ContactItem
            icon={<LocationIcon className="fill-white" />}
            content={
              <a
                href={mapUrlSecond}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-75"
              >
                {appConfig.contactAddressSecondary}
              </a>
            }
          />
        </ContactWrapper>

        <div className="flex space-x-[30px] lg:self-start self-center">
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
