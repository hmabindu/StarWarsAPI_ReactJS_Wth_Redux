import React,{Component} from "react";
import {Link} from 'react-router';

export class Header extends React.Component {

    render(){
        return(
            <div>
                <nav className="navbar navbar-default">
                    <div>
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand">StarWars</a>
                        </div>
                        <div className="collapse navbar-collapse" id="myNavbar">
                            <ul className="nav navbar-nav navbar-right">
                                <li><Link to={""}>Home</Link></li>
                                <li><Link to={"/films"}>Films</Link></li>
                                <li><Link to={"/starships"}>StarShips</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }

}