import React from "react";
import { ColorRing } from "react-loader-spinner";
import ReactPlayer from "react-player";
import { CloseIcon } from "../Icons/CloseIcon";
export const VideoPlayer = ({ file, onClose = () => { } }) => {
  return (
    <div className="flex pt-5 flex-col justify-center items-center bg-black relative">
      <div onClick={onClose} className="absolute cursor-pointer z-10 text-white top-2 left-2">
        <CloseIcon />
      </div>
      {
        file ? (
          // <video autoplay controls="true" width='100%' height='auto' src={`https://files.p12.ru/${file.stream_link}`}></video>
          <ReactPlayer width={'100%'} className="bg-black" controls={true} url={`https://files.p12.ru/${file.stream_link}`} />
          // <video autoPlay={true} controls className="bg-black w-full border p-10 max-h-screen" playsInline>
          //   {/* <source src={`https://files.p12.ru/${file.stream_link}`} type="video/mp4" /> */}
          //   {/* <source src={`https://files.p12.ru/${file.stream_link}`} type="video/webm" /> */}
          //   <source src={`https://files.p12.ru/${file.stream_link}`} type="video/ogg" />
          //   Your browser does not support the video tag.
          // </video>

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
