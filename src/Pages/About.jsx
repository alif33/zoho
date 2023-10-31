import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { Chevron } from '../Icons/Chevron'
export const About = () => {
  const { theme, isDarkMode } = useContext(ThemeContext)
  return (
    <div style={{
      backgroundColor: theme.background,
      color: theme.text
    }}>
      <div className="container grid md:grid-cols-3">
        <div className="privacyPolicyContainer col-span-2 flex flex-col gap-4 p-10">
          <div className="text-3xl">About appdb</div>
          <span><b>appdb</b> is the successor of our old website named appaddict. appdb was formed when ex staff were concerned for the security of the users of our old website. appdb was setup using a new perspective of simplicity yet effectiveness. This formed our app-less approach and simple interface to install apps.</span>
          <span>Our new lead on simplicity and clarity, lead to being honest to the public and easy to use. We decided to use official and secure protocols to install apps. Apple's MDM (Mobile Device Management) protocol was the way forward. It is widely accepted and used in enterprise solutions.</span>
          <span>Our next leap forward was to reduce the amount of data stored about you. We removed the use of passwords and now identify you by your device. All of the little data stored can not be associated with you personally, plus we also use time based hashes that expire to keep your data even more secure.</span>
          <span>We are non-profit project. It means that we do not earn money from appdb, it was set up to provide better experience to users around the world. We believe, that \"try before you buy\" approach is right way. All money that we collect are going to infrastructure maintenance costs, we are sharing all unneeded money with active community members (appdb staff support program) by providing iTunes gift cards. This website can not be threaten as a piracy website, because we do not earn money, we do not host any content.</span>
          <span>That's why appdb is the most private, secure and, we hope, best way to find <b>Cracked iOS, macOS Apps and Books</b></span>
        </div>
        <div className="max-md:-order-1">
          <div className={`privacyPolicyContainer text-justify ${isDarkMode ? 'bg-blue-950' : 'bg-blue-100'} m-4 px-4 py-6 rounded-lg`}>
            <div>
              <nav>Donations</nav>
              <span>We are always open for donations. If you want to donate, send any amount of bitcoins to <b>1AZsEJvZYtH9An4iJi1QJa2tiNMKYgNTvN</b>. ETH: <b>0xc21350edf0C7a0998fDd264eBaDd5772f2e317B5</b></span>
            </div>
            <div>
              <nav>Stay tuned</nav>
              <span>Like us on facebook, follow in twitter to receive latest updates from appdb team:</span>
            </div>
            <div>
              <a className="flex items-center gap-1 py-2 cursor-pointer">Our twitter<Chevron /></a>
              <a className="relative cursor-pointer">
                Read story behind AA and appdb. How appdb was founded and why it is better.
                <div className="absolute bottom-1 xl:right-44 lg:right-3 md:right-0 max-md:left-36">
                  <Chevron />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
