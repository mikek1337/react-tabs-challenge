import { useEffect, useState } from "react";
import { useCache } from "../context/CacheContext";

function createKeyies(key) {
  return key.map((item) => JSON.stringify(item)).join("-");
}

export default function useQuery({
  url,
  requestInfo = {},
  key = [],
  initialEnable = false,
  cache = { enabled: false, ttl: 10 },
}) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [error, setError] = useState();
  const { getCache, setCache } = useCache();
  const cacheKey = createKeyies(key);
  const refetch = () => {
    setLoading(true);
    setError(undefined);
    if (cache.enabled && getCache(cacheKey)) {
      setData(getCache(cacheKey));
      setLoading(false);
      return;
    }
    fetch(url, { ...requestInfo })
      .then((res) => {
        if (res.ok) {
          return res.text();
        }
      })
      .then((data) => {
        
        setData(data);
        if (cache.enabled) {
          setCache(cacheKey, data, cache.ttl);
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (initialEnable) {
      refetch();
    }
  }, [cacheKey]);

  return { loading, data, error, refetch };
}
