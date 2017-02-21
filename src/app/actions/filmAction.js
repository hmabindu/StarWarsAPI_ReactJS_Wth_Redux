import axios from 'axios';
import React from "react";
import { fetchCharacters } from "./charactersAction";
import { fetchPlanets } from "./planetsAction";
import { fetchSpecies } from "./speciesAction";
import { fetchVehicles } from "./vehiclesAction";

import * as API from '../constants/api';
import * as types from '../constants/actionTypes';

export function fetchFilm(id) {
    return function(dispatch) {
        axios.get(`https://swapi.co/api/films/${id}/`)
            .then((res) => {//success
                dispatch({
                    type: types.FETCH_FILM,
                    payload: res.data
                });
                dispatch(fetchCharacters(res.data.characters));
                dispatch(fetchPlanets(res.data.planets));
                dispatch(fetchSpecies(res.data.species));
                dispatch(fetchVehicles(res.data.vehicles));
            })
            .catch((err) => {//error
                console.log("fetchFilm Action : film/id/ service failed: ", err);
            });
    }
}