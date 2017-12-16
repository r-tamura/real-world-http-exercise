package main

import (
	"log"
	"net/http"
	"net/http/cookiejar"
	"net/http/httputil"
)

/*
 * Cookieの送受信を行うクライアント
 * メモリにのみCookieを記録するので、永続化する場合は以下のライブラリが必要
 *  - persistent-cookiejar
 */
func main() {
	jar, err := cookiejar.New(nil)
	if err != nil {
		panic(err)
	}

	client := http.Client{
		Jar: jar,
	}

	for i := 0; i < 2; i++ {
		resp, err := client.Get("http://localhost:18888/cookie")
		if err != nil {
			panic(err)
		}
		dump, err := httputil.DumpResponse(resp, true)

		log.Println(string(dump))
	}
}
