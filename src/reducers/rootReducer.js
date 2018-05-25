import {combineReducers} from 'redux';
import animalReducer from './animalReducer';
import getAnimalsReducer from './getAnimalsReducer';
import selectAnimalReducer from './selectedAnimalReducer';

const rootReducer = combineReducers({
    animals: animalReducer,
    animalList: getAnimalsReducer,
    selectedAnimal: selectAnimalReducer
})

export default rootReducer;