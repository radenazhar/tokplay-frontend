// src/components/VideoThumbnail.js
import React from 'react';

const VideoThumbnail = ({ video }) => {
  return (
    <div className="video-thumbnail">
      <img src={video.thumbnailImage} alt={video.videoID} />
    </div>
  );
};

export default VideoThumbnail;
