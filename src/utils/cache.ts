import NodeCache from "node-cache";

const cache = new NodeCache();

const addToCache = (key: string, value: string, duration: number) =>
  cache.set(key, value, duration);
const getCache = (key: string) => cache.get(key);
const hasCache = (key: string) => cache.has(key);

export { addToCache, getCache, hasCache };
