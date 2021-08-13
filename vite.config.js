import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    base:"/weather-app/",
    plugins: [vue()],
    server: {
        host: "0.0.0.0",
        open: true,
        cors: true,
        proxy: {
            '^/UomgAPI': {
                target: 'https://api.uomg.com',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/UomgAPI/, '')
            },            
            // 这里不要使用  apijs 这相当于没有使用代理
            '^/jsapi': {
                target: 'https://jsonplaceholder.typicode.com',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/jsapi/, '')
            },
            // 使用 proxy 实例  https://www.cnblogs.com/threeyou/p/13449996.html 
            '^/hayes': {
                target: 'http://t.weather.itboy.net',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/hayes/, '')
            }
        }
    }
})