import React ,{Component,PropTypes} from "react";
import {connect} from 'react-redux';
import {fetchStarShips} from "../actions/starShipAction";
import {bindActionCreators} from "redux";
import {Carousel, CarouselItem} from "react-bootstrap";


class StarShips extends React.Component {
    componentWillMount() {
        this.props.showStarShips();

    }
    constructor(props){
        super(props);
    }
    getStarShips(){
        return this.props.starShips || [];
    }
    renderStarShips(){
        return this.getStarShips().map((starShip, i) => {
            return (
                <div key={i}>
                    <div style={{color:"black;"}}>{starShip.name}</div>
                </div>
            );
        });
    }
    render(){
        return(
            <div className="container-fluid bg-starships">
                <div>
                    <div className="col-sm-10 col-sm-offset-1">
                        <div className="row">
                            <div className="col-sm-4">
                                <h3 className="margin">StarShips</h3>
                                {this.renderStarShips()}
                            </div>
                            <div className="col-sm-6">
                                <br/>
                                <br/>
                                <br/>
                                <Carousel>
                                    <Carousel.Item>
                                        <img width={500} height={300} alt="900x500" src="https://s3.amazonaws.com/aws-logs-223602368946-us-east-1/images/img5.jpeg"/>
                                        <Carousel.Caption>
                                            <h3>Y-WING</h3>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img width={500} height={300} alt="900x500" src="https://s3.amazonaws.com/aws-logs-223602368946-us-east-1/images/img4.jpg"/>
                                        <Carousel.Caption>
                                            <h3>MILLENNIUM FALCON</h3>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img width={500} height={300} alt="900x500" src="https://s3.amazonaws.com/aws-logs-223602368946-us-east-1/images/img2.jpg"/>
                                        <Carousel.Caption>
                                            <h3>EXECUTOR</h3>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <CarouselItem>
                                        <img src="https://s3.amazonaws.com/aws-logs-223602368946-us-east-1/images/img3.jpg"/>
                                        <Carousel.Caption>
                                            <h3>X-WING</h3>
                                        </Carousel.Caption>
                                    </CarouselItem>
                                    <CarouselItem>
                                        <img src="https://s3.amazonaws.com/aws-logs-223602368946-us-east-1/images/img1.jpg"/>
                                        <Carousel.Caption>
                                            <h3>IMPERIAL SHUTTLE</h3>
                                        </Carousel.Caption>
                                    </CarouselItem>
                                </Carousel>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

StarShips.propTypes ={
    starShips:PropTypes.array
};

const mapStateToProps = (state) => {
    return {starShips: state.starWarStarShips.starShips}
};

function mapDispatchToProps(dispatch){
    return bindActionCreators({showStarShips:fetchStarShips}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps )(StarShips);

