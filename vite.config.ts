import react from "@vitejs/plugin-react";
// import reactRefresh from "@vitejs/plugin-react-refresh";
import { babel } from "@rollup/plugin-babel";
import replace from "@rollup/plugin-replace";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      plugins: [
        replace({
          "process.platform": JSON.stringify("win32"),
        }),
        babel({ babelHelpers: "bundled" }),
      ],
    },
  },
  // define : { 
  //   'process.env' : process . env 
  // } 
});
