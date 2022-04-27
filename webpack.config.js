const path = require("path")
//const gPlugin = require("./gPlugin")

module.exports = {
    mode: "development",
    entry: {
        main: "./src/index.ts"
    },
    output: {
        filename: "[name].js",
        path: path.resolve("./dist")
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                        },
                    },
                    { loader: "sass-loader" },
                ],
            },
        ],
    }
}