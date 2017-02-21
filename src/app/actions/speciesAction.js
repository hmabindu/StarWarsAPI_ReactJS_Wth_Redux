import axios from 'axios';
import React from "react";

import * as types from '../constants/actionTypes';
import UrlHelper from '../helpers/urlHelper';

function resetSpecies() {
    return {
        type: types.RESET_SPECIES,
        payload: true
    };
}



function receiveSpecies(data) {
    return {
        type: types.RECEIVE_SPECIES,
        payload: data
    };
}

export function fetchSpecies(urls) {

    return function (dispatch) {
        dispatch(resetSpecies());
        urls.forEach((url) => {
            const httpsUrl = UrlHelper.convertUrlToHttps(url);
            axios.get(httpsUrl)
                .then(res => {
                    dispatch(receiveSpecies(res.data));
                })
                .catch((err) => {//error
                    console.log("fetchSpecies Action :  ", err);
                });
        });
    }
}
