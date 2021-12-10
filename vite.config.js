const path = require("path");
const {defineConfig} = require("vite");

module.exports = defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/main.js"),
      name: "bangumi-script",
      fileName: (format) => `index.${format}.js`,
    }, minify: "terser", terserOptions: {
      compress: {
        drop_console: true, drop_debugger: true,
      },
    },
  }, server: {
    host: "0.0.0.0", port: 8080, proxy: {
      "/cms/.*": {
        target: "https://cms-dev.xiongmaoboshi.com", secure: false, changeOrigin: true,
      },
    },
  },
});
