import React from 'react';
import { Container, EmptyContainer } from './Home.styled';
import VideoCard from '../../components/VideoCard';
import useYoutubeApi from '../../hooks/useYoutubeApi';
import useDebounce from '../../hooks/useDebounce';
import { useGlobal } from '../../providers/GlobalContext';
import Loader from '../../components/Loader';

function HomePage() {
  const { videos, fetchVideos, loading } = useYoutubeApi();
  const { state } = useGlobal();
  const { theme, search } = state;

  useDebounce(() => {
    fetchVideos(search);
  }, [search]);

  if (loading) return <Loader />;

  return (
    <>
      <Container theme={theme}>
        {!videos ? (
          <EmptyContainer />
        ) : (
          videos.items.map((video) => {
            return <VideoCard theme={theme} video={video} key={video.etag} />;
          })
        )}
      </Container>
    </>
  );
}

export default HomePage;
