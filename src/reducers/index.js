import 'bootstrap/dist/css/bootstrap.min.css';
import {combineReducers} from 'redux'
import players from "./players";

const rootReducer = combineReducers({
    players,
});

export default rootReducer
