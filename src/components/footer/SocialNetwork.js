import React, { Component } from 'react';
import Facebook from './facebook/Facebook';
import LinkedIn from './linkedin/LinkedIn';
import Github from './github/Github';
import { Label } from 'semantic-ui-react'


export default class Footer extends Component {
    render() {
        return (
            <div id="footer">
                <Label as='a' image>
                    <Facebook />
                </Label>
                <Label as='a' color='grey' image>
                    <LinkedIn />
                </Label>
                <Label as='a' image>
                    <Github />
                </Label>

            </div >
        );
    }
}