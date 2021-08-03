import React from 'react';
import { useTheme } from '../../providers/Theme';
import {
  Related,
  RelatedVideoImage,
  RelatedVideoData,
  RelatedVideoTitle,
  RelatedVideoChannel,
} from './RelatedVideo.styled';

function RelatedVideo({ video }) {
  const { theme } = useTheme();

  return (
    <Related to={video.id.videoId} theme={theme}>
      <RelatedVideoImage
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <RelatedVideoData>
        <RelatedVideoTitle>{video.snippet.title}</RelatedVideoTitle>
        <RelatedVideoChannel theme={theme}>
          {video.snippet.channelTitle}
        </RelatedVideoChannel>
      </RelatedVideoData>
    </Related>
  );
}

export default RelatedVideo;
