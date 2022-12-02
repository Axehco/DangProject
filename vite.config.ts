import vue from '@vitejs/plugin-vue'
import { CommonServerOptions, defineConfig } from 'vite'
import fs from 'fs'
import dotenv, { DotenvParseOutput } from 'dotenv'

/* // https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()]
}) */

// 重新用函数方式定义： defineConfig
export default defineConfig((mode) => {
  // console.log('当前在什么环境运行项目:', mode.mode)

  //  拼接当前环境文件名
  const envFileName: string = '.env'
  const curEnvFileName = `${envFileName}.${mode.mode}`
  // console.log('curEnvFileName:', curEnvFileName)

  // let server: CommonServerOptions = {}
  let server: Record<string, any> = {}
  const envData = fs.readFileSync(curEnvFileName)
  const envMap: DotenvParseOutput = dotenv.parse(envData)
  // console.log(envMap)
  // console.log('@: ', envMap.VITE_PORT)
  // console.log(typeof(envMap.VITE_PORT))

  if (mode.mode === "development") {
    server = {
      host: envMap.VITE_HOST,
      port: envMap.VITE_PORT,
      proxy: {
        [envMap.VITE_BASE_URL]: {
          target: envMap.VITE_PROXY_DOMAIN,
        },
      }
    }
    // console.log('我是生产者环境', server)
  } else {
    // console.log('我是生产者环境')
    server = {
      port: envMap.VITE_PORT,
      host: envMap.VITE_HOST,
    }
  }

  return {
    plugins: [vue()]
  }
})