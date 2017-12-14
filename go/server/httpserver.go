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
	fmt.Fprintf(w, "<html><body>Hello, World!\n")
}

func cookieHandler(w http.ResponseWriter, r *http.Request) {
	dump, err := httputil.DumpRequest(r, true)
	if err != nil {
		http.Error(w, fmt.Sprint(err), http.StatusInternalServerError)
		return
	}
	fmt.Println(string(dump))
	http.SetCookie(w, &http.Cookie{
		Name:  "go-cookie",
		Value: "abcdefg",
	})

	fmt.Fprintf(w, "<html><body>Hello, World!\n")
}

func main() {
	var httpServer http.Server
	http.HandleFunc("/", handler)
	http.HandleFunc("/cookie", cookieHandler)
	log.Println("start http listening :18888")
	httpServer.Addr = "127.0.0.1:18888"
	log.Println(httpServer.ListenAndServe())
}
