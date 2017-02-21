import axios from 'axios';
import React from "react";
import * as types from '../constants/actionTypes';
import * as API from '../constants/api';


export function fetchFilms() {
    return function(dispatch) {
        axios.get(API.FILMS)
            .then((res) => {//success
                dispatch({
                    type: types.FETCH_FILMS,
                    payload: res
                });
            })
            .catch((err) => {//error
                console.log("fetchFilms Action : films service failed: ", err);
            });
    }
}

