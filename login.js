const axios = require("axios");

const instance = axios.create({
  headers: {
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",
    Referer: "https://www.bilibili.com/",
  },
});

/* 获取公钥和盐 */
const getSalt = () => {
  return instance
    .get("https://passport.bilibili.com/x/passport-login/web/key")
    .then((res) => {
      // console.log(res.data.data);
      return res.data;
    });
};
const salt = getSalt();
console.log(salt);
