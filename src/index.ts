/* 主程序，负责按时间循环查询某个 Tag 相关的视频 */
import { searchApi } from "./search"
const data = await searchApi()
