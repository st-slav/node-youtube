const chalk = require('chalk')
const data = require('./data')
const http = require('http')
const fs = require('fs')
const path = require('path')

// console.log(chalk.blue(data))
// console.log({
//   exports,
//   require,
//   module,
//   __dirname,
//   __filename
// })

const server = http.createServer((req, res) => {
  const { url } = req
  let filePath = path.join(__dirname, 'public', url === '/' ? 'index.html' : url)
  const ext = path.extname(filePath)
  let contentType = 'text/html'

  switch(ext) {
    case '.css':
      contentType = 'text/css'
      break
    case '.js':
      contentType = 'text/javascript'
      break
    default:
      contentType = 'text/html'
  }

  if(!ext) {
    filePath += '.html'
  }

  fs.readFile(filePath, (err, content) => {
    if(err) {
      fs.readFile(path.join(__dirname, 'public', 'error.html'), (err, data) => {
        if(err) {
          res.writeHead(500)
          res.end('Error')
        }
        res.writeHead(200, {
          'Content-type': 'text/html'
        })
        res.end(data)
      })
    } else {
      res.writeHead(200, {
        'Content-type': contentType
      })
      res.end(content)
    }
  })
})

const PORT = process.env.PORT || 3011

server.listen(PORT, () => {
  console.log(`Server has been started on ${PORT}`)
})