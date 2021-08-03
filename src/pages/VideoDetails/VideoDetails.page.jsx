import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import YoutubeEmbed from '../../components/YoutubeEmbed';
import NavBar from '../../components/NavBar';
import {
  VideoDetailsContainer,
  VideoContainer,
  VideoInfo,
  Title,
  Description,
  RelatedContainer,
} from './VideoDetails.styled';
import useYoutubeApi from '../../hooks/useYoutubeApi';
import { useTheme } from '../../providers/Theme';
import RealtedVideo from '../../components/RelatedVideo';

function VideoDetails() {
  const { id } = useParams();
  const { video, related, fetchRelatedVideos, fetchVideoInfo } = useYoutubeApi();
  const { theme } = useTheme();

  useEffect(() => {
    const fetchData = () => {
      fetchVideoInfo(id);
      fetchRelatedVideos(id);
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <>
      <NavBar />
      {!!video && (
        <VideoDetailsContainer theme={theme}>
          <VideoContainer>
            <YoutubeEmbed embedId={id} data-testid="embed-video" />
            <VideoInfo>
              <Title data-testid="title">{video.items[0].snippet.title}</Title>
              <Description theme={theme} data-testid="description">
                {video.items[0].snippet.description}
              </Description>
            </VideoInfo>
          </VideoContainer>
          {!!related && (
            <RelatedContainer data-testid="related-video">
              {related.items.map((rel) => {
                return <RealtedVideo video={rel} key={rel.id.videoId} />;
              })}
            </RelatedContainer>
          )}
        </VideoDetailsContainer>
      )}
    </>
  );
}

export default VideoDetails;
