import React ,{PropTypes,Component} from "react";
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {fetchFilms} from "../actions/filmsAction";
import {bindActionCreators} from "redux";


class Films extends React.Component {
    componentWillMount() {
        this.props.fetchFilms();

    }
    constructor(props){
        super(props);
    }
    getFilms(){
        return this.props.films || [];
    }
    renderFilms(){
        return this.getFilms().map((film, i) => {
            const len = film.url.length;
            const n = film.url.lastIndexOf('films/');
            const id_str = film.url.substring(n+6, len);
            const id = parseInt(id_str);
            return (
                <ul className="list-group" key={i}>
                    <li className="list-group-item">
                        <Link to={`/films/${id}`}>{film.title}</Link>
                    </li>
                </ul>
            );
        }, this);
    }

    render(){
        return(
            <div className="filmsBg">
                <div className="container-fluid text-center ">
                    <h2 className="margin">Film Titles</h2>
                    <div className="row">
                        <div className="col-xs-10 col-xs-offset-1">
                            <div className="col-sm-4">
                                <br/>
                                {this.renderFilms()}
                            </div>
                            <div className="col-sm-6">
                                <br/>
                                <img src="https://s3.us-east-2.amazonaws.com/starwarscontent/full_MovieList.jpg" className="img-responsive margin swing" style={{display:"inline"}} alt="MoviesList" width="350" height="350"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

Films.propTypes ={
    films:PropTypes.array
};

const mapStateToProps = (state) => {
    return {films: state.starWarFilms.films}
};

function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchFilms }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps )(Films);

