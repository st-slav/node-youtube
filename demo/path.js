const path = require('path')

console.log({ 
  fileName: path.basename(__filename), 
  dirName: path.dirname(__filename),
  extName: path.extname(__filename),
  parse: path.parse(__filename),
  join: path.join(__filename, 'server', 'index.html')
})