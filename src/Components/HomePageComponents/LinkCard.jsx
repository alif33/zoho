import React, { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";

export const LinkCard = () => {
  const { isDarkMode, theme } = useContext(ThemeContext)

  return (
    <div style={{
      // boxShadow: 'rgba(50, 50, 93, 0.25) 0px 300px 0px -120px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset'
    }} className={`flex gap-3 border ${isDarkMode ? 'downloadContainerDark' : 'downloadContainerLight'} rounded-lg py-3.5 px-2`}>
      <div className="py-2">
        <img src="https://appdb.to/img/icon-device-sidebar.cece4489.svg" />
      </div>
      <div className="w-72">
        <span className="text-lg">Your <span className="text-sm"></span> device</span>
        <div className="text-xs">
          <span style={{ color: theme.text }} className="py-3 inline-block">No device linked to appdb</span>
          <div className="flex">
            <span style={{
              backgroundColor: theme.background
            }} className="border cursor-pointer rounded-sm px-3 py-1 font-semibold text-primaryBlueText border-blue-400">
              Link your device
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
