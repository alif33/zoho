import React, { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";

export const NewsCard = () => {
  const { isDarkMode } = useContext(ThemeContext)

  return (
    <div className={`flex gap-3 ${isDarkMode ? 'lightYellowGredientDark' : 'lightYellowGredientLight'} rounded-lg p-2`}>
      <div className="py-2">
        <img src="https://appdb.to/img/icon-news-sidebar.70f41b0b.svg" />
      </div>
      <div className="w-72 flex flex-col gap-1">
        <span className="text-lg font-semibold">Latest News</span>
        <div className="text-primaryBlueText flex flex-col text-sm whitespace-nowrap overflow-hidden overflow-ellipsis">
          <span>How to seamlessly switch to new iPhone</span>
          <span>iPhone 15 and iOS 17 compatibility</span>
          <span className="truncate">Japanese and Korean languages are available</span>
          <div className="flex cursor-pointer items-center self-end mt-2">
            <span className={`text-xs ${isDarkMode ? 'text-white' : 'text-gray-800'}  font-semibold`}>
              More News
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 text-primaryBlueText">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
