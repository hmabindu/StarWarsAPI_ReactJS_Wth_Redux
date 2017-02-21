import {combineReducers} from 'redux';
import FilmsReducer from './filmsReducer';
import FilmReducer from './filmReducer';
import StarShipReducer from './starShipsReducer';
import CharacterReducer from './characterReducer';
import PlanetsReducer from './planetsReducer';
import SpeciesReducer from './speciesReducer';
import VehiclesReducer from './vehiclesReducer';

const appReducer = combineReducers({
    starWarFilms: FilmsReducer,
    starWarFilm: FilmReducer,
    starWarCharacters: CharacterReducer,
    starWarPlanets: PlanetsReducer,
    starWarSpecies: SpeciesReducer,
    starWarVehicles:VehiclesReducer,
    starWarStarShips:StarShipReducer
});

const rootReducer =(state,action)=>{
    if(action.type==='RESET_STATE'){
        state={
            starWarFilms:state.starWarFilms
        };
    }
    return appReducer(state,action);
};


export default rootReducer;
