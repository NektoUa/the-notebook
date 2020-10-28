import React from 'react';
import { Header } from 'semantic-ui-react'

const HeaderToDo = (props) => {
    return (
        <Header as='h4'>
            You have {props.numTodos} Todos
        </Header>
    )
}

export default HeaderToDo


