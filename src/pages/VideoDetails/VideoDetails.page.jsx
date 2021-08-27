import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router';
import toast from 'react-hot-toast';
import YoutubeEmbed from '../../components/YoutubeEmbed';
import {
  VideoDetailsPageContainer,
  VideoDetailsContainer,
  VideoContainer,
  VideoInfo,
  Title,
  Description,
  RelatedContainer,
  AddFavoriteIcon,
  RemoveFavoriteIcon,
  VideoHead,
} from './VideoDetails.styled';
import useYoutubeApi from '../../hooks/useYoutubeApi';
import RelatedVideo from '../../components/RelatedVideo';
import { useGlobal } from '../../providers/GlobalContext';
import { db } from '../../firebase';
import useFavorite from '../../hooks/useFavorite';

function VideoDetails() {
  const { id } = useParams();
  const { video, related, fetchRelatedVideos, fetchVideoInfo } = useYoutubeApi();
  const { isFavorite, checkFavorite } = useFavorite();
  const { state, authState } = useGlobal();
  const history = useHistory();

  const { theme } = state;
  const { currentUser } = authState;

  function addToFavorites(videoInfo) {
    if (currentUser === null) {
      history.push('/login');
      return;
    }

    const favorite = {
      id: videoInfo.id,
      title: videoInfo.snippet.title,
      description: videoInfo.snippet.description,
      channelTitle: videoInfo.snippet.channelTitle,
      thumbnail: videoInfo.snippet.thumbnails.medium.url,
    };

    db.collection(currentUser.uid)
      .doc(videoInfo.id)
      .set(favorite)
      .then(() => {
        checkFavorite(currentUser.uid, id);
      })
      .then(() => {
        toast.success('Added to favorites', {
          position: 'top-center',
          style: {
            backgroundColor: theme.border,
            color: theme.fg,
            borderRadius: '5px',
          },
          iconTheme: {
            primary: theme.accent,
            secondary: theme.border,
          },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function removeFromFavorites(videoID) {
    db.collection(currentUser.uid)
      .doc(videoID)
      .delete()
      .then(() => {
        checkFavorite(currentUser.uid, id);
      })
      .then(() => {
        toast.success('Removed from favorites', {
          position: 'top-center',
          style: {
            backgroundColor: theme.border,
            color: theme.fg,
            borderRadius: '5px',
          },
          iconTheme: {
            primary: theme.accent,
            secondary: theme.border,
          },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    const fetchData = () => {
      fetchVideoInfo(id);
      fetchRelatedVideos(id);
    };
    fetchData();

    if (currentUser) {
      checkFavorite(currentUser.uid, id);
    }

    return () => fetchData;

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, currentUser]);

  return (
    <VideoDetailsPageContainer theme={theme}>
      {!!video && (
        <VideoDetailsContainer>
          <VideoContainer>
            <YoutubeEmbed embedId={id} />
            <VideoInfo>
              <VideoHead>
                <Title title="title" theme={theme}>
                  {video.items[0].snippet.title}
                </Title>

                {isFavorite ? (
                  <RemoveFavoriteIcon
                    className="fas fa-heart"
                    title="remove-favorite-icon"
                    theme={theme}
                    onClick={() => removeFromFavorites(video.items[0].id)}
                  />
                ) : (
                  <AddFavoriteIcon
                    className="fas fa-heart"
                    title="add-favorite-icon"
                    theme={theme}
                    onClick={() => addToFavorites(video.items[0])}
                  />
                )}
              </VideoHead>

              <Description theme={theme} title="description">
                {video.items[0].snippet.description}
              </Description>
            </VideoInfo>
          </VideoContainer>
          {!!related && (
            <RelatedContainer>
              {related.items.map((rel) => {
                return rel.snippet && <RelatedVideo video={rel} key={rel.id.videoId} />;
              })}
            </RelatedContainer>
          )}
        </VideoDetailsContainer>
      )}
    </VideoDetailsPageContainer>
  );
}

export default VideoDetails;
