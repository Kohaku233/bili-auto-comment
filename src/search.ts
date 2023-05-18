import { getRequest } from "./request/axiosUtils"

/* 搜索请求 */
export const searchApi = async () => {
  try {
    const url = "https://api.bilibili.com/x/web-interface/search/type"
    const params: SearchParams = {
      search_type: "video",
      keyword: "雫るる",
      order: "pubdate"
    }
    const res = await getRequest<ApiResponse<SearchResponseData>>(url, params)
    const data = res.data.data
    return data?.result
  } catch (error) {
    console.log("搜索请求出现异常:", error)
  }
}
