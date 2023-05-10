import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios"
import dotenv from "dotenv"

// 获取环境变量
dotenv.config({ path: ".env.local" })
const cookie = process.env.SESSDATA

// 封装 axios
const axiosInstance: AxiosInstance = axios.create({
  headers: {
    Cookie: cookie
  }
})
async function request<T = any>(
  config: AxiosRequestConfig
): Promise<AxiosResponse<T>> {
  return axiosInstance(config)
}

interface SearchResponse {
  code?: number
  message?: string
  data?: SearchResponseData
}
interface SearchResponseData {
  numResults?: number
  page?: number
  pageSize?: number
}
/* 搜索请求 */
export const searchApi = async () => {
  try {
    const res = await request<SearchResponse>({
      url: "https://api.bilibili.com/x/web-interface/search/type",
      method: "GET"
    })
    console.log(res.data)
    return res.data
  } catch (error) {}
}
