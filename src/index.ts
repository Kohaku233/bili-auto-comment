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
/* 获取所有满足条件的视频 avid 并存到数组中 */
const filteredVideoIdList = filteredVideoList?.map((video) => video.aid) ?? []
filteredVideoIdList.forEach(async (avid) => {
  const code = await commentApi(avid)
  /* 如果评论成功，则存入到 json 中以免二次评论 */
  if (code == 0) {
    console.log(`http://www.bilibili.com/video/av${avid}`)
  }
})
// TODO: 实现搜索入参自定义化、评论自定义化、筛选自定义化
// TODO: 实现评论引流，在自己评论下添加子评论并引流到 github 链接
// TODO: 实现部署上线，自动运行
// TODO: 实现运行日志详情提示，例如每过一段时间自动汇集信息则B站私信通知