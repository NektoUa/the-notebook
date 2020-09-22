import React, { Component } from 'react';
import { List, Header } from 'semantic-ui-react'
import main from './List.module.css';

export default class Lists extends Component {
    render() {
        return (
            <div className={main.body} >
                <Header as='h3' className={main.header}>Your notes</Header>
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