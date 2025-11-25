"use client";
import React from "react";

interface VideoSlideProps {
  video: string;
}

const VideoSlide = ({ video }: VideoSlideProps) => {
  return (
    <div
      className="
        w-full 
        mt-20
        h-[40vh]           /* mobile */
        sm:h-[55vh]        /* small tablets */
        md:h-[70vh]        /* tablets */
        lg:h-screen        /* laptops & desktops */
     
      "
    >
      <video
        src={video}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default VideoSlide;
