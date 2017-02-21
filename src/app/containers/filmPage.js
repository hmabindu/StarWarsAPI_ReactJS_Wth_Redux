import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {withRouter,Link} from 'react-router';
import {fetchFilm} from '../actions/filmAction';

class FilmPage extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const {id, characters , planets, species, vehicles} = this.props;
        this.props.dispatch(fetchFilm(id));
    }

    componentWillUnmount() {
        this.props.dispatch({type: 'RESET_STATE'});
    }

    renderCharacters(){
        return this.props.characters.map((character, i) => {
            return (
                <ul key={i}>
                    <li>
                        {character.name}
                    </li>
                </ul>
            );
        }, this);
    }

    renderPlanets(){
        return this.props.planets.map((planet, i) => {
            return (
                <ul key={i}>
                    <li>
                        {planet.name}
                    </li>
                </ul>
            );
        }, this);
    }

    renderSpecies(){
        return this.props.species.map((specie, i) => {
            return (
                <ul key={i}>
                    <li>
                        {specie.name}
                    </li>
                </ul>
            );
        }, this);
    }
    renderVehicles(){
        return this.props.vehicles.map((vehicle, i) => {
            return (
                <ul key={i}>
                    <li>
                        {vehicle.name}
                    </li>
                </ul>
            );
        }, this);
    }

    render() {
        const { title } = this.props.film;
        return (
            <div className="container-fluid filmPage fade">
                {/*<h4><Link to={"/films"}>Back</Link></h4>*/}
                <br/>
                <div>

                    <div className="row">
                        <div className="col-sm-12 text-center">
                            <h2>Star Wars: {title}</h2>
                            <br/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <h4>Characters List</h4>
                            {this.renderCharacters()}
                        </div>
                        <div className="col-sm-3">
                            <h4>Planets List</h4>
                            {this.renderPlanets()}
                        </div>
                        <div className="col-sm-3">
                            <h4>Species List</h4>
                            {this.renderSpecies()}
                        </div>
                        <div className="col-sm-3">
                            <h4>Vehicles List </h4>
                            {this.renderVehicles()}
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

FilmPage.propTypes = {
    id: PropTypes.string,
    characters: PropTypes.array,
    planets: PropTypes.array,
    species: PropTypes.array,
    vehicles: PropTypes.array,
    dispatch: PropTypes.func
};


const mapStateToProps = (state, ownProps) => ({
    film: state.starWarFilm.film,
    characters : state.starWarCharacters.characters,
    planets : state.starWarPlanets.planets,
    species : state.starWarSpecies.species,
    vehicles:state.starWarVehicles.vehicles,
    id: ownProps.params.id
});

export default withRouter(connect(
    mapStateToProps
)(FilmPage));
