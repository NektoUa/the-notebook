import React, { Component } from 'react';
import Calendar from './Calendar';
import ToDo from './ToDo/ToDo'
import Weather from './Weather';
import main from './Organiser.module.css';

export default class Organiser extends Component {
    render() {
        return (
            <div className={main.body}>
                <Calendar className={main.calendar} />
                <ToDo />
                {/* <Weather /> */}
            </div>
        );
    }
}
