import React, { useContext, useState } from "react";
import { AppsContext } from "../../Context/AppsContext";
import { ThemeContext } from "../../Context/ThemeContext";
import { Link } from "react-router-dom";
import { DropDownIcon } from "../../Icons/DropDownIcon";

export const MoreCategoriesList = () => {
  const { extensionCounts } = useContext(AppsContext)
  const { isDarkMode } = useContext(ThemeContext)
  const [show, setShow] = useState(false)
  const toggleShow = () => {
    setShow(!show)
  }
  return (
    <div>
      <div className={`w-96 px-5 py-2 transition-transform duration-500 ${show ? 'max-md:h-fit' : 'max-md:h-11'} ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} rounded-md`}>
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold">Explore Categories</span>
          <span className={`cursor-pointer md:hidden transition-all duration-300 ${show && 'rotate-180'}`} onClick={toggleShow}><DropDownIcon /></span>
        </div>
        <div className={'flex flex-col duration-500 transition-all ' + (show ? 'max-md:translate-y-0' : 'max-md:absolute max-md:-z-10 max-md:-translate-y-1/3 max-md:opacity-0')}>
          {
            Object.keys(extensionCounts).length > 0 &&
            Object.keys(extensionCounts).map((extension, index) => (
              <Link onClick={() => setShow(false)} to={`/files/${extension}`} className="text-sm text-primaryBlueText" key={index}>{extension}</Link>
            ))
          }
        </div>
      </div>
    </div>
  );
};
