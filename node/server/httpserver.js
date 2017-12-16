const http = require('http')
const url = require('url')

/*
 * @param {http.IncomingRequest} req
 */
function loggingRequest(req) {
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
}

function defaultHandler(req, res) {
  res.writeHead(200)
  res.write("<html><body><h1>I'm HTTP Server with NodeJS!</h1>")
}

function cookieHandler (req, res) {
  res.writeHead(200, {
    'Set-Cookie': 'sample=abcdnode; HttpOnly'
  })
  res.write("<html><body><h1>I'm HTTP Server with NodeJS(cookie)!</h1>")
}

http.createServer((req, res) => {
  
  loggingRequest(req)

  const parsed = url.parse(req.url)
  switch(parsed.pathname) {
  case '/cookie': 
    cookieHandler(req, res)
    break;
  default: defaultHandler(req, res)
  }

  if (!res.finished) {
    res.end()
  }
})
.listen(18888)

console.log("linsten on port 18888")