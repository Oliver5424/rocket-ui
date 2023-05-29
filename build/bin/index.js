const infoCollector = require('./infoCollector')
const tplReplacer = require('./new')

async function run() {
  // 收集问题
  const meta = await infoCollector()
  // 创建组件模板
  tplReplacer(meta)
  // 创建文档模板
  require('./build-docs')
  // 注册组件
  require('./build-entry')
}

run()
