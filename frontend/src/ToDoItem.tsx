import React, {useState} from 'react';
import { ToDo, status } from "./models/model";


function ToDoItem(props: ToDo){
    return (
            <div>
                <ul>
                    <li>ID: { props.id }</li>
                    <li>Name: { props.task }</li>
                    <li>Species: {props.description }</li>
                    <li>Status: { props.status }</li>
                </ul>
            </div>
    )
}

export default ToDoItem;