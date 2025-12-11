/** @type {import('@svgr/core').Config} */
module.exports = {
  typescript: true,
  icon: false, // icon: true는 viewBox를 제거하므로 false로 변경
  jsxRuntime: "automatic",
  expandProps: "end",
  prettier: true,
  svgo: true,
  svgoConfig: {
    plugins: [
      {
        name: "removeViewBox",
        active: false,
      },
    ],
  },
  replaceAttrValues: {
    "#222530": "currentColor",
  },
};
