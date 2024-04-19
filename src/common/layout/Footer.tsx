import { Link } from "react-router-dom";

import { blogsConstants } from "@/common/constants/blogs.constants.ts";
import { contactsConstants } from "@/common/constants/contacts.constants.ts";
import { socialLinksConstants } from "@/common/constants/socials.constants.ts";
import RecentPost from "@/shared/ui/RecentPost.tsx";
import { getFullYear } from "@/utils/date.util.ts";

const Footer = () => {
  return (
    <footer className="flex flex-col space-y-6 w-full bg-black px-20 pt-12 pb-6">
      <div className="flex space-x-[150px] justify-between">
        <div className="flex flex-col space-y-4">
          <h6 className="font-bold text-white opacity-60">About Us</h6>
          <p className="text-gray-100 max-w-[340px]">
            As a leading web and mobile app development company, Clevit empowers businesses across
            all sectors to unlock their full digital potential.
          </p>
          <div className="flex space-x-4 mt-6">
            {socialLinksConstants.map(({ id, link, Icon }) => (
              <Link key={id} to={link} target="_blank">
                <Icon />
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h6 className="font-bold text-white opacity-60">Company</h6>
          <p className="text-gray-100 font-medium">Services</p>
          <p className="text-gray-100 font-medium">Portfolio</p>
          <p className="text-gray-100 font-medium">Blog</p>
        </div>
        <div className="flex flex-col space-y-4">
          <h6 className="font-bold text-white opacity-60">Contact Us</h6>
          {contactsConstants.map(({ id, text, link, Element }) => (
            <div key={id} className="flex items-center space-x-2">
              <Element className="size-6" />
              <Link to={link} className="text-gray-100 font-medium whitespace-nowrap">
                {text}
              </Link>
            </div>
          ))}
        </div>
        <div className="flex flex-col space-y-4">
          <h6 className="font-bold text-white opacity-60">Recent Posts</h6>
          {blogsConstants.map((blog) => (
            <RecentPost
              key={blog.id}
              image={blog.image}
              date={blog.date}
              description={blog.description}
            />
          ))}
        </div>
      </div>
      <div className="h-[1px] -mx-20 bg-gray-100" />
      <div className="flex justify-between">
        <div className="flex items-center space-x-2">
          <Link to={"link1"} className="font-medium text-[12px] text-gray-100">
            Privacy Policy
          </Link>
          <div className="w-[1px] h-full bg-gray-100" />
          <Link to={"link2"} className="font-medium text-[12px] text-gray-100">
            Terms of Conditions
          </Link>
        </div>
        <p className="font-medium text-gray-100">
          <span className="text-gray-100 font-semibold">&copy; </span>
          {getFullYear()} Clevit
        </p>
      </div>
    </footer>
  );
};

export default Footer;
