const http = require('http')

http.createServer((req, res) => {

  const body = []
  req
    .on('data', chunk => {
      body.push(chunk)
    })
    .on('end', () => {
      // console.log(req.)
      console.log(req.method + ' ' + req.url + ' HTTP/' + req.httpVersion);
      
      for (prop in req.headers) {
        console.log(
          prop.charAt(0).toUpperCase() + 
          prop.slice(1) + 
          ': ' + req.headers[prop]
        );
      }
      console.log(body.join('\n'))

      console.log('');
    })

  res.writeHead(200)
  res.write("<html><body><h1>Hello, world!</h1>")
  res.end()
})
.listen(18888)

console.log("linsten on port 18888")