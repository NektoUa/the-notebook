import React, { Component } from 'react';
import { Button, Input, Form } from 'semantic-ui-react'


export default class Add extends Component {
    render() {
        return (
            <div>
                <Input icon='pencil alternate' placeholder='Add ToDo' />

                <Button color='teal'>Push</Button>
            </div>
        );
    }
}

