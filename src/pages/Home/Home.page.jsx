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

    return () => fetchVideos();
  }, [search]);

  if (loading) return <Loader />;

  return (
    <>
      <Container theme={theme} data-testid="main-container">
        {!videos ? (
          <EmptyContainer />
        ) : (
          videos.items.map((video) => {
            return <VideoCard video={video} key={video.etag} />;
          })
        )}
      </Container>
    </>
  );
}

export default HomePage;
