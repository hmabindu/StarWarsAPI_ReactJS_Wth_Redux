import React,{Component} from "react";

export class Footer extends React.Component {
    render(){
        return(
            <div className="text-center">
                <footer>
                   <p> Copyright  &copy;2017, API from <a href="https://swapi.co/">StarWars</a></p>
                </footer>
            </div>
        );
    }
}