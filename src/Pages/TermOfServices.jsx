import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { Link } from "react-router-dom";

export const TermOfServices = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <div style={{
      backgroundColor: theme.background,
      color: theme.text
    }}>
      <div className="container p-10 privacyPolicyContainer flex flex-col gap-3">
        <div className="text-3xl">Terms Of Service</div>
        <div>
          <nav>Ownership of Site; Agreement to Terms of Use</nav>
          <span>These Terms and Conditions of Use (the “Terms of Use”) apply to the appdb web site located at appdb.to, and all associated sites linked to appdb.to by appdb. The Site is the property of appdb - BY USING THE SITE, YOU AGREE TO THESE TERMS OF USE; IF YOU DO NOT AGREE, DO NOT USE THE SITE.</span>
          <span>appdb reserves the right, at its sole discretion, to change, modify, add or remove portions of these Terms of Use, at any time. It is your responsibility to check these Terms of Use periodically for changes. Your continued use of the Site following the posting of changes will mean that you accept and agree to the changes. As long as you comply with these Terms of Use, appdb will allow you to enter and use the Site.</span>
          <span>Content</span>
          <span>All text, graphics, user interfaces, visual interfaces, photographs, trademarks, logos, sounds, music, artwork and computer code (collectively, “Content”) are trademarked and copyrighted by their respective owners.</span>
          <span>The content that you see on the appdb website is not stored on appdb’s servers nor is it added by any of the appdb staff. appdb.to acts as a reference only. appdb does not take responsibility for any of the content that its users upload to third party sites you are downloading and using the applications at your own free will. appdb also will not take responsibility for any damage caused to your devices by using any of the applications posted on our database.</span>
        </div>
        <div>
          <span>Your Use of the Site</span>
          <span>You may not attempt to gain unauthorized access to any portion or feature of the Site, or any other systems or networks connected to the Site or to any appdb server, or to any of the services offered on or through the Site, by hacking, password “mining” or any other illegitimate means.</span>
        </div>
        <div>
          <span>You may not probe, scan or test the vulnerability of the Site or any network connected to the Site, nor breach the security or authentication measures on the Site or any network connected to the Site. You may not reverse look-up, trace or seek to trace any information on any other user of or visitor to the Site, or any other user of appdb, including any appdb account not owned by you, to its source, or exploit the Site or any service or information made available or offered by or through the Site, in any way where the purpose is to reveal any information, including but not limited to personal identification or information, other than your own information, as provided for by the Site.</span>
          <span>You agree that you will not take any action that imposes an unreasonable or disproportionately large load on the infrastructure of the Site or appdb’s systems or networks, or any systems or networks connected to the Site or to appdb.</span>
          <span>You agree not to use any device, software or routine to interfere or attempt to interfere with the proper working of the Site or any transaction being conducted on the Site, or with any other person’s use of the Site.</span>
          <span>Accounts, Passwords and Security</span>
          <span>Certain features or services offered on or through the Site may require you to open an appdb account. You are entirely responsible for maintaining the confidentiality of your account information, including your password, and for any and all activity that occurs under your account. You agree to notify appdb immediately of any unauthorized use of your account or password, or any other breach of security. However, you may be held liable for losses incurred by appdb or any other user of or visitor to the Site due to someone else using your password or account.</span>
        </div>
        <div>
          <nav>Privacy</nav>
          <span>appdb’s Privacy Policy applies to use of this Site, and its terms are made a part of these Terms of Use by this reference. To view appdb’s Privacy Policy, <Link className="text-primaryBlueText" to={'/privacyPolicy'}>click here</Link>. Additionally, by using the Site, you acknowledge and agree that Internet transmissions are never completely private or secure. You understand that any message or information you send to the Site may be read or intercepted by others, even if there is a special notice that a particular transmission (for example, credit card information) is encrypted.</span>
        </div>
        <div>
          <nav>Links to Other Sites</nav>
          <span>This Site contains links to other independent third-party Web sites (“Linked Sites”). These Linked Sites are provided solely as a convenience to our visitors. Such Linked Sites are not under appdb’s control, and appdb is not responsible for and does not endorse the content of such Linked Sites, including any information or materials contained on such Linked Sites. You will need to make your own independent judgment regarding your interaction with these Linked Sites.</span>
        </div>
        <div>
          <nav>Disclaimers</nav>
          <span>appdb DOES NOT PROMISE THAT THE SITE OR ANY CONTENT, SERVICE OR FEATURE OF THE SITE WILL BE ERROR-FREE OR UNINTERRUPTED, OR THAT ANY DEFECTS WILL BE CORRECTED, OR THAT YOUR USE OF THE SITE WILL PROVIDE SPECIFIC RESULTS. THE SITE AND ITS CONTENT ARE DELIVERED ON AN “AS-IS” AND “AS-AVAILABLE” BASIS. ALL INFORMATION PROVIDED ON THE SITE IS SUBJECT TO CHANGE WITHOUT NOTICE. appdb CANNOT ENSURE THAT ANY FILES OR OTHER DATA YOU DOWNLOAD FROM THE SITE OR THIRD PARTY SITES WILL BE FREE OF VIRUSES OR CONTAMINATION OR DESTRUCTIVE FEATURES. appdb DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING ANY WARRANTIES OF ACCURACY, NON-INFRINGEMENT, MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. appdb DISCLAIMS ANY AND ALL LIABILITY FOR THE ACTS, OMISSIONS AND CONDUCT OF ANY THIRD PARTIES IN CONNECTION WITH OR RELATED TO YOUR USE OF THE SITE AND/OR ANY appdb SERVICES. YOU ASSUME TOTAL RESPONSIBILITY FOR YOUR USE OF THE SITE AND ANY LINKED SITES. YOUR SOLE REMEDY AGAINST appdb FOR DISSATISFACTION WITH THE SITE OR ANY CONTENT IS TO STOP USING THE SITE OR ANY SUCH CONTENT. THIS LIMITATION OF RELIEF IS A PART OF THE BARGAIN BETWEEN THE PARTIES.</span>
          <span>The above disclaimer applies to any damages, liability or injuries caused by any failure of performance, error, omission, interruption, deletion, defect, delay in operation or transmission, computer virus, communication line failure, theft or destruction of or unauthorized access to, alteration of, or use, whether for breach of contract, tort, negligence or any other cause of action.
            appdb reserves the right to do any of the following, at any time, without notice: (1) to modify, suspend or terminate operation of or access to the Site, or any portion of the Site, for any reason; (2) to modify or change the Site, or any portion of the Site, and any applicable policies or terms; and (3) to interrupt the operation of the Site, or any portion of the Site, as necessary to perform routine or non-routine maintenance, error correction, or other changes.</span>
        </div>
        <div>
          <nav>Violation of These Terms of Use</nav>
          <span>You agree that appdb may, in its sole discretion and without prior notice, terminate your access to the Site and/or block your future access to the Site if we determine that you have violated these Terms of Use or other agreements or guidelines which may be associated with your use of the Site.</span>
        </div>
      </div>
      <div className="container px-10 pb-10 privacyPolicyContainer flex flex-col gap-3">
        <div className="text-3xl">Uploaders</div>
        <span>All people uploading links to appdb must obey the rules set out in this section, or your account may be terminated without prior warning or notice.</span>
        <div>
          <nav>Just IPA’s, DMG’s or EPUB’s - No ZIP, No RAR</nav>
          <span>Only links to .IPA, .DMG or .EPUB files are allowed to be added (every app, even from Mac App Store should be manually packaged in DMG image if not). If the Download file is ZIP, RAR or requires a password, it is not allowed here. Violators will be banned.</span>
        </div>
        <div>
          <nav>No links to folders</nav>
          <span>Only links to .IPA, .DMG or .EPUB files are allowed to be added (yes, we should say it again). If the Download link follows to a folder with files on some hosting - your submission will be denied.</span>
        </div>
        <div>
          <nav>Credit the Crackers</nav>
          <span>When submitting links it is only fair to credit the cracker. If you are unsure of whom the cracker is please mark as unknown don’t try to pass it off as your own. People found to be knowingly not crediting crackers or passing as their own will be banned.</span>
        </div>
        <div>
          <nav>Icon File</nav>
          <span>Any submitted apps that have had the Default.png images modified are strictly not allowed and will be deleted straight away. This is to avoid people advertising on their cracks.</span>
        </div>
        <div>
          <nav>DMG Image</nav>
          <span>Any submitted .dmg images that have had the Backgrounds modified to contain any links to another resources are strictly not allowed and will be deleted straight away. This is to avoid people advertising on their cracks.</span>
        </div>
        <div>
          <nav>Advertising Instant Ban and IP Block</nav>
          <span>appdb will not stand for any form of advertising on our website. This includes adding URLs, domains, twitter accounts, or Company Names etc., except the Cracker or Cracking Team name you can add into the file name or link. We are very strict on this so please abide by this.</span>
        </div>
        <div>
          <nav>Text File Links</nav>
          <span>People try to be clever and upload links to txt files pointing to IPA’s or DMG’s hosted elsewhere please don’t do this you will be caught and banned instantly.</span>
        </div>
        <div>
          <nav>File Hosts We Accept</nav>
          <span>As an uploader you agree that you will only upload to file hosts that we have pre approved. All apps are moderated once uploaded so we will delete any links to hosts we have not pre approved and you run the risk of being banned from appdb</span>
        </div>
        <div>
          <span>To be accepted as a file host on appdb you must comply with all of the following requirements:</span>
          <ol className="list-decimal list-inside">
            <li>Offer free downloads as well as premium downloads</li>
            <li>Provide a reasonable speed on free downloads at least 40 kb/s</li>
            <li>No SURVEYS or QUIZZES of any sort!</li>
            <li>Standard wait times should be no longer than 120 seconds</li>
            <li>No deliberate malicious content should be inflicted upon users</li>
          </ol>
        </div>
      </div>
    </div>
  );
};
