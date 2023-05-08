import React, { useState } from "react";
import "./style.css";

export default function Actions({setFilter, setInputTodo, inputTodo, handleAddTask}) {
    const [isAddClicked, setAddClicked] = useState(false);

    const handleAddClick = () => {
        setAddClicked(!isAddClicked);
    };

    return(
        <div className="actions">
            <button className="all" onClick={() => setFilter("All")}>All</button>
            <button className="toDo" onClick={() => setFilter("To Do")}>To Do</button>
            <button className="done" onClick={() => setFilter("Done")}>Done</button>
            <button className="trash" onClick={() => setFilter("Trash")}>Trash</button>
    
            <button onClick={handleAddClick} className="add" style={{
                backgroundColor: isAddClicked ? 'rgba(0, 0, 0, 0.20)' : 'rgba(0, 0, 0, 0.10)'
                }}>+</button>
                {isAddClicked ? (
                <div className="add-window">
                    <p className="add-task">Add New To Do</p>
                    <input className="add-input" type="text" placeholder="Your text" value={inputTodo} onChange={(e) => setInputTodo(e.target.value)} />
                    <button onClick={handleAddTask} className="add-button">
                        <span className="add-text">Add</span>
                    </button>
                </div>
            ) : null}
        </div>
    )
}