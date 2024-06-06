import { defineConfig, splitVendorChunkPlugin } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),splitVendorChunkPlugin()],
  build:{
    rollupOptions:{
      output:{
        manualChunks(id:string){
          console.log(id)
          if(id.match('react-router-dom') ||
          id.match('@remix-run') ||
          id.match('react-router')){
            return '@react-router'
          }
          if(id.match('react-photo-view')){

            return '@react-photo-view';
          }
          if(id.match('embla')){
            return '@embla'
          }
        }
      }
    }
  }
});
