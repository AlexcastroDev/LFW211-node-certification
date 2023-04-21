'use strict'
const os = require('os')

console.log('Hostname', os.hostname())
console.log('Home dir', os.homedir())
console.log('Temp dir', os.tmpdir())
console.log('OS type', os.type())
console.log('OS platform', os.platform())
console.log('OS release', os.release())
console.log('OS arch', os.arch())
console.log('OS uptime', os.uptime())
console.log('OS loadavg', os.loadavg())
console.log('OS totalmem', os.totalmem())
console.log('OS freemem', os.freemem())
console.log('OS cpus', os.cpus())
console.log('OS networkInterfaces', os.networkInterfaces())
console.log('OS EOL', os.EOL)
console.log('OS constants', os.constants)
console.log('OS endianness', os.endianness())
console.log('OS getPriority', os.getPriority())
// console.log('OS setPriority', os.setPriority())
console.log('OS userInfo', os.userInfo())
