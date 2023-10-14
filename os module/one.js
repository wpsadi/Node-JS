const os = require("os")

let x
x = os.totalmem() // total memory
console.log(x)

x = os.freemem() // free memory
console.log(x)