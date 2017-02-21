import axios from 'axios';
import React from "react";

import * as types from '../constants/actionTypes';
import UrlHelper from '../helpers/urlHelper';

function resetCharacters() {
    return {
        type: types.RESET_CHARACTERS,
        payload: true
    };
}



function receiveCharacters(data) {
    return {
        type: types.RECEIVE_CHARACTER,
        payload: data
    };
}

export function fetchCharacters(urls) {

    return function (dispatch) {
        dispatch(resetCharacters());
        urls.forEach((url) => {
            const httpsUrl = UrlHelper.convertUrlToHttps(url);
            axios.get(httpsUrl)
                .then(res => {
                    dispatch(receiveCharacters(res.data));
                })
                .catch((err) => {//error
                    console.log("fetchCharacters Action :  ", err);
                });
        });
    }
}
