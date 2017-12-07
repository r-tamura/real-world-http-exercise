package main

import (
	"log"
	"net/http"
)

/**
 * HEADメソッドの利用
 */
func main() {
	resp, err := http.Head("http://localhost:18888")
	if err != nil {
		panic(nil)
	}

	log.Println("Status: ", resp.Status)
	log.Println("Header: ", resp.Header)
}
