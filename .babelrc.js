module.exports = {
  plugins: [
    ["@babel/plugin-proposal-class-properties", { loose: true }],
    "react-hot-loader/babel"
  ],
  presets: [
    [
      "@babel/preset-env",
      {
        targets:
          process.env.NODE_ENV === "test"
            ? { node: "current" }
            : { browsers: "last 2 versions" }
      }
    ],
    "@babel/preset-typescript",
    "@babel/preset-react"
  ]
};
