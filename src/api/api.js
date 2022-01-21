const BASE_URL = "https://tiktok33.p.rapidapi.com/";
export const TF_URL = BASE_URL + "trending/feed";
export const UI_URL = BASE_URL + "user/info/";

const defaultOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-host": "tiktok33.p.rapidapi.com",
    "x-rapidapi-key": "c1257dc04cmshd888bbb072eb770p1f2b8ajsnbf16d4cd1d66",
  },
};

export const getData = (url, options = defaultOptions) => {
  return fetch(url, options)
    .then((response) => {
      return response.json();
    })
    .then((res) => {
      return res;
    })
    .catch((error) => {
      console.log(error);
      throw new Error(error);
    });
};
