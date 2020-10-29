import React, { Component } from 'react';
import Header from './componentToDo/Header';
import ToDoList from './componentToDo/ToDoList';
import Add from './componentToDo/Add';
import { Input, Label, Menu, Grid, Card, Feed } from 'semantic-ui-react'
// import main from './Footer.module.css';

export default class ToDo extends Component {
    state = {
        tasks: ['task', 'another task']
    };

    handleSubmit = task => {
        this.setState({ tasks: [...this.state.tasks, task] });
    }

    render() {
        return (
            <div id="todo">
                <Card>
                    <Card.Content>
                        <Card.Header>
                            <Header numTodos={this.state.tasks.length} />
                        </Card.Header>
                    </Card.Content>
                    <Card.Content>
                        <ToDoList tasks={this.state.tasks} />
                    </Card.Content>
                    <Card.Content>
                        <Card.Header>
                            <Add onFormSubmit={this.handleSubmit} />
                        </Card.Header>
                    </Card.Content>
                </Card>


            </div>
        );
    }
}


{/* <Grid textAlign='left' columns={1}>
                    <Grid.Row>
                        <Grid.Column>
                            <Menu fluid vertical>
                                <Header />
                                <ToDoList />
                                <Add />
                            </Menu>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Header />
                <ToDoList />
                <Add /> */}