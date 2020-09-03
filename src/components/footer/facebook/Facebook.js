import React, { Component } from 'react';
import './facebook.css'


export default class Facebook extends Component {
    render() {
        return (
            <div id="facebook">
                <a href="https://www.facebook.com/illya.barkov" target="_blank">
                    <svg id="facebook" viewBox="0 0 800 800">
                        <path
                            d="M445 643h-90V419h-75v-87h75v-64q0-55 32-86 30-29 80-29 28 0 67 3v78h-47q-42 0-42 38v60h86l-11 87h-75v224z" />
                    </svg>
                </a>
            </div>
        );
    }
}