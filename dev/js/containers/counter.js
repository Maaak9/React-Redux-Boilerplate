import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {incrementAction} from '../actions/index'
import {decrementAction} from '../actions/index'
import {resetAction} from '../actions/index'

class Counter extends Component {

    render() {
        return (
            <div>
                <h3>Counter</h3>
                <div>{this.props.counter}</div>
                <br />
                <button onClick={() => this.props.incrementAction(1)} className="btn btn-success">Increment</button>
                <button onClick={() => this.props.decrementAction(1)} style={{margin: 10}} className="btn btn-danger">Decrement</button>
                <button onClick={() => this.props.resetAction(1)} className="btn btn-danger">RESET</button>
            </div>
        );
    }

}


// Get apps state and pass it as props to Counter
//      > whenever state changes, the Counter will automatically re-render
function mapStateToProps(state) {
    return {
        counter: state.counter
    };
}

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
function matchDispatchToProps(dispatch){
    return bindActionCreators({incrementAction: incrementAction, 
        decrementAction: decrementAction, 
        resetAction: resetAction}, dispatch);
    /*{
        actions: {
            incrementAction: bindActionCreators(incrementAction, dispatch),
            decrementAction: bindActionCreators(decrementAction, dispatch)
        }
    };
    */
}



// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(Counter);
