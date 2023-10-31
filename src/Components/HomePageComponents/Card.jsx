import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Card = ({ file, horizontal = false }) => {
  const [err, setErr] = useState(true)
  return (
    <Link to={`/file/${file.file_id}`}>
      <div className={`text-center flex ${horizontal ? 'gap-3' : 'flex-col items-center gap-1'} p-1`}>
        <div
          className={`rounded-md ${err ? 'w-20 h-16 border' : 'h-fit w-fit'} flex justify-center`}
          style={{
            backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrf0lpB42PwkxZCIvkgPjzFbA4SMYVhjyVLDdrC5_OLJEAI4GCqBfknjVqIeqQXvHuX9A&usqp=CAU')`,
            backgroundSize: 'cover', // Optional: Adjust the background size to cover the container
            backgroundPosition: 'center', // Optional: Adjust the background position if needed
            backgroundRepeat: 'no-repeat', // Optional: Prevent background image from repeating
          }}
        >
          <img
            className="max-w-20 h-16 rounded-md"
            src={file.thumbnail}
            onLoad={() => {
              setErr(false)
            }}
            onError={(e) => {
              e.target.style.display = 'none'; // Hide the image on error
              setErr(true)
            }}
          />
        </div>
        <div className={`${horizontal && 'text-left flex flex-col justify-between py-3'} whitespace-nowrap overflow-hidden overflow-ellipsis`}>
          <div className={`text-xs ${!horizontal && 'w-20'} truncate`}>{file.file_name}</div>
          <span className="text-xs underline hover:text-primaryBlueText">{file.file_size}</span>
        </div>
      </div>
    </Link>
  );
};
