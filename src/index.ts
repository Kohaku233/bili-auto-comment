/* 主程序，负责按时间循环查询某个 Tag 相关的视频 */
import { searchApi } from "./search"
const videoList = await searchApi()
// console.log('videoList', videoList)
videoList?.filter((video) => {
  if (
    video.tag.includes("雫るる") &&
    video.tag.includes("虚拟主播") &&
    video.play > 1000 &&
    video.review > 10
  ) {
    console.log(video)
  }
})
