import React from 'react';
import { useGlobal } from '../../providers/GlobalContext';
import {
  VideoCardContainer,
  VideoCardImage,
  DataContainer,
  Title,
  Channel,
  Description,
} from './VideoCard.styled';

function VideoCard(props) {
  const { state } = useGlobal();
  const { video } = props;
  const { theme } = state;

  return (
    <VideoCardContainer theme={theme} to={video.id.videoId} title="video-card">
      <VideoCardImage src={video.snippet.thumbnails.high.url} alt={video.snippet.title} />
      <DataContainer theme={theme}>
        <Title title="title">{video.snippet.title}</Title>
        <Channel title="channel" theme={theme}>
          {video.snippet.channelTitle}
        </Channel>
        <Description title="description" theme={theme}>
          {video.snippet.description !== ''
            ? video.snippet.description
            : 'No description'}
        </Description>
      </DataContainer>
    </VideoCardContainer>
  );
}

export default VideoCard;
