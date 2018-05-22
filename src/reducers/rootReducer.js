import {combineReducers} from 'redux';
import birbReducer from './birbReducer';
import animalReducer from './animalReducer';
import selectAnimalReducer from './selectedAnimalReducer';

const rootReducer = combineReducers({
    animals: animalReducer,
    selectedAnimal: selectAnimalReducer
})

export default rootReducer;