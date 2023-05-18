import { postRequest } from "./request/axiosUtils"
import dotenv from "dotenv"
dotenv.config({ path: ".env.local" })
const csrf = process.env.bili_jct || ""
export const commentApi = async (oid: number) => {
  try {
    const url = "https://api.bilibili.com/x/v2/reply/add"
    const requestBody: CommentParams = {
      type: 1,
      oid,
      message: "每个稿件来一句:るるまじ可愛い!!!",
      csrf
    }
    const res = await postRequest<ApiResponse<any>>(url, requestBody, {
      headers: { "Content-Type": "application/x-www-form-urlencoded" }
    })
    // console.log(res.data.code)
    return res.data.code
  } catch (error) {
    console.log('评论请求出现异常',error)
  }
}
