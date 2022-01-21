import userFeed from "@/assets/json/user-feed.json";
// import { getData } from './api';
// import { UF_URL } from './api';

export const getUserFeedData = async () => {
  // return await getData(UF_URL + name);
  return userFeed;
};
