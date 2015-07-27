module.exports = {
    target: 'web',

    entry: {
        javascript: ["./client/app.jsx"],
        html: "./index.html"
    },

    output: {
        path: "./output",
        filename: "app.js"
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ["babel?optional[]=runtime&stage=0&sourceMaps=both"],
            },{
                test: /\.html$/,
                loader: "file?name=[name].[ext]",
            }
        ]
    }

}
