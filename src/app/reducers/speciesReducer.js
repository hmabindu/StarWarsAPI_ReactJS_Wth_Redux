import {RECEIVE_SPECIES, RESET_SPECIES} from '../constants/actionTypes';

const INITIAL_STATE = {species: []};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case RECEIVE_SPECIES:
            return {
                ...state,
                species: [
                    ...state.species, action.payload
                ]
            };
        case RESET_SPECIES:
            return {
                ...state,
                species: []
            };
        default:
            return state;
    }
}


