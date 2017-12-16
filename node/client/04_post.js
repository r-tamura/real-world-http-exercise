const http = require('http')
const querystring = require('querystring')

/**
 * x-www-form-urlencodeでフォーム送信
 * httpモジュールのrequestメソッドを利用して、
 * HTTP Postリクエストを送信する
 * 
 * - https://nodejs.org/api/http.html#http_http
 * - https://nodejs.org/api/http.html#http_http_request_options_callback　公式Docs
 */
const request = http.request({
  host: 'localhost',  // Deaults to 'localhost'なので指定しなくてもOK
  path: '/',          // Defaults to '/'なので指定しなくてもOK
  port: 18888,
  method: 'POST',
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
      console.log('\n' + Buffer.concat(body).toString())
    })
})
request.write(querystring.stringify({
  test: "value"
}))

request.end()