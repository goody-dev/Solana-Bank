// vite.config.ts
import { defineConfig } from "file:///C:/Users/Code%20Evolver/Solana-Bank/node_modules/.pnpm/vite@5.4.21_@types+node@24.10.2_terser@5.44.1/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/Code%20Evolver/Solana-Bank/node_modules/.pnpm/@vitejs+plugin-react@4.7.0__5d6dfbf9d4b1f90c8529c7cd3fd4bf3c/node_modules/@vitejs/plugin-react/dist/index.js";
import path from "path";
var __vite_injected_original_dirname = "C:\\Users\\Code Evolver\\Solana-Bank";
var vite_config_default = defineConfig({
  plugins: [
    react()
    // PWA plugin will be enabled after dependencies are installed
    // VitePWA({
    //   registerType: 'autoUpdate',
    //   includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
    //   manifest: {
    //     name: 'Solana Bank Pro',
    //     short_name: 'SolanaBank',
    //     description: 'Modern banking experience on the Solana blockchain',
    //     theme_color: '#00FFC8',
    //     background_color: '#0A0A0A',
    //     display: 'standalone',
    //     orientation: 'portrait',
    //     scope: '/',
    //     start_url: '/',
    //   }
    // })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src"),
      "@/components": path.resolve(__vite_injected_original_dirname, "./src/components"),
      "@/hooks": path.resolve(__vite_injected_original_dirname, "./src/hooks"),
      "@/lib": path.resolve(__vite_injected_original_dirname, "./src/lib"),
      "@/pages": path.resolve(__vite_injected_original_dirname, "./src/pages"),
      "@/services": path.resolve(__vite_injected_original_dirname, "./src/services"),
      "@/store": path.resolve(__vite_injected_original_dirname, "./src/store"),
      "@/types": path.resolve(__vite_injected_original_dirname, "./src/types"),
      "@/utils": path.resolve(__vite_injected_original_dirname, "./src/utils")
    }
  },
  define: {
    global: "globalThis"
  },
  optimizeDeps: {
    include: [
      "@solana/web3.js",
      "@solana/wallet-adapter-react",
      "@solana/wallet-adapter-wallets",
      "framer-motion",
      "zustand",
      "@tanstack/react-query"
    ]
  },
  build: {
    target: "esnext",
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          solana: ["@solana/web3.js", "@solana/wallet-adapter-react", "@solana/wallet-adapter-wallets", "@solana/spl-token"],
          ui: ["framer-motion", "lucide-react"],
          utils: ["zustand", "@tanstack/react-query", "date-fns"]
        }
      }
    }
  },
  server: {
    port: 3e3,
    host: true,
    open: true
  },
  preview: {
    port: 4173,
    host: true
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxDb2RlIEV2b2x2ZXJcXFxcU29sYW5hLUJhbmtcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXENvZGUgRXZvbHZlclxcXFxTb2xhbmEtQmFua1xcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvQ29kZSUyMEV2b2x2ZXIvU29sYW5hLUJhbmsvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xyXG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnXHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFtcclxuICAgIHJlYWN0KCksXHJcbiAgICAvLyBQV0EgcGx1Z2luIHdpbGwgYmUgZW5hYmxlZCBhZnRlciBkZXBlbmRlbmNpZXMgYXJlIGluc3RhbGxlZFxyXG4gICAgLy8gVml0ZVBXQSh7XHJcbiAgICAvLyAgIHJlZ2lzdGVyVHlwZTogJ2F1dG9VcGRhdGUnLFxyXG4gICAgLy8gICBpbmNsdWRlQXNzZXRzOiBbJ2Zhdmljb24uaWNvJywgJ2FwcGxlLXRvdWNoLWljb24ucG5nJywgJ21hc2tlZC1pY29uLnN2ZyddLFxyXG4gICAgLy8gICBtYW5pZmVzdDoge1xyXG4gICAgLy8gICAgIG5hbWU6ICdTb2xhbmEgQmFuayBQcm8nLFxyXG4gICAgLy8gICAgIHNob3J0X25hbWU6ICdTb2xhbmFCYW5rJyxcclxuICAgIC8vICAgICBkZXNjcmlwdGlvbjogJ01vZGVybiBiYW5raW5nIGV4cGVyaWVuY2Ugb24gdGhlIFNvbGFuYSBibG9ja2NoYWluJyxcclxuICAgIC8vICAgICB0aGVtZV9jb2xvcjogJyMwMEZGQzgnLFxyXG4gICAgLy8gICAgIGJhY2tncm91bmRfY29sb3I6ICcjMEEwQTBBJyxcclxuICAgIC8vICAgICBkaXNwbGF5OiAnc3RhbmRhbG9uZScsXHJcbiAgICAvLyAgICAgb3JpZW50YXRpb246ICdwb3J0cmFpdCcsXHJcbiAgICAvLyAgICAgc2NvcGU6ICcvJyxcclxuICAgIC8vICAgICBzdGFydF91cmw6ICcvJyxcclxuICAgIC8vICAgfVxyXG4gICAgLy8gfSlcclxuICBdLFxyXG4gIHJlc29sdmU6IHtcclxuICAgIGFsaWFzOiB7XHJcbiAgICAgICdAJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjJyksXHJcbiAgICAgICdAL2NvbXBvbmVudHMnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvY29tcG9uZW50cycpLFxyXG4gICAgICAnQC9ob29rcyc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy9ob29rcycpLFxyXG4gICAgICAnQC9saWInOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvbGliJyksXHJcbiAgICAgICdAL3BhZ2VzJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjL3BhZ2VzJyksXHJcbiAgICAgICdAL3NlcnZpY2VzJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjL3NlcnZpY2VzJyksXHJcbiAgICAgICdAL3N0b3JlJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjL3N0b3JlJyksXHJcbiAgICAgICdAL3R5cGVzJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjL3R5cGVzJyksXHJcbiAgICAgICdAL3V0aWxzJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjL3V0aWxzJyksXHJcbiAgICB9XHJcbiAgfSxcclxuICBkZWZpbmU6IHtcclxuICAgIGdsb2JhbDogJ2dsb2JhbFRoaXMnLFxyXG4gIH0sXHJcbiAgb3B0aW1pemVEZXBzOiB7XHJcbiAgICBpbmNsdWRlOiBbXHJcbiAgICAgICdAc29sYW5hL3dlYjMuanMnLFxyXG4gICAgICAnQHNvbGFuYS93YWxsZXQtYWRhcHRlci1yZWFjdCcsXHJcbiAgICAgICdAc29sYW5hL3dhbGxldC1hZGFwdGVyLXdhbGxldHMnLFxyXG4gICAgICAnZnJhbWVyLW1vdGlvbicsXHJcbiAgICAgICd6dXN0YW5kJyxcclxuICAgICAgJ0B0YW5zdGFjay9yZWFjdC1xdWVyeSdcclxuICAgIF1cclxuICB9LFxyXG4gIGJ1aWxkOiB7XHJcbiAgICB0YXJnZXQ6ICdlc25leHQnLFxyXG4gICAgc291cmNlbWFwOiB0cnVlLFxyXG4gICAgcm9sbHVwT3B0aW9uczoge1xyXG4gICAgICBvdXRwdXQ6IHtcclxuICAgICAgICBtYW51YWxDaHVua3M6IHtcclxuICAgICAgICAgIHZlbmRvcjogWydyZWFjdCcsICdyZWFjdC1kb20nXSxcclxuICAgICAgICAgIHNvbGFuYTogWydAc29sYW5hL3dlYjMuanMnLCAnQHNvbGFuYS93YWxsZXQtYWRhcHRlci1yZWFjdCcsICdAc29sYW5hL3dhbGxldC1hZGFwdGVyLXdhbGxldHMnLCAnQHNvbGFuYS9zcGwtdG9rZW4nXSxcclxuICAgICAgICAgIHVpOiBbJ2ZyYW1lci1tb3Rpb24nLCAnbHVjaWRlLXJlYWN0J10sXHJcbiAgICAgICAgICB1dGlsczogWyd6dXN0YW5kJywgJ0B0YW5zdGFjay9yZWFjdC1xdWVyeScsICdkYXRlLWZucyddXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBzZXJ2ZXI6IHtcclxuICAgIHBvcnQ6IDMwMDAsXHJcbiAgICBob3N0OiB0cnVlLFxyXG4gICAgb3BlbjogdHJ1ZVxyXG4gIH0sXHJcbiAgcHJldmlldzoge1xyXG4gICAgcG9ydDogNDE3MyxcclxuICAgIGhvc3Q6IHRydWVcclxuICB9XHJcbn0pIl0sCiAgIm1hcHBpbmdzIjogIjtBQUErUixTQUFTLG9CQUFvQjtBQUM1VCxPQUFPLFdBQVc7QUFDbEIsT0FBTyxVQUFVO0FBRmpCLElBQU0sbUNBQW1DO0FBS3pDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBaUJSO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLEtBQUssUUFBUSxrQ0FBVyxPQUFPO0FBQUEsTUFDcEMsZ0JBQWdCLEtBQUssUUFBUSxrQ0FBVyxrQkFBa0I7QUFBQSxNQUMxRCxXQUFXLEtBQUssUUFBUSxrQ0FBVyxhQUFhO0FBQUEsTUFDaEQsU0FBUyxLQUFLLFFBQVEsa0NBQVcsV0FBVztBQUFBLE1BQzVDLFdBQVcsS0FBSyxRQUFRLGtDQUFXLGFBQWE7QUFBQSxNQUNoRCxjQUFjLEtBQUssUUFBUSxrQ0FBVyxnQkFBZ0I7QUFBQSxNQUN0RCxXQUFXLEtBQUssUUFBUSxrQ0FBVyxhQUFhO0FBQUEsTUFDaEQsV0FBVyxLQUFLLFFBQVEsa0NBQVcsYUFBYTtBQUFBLE1BQ2hELFdBQVcsS0FBSyxRQUFRLGtDQUFXLGFBQWE7QUFBQSxJQUNsRDtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLFFBQVE7QUFBQSxFQUNWO0FBQUEsRUFDQSxjQUFjO0FBQUEsSUFDWixTQUFTO0FBQUEsTUFDUDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxJQUNSLFdBQVc7QUFBQSxJQUNYLGVBQWU7QUFBQSxNQUNiLFFBQVE7QUFBQSxRQUNOLGNBQWM7QUFBQSxVQUNaLFFBQVEsQ0FBQyxTQUFTLFdBQVc7QUFBQSxVQUM3QixRQUFRLENBQUMsbUJBQW1CLGdDQUFnQyxrQ0FBa0MsbUJBQW1CO0FBQUEsVUFDakgsSUFBSSxDQUFDLGlCQUFpQixjQUFjO0FBQUEsVUFDcEMsT0FBTyxDQUFDLFdBQVcseUJBQXlCLFVBQVU7QUFBQSxRQUN4RDtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
