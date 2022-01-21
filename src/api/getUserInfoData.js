import userInfo from "@/assets/json/user-info.json";
// import { getData } from './api';
// import { UI_URL } from './api';

export const getUserInfoData = async () => {
  // return await getData(UI_URL + name);
  return userInfo;
};
