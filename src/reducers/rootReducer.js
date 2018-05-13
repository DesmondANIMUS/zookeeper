import {combineReducers} from 'redux';
import animalReducer from './animalReducer';

const rootReducer = combineReducers({
    animals: animalReducer
})

export default rootReducer;