const http = require('http')
// const { promisify } = require('util')

/**
 * HEADメソッドの利用
 * httpモジュールのrequestメソッドを利用して、
 * HTTP Head リクエストを送信する
 * 
 * - https://nodejs.org/api/http.html#http_http
 */

// const request = promisify(http.request)
http.request({
  url: 'http://localhost',
  port: 18888,
  method: 'HEAD',
}, res => {
  const body = []
  Object.entries(res.headers)
    .forEach(([name, value]) => 
      console.log(name.replace(/^(.)/, s => s.toUpperCase()) + `: ` + value)
  )
  res
    .on('data', chunk => {
      body.push(chunk)
    })
    .on('end', _ => {
      console.log(Buffer.concat(body).toString())
    })
  
})
  .end()