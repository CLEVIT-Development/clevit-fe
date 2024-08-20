import { Link, useNavigate } from "react-router-dom";

import { RoutePaths } from "@/app/routing/routing.constants.ts";
import { contactsConstants } from "@/assets/constants/contacts.constants.ts";
import { servicesConstants } from "@/assets/constants/services.constants.ts";
import { socialLinksConstants } from "@/assets/constants/socials.constants.ts";
import Copyright from "@/shared/ui/Copyright";
import Logo from "@/shared/ui/Logo.tsx";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="flex flex-col bg-black lg:pt-12 lg:pb-6 xs:pt-5 xs:pb-4 lg:px-20 xs:px-5 z-[20]">
      <div className="xs:grid xs:grid-cols-2 xs:gap-8 lg:grid-cols-4">
        <div className="flex flex-col space-y-4 sm:col-auto xs:col-span-2">
          <div>
            <Logo />
          </div>
          <span className="lg:text-base xs:text-sm text-gray-100 max-w-[340px]">
            As a leading web and mobile app development company, Clevit empowers businesses across
            all sectors to unlock their full digital potential. Our team of skilled web app
            developers delivers top-notch web, mobile, and AI-driven solutions tailored to your
            unique needs and business goals. Whether you're a startup or an established company,
            Clevit is your trusted partner for all your digital needs.
          </span>
          <div className="flex space-x-4 mt-6">
            {socialLinksConstants.map(({ id, link, Icon }) => (
              <Link key={id} to={link} target="_blank">
                <Icon />
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col space-y-4 sm:mx-auto lg:ml-auto">
          <h6 className="font-bold lg:text-md-l xs:text-md text-white opacity-60">Company</h6>
          <Link to={RoutePaths.About}>
            <p className="text-gray-100 font-medium lg:text-md xs:text-base">About Us</p>
          </Link>
          <Link to={RoutePaths.Services}>
            <p className="text-gray-100 font-medium lg:text-md xs:text-base">Services</p>
          </Link>
          <Link to={RoutePaths.Portfolio}>
            <p className="text-gray-100 font-medium lg:text-md xs:text-base">Portfolio</p>
          </Link>
          <Link to={RoutePaths.Technologies}>
            <p className="text-gray-100 font-medium lg:text-md xs:text-base">Technologies</p>
          </Link>
          <Link to={RoutePaths.ContactUs}>
            <p className="text-gray-100 font-medium lg:text-md xs:text-base">Contact Us</p>
          </Link>
        </div>
        <div className="flex flex-col space-y-4 mr-auto lg:ml-auto">
          <h6 className="font-bold lg:text-md-l xs:text-md text-white opacity-60">Services</h6>
          {servicesConstants.map(({ id, title }) => {
            return (
              <div key={id} role="button" onClick={() => navigate(id)}>
                <p className="text-gray-100 font-medium lg:text-md xs:text-base cursor-pointer">
                  {title}
                </p>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col space-y-4 sm:mx-auto sm:pl-10 lg:ml-auto">
          <h6 className="font-bold lg:text-md-l text-md text-white opacity-60">Contact Us</h6>
          {contactsConstants.map(({ id, text, link, Element }) => (
            <div key={id} className="flex items-center space-x-2">
              <Element className="size-6" />
              <Link
                to={link}
                className="text-gray-100 font-medium lg:text-md xs:text-base whitespace-nowrap"
              >
                {text}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="h-0.5 lg:-mx-20 xs:-mx-5 mt-6 lg:mb-6 xs:mb-4 bg-gray-100" />
      <div className="flex items-center lg:justify-between lg:flex-row xs:flex-col-reverse">
        <div className="flex items-center space-x-2 lg:mt-0 xs:mt-2">
          <Link to={RoutePaths.PrivacyPolicy} className="text-xs text-gray-100 opacity-60">
            Privacy Policy
          </Link>
          <div className="w-0.5 h-4 bg-gray-100" />
          <Link to={RoutePaths.TermsAndConditions} className="text-xs text-gray-100 opacity-60">
            Terms And Conditions
          </Link>
        </div>
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;
