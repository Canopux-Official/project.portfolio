import React from "react";
import ReactPlayer from "react-player";

const VideoComponent = () => {
  return (
    <ReactPlayer 
      url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
      controls 
      width="450px"
      height="240px"
    />
  );
};

export default VideoComponent;
