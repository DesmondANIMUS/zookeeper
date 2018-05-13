import {combineReducers} from 'redux';
import birbReducer from './birbReducer';
import animalReducer from './animalReducer';

const rootReducer = combineReducers({
    animals: animalReducer,
    birbs: birbReducer
})

export default rootReducer;