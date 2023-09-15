import React from "react";
import {
  CiMail,
  CiYoutube,
  CiLinkedin,
  CiFacebook,
  CiInstagram,
  CiSearch,
  CiPhone,
} from "react-icons/ci";
import { LuPhoneCall } from "react-icons/lu";

function InfoHeader() {
  return (
    <div className="bg-white py-3 w-full flex flex-col space-y-2 md:space-y-0 md:flex-row flex-wrap items-center space-x-4 px-4 md:px-32">
      {/* Coordinates */}
      <div className="flex flex-row flex-nowrap justify-center items-center space-x-2">
        <LuPhoneCall className="text-bleu md:text-2xl " />
        <p className="text-sm font-light text-bleu whitespace-pre">
          +213 776 476 000
        </p>
      </div>
      <div className="flex flex-row flex-nowrap justify-center items-center space-x-2">
        <CiMail className="text-bleu md:text-2xl " />
        <p className="text-sm font-light text-bleu whitespace-pre">
          sales@bahanidigitalmarketing.com
        </p>
      </div>

      <div className="flex flex-grow"></div>
      {/* Socials */}
      <div className="hidden md:flex flex-row items-center justify-center space-x-6">
        <div>
          <CiYoutube className="social  " />
        </div>
        <div>
          <CiLinkedin className="social " />
        </div>
        <div>
          <CiFacebook className="social " />
        </div>
        <div>
          <CiInstagram className="social " />
        </div>
        <div>
          <CiSearch className="social" />
        </div>
      </div>
    </div>
  );
}

export default InfoHeader;
