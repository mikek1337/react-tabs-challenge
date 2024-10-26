import { createContext, useContext } from 'react';

const CacheContext = createContext(null);

export function useCache(){
  return useContext(CacheContext);
}

export default function CacheProvider({children}){
  const cache = new Map()

  function getCache(key){
    const cacheData = cache.get(key);
    if(!cacheData) return undefined;
    if(new Date().getTime() > cacheData.expireDate.getTime()){
      cache.delete(key);
      return undefined;
    }
    return cacheData.data;
  }

  function setCache(key, value, ttl){
    const cacheTtl = new Date();
    cacheTtl.setSeconds(cacheTtl.getSeconds() + ttl);
    cache.set(key, {
      expireDate: cacheTtl,
      data: value
    });

  }

  function clearCache(){
    cache.clear();
  }

  function deleteCache(key){
    cache.delete(key)
  }


  const cacheContextValue = {
    getCache,
    setCache,
    clearCache,
    deleteCache
  }

  return (
    <CacheContext.Provider value={cacheContextValue}>
      {children}
    </CacheContext.Provider>
  )
}
