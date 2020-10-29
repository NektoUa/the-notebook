import React, { Component } from 'react';
import { Button, Input, Form } from 'semantic-ui-react'


export default class Add extends Component {
    state = { term: '' };

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.term === '') return;
        this.props.onFormSubmit(this.state.term);
        this.setState({ term: '' });
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Input
                    icon='pencil alternate'
                    placeholder='Add ToDo'
                    type='text'
                    className='input'
                    placeholder='Enter Item'
                    value={this.state.term}
                    onChange={(e) => this.setState({ term: e.target.value })}
                />

                <Button color='teal' className='button'>Push</Button>
            </Form>
        );
    }
}

