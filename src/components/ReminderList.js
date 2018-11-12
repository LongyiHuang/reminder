import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment'
import '../css/App.css';
export default function ReminderList(props) {
    let reminders = props.reminders;
    return(
        <ul className="list-group col-sm-8 mt-2">
            {
                reminders.map((reminder) => {
                    return (
                        <li key={ reminder.id } className="list-group-item">
                            <div className="list-item">
                                <div>{ reminder.text }</div>
                                <div><em>{moment(new Date(reminder.time)).fromNow()}</em></div>

                            </div>
                            <div className="list-item delete_button" onClick={ ()=> props.handleDeleteReminder(reminder.id) }>&#x2715;</div>
                        </li>
                    )
                })
            }

        </ul>
    );
}


ReminderList.propTypes = {
    reminders:PropTypes.array.isRequired,
    handleDeleteReminder:PropTypes.func.isRequired
}
