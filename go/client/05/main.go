package main

import (
	"log"
	"net/http"
	"os"
	"path/filepath"
)

/*
	POSTメソッドで任意のボディを送信
	curl -T main.go -H "Content-Type: text/plain" http://localhost:18888
*/
func main() {
	path, err := filepath.Abs("/root/go/client/05/main.go")
	if err != nil {
		panic(err)
	}
	file, err := os.Open(path)
	if err != nil {
		panic(err)
	}

	resp, _ := http.Post("http://localhost:18888", "text/plain", file)
	log.Println("Status: ", resp.Status)
}
