import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    server: {
        open: true,
        // cors: true,
        proxy: {
            '^/api': { //https://github.com/chimurai/http-proxy-middleware
                target: 'http://t.weather.itboy.net',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            },
            // 使用 proxy 实例  https://www.cnblogs.com/threeyou/p/13449996.html
            '^/apijs': {
                target: 'http://jsonplaceholder.typicode.com',
                changeOrigin: true,
                // rewrite: (path) => path.replace(/^\/apijs/, '')                
                pathRewrite: {
                    '^/apijs': ''
                }
            }
        }
    }
})