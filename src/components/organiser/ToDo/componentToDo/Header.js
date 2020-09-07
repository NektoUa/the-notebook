import React, { Component } from 'react';
import { Header } from 'semantic-ui-react'


export default class HeaderToDo extends Component {
    render() {
        return (
            <div>
                <Header as='h3'>
                    You have ___ Todos
                    </Header>

            </div>
        );
    }
}