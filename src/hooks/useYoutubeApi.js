import { useState } from 'react';
import axios from 'axios';

const useYoutubeApi = () => {
  const [videos, setVideos] = useState(null);
  const [video, setVideo] = useState(null);
  const [related, setRelated] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const key = process.env.REACT_APP_API_KEY;

  const fetchVideos = async (query) => {
    setLoading(true);
    try {
      const fetched = await axios(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20${
          query !== '' ? `&q=${query}` : '&q=wizeline'
        }&key=${key}&type=video`
      );
      setVideos(fetched.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchVideoInfo = async (id) => {
    setLoading(true);
    try {
      const fetched = await axios(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&type=video&id=${id}&key=${key}`
      );
      setVideo(fetched.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchRelatedVideos = async (id) => {
    setLoading(true);
    try {
      const fetched = await axios(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=10&relatedToVideoId=${id}&key=${key}`
      );
      setRelated(fetched.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    error,
    video,
    videos,
    loading,
    related,
    fetchVideos,
    fetchVideoInfo,
    fetchRelatedVideos,
  };
};

export default useYoutubeApi;
