import {ADD_PLAYER} from "../constants/ActionTypes";

const initialState = [
    {
        id: 1,
        name: 'Artyom',
        score: 0
    },
    {
        id: 2,
        name: 'Yarik',
        score: 0
    },
    {
        id: 3,
        name: 'Alexander',
        score: 0
    },
    {
        id: 4,
        name: 'Marat',
        score: 0
    },
];

export default function players(state = initialState, action) {
    switch (action.type) {
        case ADD_PLAYER:
            return [
                ...state,
                {
                    id: state.reduce((maxId, player) => Math.max(player.id, maxId), -1) + 1,
                    name: action.name,
                    score: 0
                }
            ]
        default:
            return state
    }
}
