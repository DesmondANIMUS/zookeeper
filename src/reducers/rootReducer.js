import {combineReducers} from 'redux';
import animalReducer from './animalReducer';
import addAnimalReducer from './addAnimalReducer';
import getAnimalsReducer from './getAnimalsReducer';
import selectAnimalReducer from './selectedAnimalReducer';

const rootReducer = combineReducers({
    animals: animalReducer,
    animalList: getAnimalsReducer,
    selectedAnimal: selectAnimalReducer,
    animalAdded: addAnimalReducer
})

export default rootReducer;