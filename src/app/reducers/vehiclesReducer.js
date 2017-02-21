import {RECEIVE_VEHICLES, RESET_VEHICLES} from '../constants/actionTypes';

const INITIAL_STATE = {vehicles: []};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case RECEIVE_VEHICLES:
            return {
                ...state,
                vehicles: [
                    ...state.vehicles, action.payload
                ]
            };

        case RESET_VEHICLES:
            return {
                ...state,
                vehicles: []
            };
        default:
            return state;
    }
}


