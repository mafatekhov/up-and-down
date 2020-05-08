import {ADD_PLAYER, DELETE_PLAYER} from "../constants/ActionTypes";

let nextPlayerId = 0;

export const addPlayer = name => ({
    type: ADD_PLAYER,
    id: nextPlayerId++,
    name
});

export const removePlayer = id => ({
    type: DELETE_PLAYER,
    id,
});
