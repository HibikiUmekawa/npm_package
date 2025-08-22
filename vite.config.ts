import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// ライブラリモード設定（React 19 専用）
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      // エントリーポイント
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "ReactLikertQuestion",
      formats: ["es", "umd"], // ESM と UMD 両対応で配布
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      // React / ReactDOM は利用者側に任せる
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
