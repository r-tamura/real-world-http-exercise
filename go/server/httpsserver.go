package main

import (
	"fmt"
	"log"
	"net/http"
	"net/http/httputil"
)

func handler(w http.ResponseWriter, r *http.Request) {
	dump, err := httputil.DumpRequest(r, true)
	if err != nil {
		http.Error(w, fmt.Sprint(err), http.StatusInternalServerError)
		return
	}
	fmt.Println(string(dump))
	fmt.Fprintf(w, "<html><body><h1>I'm HTTP Server with Go Lang!</h1>\n")
}

func main() {
	var httpServer http.Server
	http.HandleFunc("/", handler)
	httpServer.Addr = "127.0.0.1:18433"
	log.Println("start http listening :18433")
	err := http.ListenAndServeTLS(":18433", "/root/go/server/server.crt", "/root/go/server/server.key", nil)
	log.Println(err)
}
