const fs = require('fs')
const request = require('request')

/*
 * @param {http.IncomingRequest} req
 */
function loggingResponse(res) {
  const body = []
  res
  .on('data', chunk => {
    body.push(chunk)
  })
  .on('end', () => {
    console.log('HTTP/' + res.httpVersion);
    for (const [name, value] of Object.entries(res.headers)) {
      console.log(
        name.charAt(0).toUpperCase() + 
        name.slice(1) + 
        ': ' + value
      )
    }
    console.log('')
    console.log(body.join('\n'))
  })
}

/**
 * cookieの送受信
 * シンプルなHTTPリクエストクライアントライブラリ request を利用
 * 
 */
const jar = request.jar()

request
  .get({ url:'http://localhost:18888/cookie', jar })
  .on('response', res => {
    loggingResponse(res)
    request.get({ url:'http://localhost:18888/cookie', jar })
  })
