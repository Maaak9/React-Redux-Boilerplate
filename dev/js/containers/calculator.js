import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addExpAction, remExpAction, calcAction, delExpAction} from '../actions/calcAction'

class Calculator extends Component {

    render() {
        return (
         <div>
            <div className="col-md-offset-2 col-md-8 col-sm-12 calcText">
                <h3 style={{textAlign: 'center'}}>{this.props.calculator.calc}</h3>
            </div>
            <div className="col-md-offset-2 col-md-8 col-sm-12">
                <div className="col-md-3 col-sm-3 test">
                    <button onClick={() => this.props.addExpAction("/")} className="btn btn-info numberButton">/</button>
                </div>
                <div className="col-md-3 col-sm-3 test">
                    <button onClick={() => this.props.addExpAction("*")} className="btn btn-info numberButton">*</button>
                </div>
                <div className="col-md-3 col-sm-3 test">
                    <button onClick={() => this.props.addExpAction("-")} className="btn btn-info numberButton">-</button>
                </div>
                <div className="col-md-3 col-sm-3 test">
                    <button onClick={() => this.props.addExpAction(".")} className="btn btn-info numberButton">.</button>
                </div>
            </div>
            <div className="col-md-offset-2 col-md-8 col-sm-12">
                <div className="col-md-3 col-sm-3 test">
                    <button onClick={() => this.props.addExpAction("7")} className="btn btn-primary numberButton">7</button>
                </div>
                <div className="col-md-3 col-sm-3 test">
                    <button onClick={() => this.props.addExpAction("8")} className="btn btn-primary numberButton">8</button>
                </div>
                <div className="col-md-3 col-sm-3 test">
                    <button onClick={() => this.props.addExpAction("9")} className="btn btn-primary numberButton">9</button>
                </div>
                <div className="col-md-3 col-sm-3 test">
                    <button onClick={() => this.props.addExpAction("+")} className="btn btn-info numberButton ">+</button>
                </div>
            </div>
                <div className="col-md-offset-2 col-md-8 col-sm-12">
                <div className="col-md-3 col-sm-3 test">
                    <button onClick={() => this.props.addExpAction("4")} className="btn btn-primary numberButton">4</button>
                </div>
                <div className="col-md-3 col-sm-3 test">
                    <button onClick={() => this.props.addExpAction("5")} className="btn btn-primary numberButton">5</button>
                </div>
                <div className="col-md-3 col-sm-3 test">
                    <button onClick={() => this.props.addExpAction("6")} className="btn btn-primary numberButton">6</button>
                </div>
                <div className="col-md-3 col-sm-3 test">
                    <button className="btn btn-info numberButton">=</button>
                </div>
            </div>
                <div className="col-md-offset-2 col-md-8 col-sm-12">
                <div className="col-md-3 col-sm-3 test">
                    <button onClick={() => this.props.addExpAction("1")} className="btn btn-primary numberButton">1</button>
                </div>
                <div className="col-md-3 col-sm-3 test">
                    <button onClick={() => this.props.addExpAction("2")} className="btn btn-primary numberButton">2</button>
                </div>
                <div className="col-md-3 col-sm-3 test">
                    <button onClick={() => this.props.addExpAction("3")} className="btn btn-primary numberButton">3</button>
                </div>
                <div className="col-md-3 col-sm-3 test">
                    <button onClick={() => this.props.delExpAction("0")} className="btn btn-info numberButton">DEL</button>
                </div>
            </div>
            <div className="col-md-offset-2 col-md-8 col-sm-12">
                 <div className="col-md-6 col-sm-6 test">
                    <button onClick={() => this.props.addExpAction("0")} className="btn btn-primary numberButton">0</button>
                </div>
                <div className="col-md-3 col-sm-3 test">
                    <button onClick={() => this.props.remExpAction()} className="btn btn-info numberButton">Remove</button>
                </div>
                <div className="col-md-3 col-sm-3 test">
                    <button onClick={() => this.props.calcAction()} className="btn btn-info numberButton">Enter</button>
                </div>
            </div>
            
        </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        calculator: state.calculator
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({addExpAction: addExpAction, 
        remExpAction: remExpAction, 
        calcAction: calcAction,
        delExpAction: delExpAction}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Calculator);

