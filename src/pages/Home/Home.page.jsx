import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import mockVideos from '../../mock/youtube-videos-mock.json';
import Switch from '../../components/Switch';
// import { useAuth } from '../../providers/Auth';

import { NavBar, Container, VideoCard } from './Home.styled';

function HomePage() {
  // const history = useHistory();
  // const { authenticated, logout } = useAuth();
  const [active, setActive] = useState(false);

  // function deAuthenticate(event) {
  //   event.preventDefault();
  //   logout();
  //   history.push('/');
  // }

  const lightTheme = {
    bg: 'white',
    fg: '#272727',
    secondaryFg: '#3a3a3a',
    accent: '#1b9b9b',
    hoverAccent: '#30C8C9',
    border: '#dddddd',
  };

  const darkTheme = {
    bg: '#1f2127',
    fg: 'white',
    secondaryFg: '#b3b3b3',
    accent: '#30C8C9',
    hoverAccent: '#1b9b9b',
    border: '#3a3a3a',
  };

  return (
    // <section className="homepage" ref={sectionRef}>
    //   <h1>Hello stranger!</h1>
    //   {authenticated ? (
    //     <>
    //       <h2>Good to have you back</h2>
    //       <span>
    //         <Link to="/" onClick={deAuthenticate}>
    //           ← logout
    //         </Link>
    //         <span className="separator" />
    //         <Link to="/secret">show me something cool →</Link>
    //       </span>
    //     </>
    //   ) : (
    //     <Link to="/login">let me in →</Link>
    //   )}
    // </section>
    <>
      <NavBar theme={!active ? lightTheme : darkTheme}>
        <div className="left">
          <Link to="/" className="logo">
            WizeTube
          </Link>
        </div>

        <div className="right">
          <Switch
            theme={!active ? lightTheme : darkTheme}
            size={1.8}
            active={active}
            onClick={() => setActive(!active)}
          />
          <input type="text" className="input" placeholder="Search" />
          <Link to="/" type="button" className="login-button">
            Log in
          </Link>
        </div>
      </NavBar>
      <Container theme={!active ? lightTheme : darkTheme}>
        {mockVideos.items.map((video) => {
          if (video.id.kind === 'youtube#video') {
            return (
              <VideoCard key={video.etag} theme={!active ? lightTheme : darkTheme} to="/">
                <img src={video.snippet.thumbnails.high.url} alt="thumbnail" />
                <div className="video-data">
                  <p className="video-title">{video.snippet.title}</p>
                  <p className="video-channel">{video.snippet.channelTitle}</p>
                  <p className="video-description">
                    {video.snippet.description !== ''
                      ? video.snippet.description
                      : 'No description'}
                  </p>
                </div>
              </VideoCard>
            );
          }

          return null;
        })}
      </Container>
    </>
  );
}

export default HomePage;
