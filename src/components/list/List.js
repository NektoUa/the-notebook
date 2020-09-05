import React, { Component } from 'react';
import { List } from 'semantic-ui-react'
// import main from './Footer.module.css';

export default class Lists extends Component {
    render() {
        return (
            <div id="list">
                <List bulleted>
                    <List.Item>Gaining Access</List.Item>
                    <List.Item>Inviting Friends</List.Item>
                    <List.Item>
                        Benefits
      <List.List>
                            <List.Item href='#'>Link to somewhere</List.Item>
                            <List.Item>Rebates</List.Item>
                            <List.Item>Discounts</List.Item>
                        </List.List>
                    </List.Item>
                    <List.Item>Warranty</List.Item>
                </List>
            </div>
        );
    }
}