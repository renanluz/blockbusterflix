import React from 'react';
import { VideoCardContainerLarge} from './styles';



function getYouTubeId(youtubeURL) {
    return youtubeURL
      .replace(
        /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
        '$7',
      );
  }

  function VideoCardLarge({ videoTitle, videoURL, categoryColor }) {
    const image = `https://img.youtube.com/vi/${getYouTubeId(videoURL)}/hqdefault.jpg`;
    return (
      <VideoCardContainerLarge
        url={image}
        href={videoURL}
        target="_blank"
        style={{ borderColor: categoryColor || 'red' }}
        title={videoTitle}
      />
    );
  }
  
  export default VideoCardLarge;