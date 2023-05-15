import { postRequest } from "./request/axiosUtils"

export const commentApi = async (oid: number) => {
  try {
    const url = "https://api.bilibili.com/x/v2/reply/add"
    const requestBody: CommentParams = {
      type: 1,
      oid,
      message: "每个稿件来一句:るるまじ可愛い!!!",
      csrf: "0d8ab0270b0ddbc60e3c61e13ebb0725"
    }
    const res = await postRequest<ApiResponse<any>>(url, requestBody, {
      headers: { "Content-Type": "application/x-www-form-urlencoded" }
    })
    // console.log(res.data.code)
    return res.data.code
  } catch (error) {}
}
