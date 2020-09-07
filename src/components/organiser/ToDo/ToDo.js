import React, { Component } from 'react';
import Header from './componentToDo/Header';
import ToDoList from './componentToDo/ToDoList';
import Add from './componentToDo/Add';
import { Input, Label, Menu, Grid, Card, Feed } from 'semantic-ui-react'
// import main from './Footer.module.css';

export default class ToDo extends Component {
    render() {
        return (
            <div id="todo">
                <Card>
                    <Card.Content>
                        <Card.Header><Header /></Card.Header>
                    </Card.Content>
                    <Card.Content>
                        <Feed>
                            <Feed.Event>
                                <Feed.Label icon='circle outline' />
                                <Feed.Content>
                                    <Feed.Summary>
                                        You added <a>Jenny Hess</a> to your <a>coworker</a> group.
            </Feed.Summary>
                                    <Feed.Date content='1 day ago' />
                                </Feed.Content>
                            </Feed.Event>

                            <Feed.Event>
                                <Feed.Label icon='check circle outline' />
                                <Feed.Content>

                                    <Feed.Summary>
                                        You added <a>Molly Malone</a> as a friend.
            </Feed.Summary>
                                    <Feed.Date content='3 days ago' />
                                </Feed.Content>
                            </Feed.Event>
                        </Feed>
                    </Card.Content>
                    <Card.Content>
                        <Card.Header><Add /></Card.Header>
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