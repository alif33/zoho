import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ThemeContext } from "../Context/ThemeContext";
import { AppsContext } from "../Context/AppsContext";
import { ColorRing } from "react-loader-spinner";
import axios from "axios";
import { VideoPlayer } from "./VideoPlayer";
import { CoverCard } from "../Components/FileInfoPageComponents/CoverCard";

export const FileInfo = () => {
  const { theme, isDarkMode } = useContext(ThemeContext);
  const { data, fetchData } = useContext(AppsContext);

  const { id: file_id } = useParams();
  const [file, setFile] = useState(null);

  const [showVideo, setShowVideo] = useState(false)

  const toggleShow = () => {
    setShowVideo(true)
  }

  useEffect(() => {
    if (data) {
      // Iterate through each category in the data object
      for (const category in data) {
        // Find the file with the matching file_id in the current category
        const foundFile = data[category].find((file) => file.file_id === file_id);
        // If found, set the file state and break the loop
        if (foundFile) {
          setFile(foundFile);
          break;
        }
      }
    }
  }, [data, file_id]);

  useEffect(() => {
    if (!file) {
      // Timer set karna 3 seconds ke liye
      const timer = setTimeout(() => {
        fetchData().then(() => {
          // Iterate through each category in the fetched data object
          for (const category in data) {
            // Find the file with the matching file_id in the current category
            const foundFile = data[category].find((file) => file.file_id === file_id);
            // If found, set the file state and break the loop
            if (foundFile) {
              setFile(foundFile);
              break;
            }
          }
        });
      }, 3000);

      // Cleanup function jo timer ko clear karega agar component unmount hota hai ya koi aur effect chalta hai
      return () => {
        clearTimeout(timer);
      };
    }
  }, [file_id, file, fetchData, data]);

  const formatedDate = (date) => {
    const timestamp = date; // Assuming timestamp is something like "2023-10-23T13:57:44.729Z"
    const dateObject = new Date(timestamp);
    const year = dateObject.getFullYear();
    const month = String(dateObject.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const day = String(dateObject.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  const [downloadLink, setDownloadLink] = useState(null);

  const [isLoading, setIsLoading] = useState(false)
  const handleDownload = (sudoLink) => {
    setIsLoading(true)
    const CORS_PROXY = 'https://corsproxy.io/?';
    const API_URL = `https://files.p12.ru/${sudoLink}`;

    axios.get(`${CORS_PROXY}${API_URL}`).then(response => {
      setIsLoading(false)
      console.log(response.data.url);
      setDownloadLink(response.data.url)
    }).catch(err => {
      setIsLoading(false)
      console.log(err);
    })
  };

  return (
    <div style={{
      backgroundColor: theme.background,
      color: theme.text
    }} className="px-10 py-5 min-h-screen">
      {
        file && (
          <div className="flex max-md:flex-col max-md:items-center md:justify-between pb-5">
            {
              showVideo ? file && (file.extension.toLowerCase() === 'mkv' || file.extension.toLowerCase() === 'mp4' || file.extension.toLowerCase() === 'mov') && (
                <div className="m-2 w-full">
                  <VideoPlayer onClose={() => setShowVideo(false)} file={file} />
                </div>
              ) : (
                <CoverCard file={file} />
              )
            }
            {/* {
              file && (file.extension.toLowerCase() === 'mkv' || file.extension.toLowerCase() === 'mp4' || file.extension.toLowerCase() === 'mov') && (
                <VideoPlayer file={file} />
              )
            } */}
            {/* Downlaod Container */}
            <div className="lg:w-2/5">
              <div className={`py-3 px-5 rounded-lg ${isDarkMode ? 'downloadContainerDark' : 'downloadContainerLight'}`}>
                <div className="font-semibold">Download and Install</div>
                <div className="text-gray-500 font-thin text-sm">
                  Community-provided installation and download options:
                </div>
                <span className="text-sm font-semibold">v 3.4.2</span>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-1">
                    <div>
                      <a
                        href={`https://files.p12.ru/${file.short_link}`}
                        className="flex text-sm gap-1 py-0.5 items-center justify-center border border-lightBlue hover:border-primaryBlue w-28 max-md:text-xs rounded-sm whitespace-nowrap overflow-hidden overflow-ellipsis"
                      >
                        <img src="https://appdb.to/img/icon-install.f30ce554.svg" />
                        <span className="truncate">
                          Install
                        </span>
                      </a>
                    </div>
                    <div className="flex flex-col">
                      <a
                        href={`https://files.p12.ru/${file.short_link}`}
                        className="flex items-center gap-1 text-sm text-green-600">
                        Short Link
                        <img src="https://appdb.to/img/icon-open.1b76a298.svg" />
                      </a>
                      <span className="text-xs text-gray-500 py-1 font-thin">Cracked by binnichtaktiv • Uploaded by binnichtaktiv</span>
                      <span className={`${isDarkMode ? 'bg-darkYellow' : 'bg-lightYellow'} text-gray-600 font-thin w-fit px-1 text-xs rounded-sm py-0.5`}>Link device to detect compatibility</span>
                    </div>
                  </div>
                  <div className="text-sm flex gap-1">
                    {downloadLink ? (
                      <div>
                        <a
                          className="border py-0.5 border-lightBlue hover:border-primaryBlue text-center w-28 max-md:text-xs rounded-sm flex items-center gap-1 justify-center"
                          href={downloadLink}
                          target="_blank"
                          download  // Add the download attribute to make the link downloadable
                        >
                          <img src="https://appdb.to/img/icon-install.f30ce554.svg" />
                          Download
                        </a>
                      </div>
                    ) : (
                      <div>
                        <a
                          onClick={() => handleDownload(file.sudo_link)}
                          className="flex cursor-pointer text-sm gap-1 py-0.5 items-center justify-center border border-lightBlue hover:border-primaryBlue w-28 max-md:text-xs rounded-sm whitespace-nowrap overflow-hidden overflow-ellipsis"
                        >
                          <img src="https://appdb.to/img/icon-install.f30ce554.svg" />
                          <span className="truncate">
                            Install
                          </span>
                          <ColorRing
                            visible={isLoading}
                            height="20"
                            width="20"
                            ariaLabel="blocks-loading"
                            wrapperStyle={{}}
                            wrapperClass="blocks-wrapper"
                            colors={[theme.text, theme.text, theme.text, theme.text, theme.text]}
                          />
                        </a>
                      </div>
                    )}
                    <div className="flex flex-col">
                      <a
                        onClick={() => handleDownload(file.sudo_link)}
                        className="flex cursor-pointer items-center gap-1 text-sm text-green-600">
                        Sudo Link
                        <img src="https://appdb.to/img/icon-open.1b76a298.svg" />
                      </a>
                      <span className="text-gray-500 py-1 font-thin text-xs">Cracked by binnichtaktiv • Uploaded by binnichtaktiv</span>
                      <span className={`${isDarkMode ? 'bg-darkYellow' : 'bg-lightYellow'} text-gray-600 font-thin w-fit px-1 text-xs rounded-sm py-0.5`}>Link device to detect compatibility</span>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {
                      file.extension.toLowerCase() === 'mkv' || file.extension.toLowerCase() === 'mp4' || file.extension.toLowerCase() === 'mov' ? (
                        <div>
                          <div
                            onClick={toggleShow}
                            // to={`/play/${file_id}`}
                            className="flex cursor-pointer text-sm gap-1 py-0.5 items-center justify-center border border-lightBlue hover:border-primaryBlue w-28 max-md:text-xs rounded-sm whitespace-nowrap overflow-hidden overflow-ellipsis"
                          >
                            <img src="https://appdb.to/img/icon-install.f30ce554.svg" />
                            <span>
                              Play Video
                            </span>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <a
                            href={`https://files.p12.ru/${file.stream_link}`}
                            target="_blank"
                            className="flex text-sm gap-1 py-0.5 items-center justify-center border border-lightBlue hover:border-primaryBlue w-28 max-md:text-xs rounded-sm whitespace-nowrap overflow-hidden overflow-ellipsis"
                          >
                            <img src="https://appdb.to/img/icon-install.f30ce554.svg" />
                            <span className="truncate">
                              Install
                            </span>
                          </a>
                        </div>
                      )
                    }
                    <div className="flex flex-col">
                      <a
                        href={`https://files.p12.ru/${file.stream_link}`}
                        className="flex items-center gap-1 text-sm text-green-600">
                        Stream Link
                        <img src="https://appdb.to/img/icon-open.1b76a298.svg" />
                      </a>
                      <span className="text-xs py-1 text-gray-500 font-thin">Cracked by binnichtaktiv • Uploaded by binnichtaktiv</span>
                      <span className={`${isDarkMode ? 'bg-darkYellow' : 'bg-lightYellow'} text-gray-600 font-thin w-fit px-1 text-xs rounded-sm py-0.5`}>Link device to detect compatibility</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
      <hr />
      {
        file ? (
          <div className="py-5">
            <div>
              <span className="font-semibold">Information</span>
              <div className="text-sm pt-2 pb-5">
                <div>
                  <span className="text-gray-600">
                    Price:&nbsp;
                  </span>
                  {
                    file.price ? (
                      <span>{file.price}</span>
                    ) : (
                      <span>Free</span>
                    )
                  }
                </div>
                <div>
                  <span className="text-gray-600">
                    File size:&nbsp;
                  </span>
                  <span>
                    {file.file_size}
                  </span>
                </div>
                <div>
                  <span className="text-gray-600">
                    Inserted on:&nbsp;
                  </span>
                  <span>
                    {formatedDate(file.inserted_on.$date)}
                  </span>
                </div>
                <div>
                  <span className="text-gray-600">
                    Category:&nbsp;
                  </span>
                  <span className="text-primaryBlueText">
                    {file.extension}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : (
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
  );
};
