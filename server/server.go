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

func init() {
	animalList = []Animal{
		{Species: "ape", Name: "hans"},
		{Species: "cat", Name: "mew"},
		{Species: "rabbit", Name: "bun"},
		{Species: "big cat", Name: "big mew"},
		{Species: "dragon", Name: "fafnir"},
		{Species: "plane", Name: "apache helicopter"},
		{Species: "chocobo", Name: "chickoo"},
	}
}

func main() {
	routes()
	fmt.Println("Server is running on port: 8888")
	http.ListenAndServe(":8888", nil)
}

func routes() {
	http.HandleFunc("/getAnimals", getAnimals)
	http.HandleFunc("/addAnimal", addAnimal)
}

func getAnimals(w http.ResponseWriter, r *http.Request) {
	res, _ := json.MarshalIndent(animalList, "", " ")
	fmt.Fprintf(w, string(res))
}

func addAnimal(w http.ResponseWriter, r *http.Request) {
	if r.Method == http.MethodPost {
		var animal Animal
		animal.Species = r.FormValue("species")
		animal.Name = r.FormValue("aname")

		if animal.Species == "" || animal.Name == "" {
			http.Error(w, "Need some payload", http.StatusNoContent)
			return
		}

		animalList = append(animalList, animal)
		res, _ := json.MarshalIndent(animalList, "", " ")
		fmt.Fprintf(w, string(res))
	}
}
