import { useState } from 'react';
import { db } from '../firebase';

const useFavorite = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [favorites, setFavorites] = useState([]);

  const checkFavorite = async (userUID, videoID) => {
    setLoading(true);
    try {
      const fetched = await db.collection(userUID).doc(videoID).get();
      if (fetched.exists) {
        setIsFavorite(true);
      } else {
        setIsFavorite(false);
      }
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchFavorites = async (userUID) => {
    setLoading(true);
    try {
      const fetched = await db.collection(userUID).get();
      const data = fetched.docs.map((doc) => doc.data());
      setFavorites(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    error,
    loading,
    favorites,
    fetchFavorites,
    isFavorite,
    checkFavorite,
  };
};

export default useFavorite;
