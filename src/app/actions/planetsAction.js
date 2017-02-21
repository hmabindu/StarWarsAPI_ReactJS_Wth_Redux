import axios from 'axios';
import React from "react";

import * as types from '../constants/actionTypes';
import UrlHelper from '../helpers/urlHelper';

function resetPlanets() {
    return {
        type: types.RESET_PLANETS,
        payload: true
    };
}



function receivePlanets(data) {
    return {
        type: types.RECEIVE_PLANETS,
        payload: data
    };
}

export function fetchPlanets(urls) {

    return function (dispatch) {
        dispatch(resetPlanets());
        urls.forEach((url) => {
            const httpsUrl = UrlHelper.convertUrlToHttps(url);
            axios.get(httpsUrl)
                .then(res => {
                    dispatch(receivePlanets(res.data));
                })
                .catch((err) => {//error
                    console.log("fetchPlanets Action :  ", err);
                });
        });
    }
}
