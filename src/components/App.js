import React, { Component } from 'react';
import '../css/App.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions';
import PropTypes from 'prop-types';
import ReminderList from './ReminderList';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          text:"",
          time:""
        }
    }

    addReminder() {
        this.props.addReminder(this.state.text,this.state.time);
    }

    deleteReminder(id){
        this.props.deleteReminder(id);
    }

    clearReminder(){
        this.props.clearReminder();
    }

    render(){
      const {reminders} = this.props;
      return (
        <div className="App">
            <div className="title">Reminder Pro</div>
            <div className="form-inline">
                <div className="form-group mr-2">
                    <input type="text" className="form-control" placeholder="I have to..."
                           onChange={(e) => this.setState({text:e.target.value})} />
                </div>
                <div className="form-group mr-2">
                    <input type="datetime-local" className="form-control"
                        onChange={(e) => this.setState({time:e.target.value})} />
                </div>
                <button type="button" className="btn btn-success" onClick={ ()=> this.addReminder() }>Add Reminder</button>
            </div>
            <ReminderList reminders={reminders} handleDeleteReminder={this.deleteReminder.bind(this)}/>

            <button type="button" className="btn btn-danger mt-3" onClick={ ()=> this.clearReminder() }>Clear Reminder</button>

        </div>
      );
  }
}

App.propTypes = {
    addReminder:PropTypes.func.isRequired,
    reminders:PropTypes.array.isRequired,
    clearReminder:PropTypes.func.isRequired
}

const mapStateToProps = (state) =>{
    return{
        reminders : state
    }
}

const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators(actions,dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
