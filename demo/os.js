const os = require('os')

console.log({ 
  platform: os.platform(), 
  arch: os.arch(),
  cpus: os.cpus(),
  freemem: os.freemem(),
  totalmem: os.totalmem(),
  // homedir: os.homedir(),
  uptime: os.uptime(),
  usInfo: os.userInfo(),
})