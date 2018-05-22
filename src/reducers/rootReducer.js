import {combineReducers} from 'redux';
import animalReducer from './animalReducer';
import selectAnimalReducer from './selectedAnimalReducer';

const rootReducer = combineReducers({
    animals: animalReducer,
    selectedAnimal: selectAnimalReducer
})

export default rootReducer;