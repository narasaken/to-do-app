import React, { useState } from "react";
import "./style.css";

export default function Actions({setFilter, setInputTodo, inputTodo, handleAddTask}) {
    const [activeFilter, setActiveFilter] = useState("All");
    const [isAddClicked, setAddClicked] = useState(false);

    const handleFilterClick = (filter) => {
        setFilter(filter);
        setActiveFilter(filter);
    };

    const handleAddClick = () => {
        setAddClicked(!isAddClicked);
    };

    return(
        <div className="actions">
            <button className="all" onClick={() => handleFilterClick("All")} style={{backgroundColor: activeFilter === "All" ? 'rgba(8, 30, 52, 0.42)' : '#F0F0F0'}}>All</button>
            <button className="toDo" onClick={() => handleFilterClick("To Do")} style={{backgroundColor: activeFilter === "To Do" ? 'rgba(8, 30, 52, 0.42)' : '#F0F0F0'}}>To Do</button>
            <button className="done" onClick={() => handleFilterClick("Done")} style={{backgroundColor: activeFilter === "Done" ? 'rgba(8, 30, 52, 0.42)' : '#F0F0F0'}}>Done</button>
            <button className="trash" onClick={() => handleFilterClick("Trash")} style={{backgroundColor: activeFilter === "Trash" ? 'rgba(8, 30, 52, 0.42)' : '#F0F0F0'}}>Trash</button>
    
            <button onClick={handleAddClick} className="add" style={{backgroundColor: isAddClicked ? 'rgba(0, 0, 0, 0.20)' : 'rgba(0, 0, 0, 0.10)'}}>+</button>
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