import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr({
    // svgr options: https://react-svgr.com/docs/options/
    svgrOptions: {
      replaceAttrValues: { fill: '#ff0000' }
    },

    // esbuild options, to transform jsx to js
    esbuildOptions: {
      // ...
    },

    // A minimatch pattern, or array of patterns, which specifies the files in the build the plugin should include.
    include: "**/*.svg",

    //  A minimatch pattern, or array of patterns, which specifies the files in the build the plugin should ignore. By default no files are ignored.
    exclude: "",
  })],
})
