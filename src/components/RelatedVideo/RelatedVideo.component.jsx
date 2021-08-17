import React from 'react';
import {
  Related,
  RelatedVideoImage,
  RelatedVideoData,
  RelatedVideoTitle,
  RelatedVideoChannel,
} from './RelatedVideo.styled';
import { useGlobal } from '../../providers/GlobalContext';

function RelatedVideo({ video }) {
  const { state } = useGlobal();
  const { theme } = state;

  return (
    <Related to={video.id.videoId} theme={theme}>
      <RelatedVideoImage
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <RelatedVideoData>
        <RelatedVideoTitle aria-label="title">{`${video.snippet.title.substr(
          0,
          25
        )}...`}</RelatedVideoTitle>
        <RelatedVideoChannel theme={theme} aria-label="channel">
          {video.snippet.channelTitle}
        </RelatedVideoChannel>
      </RelatedVideoData>
    </Related>
  );
}

export default RelatedVideo;
