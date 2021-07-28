import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    server: {
        host: "0.0.0.0",
        open: true,
        cors: true,
        proxy: {
            '^/api': {
                target: 'http://t.weather.itboy.net/api/weather/city/101030100',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            },
            // 这里不要使用  apijs 这相当于没有使用代理
            '^/jsapi': {
                target: 'https://jsonplaceholder.typicode.com',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/jsapi/, '')
            },
            // 使用 proxy 实例  https://www.cnblogs.com/threeyou/p/13449996.html 
            '^/hayes': {
                target: 'https://jsonplaceholder.typicode.com',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/hayes/, '')
            }
        }
    }
})