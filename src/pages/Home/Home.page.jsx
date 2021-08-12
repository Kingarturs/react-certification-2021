import React, { useState } from 'react';
import { Container } from './Home.styled';
import NavBar from '../../components/NavBar';
import VideoCard from '../../components/VideoCard';
import useYoutubeApi from '../../hooks/useYoutubeApi';
import useDebounce from '../../hooks/useDebounce';
import { useTheme } from '../../providers/Theme';
import MobileMenu from '../../components/MobileMenu';
// import videos from '../../mock/youtube-videos-mock.json';

function HomePage() {
  const [search, setSearch] = useState('wizeline');
  const { videos, fetchVideos } = useYoutubeApi();
  const { theme } = useTheme();

  useDebounce(() => {
    fetchVideos(search);
  }, [search]);

  return (
    <>
      <NavBar search setSearch={setSearch} />
      <MobileMenu search setSearch={setSearch} />
      <Container theme={theme} data-testid="navbar">
        {!videos ? (
          <Container theme={theme} />
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
