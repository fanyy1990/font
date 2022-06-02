module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: "> 0.25%, not dead",
      },
    ],
    "@babel/preset-react",
  ],
  plugins: [
    [
      "@babel/plugin-proposal-decorators",
      {
        legacy: true,
      },
    ],
    [
      "import",
      {
        libraryName: "antd",
        style: "css", // or 'css'
      },
    ],
  ],
};
