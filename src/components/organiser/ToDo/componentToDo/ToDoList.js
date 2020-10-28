import React, { Component } from 'react';
import { List, Card, Feed } from 'semantic-ui-react'
import Todo from './ToDoMap'


export default class HeaderToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: this.props.tasks
        }
    }

    render() {
        const todo = this.props.tasks.map((todo, index) => {
            return <Todo content={todo} key={index} id={index} />
        })
        return (
            <div>
                <Feed>
                    {todo}
                </Feed>
            </div>
        );
    }
}

