import React, {useEffect, useState} from 'react';
import {status, ToDo} from "./models/model";
import ToDoItem from "./ToDoItem";


export default function ToDoGallery() {

    const [toDoItems, setToDoItems] = useState([] as Array<ToDo>)
    const [id, setId] = useState('')
    const [task, setTask] = useState('')
    const [description, setDescription] = useState('')
    const [stati, setStati] = useState(status.Open)

    const requestBody = {
        task: task,
        description: description
    }

    const url = "http://localhost:8080/todos";

    useEffect(() => {

        fetch(url)
            .then(response => response.json())
            .then((data) => {
                setToDoItems(data)
            })
    }, []);


    const getToDoGallery = () => {
        fetch(url)
            .then(response => response.json())
            .then(items => setToDoItems(items))
    }

    const setAttributes = () => {
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: {'Content-Type': 'application/json'}
        })
            .then(() => getToDoGallery())
            .then(() => {
                setTask('')
                setDescription('')
                setStati(status.Open)
            })
    }

    const deleteById = () => {
        fetch(url+id, {
            method: 'DELETE',
            body: JSON.stringify(requestBody),
            headers: {
                'Content-Type': 'application/json'
            }, })
            .then((response) => response.json())
            .then((data) => setToDoItems(data))
    }

    return (
        <div>

            <div className="text fields">
                <input type="text" placeholder="Task" value={task} onChange={a => setTask(a.target.value)}/>
                <input type="text" placeholder="description" value={description} onChange={a => setDescription(a.target.value)}/>
                <input type="checkbox"/>
                <input type="text" placeholder="id" value={id} onChange={a => setId(a.target.value)}/>
            </div>
            <div className="buttons">
                <button onClick={setAttributes}>Add ToDo</button>
                <button onClick={getToDoGallery}>Get ToDo Gallery</button>
                <button onClick={deleteById}>Delete ToDo</button>
            </div>
            <div>
                {toDoItems.map(a => <ToDoItem id={a.id} task={a.task} description={a.description} status={status.Open}/>)}
            </div>
        </div>
    )
}