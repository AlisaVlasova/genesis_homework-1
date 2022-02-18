import feed from "@/assets/json/feed.json";
// import { getData } from './api';
// import { TF_URL } from './api';

export const getTrendingFeedData = async () => {
  // return await getData(TF_URL);
  return feed;
};
