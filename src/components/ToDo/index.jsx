import React from "react";
import "./style.css";

export default function ToDo(){
    return (
    <div className="plans">
        <div className="title">
            <h2>To Do</h2>
            <hr />
        </div>
        <div className="lists">
            <p>Write Essay</p>
            <p>One Hour CSS Course Online</p>
            <p>Buy One Way Ticket to San Fransico</p>
            <p>Go to Gym</p>
            <p>Buy Groceries</p>
            <button className="trashButton">&#128465; Move to Trash</button>
        </div>
    </div>
    )
}