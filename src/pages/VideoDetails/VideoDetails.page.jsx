import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import YoutubeEmbed from '../../components/YoutubeEmbed';
import {
  VideoDetailsContainer,
  VideoContainer,
  VideoInfo,
  Title,
  Description,
  RelatedContainer,
} from './VideoDetails.styled';
import useYoutubeApi from '../../hooks/useYoutubeApi';
import RealtedVideo from '../../components/RelatedVideo';
import { useGlobal } from '../../providers/GlobalContext';

function VideoDetails() {
  const { id } = useParams();
  const { video, related, fetchRelatedVideos, fetchVideoInfo } = useYoutubeApi();
  const { state } = useGlobal();
  const { theme } = state;

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
      {!!video && (
        <VideoDetailsContainer theme={theme}>
          <VideoContainer>
            <YoutubeEmbed embedId={id} data-testid="embed-video" />
            <VideoInfo>
              <Title data-testid="title" theme={theme}>
                {video.items[0].snippet.title}
              </Title>
              <Description theme={theme} data-testid="description">
                {video.items[0].snippet.description}
              </Description>
            </VideoInfo>
          </VideoContainer>
          {!!related && (
            <RelatedContainer data-testid="related-video">
              {related.items.map((rel) => {
                return rel.snippet && <RealtedVideo video={rel} key={rel.id.videoId} />;
              })}
            </RelatedContainer>
          )}
        </VideoDetailsContainer>
      )}
    </>
  );
}

export default VideoDetails;
