import React, { Component } from 'react';
import './github.css'


export default class Github extends Component {
    render() {
        return (
            <div id="github">
                <a href="https://github.com/NektoUa" target="_blank">
                    <svg id="github" viewBox="0 0 800 800">
                        <path
                            d="M400 139c144 0 260 116 260 260 0 115-75 213-178 247-9 3-17-2-17-13v-71c0-35-18-48-18-48 57-6 119-28 119-128 0-44-27-70-27-70s14-29-2-69c0 0-22-7-72 27-42-12-88-12-130 0-50-34-72-27-72-27-16 40-2 69-2 69s-27 26-27 70c0 100 62 122 119 128 0 0-14 10-17 35-15 7-53 18-76-22 0 0-13-25-39-27 0 0-26 0-2 16 0 0 17 8 29 38 0 0 16 51 88 35v44c0 11-9 16-18 13-103-34-178-132-178-247 0-144 116-260 260-260z" />
                    </svg>
                </a>
            </div>
        );
    }
}

