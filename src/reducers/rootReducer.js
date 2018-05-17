import {combineReducers} from 'redux';
import birbReducer from './birbReducer';
import animalReducer from './animalReducer';
import selectAnimalReducer from './selectedAnimalReducer';

const rootReducer = combineReducers({
    animals: animalReducer,
    birbs: birbReducer,
    selectedAnimal: selectAnimalReducer
})

export default rootReducer;