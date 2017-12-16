package main

import (
	"bytes"
	"io"
	"log"
	"mime/multipart"
	"net/http"
	"os"
)

func main() {
	var buffer bytes.Buffer
	writer := multipart.NewWriter(&buffer)
	writer.WriteField("name", "Michael Jackson")

	filewriter, err := writer.CreateFormFile("thumbnail", "main.go")
	if err != nil {
		panic(err)
	}
	readFile, err := os.Open("/root/go/client/06/main.go")

	io.Copy(filewriter, readFile)
	writer.Close()

	resp, err := http.Post(
		"http://localhost:18888",
		writer.FormDataContentType(), &buffer)

	if err != nil {
		panic(err)
	}

	log.Println(resp.Status)
}
