import React, { useContext, useEffect, useState } from "react";
// import ReactPlayer from 'react-player'
// import { Player } from "react-tuby";
// import "react-tuby/css/main.css";

import { Link, useParams } from "react-router-dom";
import { AppsContext } from "../Context/AppsContext";

// import IframePlayer from "player-iframe-video";
// import "player-iframe-video/dist/index.css";
import { ColorRing } from "react-loader-spinner";

export const NewVideoPlayer = () => {
  const { id: file_id } = useParams();
  const [file, setFile] = useState(null);
  const { data } = useContext(AppsContext);

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

  return (
    <div className="flex flex-col absolute top-0 bottom-0 left-0 right-0 justify-center items-center bg-black">
      <Link to={`/file/${file_id}`} className="text-white absolute z-10 top-2 left-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
      </Link>
      <Link to={'/'} className="absolute top-2 z-10">
        <img className="w-24 max-md:hidden" src="https://appdb.to/img/logo-dark.919deb7d.svg" />
        <img className="md:hidden w-7" src="https://appdb.to/favicon-appdb.png" />
      </Link>
      {
        file ? (
          // <Player
          //   src={`https://files.p12.ru/${file.stream_link}`}
          // // src={`${CORS_PROXY}https://files.p12.ru/${file.stream_link}`}
          // />
          // src={[
          //   // {
          //   //   quality: 480,
          //   //   url:
          //   //     `https://files.p12.ru/${file.stream_link}`,
          //   // },
          //   {
          //     quality: 720,
          //     url: "https://cdn.glitch.me/cbf2cfb4-aa52-4a1f-a73c-461eef3d38e8/720.mp4",
          //   },
          //   {
          //     quality: 480,
          //     url: "https://cdn.glitch.me/cbf2cfb4-aa52-4a1f-a73c-461eef3d38e8/480.mp4",
          //   },
          // ]}
          // subtitles={[
          //   {
          //     lang: "en",
          //     language: "English",
          //     url:
          //       "https://cdn.jsdelivr.net/gh/naptestdev/video-examples@master/en.vtt",
          //   },
          //   {
          //     lang: "fr",
          //     language: "French",
          //     url:
          //       "https://cdn.jsdelivr.net/gh/naptestdev/video-examples@master/fr.vtt",
          //   },
          // ]}
          // poster="https://cdn.jsdelivr.net/gh/naptestdev/video-examples@master/poster.png"
          // />
          // <video autoplay controls="true" width='100%' height='auto' src={`https://files.p12.ru/${file.stream_link}`}></video>
          // <ReactPlayer playsinline={true} className="max-w-full max-h-screen bg-black" controls={true} url={`https://files.p12.ru/${file.stream_link}`} />
          <video autoPlay={true} controls className="max-w-full max-h-screen bg-black" playsInline>
            {/* <source src={`https://files.p12.ru/${file.stream_link}`} type="video/mp4" /> */}
            {/* <source src={`https://files.p12.ru/${file.stream_link}`} type="video/webm" /> */}
            <source src={`https://files.p12.ru/${file.stream_link}`} type="video/ogg" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div className="flex justify-center">
            <ColorRing
              visible={true}
              height="80"
              width="80"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={['#fff', '#fff', '#fff', '#fff', '#fff']}
            />
          </div>
        )
      }
    </div>
  );
};
