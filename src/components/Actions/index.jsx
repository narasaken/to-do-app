import React from "react";
import "./style.css";

export default function Actions() {
    return(
        <div className="actions">
            <button className="toDo">To Do</button>
            <button className="done">Done</button>
            <button className="trash">Trash</button>
            <button className="add">+</button>
        </div>
    )
}