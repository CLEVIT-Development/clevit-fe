import { Link } from "react-router-dom";
import socialLinks from "@/constants/socials.ts";
import ContactUs from "@/assets/vectors/Contactus.svg?react";

const Footer = () => {
  return (
    <footer className="flex gap-44 bg-black pl-20 pt-12 pb-80">
      <div>
        <h6 className="font-bold text-white opacity-60">About Us</h6>
        <p className="text-gray100 mt-4 max-w-[340px]">As a leading web and mobile app development company, Clevit empowers businesses across all sectors to unlock their full digital potential.</p>
        <div className="flex gap-4 mt-6">
          {socialLinks.map(({ id, link, Icon }) => (
            <Link key={id} to={link} target="_blank">
              <Icon />
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h6 className="font-bold text-white opacity-60">Company</h6>
        <p className="text-gray100 font-medium">Services</p>
        <p className="text-gray100 font-medium">Portfolio</p>
        <p className="text-gray100 font-medium">Blog</p>
      </div>
      <div className="flex flex-col gap-4">
        <h6 className="font-bold text-white opacity-60">Contact Us</h6>
        <ContactUs />
      </div>
    </footer>
  );
};

export default Footer;