import { defineConfig } from "vite";
import { resolve } from "path";
import { data } from "./src/data/index.js";
import handlebars from "vite-plugin-handlebars";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        // Specify individual HTML files here
        main: resolve(__dirname, "/index.html"),
        recipe1: resolve(__dirname, "src/pages/chicken-berry-salad.html"),
        recipe2: resolve(
          __dirname,
          "src/pages/pan-roasted-chicken-breasts.html",
        ),
        recipe3: resolve(
          __dirname,
          "src/pages/penne-with-chicken-and-asparagus.html",
        ),
      },
      output: {
        // Make sure the HTML files end up in the root of the dist folder
        entryFileNames: "[name].html",
        // Disable chunking, so no extra JavaScript chunks are generated
        manualChunks: undefined,
      },
    },
  },
  plugins: [
    handlebars({
      partialDirectory: [
        resolve(__dirname, "src/layouts"),
        resolve(__dirname, "src/components"),
      ],
      context: data,
      helpers: {
        makeID: (name) => name.toLowerCase().split(" ").join("-"),
        ifEqual: (v1, v2) =>
          v1 == v2 ? options.fn(this) : options.inverse(this),
        times: function (n, block) {
          let accum = "";
          for (let i = 0; i < n; ++i) {
            accum += block.fn({ index: i });
          }
          return accum;
        },
      },
    }),
  ],
});
