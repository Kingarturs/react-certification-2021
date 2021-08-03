import React from 'react';
import {
  VideoCardContainer,
  VideoCardImage,
  DataContainer,
  Title,
  Channel,
  Description,
} from './VideoCard.styled';

function VideoCard(props) {
  const { video, theme } = props;

  return (
    <VideoCardContainer theme={theme} to={video.id.videoId} data-testid="video-card">
      <VideoCardImage src={video.snippet.thumbnails.high.url} alt="thumbnail" />
      <DataContainer theme={theme}>
        <Title>{video.snippet.title}</Title>
        <Channel theme={theme}>{video.snippet.channelTitle}</Channel>
        <Description theme={theme}>
          {video.snippet.description !== ''
            ? video.snippet.description
            : 'No description'}
        </Description>
      </DataContainer>
    </VideoCardContainer>
  );
}

export default VideoCard;
