import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import _debounce from "lodash/debounce";

export const AppsContext = createContext();

export function AppsProvider({ children }) {
  const [searchInput, setSearchInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [data, setData] = useState([]);
  const [totalItems, setTotalItems] = useState(0); // Keep track of the total number of items fetched

  const [searchIndex, setSearchIndex] = useState(0); // Keep track of the total number of items fetched

  const [extensionCounts, setExtensionCounts] = useState({});
  const grouping = (response) => {
    const newGroupedFiles = response.data.results.reduce((acc, file) => {
      const extension = file.extension;
      if (!acc[extension]) {
        acc[extension] = [];
      }
      acc[extension].push(file);
      return acc;
    }, {});

    setData(prevData => {
      const mergedData = { ...prevData };
      for (const extension in newGroupedFiles) {
        if (mergedData.hasOwnProperty(extension)) {
          mergedData[extension] = [...mergedData[extension], ...newGroupedFiles[extension]];
        } else {
          mergedData[extension] = newGroupedFiles[extension];
        }
      }
      return mergedData;
    });
  }

  const fetchBySearch = async (name, extension = '') => {
    try {
      // const start = searchIndex;
      // const end = searchIndex + 10;

      setIsLoading(true)
      const header = {
        file_name: name
      }
      if (extension)
        header.extension = extension

      // console.log(header);
      const response = await axios.post('https://api.p12.ru/smartfetch', header);
      // console.log(response);
      if (response && response.data.results.length > 0) {
        setIsLoading(false);
        // setSearchIndex(searchIndex + response.data.results.length);
        setTotalItems(totalItems + response.data.results.length);

        grouping(response)

      } else {
        setIsLoading(false);
        // Handle no more data to fetch
      }
    } catch (err) {
      console.log(err);
    }
  }

  const fetchData = async (extension = '') => {
    try {
      setIsLoading(true);
      const start = extension ? extensionCounts[extension] || 0 : totalItems;
      const end = extension ? (extensionCounts[extension] || 0) + 10 : totalItems + 10;

      const header = {
        start,
        end,
        extension: extension || undefined, // Include extension only if provided
      };
      const response = await axios.post('https://api.p12.ru/fetch', header);

      if (response && response.data.results.length > 0) {
        setIsLoading(false);
        if (extension) {
          setExtensionCounts(prevCounts => ({
            ...prevCounts,
            [extension]: (prevCounts[extension] || 0) + 10
          }));
        } else
          setTotalItems(totalItems + response.data.results.length);

        grouping(response)

      } else {
        setIsLoading(false);
        // Handle no more data to fetch
      }
    } catch (error) {
      setIsLoading(false);
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    // Only fetch data if you don't already have data
    // if (!data) {
    axios.get('https://api.p12.ru/categories').then(res => {
      res.data.forEach(category => {
        fetchData(category)
      });
    }).catch(err => {
      console.log(err);
    })
    // }
  }, []);

  const [isEndReached, setIsEndReached] = useState(false);

  const handleScroll = _debounce((event, index = '') => {
    const container = document.documentElement;
    const isAtEnd = container.scrollTop + container.clientHeight >= container.scrollHeight;

    if (isAtEnd && !isEndReached) {
      fetchData(index).then(() => {
        setIsEndReached(true);
      });
    } else {
      setIsEndReached(false);
    }
  }, 200); // 200 milliseconds debounce time, adjust as needed

  // Attach the event listener when the component mounts

  return (
    <AppsContext.Provider value={{ data, setData, searchInput, setSearchInput, isLoading, fetchData, handleScroll, fetchBySearch, extensionCounts, setSearchIndex }}>
      <div>
        {children}
      </div>
    </AppsContext.Provider>
  );
}