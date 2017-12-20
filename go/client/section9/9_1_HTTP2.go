package main

import (
	"fmt"
	"net/http"
)

/*
 * HTTP/2 クライアント
 * Go 1.6 から標準でHTTP/2に対応
 */
func main() {
	resp, err := http.Get("https://google.com/")
	if err != nil {
		panic(err)
	}
	defer resp.Body.Close()
	fmt.Printf("Protocol Version: %s\n", resp.Proto)
}
