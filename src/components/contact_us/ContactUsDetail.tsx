import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io";

type Props = {};

const ContactUsDetail = (props: Props) => {
  return (
    <div className="w-full flex flex-col gap-y-3 lg:gap-y-6 lg:ml-5">
      <div>
        <h1 className="text-xl lg:text-2xl font-semibold">Email us</h1>
        <p className="text-[#454545] text-lg lg:text-xl">
          henock@alphabettrading.com
        </p>
      </div>
      <div>
        <h1 className="text-xl lg:text-2xl font-semibold">Call us</h1>
        <p className="text-[#454545] text-lg lg:text-xl">(+251) 911261233</p>
        <p className="text-[#454545] text-lg lg:text-xl">(+251) 118220469</p>
      </div>
      <div>
        <h1 className="text-xl lg:text-2xl font-semibold">Follow us</h1>
        <div className="flex items-center gap-x-4">
          <IoLogoFacebook color="#454545" size={36} />
          <FaInstagram color="#454545" size={32} />
          <FaXTwitter color="#454545" size={32} />
        </div>
      </div>
      <div>
        <h1 className="text-xl lg:text-2xl font-semibold">Visit us</h1>
        <p className="text-[#454545] text-lg lg:text-xl">
          Bel Amour Bldg 5th Floor Addis Ababa, Ethiopia
        </p>
      </div>
    </div>
  );
};

export default ContactUsDetail;
