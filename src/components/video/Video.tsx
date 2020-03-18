import React, { useEffect } from 'react';
import player, { VideoJsPlayerOptions } from 'video.js';
import 'video.js/dist/video-js.css';

interface Props {
  src: string;
  id: string;
  options?: VideoJsPlayerOptions;
  type: string;
}

/** video player */
export const Video: React.FC<Props> = ({
  src,
  id,
  options,
  type = 'mp4',
}) => {
  useEffect(() => {
    player(`#${id}`, options);
  }, [options]);

  return (
    <video
      className="fm-video video-js vjs-16-9 vjs-big-play-centered"
      data-setup="{}"
      controls
      id={id}>
      <source src={src} type={`video/${type}`} />
    </video>
  );
};
