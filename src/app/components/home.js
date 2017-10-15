import React, { Component } from 'react';

export class Home extends Component {
    render(){
        let divStyle = {
            display:"inline"
        };
        return(
            <div>
                <div className="container-fluid bg-1 text-center">
                    <h3 className="margin">StarWars?</h3>
                    <p>Star Wars is an American Epic space opera franchise, centered on a film series.
                        It depicts the adventures of various characters "a long time ago in a galaxy far, far away." </p>
                </div>


                <div className="container-fluid bg-2 text-center">
                    <h3 className="margin">Films?</h3>
                    <img src="https://s3.us-east-2.amazonaws.com/starwarscontent/full_MovieList.jpg" className="img-responsive img-circle margin grow" style={divStyle} alt="MoviesList" width="350" height="350"/>
                    <h3>7 StarWar Movies</h3>
                </div>
                <div className="container-fluid bg-3 text-center">
                    <h3 className="margin">StarShips?</h3><br/>
                    <div className="row">
                        <div className="col-sm-4">
                            <p>The Azure Angel II was a modified Jedi Delta-7 Aethersprite-class light interceptor piloted by Anakin Skywalker during the Clone Wars.</p>
                            <img src="https://s3.us-east-2.amazonaws.com/starwarscontent/Azure_Angel.jpg" className="img-responsive margin" style={{width:100+'%'}} alt="Image"/>
                        </div>
                        <div className="col-sm-4">
                            <p>The Corellian Corvette Tantive IV, sometimes identified as a blockade runner, is the first ship to appear in Star Wars. Darth Vader (David Prowse) and his stormtroopers capture the ship and its crew.</p>
                            <img src="https://s3.us-east-2.amazonaws.com/starwarscontent/Corellian.jpg" className="img-responsive margin" style={{width:100+'%'}} alt="Image"/>
                        </div>
                        <div className="col-sm-4">
                            <p>A modified Corellian HWK-290 used by Kyle Katarn and Jan Ors in the Star Wars: Dark Forces and Star Wars: Dark Forces II: Jedi Knight video games.</p>
                            <img src="https://s3.us-east-2.amazonaws.com/starwarscontent/HWK290-XWMG.png" className="img-responsive margin" style={{width:100+'%'}} alt="Image"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}