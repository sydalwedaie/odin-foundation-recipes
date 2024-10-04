import { resolve } from "path";
import { data } from "./src/data/index.js";
import handlebars from "vite-plugin-handlebars";

export default {
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
};
