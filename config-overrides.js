const {override,addWebpackResolve} = require("customize-cra");


module.exports =  override(
  //do stuff with the webpack config...
//   config = injectBabelPlugin(
//     ["import", { libraryName: "antd", style: true }],
//     config
//   );
addWebpackResolve({
    extensions: ['.js', 'jsx','ts','tsx','.json', '.wasm'],
  })
)