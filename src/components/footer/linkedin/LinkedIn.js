import React, { Component } from 'react';
import './linkedin.css'


export default class LinkedIn extends Component {
    render() {
        return (
            <div id="linkedin">
                <a href="https://www.linkedin.com/in/illia-barkov/" target="_blank">
                    <svg id="linkedin" viewBox="0 0 800 800">
                        <path
                            d="M268 629h-97V319h97zm157 0h-97V319h93v42h1q31-50 93-50 114 0 114 133v185h-96V466q0-70-49-70-59 0-59 69z" />
                        <circle cx="219" cy="220" r="56" />
                    </svg>
                </a>
            </div>
        );
    }
}