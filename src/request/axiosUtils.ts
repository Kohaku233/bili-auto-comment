import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios"
import dotenv from "dotenv"

/* 获取环境变量 */
dotenv.config({ path: ".env.local" })
const cookie = process.env.buvid3

/* 封装 axios */
const axiosInstance: AxiosInstance = axios.create({
  headers: {
    Cookie: `buvid3=${cookie}`
  }
})
/* 封装 get 请求 */
const getRequest = async <T = any>(
  url: string,
  params?: any,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<T>> => {
  return axiosInstance.get(url, { params, ...config })
}
/* 封装 post 请求 */
const postRequest = async (
  url: string,
  data?: any,
  config?: AxiosRequestConfig
) => {
  return axiosInstance.post(url, data, config)
}

export { getRequest, postRequest }
