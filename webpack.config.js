const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",  // Your entry point
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, 
        exclude: /node_modules/, 
        use: {
          loader: "babel-loader", 
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],  // For loading styles (CSS)
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"], // Allow importing JSX files without the extension
    alias: {
        react: path.resolve(__dirname, 'node_modules', 'react'),
        'react-dom': path.resolve(__dirname, 'node_modules', 'react-dom'),
        'styled-components': path.resolve(__dirname, 'node_modules', 'styled-components')
    }  
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",  // HTML template file
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, "dist"), // Use "static" instead of "contentBase"
    port: 3000,
    open: true,
    hot: true,  // Enable hot module replacement (HMR) if desired
  },
  mode: "development",  // Set the mode to development for dev server
};
