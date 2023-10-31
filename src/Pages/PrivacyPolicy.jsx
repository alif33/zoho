import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

export const PrivacyPolicy = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <div style={{
      backgroundColor: theme.background,
      color: theme.text
    }}>
      <div className="container px-10 flex flex-col gap-3 py-10 privacyPolicyContainer">
        <div className="text-3xl">Privacy Policy</div>
        <span>Nobody reads these long articles about Privacy. That's why we made it simple to comply with everything, even GDPR.</span>
        <div>
          <nav>Information that we collect, how we use it, store, share and delete</nav>
          <ul className="list-disc list-inside">
            <li>Your email address. We use it to identify you in our systems. It is stored in our database. We only share it with our resellers over encrypted SSL/TLS channel to help them to simplify your checkout. It will be deleted immediately if you will unlink your device.</li>
            <li>Your device hardware identifier. We use it to queue commands to your device. It is stored in our database. It will be deleted immediately if you will unlink your device.</li>
            <li>Your uploaded IPA files. We store them on appdb's servers hard discs. We never share it with anyone. IPA files will be deleted in 5-10 minutes if there are no linked devices with your email.</li>
            <li>List of commands that were queued to your device in last 24 hours. It is stored in our database. Commands that older than 24 hours will be deleted, they also will be deleted if you will unlink your device.</li>
            <li>Your Apple Developer Cryptographic Identity (if you attached it on device features configuration page). It is stored in our database and passed only to appdb's FileVault-encrypred signing servers over encrypted SSL/TLS channel. After signing process is completed, identify will be removed from signing server in 5 minutes. It will be removed from appdb servers completely when you will unlink you device.</li>
            <li>Cookies. We use cookies to identify your device or/and browser. Cookies are stored on your device/browser, and we will clear them if you will unlink your device.</li>
          </ul>
        </div>
        <div>
          <nav>Information sharing policy</nav>
          <span>appdb never shares any private information with any parties, unless it is required by laws of Kingdom Of Tonga or defined above.</span>
        </div>
        <div>
          <nav>Your right to request information about you</nav>
          <span>According to GDPR, you can request all information that is stored about you on appdb. Please email us to appdb/at/protonmail/dot/com and we will process your request within 7 business days.</span>
        </div>
        <div>
          <nav>3rd parties analytics</nav>
          <span>Website can contain scripts or/and pixels of 3rd party analytics tools like Google Adsense, Facebook, Twitter. Please refer to Privacy Policies of 3rd parties in order to know how they use, store, share and delete your data.</span>
        </div>
      </div>
    </div>
  );
};
