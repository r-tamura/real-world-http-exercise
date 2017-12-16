const http = require('http')

http.createServer((req, res) => {

  const body = []
  req
    .on('data', chunk => {
      body.push(chunk)
    })
    .on('end', () => {
      console.log(req.method + ' ' + req.url + ' HTTP/' + req.httpVersion);
      for (const [name, value] of Object.entries(req.headers)) {
        console.log(
          name.charAt(0).toUpperCase() + 
          name.slice(1) + 
          ': ' + value
        );
      }
      console.log(body.join('\n'))

      console.log('');
    })

  res.writeHead(200)
  res.write("<html><body><h1>I'm HTTP Server with NodeJS!</h1>")
  res.end()
})
.listen(18888)

console.log("linsten on port 18888")