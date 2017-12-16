const fs = require('fs')
const request = require('request')

/**
 * multipart/form-dataでフォーム送信
 * シンプルなHTTPリクエストクライアントライブラリ request を利用
 * https://github.com/request/request#forms
 * (NodeJSのビルトインモジュールではmultipart/form-data用のものがないため)
 * 
 */
const formData = {
  test: "value",
  file: fs.createReadStream(__dirname + '/README.md'),
}

request
  .post({ url:'http://localhost:18888', formData })
  .pipe(process.stdout)
