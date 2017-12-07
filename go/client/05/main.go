package main

import (
	"log"
	"net/http"
	"os"
)

/*
	POSTメソッドで任意のボディを送信
	curl -T main.go -H "Content-Type: text/plain" http://localhost:18888
*/
func main() {
	file, _ := os.Open("main.go")
	resp, _ := http.Post("http://localhost:18888", "text/plain", file)
	log.Println("Status: ", resp.Status)
}
