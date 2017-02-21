import axios from 'axios';
import React from "react";

import * as types from '../constants/actionTypes';
import UrlHelper from '../helpers/urlHelper';

function resetVehicles() {
    return {
        type: types.RESET_VEHICLES,
        payload: true
    };
}



function receiveVehicles(data) {
    return {
        type: types.RECEIVE_VEHICLES,
        payload: data
    };
}

export function fetchVehicles(urls) {

    return function (dispatch) {
        dispatch(resetVehicles());
        urls.forEach((url) => {
            const httpsUrl = UrlHelper.convertUrlToHttps(url);
            axios.get(httpsUrl)
                .then(res => {
                    dispatch(receiveVehicles(res.data));
                })
                .catch((err) => {//error
                    console.log("fetchVehicles Action :  ", err);
                });
        });
    }
}
