package main

import (
	"log"
	"net/http"

	"github.com/elazarl/goproxy"
)

/*
 * Proxy server with "goproxy"
 *
 * go get github.com/elazarl/goproxy
 */
func main() {
	proxy := goproxy.NewProxyHttpServer()
	proxy.Verbose = true

	log.Println("start proxy listening :8080")
	log.Fatal(http.ListenAndServe(":8080", proxy))
}
