import axios from 'axios';
import React from "react";
import * as types from '../constants/actionTypes';
import * as API from '../constants/api';


export function fetchStarShips() {
    return function(dispatch) {
        axios.get(API.STARSHIPS)
            .then((res) => {//success
                dispatch({
                    type: types.FETCH_STARSHIPS,
                    payload: res
                });
            })
            .catch((err) => {//error
                console.log("fetchStarShips Action : starships service failed: ", err);
            });
    }
}
