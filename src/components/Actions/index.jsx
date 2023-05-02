import React, { useState } from "react";
import "./style.css";

export default function Actions() {
    const [isToDoClicked, setToDoClicked] = useState(false);
    const [isDoneClicked, setDoneClicked] = useState(false);
    const [isTrashClicked, setTrashClicked] = useState(false);
    const [isAddClicked, setAddClicked] = useState(false);

    const handleToDoClick = () => {
        setToDoClicked(!isToDoClicked);
    };

    const handleDoneClick = () => {
        setDoneClicked(!isDoneClicked);
    };

    const handleTrashClick = () => {
        setTrashClicked(!isTrashClicked);
    };
    const handleAddClick = () => {
        setAddClicked(!isAddClicked);
    };
    return(
        <div className="actions">
            <button onClick={handleToDoClick} className="toDo" style={{
                backgroundColor: isToDoClicked ? 'rgba(0, 0, 0, 0.20)' : 'rgba(0, 0, 0, 0.10)'
                }}>To Do</button>
            <button onClick={handleDoneClick} className="done" style={{
                backgroundColor: isDoneClicked ? 'rgba(0, 0, 0, 0.20)' : 'rgba(0, 0, 0, 0.10)'
                }}>Done</button>
            <button  onClick={handleTrashClick} className="trash" style={{
                backgroundColor: isTrashClicked ? 'rgba(0, 0, 0, 0.20)' : 'rgba(0, 0, 0, 0.10)'
                }}>Trash</button>
            <button onClick={handleAddClick} className="add" style={{
                backgroundColor: isAddClicked ? 'rgba(0, 0, 0, 0.20)' : 'rgba(0, 0, 0, 0.10)'
                }}>+</button>
        </div>
    )
}