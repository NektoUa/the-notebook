import React, { Component } from 'react';
import Calendar from './Calendar';
import Weather from './Weather';
// import main from './Footer.module.css';

export default class Organiser extends Component {
    render() {
        return (
            <div id="organiser">
                <Calendar />
                {/* <ToDo /> */}
                {/* <Weather /> */}
            </div>
        );
    }
}
