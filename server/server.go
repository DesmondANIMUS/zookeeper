package main

import (
	"encoding/json"
	"fmt"
	"net/http"
)

type Animal struct {
	Species string `json:"species"`
	Name    string `json:"name"`
}

var animalList []Animal

func main() {
	routes()
	fmt.Println("Server is running on port: 8888")
	http.ListenAndServe(":8888", nil)
}

func routes() {
	http.HandleFunc("/animals", animals)
}

func animals(w http.ResponseWriter, r *http.Request) {
	animalList = []Animal{
		{Species: "ape", Name: "hans"},
		{Species: "cat", Name: "mew"},
		{Species: "rabbit", Name: "bun"},
		{Species: "big cat", Name: "big mew"},
		{Species: "dragon", Name: "fafnir"},
		{Species: "plane", Name: "apache helicopter"},
		{Species: "chocobo", Name: "chickoo"},
	}
	res, _ := json.MarshalIndent(animalList, "", " ")
	fmt.Fprintf(w, string(res))
}
