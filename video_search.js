const axios = require("axios");

const instance = axios.create({
  headers: {
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",
    Referer: "https://www.bilibili.com/",
  },
});


const testApi = async () => {
  const response = await instance.get(
    "https://api.bilibili.com/x/web-interface/search/type",
    {
      params: {
        keyword: "lulu",
        search_type: "video",
        page: 1,
      },
    }
  );
  return response;
};

console.log(testApi());
