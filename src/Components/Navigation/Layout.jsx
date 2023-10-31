import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import { SearchIcon } from "../../Icons/SearchIcon";
import { CloseIcon } from "../../Icons/CloseIcon";
import { MenuIcon } from "../../Icons/MenuIcon";
import { Link, useLocation } from "react-router-dom";
import { SunIcon } from "../../Icons/SunIcon";
import { AppsContext } from "../../Context/AppsContext";

export const Layout = () => {
  const { theme, toggleTheme, isDarkMode } = useContext(ThemeContext)
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const { setSearchIndex, setSearchInput, fetchBySearch } = useContext(AppsContext);
  const [searchValue, setSearchValue] = useState('')

  const { pathname } = useLocation()
  const pathSegments = pathname.split("/"); // Split the pathname into segments
  const lastSegment = pathSegments.pop(); // Get the last segment

  useEffect(() => {
    const handleScroll = () => {
      setShowSearch(false);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="bg-blue-500 h-1"></div>
      <span style={{
        backgroundColor: theme.bgBlue,
        color: theme.descClr
      }} className="w-full inline-block text-center py-1.5 md:text-xl font-thin">
        Free sideloading is provided by https://RobsMods.uk! Alternative free signing certificate can be <span className="text-primaryBlueText font-normal">configured</span>
      </span>
      {/* Navbar */}
      <div style={{ backgroundColor: theme.background }} className="flex gap-2 items-center justify-between py-6 px-5 sticky top-0 z-10">
        <div className="flex items-center md:gap-4 max-md:gap-2">
          <Link to={'/'}>
            {
              isDarkMode ? (
                <img className="w-24 max-md:hidden" src="https://appdb.to/img/logo-dark.919deb7d.svg" />
              ) : (
                <img className="w-24 max-md:hidden" src="https://appdb.to/img/logo-light.94dbe5d6.svg" />
              )
            }
            <div className="w-10">
              <img className="md:hidden w-10" src="https://appdb.to/favicon-appdb.png" />
            </div>
          </Link>
          <div className={`max-sm:border sm:hidden flex py-1.5 px-1 border-primaryBlue ${showSearch && 'max-sm:hidden'}`}>
            <span className={"truncate text-primaryBlueText sm:hidden"}>Link your device to install apps</span>
          </div>
          <div className={`${showSearch ? '' : 'max-sm:hidden'} `}>
            <div className="relative">
              <input
                id="searchInput"
                value={searchValue}
                onChange={(ev) => {
                  if (ev.target.value === '') {
                    setSearchInput('')
                  }
                  setSearchValue(ev.target.value)
                }}
                style={{
                  borderColor: theme.descClr,
                  borderWidth: 1,
                  color: theme.descClr
                }}
                className={`outline-none p-2 pr-9 md:pl-4 md:py-1.5 rounded-sm max-md:w-32 max-sm:w-72 max-md:text-xs md:w-96 ${isDarkMode ? 'bg-gray-600' : 'bg-gray-300'}`}
                type="text"
                placeholder="Search appdb" />
              <div onClick={() => {
                setSearchIndex(0)
                setSearchInput(searchValue)
                fetchBySearch(searchValue, lastSegment)
              }} className={`absolute cursor-pointer top-0 right-2 h-full flex items-center`}>
                <SearchIcon />
              </div>
            </div>
          </div>
          <div onClick={toggleTheme} className={`cursor-pointe ${showSearch && 'max-sm:hidden'}`}>
            <SunIcon />
          </div>
        </div>

        <div className="absolute flex gap-2 items-center right-0 lg:hidden pr-2">
          <label htmlFor="searchInput" onClick={() => setShowSearch(true)} className={`sm:hidden cursor-pointer ${showSearch && 'max-sm:hidden'}`}>
            <SearchIcon md_w={6} md_h={6} />
          </label>
          <div onClick={() => {
            setShowMenu(!showMenu)
          }} className="cursor-pointer">
            <MenuIcon />
          </div>
        </div>
        <div className="md:flex items-center md:gap-10">
          <div style={{ backgroundColor: theme.background }} className={`flex max-lg:flex-col-reverse max-lg:px-5 max-lg:py-5 lg:gap-10 items-center max-lg:fixed ${showMenu ? 'right-0' : '-right-full'} bg-black ease-in-out duration-300`}>
            <div onClick={() => {
              setShowMenu(false)
            }} className="absolute top-0 right-0 cursor-pointer lg:hidden">
              <CloseIcon />
            </div>
            <div className="md:flex gap-5">
              <div className="flex text-xs rounded-sm">
                <span className="py-1 px-2 inline-block border border-primaryBlue">db</span>
                <span className="bg-primaryBlue py-1 px-2 border-primaryBlue border text-white inline-block w-full text-center">PLUS</span>
              </div>
              <div className="flex text-xs rounded-sm">
                <span className="py-1 px-2 inline-block border border-primaryBlue">db</span>
                <span className="bg-primaryBlue py-1 px-2 border-primaryBlue border text-white inline-block w-full text-center">P2P</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <img src="https://appdb.to/img/icon-news.bf61e568.svg" />
              <span>News</span>
            </div>
          </div>
          <div className="bg-primaryBlue text-white px-2 max-sm:hidden max-md:text-sm py-1.5 rounded-sm flex gap-2 cursor-pointer max-lg:mr-5">
            <img className="max-md:hidden" src="https://appdb.to/img/icon-device.936b6cdb.svg" alt="" />
            <span className="text-sm max-md:text-xs truncate">Link your device <span className="md:hidden">to install apps</span></span>
          </div>
        </div>
      </div>
    </>
  )
};