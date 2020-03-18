/* egg_folder/config/plugin.js */
'use strict';

/** @type Egg.EggPlugin */
// ysun for adding swagger.
// module.exports = {
//   // had enabled by egg
//   // static: {
//   //   enable: true,
//   // }
// };

exports.static = true;

// 配置 egg-swagger-doc 插件信息。
exports.swaggerdoc = {
    enable: true,   // 是否启用。
    package: 'egg-swagger-doc', // 指定包名称。
};
