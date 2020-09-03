import React, { Component } from 'react';
import Facebook from './facebook/Facebook';
import LinkedIn from './linkedin/LinkedIn';
import Github from './github/Github';


export default class Footer extends Component {
    render() {
        return (
            <div id="footer">
                <Facebook />
                <LinkedIn />
                <Github />
            </div>
        );
    }
}