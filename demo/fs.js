// File system
const fs = require('fs')
const path = require('path')

fs.mkdir(path.join(__dirname, 'test'), (err) => {
  if(err) {
    console.log(err.message)
    return
  }

  console.log('Created dir')
})

const filePath = path.join(__dirname, 'test', 'text.txt')
fs.writeFileSync(filePath, 'This test\text.txt', (err) => {
  if(err) {
    console.log(err.message)
    return
  }

  console.log('Created file')
})
fs.appendFile(filePath, '\nThis new row', (err) => {
  if(err) {
    console.log(err.message)
    return
  }

  console.log('Append row')
})
fs.readFile(filePath, 'utf-8', (err, content) => {
  if(err) {
    throw err
  }

  // console.log({ content: Buffer.from(content).toString() })
  console.log({ content })
})