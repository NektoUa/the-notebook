import React, { Component } from 'react';
import { List } from 'semantic-ui-react'


export default class HeaderToDo extends Component {
    render() {
        return (
            <div>
                <List bulleted>
                    <List.Item>Gaining Access</List.Item>
                    <List.Item>Inviting Friends</List.Item>
                    <List.Item>                        Benefits
                          </List.Item>
                    <List.Item>Warranty</List.Item>
                </List>
            </div>
        );
    }
}