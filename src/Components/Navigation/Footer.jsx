import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <div className="bg-darkBlue text-xs text-center flex flex-col gap-4 py-5">
        <div className="footer-opt">
          <span>
            <img src="https://appdb.to/img/icon-globe.7e1ea534.svg" />
            English
          </span>
          <span>Help to translate</span>
          <span>
            <img src="https://appdb.to/img/icon-twitter.00f456a3.svg" />
            @appdb_official
          </span>
          <span>
            <img src="https://appdb.to/img/icon-reddit.7b0c4b1d.svg" />
            r/appdb
          </span>
          <span>
            <img src="https://appdb.to/img/icon-telegram.aa24101d.svg" />
            @appdb_telegram
          </span>
          <span>
            <img src="https://appdb.to/img/icon-telegram.aa24101d.svg" />
            @appdb_official_bot
          </span>
        </div>
        <div className="text-gray-400">
          <span>
            © 2012-2023 appdb. We do not host any prohibited content. All data is publicly available via&nbsp;
            <span className="text-secondaryBlueText cursor-pointer">
              iTunes API
            </span>
          </span>
        </div>
        <div className="text-gray-400">
          <span>
            Version 4.3.11. Copyright violation?&nbsp;
            <span className="text-secondaryBlueText cursor-pointer">
              Email us
            </span>
          </span>
        </div>
      </div>
      <div className="bg-black flex flex-wrap justify-center gap-10 py-5 text-xs">
        <Link to={'/about'} className="text-secondaryBlueText">About appdb</Link>
        <Link to={'/termofservices'} className="text-secondaryBlueText">Term Of Service</Link>
        <Link to={'/privacyPolicy'} className="text-secondaryBlueText">Privacy Policy</Link>
        <Link to={'/404'} className="text-secondaryBlueText">APIs</Link>
        <Link to={'/404'} className="text-secondaryBlueText">System status</Link>
        <Link to={'/404'} className="text-secondaryBlueText">Staff member area</Link>
      </div>
    </>
  );
};