/* B站 API 响应统一返回值 */
declare interface ApiResponse<T> {
  code?: number
  message?: string
  data?: T
}
/* 搜索接口返回值 */
declare interface SearchResponseData {
  /* 总条数 */
  numResults: number
  /* 数据结果，返回的为列表 */
  result: Video[]
}
interface Video {
  /* 稿件 avid */
  aid: number
  /* 稿件 bvid */
  bvid: number
  /* tag，每项 tag 用,分割 */
  tag: string
  /* 评论数 */
  review: number
  /* 视频简介 */
  description: string
}
/* 综合排序：totalrank、最多点击：click、最新发布：pubdate、最多弹幕：dm */
type orderType = "click" | "pubdate" | "stow" | "scores" | "dm"
/* 搜索传参 */
declare interface SearchParams {
  // 搜索目标类型
  search_type: string
  // 搜索关键词
  keyword: string
  // 结果排序方式
  order?: orderType
  // 视频分区筛选
  tids?: string
}
