import { Link } from "react-router-dom";

import { blogsConstants } from "@/common/constants/blogs.constants.ts";
import { contactsConstants } from "@/common/constants/contacts.constants.ts";
import { socialLinksConstants } from "@/common/constants/socials.constants.ts";
import RecentPost from "@/shared/ui/RecentPost.tsx";
import { getFullYear } from "@/utils/date.utils.ts";

const Footer = () => {
  return (
    <footer className="flex flex-col bg-black lg:pt-12 lg:pb-6 xs:pt-5 xs:pb-4 lg:px-20 xs:px-5">
      <div className="xs:grid xs:grid-cols-3 lg:grid-cols-4 xs:gap-8">
        <div className="flex flex-col space-y-4 sm:col-auto xs:col-span-3">
          <h6 className="font-bold text-white opacity-60">About Us</h6>
          <span className="text-gray-100 max-w-[340px]">
            As a leading web and mobile app development company, Clevit empowers businesses across
            all sectors to unlock their full digital potential.
          </span>
          <div className="flex space-x-4 mt-6">
            {socialLinksConstants.map(({ id, link, Icon }) => (
              <Link key={id} to={link} target="_blank">
                <Icon />
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col space-y-4 sm:mx-auto">
          <h6 className="font-bold text-white opacity-60">Company</h6>
          <p className="text-gray-100 font-medium">Services</p>
          <p className="text-gray-100 font-medium">Portfolio</p>
          <p className="text-gray-100 font-medium">Blog</p>
        </div>
        <div className="flex flex-col space-y-4 sm:col-auto xs:col-span-2 sm:mx-auto">
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
        <div className="flex flex-col space-y-4 md:col-auto col-span-3">
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
      <div className="h-0.5 lg:-mx-20 xs:-mx-5 mt-6 lg:mb-6 xs:mb-4 bg-gray-100" />
      <div className="flex items-center lg:justify-between lg:flex-row xs:flex-col-reverse">
        <div className="flex items-center space-x-2 lg:mt-0 xs:mt-2">
          <Link to={"link1"} className="font-medium text-[12px] text-gray-100">
            Privacy Policy
          </Link>
          <div className="w-0.5 h-4 bg-gray-100" />
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
