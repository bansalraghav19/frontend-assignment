import { useState, useEffect } from 'react';
import { getItem, setItem, getTimestamp, setTimestamp } from '../utils/localStorage';

const CACHE_EXPIRY_TIME = 10 * 60 * 1000; // 10 minutes

const useCacheData = <T>(key: string, fetchData: () => Promise<T>): [T | null, boolean, string | null] => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFromCache = () => {
      const cachedData = getItem<T>(key);
      const cacheTimestamp = getTimestamp(key);

      if (cachedData && cacheTimestamp) {
        const currentTime = new Date().getTime();
        const timeDiff = currentTime - cacheTimestamp;

        if (timeDiff < CACHE_EXPIRY_TIME) {
          setData(cachedData);
          setLoading(false);
          return;
        }
      }

      fetchFreshData();
    };

    const fetchFreshData = async () => {
      try {
        setLoading(true);
        const result = await fetchData();
        setData(result);
        setItem(key, result);
        setTimestamp(key, new Date().getTime());
      } catch (err) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchFromCache();
  }, [key, fetchData]);

  return [data, loading, error];
};

export default useCacheData;
