import React, { useState, useEffect } from 'react';
import {ToDo, status} from "./models/model";
import ToDoGallery from "./ToDoGallery";
import ToDoItem from "./ToDoItem";

function App() {

    return (
        <div>
            <header />
            <ToDoGallery />
        </div>
    )
}

export default App;
