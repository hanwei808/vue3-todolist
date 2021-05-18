// windows(包括 Linux 子系统) 环境下使用 pm2 start pm2-vue3-todos
// Linux 环境下使用 pm2 reload pm2.config.json
const cmd = require('node-cmd')
cmd.run('npm run serve')
