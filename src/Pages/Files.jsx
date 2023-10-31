import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ThemeContext } from "../Context/ThemeContext";
import { AppsContext } from "../Context/AppsContext";
import { Card } from "../Components/HomePageComponents/Card";
import { ColorRing } from "react-loader-spinner";
import { MoreCategoriesList } from "../Components/FilesPageComponents/MoreCategoriesList";
// import Card from "../Components/HomePageComponents/Card"

export const Files = () => {
  const { theme } = useContext(ThemeContext)
  const { data, searchInput, isLoading, handleScroll: handleScrollY } = useContext(AppsContext);

  const { index } = useParams()

  useEffect(() => {
    // Define the event listener function
    const handleScroll = (event) => {
      // Call handleScrollY with event and index
      handleScrollY(event, index);
    };

    // Add the event listener with the defined function
    document.addEventListener("scroll", handleScroll, { passive: true });

    // Remove the event listener using the same function reference
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [handleScrollY, index]);  // Include handleScrollY and index in the dependency array

  return (
    <div style={{
      backgroundColor: theme.background,
      color: theme.text,
    }}
      className="p-10 flex gap-2 max-md:flex-col-reverse justify-between max-md:items-center min-h-screen"
    >
      <div className="flex-grow w-full">
        <div className="w-full">
          <Link to='/' className="flex gap-4">
            <span className="bg-gray-500 font-bold text-white p-1 rounded-sm text-sm">{index.toUpperCase()}</span>
            <div className="flex items-center gap-1">
              <span>
                Apps
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-primaryBlueText">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
              </svg>
            </div>
          </Link>
        </div>
        <div className="flex flex-col py-5 gap-5">
          {(Object.keys(data).length) > 0 && data.hasOwnProperty(index) &&
            Array.from(new Set(data[index]
              .filter((file) =>
                file.file_name.toLowerCase().includes(searchInput.toLowerCase())
              )
              .map((filteredFile) => filteredFile.file_id)))
              .map((fileId, i) => {
                const filteredFile = data[index].find(file => file.file_id === fileId);
                return (
                  <div className="transition-all duration-300 md:hover:shadow-shadowAll" key={i}>
                    <Card horizontal={true} file={filteredFile} />
                  </div>
                );
              })
          }
          <div className="flex justify-center w-full">
            <ColorRing
              visible={isLoading}
              height="40"
              width="40"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={[theme.text, theme.text, theme.text, theme.text, theme.text]}
            />
          </div>
        </div>
      </div>
      <MoreCategoriesList />
      {/* <div className="text-center">
        <button
          onClick={fetchData}
          className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out"
        >
          Fetch More
        </button>
      </div> */}
    </div>
  );
};
