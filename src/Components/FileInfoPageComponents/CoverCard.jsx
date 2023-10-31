import React, { useState } from "react";

export const CoverCard = ({ file }) => {
  const [err, setErr] = useState(true)
  return (
    <div className="py-7 w-full max-md:items-center flex max-md:flex-col max-md:justify-center gap-5 pr-10">
      <div className="min-w-fit">
        <div
          className={`rounded-3xl ${err ? 'w-60 h-60' : 'h-fit w-fit'} border overflow-hidden`}
          style={{
            backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrf0lpB42PwkxZCIvkgPjzFbA4SMYVhjyVLDdrC5_OLJEAI4GCqBfknjVqIeqQXvHuX9A&usqp=CAU')`,
            backgroundSize: 'cover', // Optional: Adjust the background size to cover the container
            backgroundPosition: 'center', // Optional: Adjust the background position if needed
            backgroundRepeat: 'no-repeat', // Optional: Prevent background image from repeating
          }}
        >
          <img
            className="min-w-60 h-60 rounded-3xl"
            src={file.thumbnail}
            onLoad={() => {
              setErr(false)
            }}
            onError={(e) => {
              setErr(true)
              e.target.style.display = 'none'; // Hide the image on error
            }}
          />
        </div>
      </div>
      <div className="flex flex-col w-full whitespace-pre-line overflow-hidden overflow-ellipsis">
        <div className="text-2xl max-md:text-center font-semibold whitespace-normal break-words">{file.file_name}</div>
        <div className="">
          <div className="text-sm font-thin">{file.caption}</div>
        </div>
      </div>
    </div>
  );
};
