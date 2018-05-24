package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"
	"time"

	"github.com/DesmondANIMUS/ckho/ckhopackages/ckhomodel"
	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
)

type Animal struct {
	Species string `json:"species"`
	Name    string `json:"name"`
}

var animalList []Animal

func init() {
	animalList = []Animal{
		{Species: "ape", Name: "hans2"},
		{Species: "cat", Name: "mew2"},
		{Species: "rabbit", Name: "bun2"},
		{Species: "big cat", Name: "big mew2"},
		{Species: "dragon", Name: "fafnir2"},
		{Species: "plane", Name: "apache helicopter2"},
		{Species: "chocobo", Name: "chickoo2"},
	}
}

func main() {
	r := mux.NewRouter()
	routes(r)
	srv := configServer(r)
	startServer(srv)
}

func configServer(r http.Handler) *http.Server {
	srv := &http.Server{
		Handler:      handlers.CORS()(r),
		Addr:         ckhomodel.Port,
		WriteTimeout: 20 * time.Second,
		ReadTimeout:  20 * time.Second,
	}

	return srv
}

func startServer(srv *http.Server) {
	f, err := os.OpenFile("./log.log", os.O_RDWR|os.O_CREATE|os.O_APPEND, 0666)
	if err != nil {
		panic(err)
	}
	defer f.Close()
	log.SetOutput(f)

	fmt.Println("Server is running at port", ckhomodel.Port)
	log.Println("Server is running at port", ckhomodel.Port)
	srv.ListenAndServe()
}

func routes(r *mux.Router) {
	r.HandleFunc("/getAnimals", getAnimals)
	r.HandleFunc("/addAnimal", addAnimal)
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
