/* 主程序，负责按时间循环查询某个 Tag 相关的视频 */
import { testApi } from "./search"
setInterval(testApi, 1000)
