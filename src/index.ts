/* 主程序，负责按时间循环查询某个 Tag 相关的视频 */
import { commentApi } from "./comment"
import { searchApi } from "./search"
const videoList = await searchApi()
/* 正则表达式，只要出现 雫るる 或者 虚拟主播 这两个 tag 就匹配，但是只要出现雨宮的简体或者繁体就匹配失败 */
const regexTag = /^(?!.*[\u96E8\u5BAE]).*(雫るる|虚拟主播|vtuber|lulu).*$/
/* 简介中包含直播间地址或者个人空间地址 */
const regexDesc = /(387636363|21013446)/
const filteredVideoList = videoList?.filter((video) => {
  return (
    regexTag.test(video.tag) &&
    video.play > 1000 &&
    video.review > 10 &&
    regexDesc.test(video.description)
  )
})
console.log(filteredVideoList)
