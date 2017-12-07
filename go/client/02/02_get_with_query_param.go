package main

import (
	"io/ioutil"
	"log"
	"net/http"
	"net/url"
)

func main2() {
	values := url.Values{
		"query": {"hello world"},
	}

	resp, err := http.Get("http://localhost:18888" + "?" + values.Encode())

	if err != nil {
		panic(err)
	}

	defer resp.Body.Close()
	body, _ := ioutil.ReadAll(resp.Body)
	log.Println(string(body))
}
