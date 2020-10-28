import React, { Component } from 'react';
import { List, Card, Feed } from 'semantic-ui-react'

const Todo = (props) => {
    return (
        <Feed.Event>
            <Feed.Label icon='circle outline' />
            <Feed.Content>
                <Feed.Summary>
                    {props.content}
                </Feed.Summary>
            </Feed.Content>
        </Feed.Event>
    )
}

export default Todo