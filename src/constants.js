export const ACTION_TYPES = {
    ANIMAL_CLICKED: "ANIMAL_CLICKED",
    ANIMAL_HOVERED: "ANIMAL_HOVERED",
    GET_ANIMALS: "GET_ANIMALS",
    ADD_ANIMAL: "ADD_ANIMAL"
};

const BASE_URL = "http://localhost:8080";

export const URL = {
    GET_ANIMAL_LIST: BASE_URL + "/getAnimals",
    ADD_ANIMAL: BASE_URL + "/addAnimal"
}

export const CONFIG = {
    headers: {                              
        'Content-Type': 'application/x-www-form-urlencoded'
    }  
};