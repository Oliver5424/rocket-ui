var Components = require('../../components.json');
var fs = require('fs');
var render = require('json-templater/string');
var uppercamelcase = require('uppercamelcase');
var path = require('path');
var endOfLine = require('os').EOL;

var OUTPUT_PATH_ENHANCEAPP = path.join(__dirname, '../../docs/.vuepress/enhanceApp.js');
var OUTPUT_PATH_COMPONENTS = path.join(__dirname, '../../docs/.vuepress/components.js');
var IMPORT_TEMPLATE = 'import {{name}} from \'@root/packages/{{package}}/src/main.vue\';';
// var IMPORT_PLUGIN = 'import {{name}} from \'@root/packages/{{package}}/src/main.js\';';
var INSTALL_COMPONENT_TEMPLATE = '  {{name}}';
// var INSTALL_PLUGIN_TEMPLATE = '  {{name}}';
var COMPONENTLINK_TEMPLATE = `module.exports.links = [
{{links}}
]`;
var MAIN_TEMPLATE = `/* Automatically generated by './build/bin/build-docs.js' */

{{componentInclude}}
{{pluginInclude}}

const components = [
{{componentInstall}}
];

export default({
  Vue
})=>{
  components.forEach(item=>{
    Vue.component(item.name, item);
  })
}`;

delete Components.font;

var ComponentNames = Object.keys(Components);

var includeComponentTemplate = [];
var includePluginTemplate = [];
var installTemplate = [];
var installPluginTemplate = [];
var linkComponentTemplate = [];

// 循环组件docs注册
ComponentNames.forEach(name => {
  var componentName = uppercamelcase(name);

  // components.js 引入新组件
  linkComponentTemplate.push(`  ['/components/${name}','${componentName} ${Components[name].name}']`)

  if (['MessageBox'].indexOf(componentName) === -1) {
    includeComponentTemplate.push(render(IMPORT_TEMPLATE, {
      name: componentName,
      package: name
    }));
    installTemplate.push(render(INSTALL_COMPONENT_TEMPLATE, {
      name: componentName
    }));
  }
});

var template = render(MAIN_TEMPLATE, {
  componentInclude: includeComponentTemplate.join(endOfLine),
  componentInstall: installTemplate.join(',' + endOfLine),
  pluginInclude: includePluginTemplate.join(endOfLine),
  pluginInstall: installPluginTemplate.join(',' + endOfLine)
});

var template_links = render(COMPONENTLINK_TEMPLATE,{
  links: linkComponentTemplate.join(',' + endOfLine)
})

fs.writeFileSync(OUTPUT_PATH_ENHANCEAPP, template);
fs.writeFileSync(OUTPUT_PATH_COMPONENTS, template_links);
console.log('🚗🚗🚗组件注册完成');
console.log('🚗🚗🚗vuepress配置更新完成');