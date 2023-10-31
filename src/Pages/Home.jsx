import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import _ from 'lodash';
import { ThemeContext } from "../Context/ThemeContext";
import { AppsContext } from "../Context/AppsContext";
import { Card } from "../Components/HomePageComponents/Card";
import { ColorRing } from 'react-loader-spinner'
import { NewsCard } from "../Components/HomePageComponents/NewsCard";
import { LinkCard } from "../Components/HomePageComponents/LinkCard";

export const Home = () => {
  const { theme, isDarkMode } = useContext(ThemeContext)
  const { data, searchInput, isLoading, fetchData } = useContext(AppsContext);
  const containerRef = useRef(null);
  const [isEndReached, setIsEndReached] = useState(false); // Add this state

  const [loadingCaegory, setLoadingCategory] = useState('')
  const handleScroll = (event) => {
    const container = event.target; // Extract the target element from the event
    const category = event.target.id;
    setLoadingCategory(category)

    if (container) {
      const isAtEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth;

      if (isAtEnd && !isEndReached) {
        // console.log('Reached the end of the horizontal scroll!');
        fetchData(category).then(() => {
          setIsEndReached(true); // Set the flag to prevent repeated triggers
          setLoadingCategory('')
        });
      } else {
        setIsEndReached(false); // Reset the flag if not at the end
      }
    }
  };

  const debouncedHandleScroll = _.debounce(handleScroll, 500);

  const uniqueFileIds = new Set();

  return (
    <div style={{
      backgroundColor: theme.background,
      color: theme.text
    }} className="flex">
      <div className="container lg:w-w_70 px-10 py-5">
        {Object.keys(data).length > 0 &&
          Object.keys(data).map((extension, index) => {
            const filteredFiles = data[extension].filter((file) =>
              file.file_name.toLowerCase().includes(searchInput.toLowerCase())
            );
            return filteredFiles.length > 0 ? (
              <div key={index}>
                <Link to={`files/${extension}`} className="flex items-center gap-3">
                  <span className="bg-gray-500 font-bold text-white p-1 rounded-sm text-sm">{extension.toUpperCase()}</span>
                  <div className="flex items-center gap-1 whitespace-nowrap overflow-hidden overflow-ellipsis">
                    <span className="text-sm truncate">
                      Explore {extension}
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-primaryBlueText">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                    </svg>
                  </div>
                </Link>
                <div
                  id={extension}
                  ref={containerRef} onScrollCapture={debouncedHandleScroll}
                  className="py-5 flex container overflow-scroll items-center gap-5 rm-scroll">
                  {filteredFiles.map((file) => {
                    // Check if the file_id is already in the Set
                    if (!uniqueFileIds.has(file.file_id)) {
                      // If not, add the file_id to the Set and render the Card component
                      uniqueFileIds.add(file.file_id);
                      return (
                        <div key={file.file_id}>
                          <Card file={file} />
                        </div>
                      );
                    }
                    return null; // If the file_id is already in the Set, don't render the Card component
                  })}
                  <span>
                    <ColorRing
                      visible={loadingCaegory === extension && isLoading}
                      height="40"
                      width="40"
                      ariaLabel="blocks-loading"
                      wrapperStyle={{}}
                      wrapperClass="blocks-wrapper"
                      colors={[theme.text, theme.text, theme.text, theme.text, theme.text]}
                    />
                  </span>
                </div>
              </div>
            ) : null;
          })
          // :
          // (
          //   <div className="flex justify-center">
          //     <ColorRing
          //       visible={true}
          //       height="80"
          //       width="80"
          //       ariaLabel="blocks-loading"
          //       wrapperStyle={{}}
          //       wrapperClass="blocks-wrapper"
          //       colors={[theme.text, theme.text, theme.text, theme.text, theme.text]}
          //     />
          //   </div>
          // )
        }
        {
          isLoading && loadingCaegory === '' && (
            <div className="flex justify-center">
              <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={[theme.text, theme.text, theme.text, theme.text, theme.text]}
              />
            </div>
          )
        }
      </div>
      <div className="max-lg:hidden flex flex-col gap-5">
        <NewsCard />
        <LinkCard />
        <div className={`rounded-xl h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} `}></div>
      </div>
    </div>
  );
};
