import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    server: {
        open: '/index.html',
        proxy: {
            // '/api': {
            //     target: 'http://jsonplaceholder.typicode.com',
            //     changeOrigin: true,
            //     rewrite: (path) => path.replace(/^\/api/, '')
            // },
            // 使用 proxy 实例
            '/api': {
                target: 'http://jsonplaceholder.typicode.com',
                changeOrigin: true,
                configure: (proxy, options) => {
                    // proxy 是 'http-proxy' 的实例
                }
            }
        }
    }
})