import React ,{Component,PropTypes} from "react";
import {connect} from 'react-redux';
import {fetchStarShips} from "../actions/starShipAction";
import {bindActionCreators} from "redux";
import Coverflow from 'react-coverflow';
import {StyleRoot} from 'radium';


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
                        <div className="col-sm-8 col-sm-offset-2">
                            <div className="row">
                                <div className="col-sm-4">
                                    <h3 className="margin">StarShips</h3>
                                    {this.renderStarShips()}
                                </div>
                                <div className="col-sm-4">
                                    <br/>

                                    <StyleRoot>
                                        <Coverflow
                                            displayQuantityOfSide={2}
                                            navigation={true}
                                            enableHeading={true}
                                            media={{
                                                '@media (max-width: 900px)': {
                                                    width: '300px',
                                                    height: '300px'
                                                },
                                                '@media (min-width: 900px)': {
                                                    width: '360px',
                                                    height: '300px'
                                                }
                                            }}
                                        >


                                            <img src='https://s3.amazonaws.com/aws-logs-223602368946-us-east-1/images/img4.jpg' alt='Millennium Falcon' />
                                            <img src='https://s3.amazonaws.com/aws-logs-223602368946-us-east-1/images/img5.jpeg' alt='Y-Wing'/>
                                            <img src='https://s3.amazonaws.com/aws-logs-223602368946-us-east-1/images/img3.jpg' alt='X-Wing'/>
                                            <img src='https://s3.amazonaws.com/aws-logs-223602368946-us-east-1/images/img2.jpg' alt='Executor'/>
                                            <img src='https://s3.amazonaws.com/aws-logs-223602368946-us-east-1/images/img1.jpg' alt='Imperial shuttle'/>
                                        </Coverflow>
                                    </StyleRoot>
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

