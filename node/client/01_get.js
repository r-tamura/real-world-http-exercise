const http = require('http')

http.get({
  hostname: 'localhost',
  port: 18888,
  path: '/',
  agent: false  // create a new agent just for this one request
}, res => {
  const contents = []
  res.on('data', chunk => {
    contents.push(chunk)
  }).on('end', () => {
    console.log(contents.join('\n'))
  })
})